"use client";

import { useEffect, useMemo, useState, type ChangeEvent } from "react";
import type { Course, CourseDraft, CourseStatus } from "../../types/course";
import { useCourseStore } from "../store/courseStore";
import CourseCard from "./CourseCard";
import CourseForm from "./CourseForm";

type CourseExplorerProps = {
  initialCourses: Course[];
};

const statusOptions: Array<{ value: "all" | CourseStatus; label: string }> = [
  { value: "all", label: "ทั้งหมด" },
  { value: "not_started", label: "ยังไม่เริ่ม" },
  { value: "in_progress", label: "กำลังเรียน" },
  { value: "completed", label: "เสร็จสิ้น" },
];

export default function CourseExplorer({ initialCourses }: CourseExplorerProps) {
  const courses = useCourseStore((state) => state.courses);
  const keyword = useCourseStore((state) => state.keyword);
  const statusFilter = useCourseStore((state) => state.statusFilter);
  const pendingDeleteId = useCourseStore((state) => state.pendingDeleteId);
  const setCourses = useCourseStore((state) => state.setCourses);
  const setKeyword = useCourseStore((state) => state.setKeyword);
  const setStatusFilter = useCourseStore((state) => state.setStatusFilter);
  const setPendingDeleteId = useCourseStore((state) => state.setPendingDeleteId);
  const addCourse = useCourseStore((state) => state.addCourse);
  const updateCourse = useCourseStore((state) => state.updateCourse);
  const deleteCourse = useCourseStore((state) => state.deleteCourse);
  const updateCourseStatus = useCourseStore((state) => state.updateCourseStatus);

  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    setCourses(initialCourses);
  }, [initialCourses, setCourses]);

  function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
    setKeyword(event.target.value);
  }

  function handleStatusChange(event: ChangeEvent<HTMLSelectElement>) {
    setStatusFilter(event.target.value as "all" | CourseStatus);
  }

  function handleCreate(draft: CourseDraft) {
    addCourse(draft);
  }

  function handleDelete(id: string) {
    deleteCourse(id);
    setPendingDeleteId(null);
  }

  function handleUpdate(id: string, draft: CourseDraft) {
    updateCourse(id, draft);
    setEditingId(null);
  }

  function handleSave(draft: CourseDraft) {
    if (editingId === null) {
      handleCreate(draft);
      return;
    }

    handleUpdate(editingId, draft);
  }

  function handleStatusToggle(id: string) {
    const current = courses.find((course) => course.id === id);
    if (!current) return;

    const nextStatus: CourseStatus =
      current.status === "not_started"
        ? "in_progress"
        : current.status === "in_progress"
          ? "completed"
          : "not_started";

    updateCourseStatus(id, nextStatus);
  }

  const editingCourse = courses.find((course) => course.id === editingId);

  const searchText = keyword.trim().toLowerCase();

  const visibleCourses = useMemo(
    () =>
      courses.filter((course) => {
        const matchesKeyword =
          course.name.toLowerCase().includes(searchText) ||
          course.code.toLowerCase().includes(searchText);

        const matchesStatus =
          statusFilter === "all" ? true : course.status === statusFilter;

        return matchesKeyword && matchesStatus;
      }),
    [courses, searchText, statusFilter]
  );

  const totalNotStartedHours = useMemo(
    () =>
      courses
        .filter((course) => course.status === "not_started")
        .reduce((sum, course) => sum + course.credit, 0),
    [courses]
  );

  return (
    <div className="course-page">
      <div className="course-toolbar">
        <input
          type="search"
          aria-label="ค้นหารายวิชา"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="ค้นหาชื่อวิชาหรือรหัสวิชา"
          className="course-search"
        />

        <select
          aria-label="กรองตามสถานะ"
          value={statusFilter}
          onChange={handleStatusChange}
          className="status-filter"
        >
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="summary-box">
        <strong>ชั่วโมงรวมที่ยังไม่เริ่ม:</strong> {totalNotStartedHours} ชั่วโมง
      </div>

      <CourseForm
        key={editingId ?? "new"}
        initialCourse={editingCourse}
        onSave={handleSave}
        onCancel={() => setEditingId(null)}
      />

      {visibleCourses.length === 0 ? (
        <p className="empty-state">ไม่พบรายวิชาที่ตรงกับเงื่อนไข</p>
      ) : (
        <section className="course-grid">
          {visibleCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onEdit={() => setEditingId(course.id)}
              onDelete={() => setPendingDeleteId(course.id)}
              onToggleStatus={() => handleStatusToggle(course.id)}
            />
          ))}
        </section>
      )}

      {pendingDeleteId && (
        <div className="confirm-dialog">
          <p>คุณต้องการลบรายวิชานี้หรือไม่?</p>
          <div className="confirm-actions">
            <button type="button" onClick={() => handleDelete(pendingDeleteId)} className="btn btn-primary">
              ยืนยันลบ
            </button>
            <button type="button" onClick={() => setPendingDeleteId(null)} className="btn btn-secondary">
              ยกเลิก
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import type { Course, CourseDraft, CourseStatus } from "../../types/course";

type CourseFormProps = {
  initialCourse?: Course;
  onSave: (draft: CourseDraft) => void;
  onCancel?: () => void;
};

function createEmptyDraft(): CourseDraft {
  return {
    code: "",
    name: "",
    credit: "",
    instructor: "",
    status: "not_started",
  };
}

export default function CourseForm({
  initialCourse,
  onSave,
  onCancel,
}: CourseFormProps) {
  const [draft, setDraft] = useState<CourseDraft>(() =>
    initialCourse
      ? {
          code: initialCourse.code,
          name: initialCourse.name,
          credit: String(initialCourse.credit),
          instructor: initialCourse.instructor,
          status: initialCourse.status,
        }
      : createEmptyDraft()
  );

  useEffect(() => {
    if (initialCourse) {
      setDraft({
        code: initialCourse.code,
        name: initialCourse.name,
        credit: String(initialCourse.credit),
        instructor: initialCourse.instructor,
        status: initialCourse.status,
      });
      return;
    }

    setDraft(createEmptyDraft());
  }, [initialCourse]);

  function handleChange(field: keyof CourseDraft) {
    return (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setDraft((current) => ({
        ...current,
        [field]: event.target.value,
      }));
    };
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSave(draft);

    if (!initialCourse) {
      setDraft(createEmptyDraft());
    }
  }

  return (
    <form onSubmit={handleSubmit} className="course-form">
      <div className="form-grid">
        <label className="field-group">
          <span>รหัสวิชา</span>
          <input value={draft.code} onChange={handleChange("code")} />
        </label>

        <label className="field-group">
          <span>ชื่อวิชา</span>
          <input value={draft.name} onChange={handleChange("name")} />
        </label>

        <label className="field-group">
          <span>หน่วยกิต</span>
          <input type="number" min="1" value={draft.credit} onChange={handleChange("credit")} />
        </label>

        <label className="field-group">
          <span>อาจารย์ผู้สอน</span>
          <input value={draft.instructor} onChange={handleChange("instructor")} />
        </label>

        <label className="field-group">
          <span>สถานะ</span>
          <select value={draft.status} onChange={handleChange("status")}>
            <option value="not_started">ยังไม่เริ่ม</option>
            <option value="in_progress">กำลังเรียน</option>
            <option value="completed">เสร็จสิ้น</option>
          </select>
        </label>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {initialCourse ? "บันทึกการแก้ไข" : "เพิ่มรายวิชา"}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="btn btn-secondary">
            ยกเลิก
          </button>
        )}
      </div>
    </form>
  );
}
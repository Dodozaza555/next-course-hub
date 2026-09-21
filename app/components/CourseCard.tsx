import type { Course, CourseStatus } from "../../types/course";

type CourseCardProps = {
  course: Course;
  onEdit: () => void;
  onDelete: () => void;
  onToggleStatus: () => void;
};

const statusLabel: Record<CourseStatus, string> = {
  not_started: "ยังไม่เริ่ม",
  in_progress: "กำลังเรียน",
  completed: "เสร็จสิ้น",
};

export default function CourseCard({
  course,
  onEdit,
  onDelete,
  onToggleStatus,
}: CourseCardProps) {
  return (
    <article className="course-card">
      <h2>{course.name}</h2>
      <p>รหัสวิชา: {course.code}</p>
      <p>{course.credit} หน่วยกิต</p>
      <p>อาจารย์: {course.instructor}</p>
      <p>สถานะ: {statusLabel[course.status]}</p>

      <div className="course-card-actions">
        <button type="button" onClick={onToggleStatus}>
          เปลี่ยนสถานะ
        </button>
        <button type="button" onClick={onEdit}>
          แก้ไข
        </button>
        <button type="button" onClick={onDelete}>
          ลบ
        </button>
      </div>
    </article>
  );
}
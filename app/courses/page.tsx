import CourseCard from "../components/CourseCard";
import type { Course } from "../../types/course";

const courses: Course[] = [
  { id: 1, code: "10301231", title: "Web Technology", credits: 3, isOpen: true },
  { id: 2, code: "10301232", title: "Database Systems", credits: 3, isOpen: false },
  { id: 3, code: "10301233", title: "Data Science", credits: 3, isOpen: true },
];

export default function CoursesPage() {
  return (
    <main>
      <h1>รายวิชาทั้งหมด</h1>
      <section className="course-grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} description="วิชาแนะนำสำหรับปีนี้" />
        ))}
      </section>
    </main>
  );
}
export default function Home() {
  const siteName: string = "CSMJU Website";
  const courseCount: number = 10;
  const isOpen: boolean = true;
  const topics: string[] = ["HTML", "CSS", "TypeScript", "Next.js"];

  type Course = {
    id: number;
    code: string;
    title: string;
    credits: number;
    isOpen: boolean;
  };

  const courses: Course[] = [
    { id: 1, code: "10301231", title: "Web Technology", credits: 3, isOpen: true },
    { id: 2, code: "10301232", title: "Database Systems", credits: 3, isOpen: false },
  ];

  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <p className="hero-label">เว็บไซต์รายวิชา · ภาควิชาเทคโนโลยีสารสนเทศ</p>
          <h1 className="hero-title">{siteName}</h1>
          <div className="hero-divider"><span /></div>
          <div className="stat-badges">
            <div className="stat-badge">
              <span className="stat-value">{courseCount}</span>
              <span className="stat-label">รายวิชาทั้งหมด</span>
            </div>
            <div className="stat-badge">
              <span className="stat-value">{isOpen ? "เปิด" : "ปิด"}</span>
              <span className="stat-label">สถานะลงทะเบียน</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">เทคโนโลยีที่ใช้</h2>
        <ul className="chip-list">
          {topics.map((topic) => (
            <li key={topic} className="chip">{topic}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">รายวิชาแนะนำ</h2>
        <div className="course-grid">
          {courses.map((course) => (
            <article key={course.id} className="course-card">
              <h2>{course.title}</h2>
              <p>รหัสวิชา: {course.code}</p>
              <p>{course.credits} หน่วยกิต</p>
              <p>{course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
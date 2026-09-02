import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="site-nav">
      <ul className="nav-list">
        <li><Link className="nav-link" href="/">หน้าแรก</Link></li>
        <li><Link className="nav-link" href="/courses">รายวิชา</Link></li>
        <li><Link className="nav-link" href="/about">เกี่ยวกับเรา</Link></li>
        <li><Link className="nav-link" href="/bands">วงดนตรีที่ชื่นชอบ</Link></li>
      </ul>
    </nav>
  );
}
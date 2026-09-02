import type { Band } from "../types/band";

export const bands: Band[] = [
  {
    id: 1,
    name: "โลโซ",
    genre: "ร็อก (Rock) และ ร็อกแอนด์โรล (Rock & Roll)",
    imageUrl: "/images/bands/band1.jpg",
    members: [
      { id: 1, name: "เสก - เสกสรรค์ ศุขพิมาย", role: "ร้องนำ และ กีตาร์", imageUrl: "/images/members/sek.jpg" },
      { id: 2, name: "ใหญ่ - กิตติศักดิ์ โคตรคำ", role: "กลอง และ ร้องประสาน", imageUrl: "/images/members/yai.jpg" },
      { id: 3, name: "รัฐ - ณัฐพล สุนทราณุ", role: "เบส", imageUrl: "/images/members/rat.jpg" },
],
  },
  {
    id: 2,
    name: "บิ๊กแอส (Big Ass)",
    genre: "โมเดิร์นร็อก (Modern Rock), ออลเทอร์นาทิฟร็อก (Alternative Rock) และ ป็อปร็อก (Pop Rock)",
    imageUrl: "/images/bands/band2.jpg",
    members: [
      { id: 1, name: "เจ๋ง - เดชา โคนาโล", role: "ร้องนำ", imageUrl: "/images/members/jeng.jpg" },
      { id: 2, name: "กบ - วรพจน์ บุญคง", role: "กีตาร์", imageUrl: "/images/members/kob.jpg" },
      { id: 3, name: "อ๊อฟ - อภิชาติ พรมรักษา", role: "กีตาร์", imageUrl: "/images/members/of.jpg" },
      { id: 4, name: "เอ - อนุสรณ์ ศรีอ่อน", role: "เบส", imageUrl: "/images/members/ae.jpg" },
      { id: 5, name: "ตูน - ธีรภัทร์ สัจจกุล", role: "กลอง", imageUrl: "/images/members/tun.jpg" },
    ],
  },
  {
    id: 3,
    name: "ซิลลี่ ฟูลส์ (Silly Fools)",
    genre: "โมเดิร์นร็อก/ออลเทอร์นาทิฟร็อก",
    imageUrl: "/images/bands/band3.jpg",
    members: [
      { id: 1, name: "ปู - ปูนิล จันทร์ทอง", role: "ร้องนำ", imageUrl: "/images/members/puu.jpg" },
      { id: 2, name: "ตั้ม - ตั้ม จันทร์ทอง", role: "กีตาร์", imageUrl: "/images/members/tum.jpg" },
      { id: 3, name: "น้ำ - น้ำ จันทร์ทอง", role: "เบส", imageUrl: "/images/members/nam.jpg" },
      { id: 4, name: "ต้า - ต้า จันทร์ทอง", role: "กลอง", imageUrl: "/images/members/ta.jpg" },
    ],
  },
];
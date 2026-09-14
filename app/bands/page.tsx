import type { Metadata } from "next";
import BandExplorer from "../components/BandExplorer";
import { bands } from "../../data/bands";

export const metadata: Metadata = {
  title: "วงดนตรีที่ชื่นชอบ",
};

export default function BandsPage() {
  return (
    <main>
      <h1>วงดนตรีที่ชื่นชอบ</h1>
      <BandExplorer bands={bands} />
    </main>
  );
}
"use client";

import { useState, type ChangeEvent } from "react";
import type { Band } from "../../types/band";
import BandCard from "./BandCard";

type BandExplorerProps = {
  bands: Band[];
};

export default function BandExplorer({ bands }: BandExplorerProps) {
  const [keyword, setKeyword] = useState("");
  const [followedIds, setFollowedIds] = useState<number[]>([]);
  const [likeCounts, setLikeCounts] = useState<Record<number, number>>({});

  function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
    setKeyword(event.target.value);
  }

  function handleToggleFollow(id: number) {
    setFollowedIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((followedId) => followedId !== id)
        : [...prevIds, id]
    );
  }

  function handleLike(id: number) {
    setLikeCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] ?? 0) + 1,
    }));
  }

  const searchText = keyword.trim().toLowerCase();

  const visibleBands = bands.filter((band) =>
    band.name.toLowerCase().includes(searchText)
  );

  return (
    <>
      <input
        type="search"
        aria-label="ค้นหาวงดนตรี"
        value={keyword}
        onChange={handleKeywordChange}
        placeholder="ค้นหาชื่อวงดนตรี"
      />

      <p>ติดตามอยู่: {followedIds.length} วง</p>

      {visibleBands.length === 0 ? (
        <p>ไม่พบวงดนตรีที่ตรงกับเงื่อนไข</p>
      ) : (
        <div className="band-grid">
          {visibleBands.map((band) => (
            <BandCard
              key={band.id}
              band={band}
              isFollowing={followedIds.includes(band.id)}
              onToggleFollow={handleToggleFollow}
              likeCount={likeCounts[band.id] ?? 0}
              onLike={handleLike}
            />
          ))}
        </div>
      )}
    </>
  );
}
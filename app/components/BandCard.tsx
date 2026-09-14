import Image from "next/image";
import type { Band } from "../../types/band";

type BandCardProps = {
  band: Band;
  isFollowing: boolean;
  onToggleFollow: (id: number) => void;
  likeCount: number;
  onLike: (id: number) => void;
};

export default function BandCard({
  band,
  isFollowing,
  onToggleFollow,
  likeCount,
  onLike,
}: BandCardProps) {
  return (
    <article className="band-card">
      <div className="band-header">
        <Image
          src={band.imageUrl}
          alt={band.name}
          width={64}
          height={64}
          className="band-avatar"
        />
        <div>
          <h2>{band.name}</h2>
          <p className="band-genre">{band.genre}</p>
        </div>
      </div>

      <div className="band-actions">
        <button
          type="button"
          aria-pressed={isFollowing}
          onClick={() => onToggleFollow(band.id)}
        >
          {isFollowing ? "กำลังติดตาม" : "ติดตาม"}
        </button>

        <button type="button" onClick={() => onLike(band.id)}>
          ❤ Like ({likeCount})
        </button>
      </div>

      <h3>สมาชิก</h3>
      <ul className="member-list">
        {band.members.map((member) => (
          <li key={member.id} className="member-item">
            <Image
              src={member.imageUrl}
              alt={member.name}
              width={36}
              height={36}
              className="member-avatar"
            />
            <span>{member.name} — {member.role}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
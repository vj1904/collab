import { useOthers } from "@liveblocks/react/suspense";
import Image from "next/image";
import React from "react";

const ActiveCollaborators = () => {
  const others = useOthers();

  const collaborators = Array.isArray(others)
    ? others.map((other) => other.info || {})
    : [];

  return (
    <ul className="collaborators-list">
      {collaborators.map(({ id, avatar, name, color }) => (
        <li key={id || Math.random()}>
          <Image
            src={avatar}
            alt={name || "Anonymous"}
            width={100}
            height={100}
            className="inline-block size-8 rounded-full ring-2 ring-dark-100"
            style={{ border: `2px solid ${color || "#000"}` }}
          />
        </li>
      ))}
    </ul>
  );
};

export default ActiveCollaborators;

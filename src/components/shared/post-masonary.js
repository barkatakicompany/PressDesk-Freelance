import React from "react";
import { MasonaryPostOverlay, MasonaryPost } from ".";

export default function PostMasonary({ posts, columns, overlay }) {
  return (
    <section
      className="masonary"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(275px, 1fr))` }}
    >
      {posts.map((post, index) =>
        overlay ? (
          <MasonaryPostOverlay {...{ post, index, columns, key: index }} />
        ) : (
          <MasonaryPost {...{ post, index, columns, key: index }} />
        )
      )}
    </section>
  );
}

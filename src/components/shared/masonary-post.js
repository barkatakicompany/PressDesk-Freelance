import React from "react";

export default function MasonaryPost(postObject) {
  const post = postObject.post;

  const style = { ...post.style };

  return (
    <div className="card h-100" style={style}>
      <img src={post.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <div style={{justifyContent: "flex-end"}}>
          <a href={post.link}>
            <h4 className="card-title">{post.title}</h4>
          </a>
        </div>
      </div>
    </div>
  );
}

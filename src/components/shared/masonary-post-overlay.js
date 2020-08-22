import React from 'react';

export default function MasonaryPostOverlay (postObject) {
  const post = postObject.post
  const imageBackground={backgroundImage: `url(${post.image})`}

  const style = {...imageBackground, ...post.style}

  return (
    <a className="masonary-post overlay" style={style} href={post.link}>
      <div className="image-text" style={{justifyContent: 'flex-end'}}>
        <div>
          <h4 className="image-title">{post.title}</h4>
        </div>
      </div>
    </a>
  )
}
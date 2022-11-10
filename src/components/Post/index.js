import React from 'react';

import './index.css';

function Post({text, author, src, title, date, highlights, alt}) {
  return <article>
<h3>{title}</h3>
<img src={src} alt={alt} />
<p>{author}</p>
<p>{text}</p>
<p>{date}</p>
<p>{highlights}</p>
  </article>;
}

export default Post;

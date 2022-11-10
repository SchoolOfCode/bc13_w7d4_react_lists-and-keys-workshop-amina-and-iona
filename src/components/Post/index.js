import React from 'react';
import samplePosts from '../../libs/data';

import './index.css';

function Post({text, author, src, title, date, highlights, alt}) {
  return <article>
<h3>{title} <small>{date}</small></h3>
<img src={src} alt={alt} />
<h4>{author}</h4>
<p>{text}</p>
{samplePosts.map(({highlights})=>{
  return <li>{highlights}</li>
})}
  </article>;
}

export default Post;

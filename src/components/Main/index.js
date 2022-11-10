import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

function Main() {
  const [posts, setPosts] = useState(samplePosts);
  return <main id="main"> 
  {samplePosts.map((postObject)=>{
return <Post key = {postObject.postId} title= {postObject.title} date = {postObject.date} author = {postObject.author} highlights = {postObject.highlights} src = {postObject.image.link} alt = {postObject.alt} />
  })}</main>;
}

export default Main;

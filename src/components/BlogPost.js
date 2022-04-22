import React from "react";
import '../styles/tweet.css'
import headerImage from '../images/5ddb995a5e68d.jpg'
import authorImage from '../images/YiMo-xn-_400x400.jpg'


export default function BlogPost(props) {

  return <div className="post__container">
      <div className="post__header">
        <img src={headerImage} alt="" />
      </div>

      <div className="post__gen">{props.post.gen}</div>
      
      <div className="post__body">
        <h1 className="post__title">{props.post.title}</h1>
        <p className="post__content">{props.post.description}</p>
        
      </div>
      <div className="post__footer">
          <div className="post__author">
            <img className="post__author-img" src={authorImage} alt="" />
            <div className="post__author-name">{`${props.post.author.firstName + " " +props.post.author.lastName}`}</div>
          </div>
          <div className="post__date">{`${props.post.date.dd + " " + props.post.date.mm + " " + props.post.date.yy}`}</div>
        </div>
  </div>;
}

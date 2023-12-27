import React from "react";
import "./SinglePost.css";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="single post image"
        />
        <h1 className="singlePostTitle">
          this is post title
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Udana</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          {" "}
          Explore a diverse range of topics, from the latest trends and
          technology to lifestyle tips and thought-provoking perspectives. Join
          our community of curious minds as we embark on a journey through the
          realms of knowledge, inspiration, and entertainment. Explore a diverse
          range of topics, from the latest trends and technology to lifestyle
          tips and thought-provoking perspectives. Join our community of curious
          minds as we embark on a journey through the realms of knowledge,
          inspiration, and entertainment. Explore a diverse range of topics,
          from the latest trends and technology to lifestyle tips and
          thought-provoking perspectives. Join our community of curious minds as
          we embark on a journey through the realms of knowledge, inspiration,
          and entertainment.
        </p>
      </div>
    </div>
  );
}

export default SinglePost;

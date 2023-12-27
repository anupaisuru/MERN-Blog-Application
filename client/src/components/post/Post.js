import React from "react";
import "./Post.css";
import Postmg from "../../assets/blog.jpg";

function Post() {
  return (
    <div className="post">
      <img className="postImg" src={Postmg} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem lorem lorem</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Explore a diverse range of topics, from the latest trends and technology
        to lifestyle tips and thought-provoking perspectives. Join our community
        of curious minds as we embark on a journey through the realms of
        knowledge, inspiration, and entertainment. Explore a diverse range of
        topics, from the latest trends and technology to lifestyle tips and
        thought-provoking perspectives. Join our community of curious minds as
        we embark on a journey through the realms of knowledge, inspiration, and
        entertainment. Explore a diverse range of topics, from the latest trends
        and technology to lifestyle tips and thought-provoking perspectives.
        Join our community of curious minds as we embark on a journey through
        the realms of knowledge, inspiration, and entertainment.
      </p>
    </div>
  );
}

export default Post;

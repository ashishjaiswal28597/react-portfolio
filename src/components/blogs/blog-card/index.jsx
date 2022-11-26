import React from "react";

import "./style.scss";

import Arrow from "../../shared/arrow";

const BlogCard = ({ user, date, image, title, discription }) => {
    return (
        <div className="blog-cart">
            <div className="image-section">
                <img
                    src={image}
                    alt={title}
                />
            </div>
            <div className="content-section">
                <div className="info-bar">
                    <div className="user-name">{user}</div>
                    <div className="posted-date">{date}</div>
                </div>
                <h3>{title}</h3>
                <p>{discription}</p>
                <div className="readmore-cta">
                    <span className="text">Read more</span>
                    <Arrow />
                </div>
            </div>
        </div>
    );
};

export default BlogCard;

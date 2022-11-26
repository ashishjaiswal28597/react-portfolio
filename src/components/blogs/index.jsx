import React from "react";

import Section from "../shared/section";
import Blog1 from "../../images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../images/blogs/blog-thumb-3.jpg";

import BlogCard from "./blog-card";

import "./style.scss";

const Blogs = () => {
    return (
        <Section
            id="blogs"
            title="Blogs & Article"
            background="dark"
        >
            <div className="blogs-content-wraper">
                <BlogCard
                    user="Ashish Jaiswal"
                    date="Sep 8 2022"
                    image={Blog1}
                    title="Lorem ipsum, dolor sit amet consectetur"
                    discription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nam."
                />
                <BlogCard
                    user="Ashish Jaiswal"
                    date="Sep 8 2022"
                    image={Blog2}
                    title="Lorem ipsum, dolor sit amet consectetur dolor is high in"
                    discription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nam."
                />
                <BlogCard
                    user="Ashish Jaiswal"
                    date="Sep 8 2022"
                    image={Blog3}
                    title="Lorem ipsum, dolor sit amet "
                    discription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nam."
                />
            </div>
        </Section>
    );
};

export default Blogs;

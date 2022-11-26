import React from "react";

import "./style.scss";

import { AiOutlineCloudDownload } from "react-icons/ai";

import Section from "../shared/section";
import CallToAction from "../shared/CallToAction";

import TechIcons from "../../images/tech-icons.png";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skill-content-wraper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="JS,ReactJs,HTML,SASS"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                        Passionate Full Stack Web Developer with MERN as a stack
                        having hands-on experience in developing scalable web
                        apps using a wide range of front-end and back-end skills
                        and best code practices. <br /> I am dedicated to
                        perfecting my craft by learning from more seasoned
                        developers, remaining humble, and continuously making
                        strides to learn all that I can about development.
                    </p>
                    <a
                        href="JAISWAL ASHISH Resume.pdf"
                        download="JAISWAL ASHISH Resume.pdf"
                    >
                        <CallToAction
                            text="Download CV"
                            icon={<AiOutlineCloudDownload />}
                        />
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default Skills;

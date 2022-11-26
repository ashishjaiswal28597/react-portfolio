import React, { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";

import logo from "../../../images/logo.png";

import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";

const Navigation = () => {
    const [state,setState]=useState(true)

    return (
        <div className="top-navigation-bar">
            <div className="app-logo">
                <img
                    src={logo}
                    alt="ashish jaiswal"
                />
            </div>

            <div className="navigation">
                <span
                    className="navigation-item"
                    onClick={() => scrollToSection("skills")}
                >
                    Skills
                </span>
                <span
                    className="navigation-item"
                    onClick={() => scrollToSection("portfolio")}
                >
                    Portfolio
                </span>
                <span
                    className="navigation-item"
                    onClick={() => scrollToSection("blogs")}
                >
                    Blogs and Articles
                </span>
                <CallToAction
                    text="Contact me"
                    action={() => scrollToSection("contact")}
                />
            </div>
            <div className="toggle" onClick={()=>setState(!state)}><FaAlignJustify /></div>
        </div>
    );
};

export default Navigation;

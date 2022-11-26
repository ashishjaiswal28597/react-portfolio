import React from "react";

import "./style.scss";

import {
    FaYoutube,
    FaGithub,
    FaLinkedinIn,
    FaStackOverflow,
    FaInstagram,
} from "react-icons/fa";

import Section from "../shared/section";
import Logo from "../../images/logo.png";
import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helpers";

const Footer = () => {
    return (
        <Section
            className="footer"
            background="dark"
        >
            <div className="footer-content-wrapper">
                <div className="footer-logo">
                    <img
                        src={Logo}
                        alt="ashish"
                    />
                </div>
                <ul className="footer-menu-items">
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("skills")}
                    >
                        Skills
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("portfolio")}
                    >
                        Portfolio
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("blogs")}
                    >
                        Blog & Articles
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("contact")}
                    >
                        Contact me
                    </li>
                </ul>
                <div className="social-icons">
                    <SocialIcon
                        color="#FF0000"
                        icon={<FaYoutube />}
                        link="https://www.youtube.com/channel/UCGSUsr5q8OIFu8p0fcUMazQ"
                    />
                    <SocialIcon
                        color="#0D2636"
                        icon={<FaGithub />}
                        link="https://github.com/ashishjaiswal28597"
                    />
                    <SocialIcon
                        color="#0A66C2"
                        icon={<FaLinkedinIn />}
                        link="https://www.linkedin.com/in/ashish-jaiswal-007079247/"
                    />
                    <SocialIcon
                        color="#f2740d"
                        icon={<FaStackOverflow />}
                        // link=""
                    />
                    <SocialIcon
                        color="#E84C88"
                        icon={<FaInstagram />}
                        link="https://www.instagram.com/bittu_28597/"
                    />
                </div>
                <div className="bottom-bar">
                    <div className="copyright-text">
                        Copyright 2022 Ashish Jaiswal | All Rights Reserved
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Footer;

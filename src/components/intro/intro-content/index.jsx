import React from "react";

import hand from "../../../images/hand.png";
import girl from "../../../images/girl.png";

import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";

const IntroConetnt = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} />
                            </span>
                            <span className="text">,I Am</span>
                        </span>
                        <span className="big-text">Ashish Jaiswal</span>
                        <span className="midium-text">
                            Full Stack | MERN Stack Developer
                        </span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quisquam sunt minus, repellendus eaque alias ad
                        culpa aut velit, in animi, dolorum officiis quo fugit?
                        Odit modi molestiae cum fuga, quibusdam accusantium
                        totam excepturi alias magnam deleniti laboriosam facere
                    </p>
                    <CallToAction
                        text="Contact me"
                        action={() => scrollToSection("contact")}
                    />
                </div>
                <div className="right-col">
                    <img
                        src={girl}
                        alt="Ashish Jaiswal"
                    />
                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">Best Design Award</div>
                    </div>
                    <div className="highlights vertical">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <div className="text">
                            <span>4k+</span>
                            Happy Customers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroConetnt;

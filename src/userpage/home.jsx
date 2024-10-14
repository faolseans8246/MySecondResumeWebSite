import React from "react";
import './home.css';

import MainImage from '../images/IT-nik.jpg';

// iconkalar bilan ishlash
import {
    FaDiscord,
    FaFacebookF,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaTelegram,
    FaTiktok, FaWhatsapp,
    FaYoutube
} from "react-icons/fa";
import {FaThreads} from "react-icons/fa6";

// Home pageni shakllanrish qismi bilan ishlash
function HomeFunc({ theme }) {


    return (
        // Heome pageni shakllantirish qismi
        <div className={`homepage-conatainers ${theme}`}>

            <div className={`home-left-part ${theme}`}>
                <div className={`home-my-name-part`}>
                    <h1 className={`home-my-name-is ${theme}`}>Feruzbek KHamroev</h1>
                </div>


                {/* Image block */}
                <div className="home-image-block">
                    <img src={MainImage} alt="" className="home-page-main-image"/>
                </div>
            </div>

            {/*text and image blocks*/}
            <div className="home-and-button-block">
                {/*Button blocks*/}
                <div className="home-buttons-blocks">
                    <a href="#" className="home-link-buttons-part">
                        <FaFacebookF className={`home-link-icons home-facebook ${theme}`} />
                    </a>

                    <a href="#" className="home-link-buttons-part">
                        <FaInstagram className={`home-link-icons home-instagram ${theme}`} />
                    </a>

                    <a href="#" className="home-link-buttons-part">
                        <FaTelegram className={`home-link-icons home-telegram ${theme}`} />
                    </a>

                    <a href="#" className="home-link-buttons-part">
                        <FaGithub className={`home-link-icons home-github ${theme}`} />
                    </a>

                    <a href="#" className="home-link-buttons-part">
                        <FaYoutube className={`home-link-icons home-youtube ${theme}`} />
                    </a>

                    <a href="#" className="home-link-buttons-part">
                        <FaLinkedin className={`home-link-icons home-linkedin ${theme}`} />
                    </a>

                    {/*<a href="#" className="home-link-buttons-part">*/}
                    {/*    <FaDiscord className="home-link-icons home-discord"/>*/}
                    {/*</a>*/}

                    {/*<a href="#" className="home-link-buttons-part">*/}
                    {/*    <FaThreads className="home-link-icons home-threads"/>*/}
                    {/*</a>*/}

                    {/*<a href="#" className="home-link-buttons-part">*/}
                    {/*    <FaTiktok className="home-link-icons home-tiktok"/>*/}
                    {/*</a>*/}

                    <a href="#" className="home-link-buttons-part">
                        <FaWhatsapp className={`home-link-icons home-whatsapp ${theme}`} />
                    </a>
                </div>

                {/*Text blocks*/}
                <div className="home-text-blocks">
                    <div className="home-main-block-text">
                        <h1 className={`home-main-text ${theme}`}>
                            Java full-stack dasturchi
                        </h1>
                    </div>

                    <div className="home-sub-text-block">
                        <h3 className="home-sub-text">
                            Men full-stack dasturchiman va bu sohada ko'pgina loyihalarni shakllantirganman.
                            Loyihalarimni asosan asosiy va to'liq qismlarini o'zim shakllantiraman va bugungi kunda
                            juda ko'p loyihalarni shakllantirganman.
                        </h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeFunc;
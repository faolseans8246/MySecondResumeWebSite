import React, { useState, useEffect } from "react";
import './dashboard.css';
import { FaHome, FaLaptopCode } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdContactMail } from "react-icons/md";

function DashboardFunc() {
    const [theme, setTheme] = useState("light");

    // Local storage orqali oldingi tanlangan modeni olish
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    // Modeni toggle qilish funksiyasi
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme); // Tanlangan modeni saqlash
    };

    return (
        <div className={`dashboard-container ${theme}`}>
            {/* O'ng tarafdagi menyu qismi */}
            <div className="right-menu-bar">

                {/* Light va dark mode toggle */}
                <div className="dashboard-mode-part">
                    <button className="mode-toggle-button" onClick={toggleTheme}>
                        {theme === "light" ? <FaSun /> : <FaMoon />}
                    </button>
                </div>

                {/* Menyu bloklari */}
                <div className="dashboard-menu-blocks">
                    <div className="dashboard-menu-buttons">
                        <button className="menu-iconka-buttons"><FaHome /></button>
                        <button className="menu-iconka-buttons"><RiContactsFill /></button>
                        <button className="menu-iconka-buttons"><FaLaptopCode /></button>
                        <button className="menu-iconka-buttons"><TfiLayoutMediaCenterAlt /></button>
                        <button className="menu-iconka-buttons"><BiSolidPhoneCall /></button>
                        <button className="menu-iconka-buttons"><MdContactMail /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardFunc;

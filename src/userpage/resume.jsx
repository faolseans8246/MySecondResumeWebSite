import React, {useEffect, useState} from "react";
import './resume.css';

import { FaCodeCommit } from "react-icons/fa6";

function ResumeFunc({ theme }) {

    const [experiences, setExperiences] = useState([]);

    // Ma'lumotlarni backend'dan olish (back-end qismida API endpoint tayyor bo'lishi kerak)
    useEffect(() => {
        fetch("/api/experiences") // Backend API yo'liga murojaat
            .then((response) => response.json())
            .then((data) => setExperiences(data))
            .catch((error) => console.error("Error fetching experiences:", error));
    }, []);



    return (

        <div className={`resume-containers ${theme}`}>

            {/*O'zim haqimda*/}
            <div className="resume-about-me-block">
                <div className="resume-about-me-main-text">

                    <div className="resume-about-me-main-text">
                        <h1 className={`resume-about-me-text ${theme}`}>
                            My Resume
                        </h1>
                    </div>

                    <div className="resume-about-me-text-block">
                        <b>Address: </b>
                        <p className="resume-about-me-text-lines">
                            O'zbekiston Respublikasi Samarqand viloyati Qo'shrabot tumani.
                            2002-yil 1-fevral.
                        </p>
                    </div>

                    <div className="resume-about-me-text-block">
                        <b>School: 2009-2020</b>
                        <p className="resume-about-me-text-lines">
                            O'zbekiston Respublikasi Samarqand viloyati Qo'shrabot tumani 58-maktab
                        </p>
                    </div>

                    <div className="resume-about-me-text-block">
                        <b>University: 2020-2024</b>
                        <p className="resume-about-me-text-lines">
                            Muhammad al-Xorazmiy nomidagi Toshkernt Axborot Texnologiyalari Universiteti (TATU)ning
                            Dasturiy injinering fakulteti kunduzgi ta'lim yo'nalishida o'qiganman.
                        </p>
                    </div>

                    <hr className={`resume-about-me-line-xx ${theme}`}/>

                    <div className="resume-about-me-activity-text-block">
                        <h1 className={`resume-about-me-activity-main-text ${theme}`}>
                            My Activities
                        </h1>
                    </div>

                    <div className="resume-about-me-activity-line-block">
                        <b>1-kurs: </b>
                        <p className="resume-about-me-activity-block-line">
                            Dashturlash sohai haqida o'rganish va dastulashga kirib kelish bosqichini o'rganganman.
                        </p>
                    </div>

                    <div className="resume-about-me-activity-line-block">
                        <b>2-kurs: </b>
                        <p className="resume-about-me-activity-block-line">
                            Dasturlash tillarini o'rgandim:
                            <ul className="resume-activity-list">
                                <li className="resume-activity-list-item">C / C++</li>
                                <li className="resume-activity-list-item">C#</li>
                                <li className="resume-activity-list-item">Arduino</li>
                                <li className="resume-activity-list-item">MySQL</li>
                                <li className="resume-activity-list-item">HTML / CSS</li>
                            </ul>
                        </p>
                    </div>

                    <div className="resume-about-me-activity-line-block">
                        <b>3-kurs: </b>
                        <p className="resume-about-me-activity-block-line">
                            Ma'lumotlar tuzilmasi va patternlar bilan bilan ishlash dasturlash arxitekturasini
                            shakllatirish
                            <ul className="resume-activity-list">
                                <li className="resume-activity-list-item">Python</li>
                                <li className="resume-activity-list-item">JavaScript</li>
                                <li className="resume-activity-list-item">PostgreSQL</li>
                                <li className="resume-activity-list-item">Kotlin</li>
                                <li className="resume-activity-list-item">Web (React, Bootstrap)</li>
                                <li className="resume-activity-list-item">LinuxOS</li>
                                <li className="resume-activity-list-item">Algorithms</li>
                            </ul>
                        </p>
                    </div>

                    <div className="resume-about-me-activity-line-block">
                        <b>4-kurs: </b>
                        <p className="resume-about-me-activity-block-line">
                            Java dastulash tili va uning frameworki <i>Spring boot</i> texnologiyasi bilan ishlash, bu
                            texnologiya bilan
                            turli loyihalarni shakllantirish, muammolarni java dasturlash tili bilan amalg oshirish bu
                            jarayonlarni avtomatlashtirishni
                            o'rgandim va hozirda ham Java dasturlash tili bilan ishlab kelmoqdaman.
                            <ul className="resume-activity-list">
                                <li className="resume-activity-list-item">Java</li>
                                <li className="resume-activity-list-item">Node JS</li>
                                <li className="resume-activity-list-item">ReactJS, Tailwin</li>
                                <li className="resume-activity-list-item">SQL (MySQL, PostgreSQL, Oracle)</li>
                                <li className="resume-activity-list-item">Linux (Ubuntu, Kali), Windows</li>
                                <li className="resume-activity-list-item">Swagger, Postman</li>
                            </ul>
                        </p>
                    </div>

                    <div className="resume-about-me-activity-line-block">
                        <b>Hozir: </b>
                        <p className="resume-about-me-activity-block-line">
                            Hozirda tashturlash texnologiyalari, dastur arxitekturasi, Docker, Kubernates, Bulut
                            xotiralar va servierlar bilan ishlash
                            Java dasturlash tilida microservicelar bilan ishlash va AI texnologiyalari bilan loyihalar
                            yaratishni amalga oshirmoqdaman.
                        </p>
                    </div>

                    <hr className={`resume-about-me-line-xx ${theme}`}/>

                    {/* Mening loyihalar qismim */}
                    <div className="resume-staj-blocks">
                        <div className="resume-staj-main-text">
                            <h1 className={`resume-staj-text ${theme}`}>
                                My expriences
                            </h1>
                        </div>

                        <div className={`resume-staj-my-box-blocks ${theme}`}>
                            <form action="" className="resume-staj-form-input-part">
                                <div className={`resume-staj-block-box ${theme}`}>
                                    <div className="resume-counter-number-block">
                                        24 +
                                    </div>

                                    <div className="resume-sub-text-part">
                                        <div className="resume-sub-text-icons">
                                            <FaCodeCommit className="resume-sub-icon"/>
                                        </div>

                                        <div className="resume-sub-text-main-line">
                                            Loyihalar bilan ishlaganman
                                        </div>
                                    </div>
                                </div>

                                <div className={`resume-staj-block-box ${theme}`}>
                                    <div className="resume-counter-number-block">
                                        24 +
                                    </div>

                                    <div className="resume-sub-text-part">
                                        <div className="resume-sub-text-icons">
                                            <FaCodeCommit className="resume-sub-icon"/>
                                        </div>

                                        <div className="resume-sub-text-main-line">
                                            Loyihalar bilan ishlaganman
                                        </div>
                                    </div>
                                </div>

                                <div className={`resume-staj-block-box ${theme}`}>
                                    <div className="resume-counter-number-block">
                                        24 +
                                    </div>

                                    <div className="resume-sub-text-part">
                                        <div className="resume-sub-text-icons">
                                            <FaCodeCommit className="resume-sub-icon"/>
                                        </div>

                                        <div className="resume-sub-text-main-line">
                                            Loyihalar bilan ishlaganman
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <hr className={`resume-about-me-line-xx ${theme}`}/>

                    <div className={`resume-work-activities-block ${theme}`}>
                        <div className="resume-work-activitias-text-line">
                            <h1 className={`resume-work-activities-text ${theme}`}>
                                My Work Activities
                            </h1>
                        </div>
                        <div className="resume-work-activities-block">
                            {experiences.length > 0 ? (
                                experiences.map((experience, index) => (
                                    <div key={index} className={`resume-work-activity-block ${theme}`}>
                                        <div className="resume-work-activity-icon">
                                            <FaCodeCommit className="resume-work-icon"/>
                                        </div>
                                        <div className="resume-work-activity-content">
                                            <h2 className="resume-work-place">{experience.companyName}</h2>
                                            <p className="resume-work-position">
                                                <strong>Position: </strong>{experience.position}
                                            </p>
                                            <p className="resume-work-duration">
                                                <strong>Duration: </strong>{experience.startDate} - {experience.endDate}
                                            </p>
                                            <p className="resume-work-description">
                                                <strong>About: </strong>{experience.description}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className={`resume-work-expirence-error-note ${theme}`}>No experiences available</p> // Ma'lumotlar bo'lmasa ko'rsatish uchun
                            )}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ResumeFunc;
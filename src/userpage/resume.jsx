import React from "react";
import './resume.css';


function ResumeFunc({ theme }) {


    return (

        <div className={`resume-containers ${theme}`}>

            {/*O'zim haqimda*/}
            <div className="resume-about-me-block">
                <div className="resume-about-me-main-text">
                    <h1 className="resume-about-me-header-text">
                        About Me
                    </h1>
                    <p className="resume-about-me-text">
                        Men 2002-yilda Samarqand viloyati Qo'shrabot tumanida tug'ilganman
                        va 2020-yildan buyon Toshkent shahrida yashayman.

                        <div className="resume-about-me-study-block">
                            <p className="resume-school">
                                2009-2020 yillarda Samarqand viloyati Qo'shrabot tumaning 58-maktabida o'qiganman
                            </p>
                        </div>

                        <div className="resume-about-me-study-block">
                            <p className="resume-university">
                                2020-2024 yillarda Toshkent shahridagi "Muhammad al-Xorazmiy nomidagi Toshkent Axborot
                                Texnologiyalari Universiteti (TATU)ning
                                Dasturiy injinering fakultetining kunduzgi yo'nalishida o'ziganman
                            </p>
                        </div>

                        <div className="resume-about-me-study-block">
                            <p className="resume-university">
                                Dasturlash sohasiga universitetning 3-kurs vaqtim kirib kelganman va ungacha shunchaki Universitetning darsliklari bilan mashg'ul bo'lganman.
                                bunda 1-kursdan 3-kursgacha, C/C++ dasturlash tili, HTML/CSS web struktura va MySQL ma'lumotlar bazasi bilan dasturlash sohasida yurganman. va
                                bu vaqtda boshqa dasturlash tillarini ham o'rganishga harakat qilganman va bularga <b>C#</b>, <b>JavaScript</b>, <b>Python</b>, <b>TypeScript</b>,
                                <b>Kotlin</b>, <b>Dart</b>, <b>R</b> va boshqa tillarga qiziqib ko'rganman. ammo 4-kursimda <b>Java</b> dasturlash tili va uning frameworki bo'lgan
                                <i>Spring frameworki</i>ini o'rgandim va hozirda <b>Java</b> dasturlash tilidan keng foydalanib kelaman
                            </p>
                        </div>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default ResumeFunc;
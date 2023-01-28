import React from 'react';
import styles from './ExperiencePage.module.scss';
import PageTitle from "../../components/PageTitle/PageTitle";
import ExperienceBox from "../../components/ExperienceBox/ExperienceBox";

const microsoftTasks =
    <ul>
        <li><b>Incoming</b> Cloud Solution Architect intern at Microsoft</li>
    </ul>

const sgTasks =
    <ul>
        <li><b>Developed</b> new features and <b>maintained</b> a high-traffic web application used by business analysts and investors using C#, Angular, Electron, and SQL.</li>
        <li>Integrated and updated a <b>new API</b> allowing a web application used by software developers to create <b>change requests.</b></li>
        <li>Implemented a <b>Python script</b> to send <b>automated</b> email messages to multiple application managers and their tools’ users.</li>
        <li>Refactored and optimized previous code to improve <b>efficiency, readability and performance</b>.</li>
        <br />
        <b>Languages & Tools</b>: C#, Typescript, Angular, SQL, Swagger, Jenkins, Octopus
    </ul>

const ExperiencePage = () => {
    return (
        <div>
            <PageTitle title="experience" />
            <ExperienceBox date={"May 2023 — Aug 2023"} company={"Microsoft"} position={"Cloud Solution Architect"} location={"Montreal, Canada"} tasks={microsoftTasks}/>
            <ExperienceBox date={"May 2022 — Aug 2022"} company={"Societe Generale"} position={"Full Stack Developer"} location={"Montreal, Canada"} tasks={sgTasks}/>
        </div>
    )
}

export default ExperiencePage
import React from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import ProjectBox from "../../components/ProjectBox/ProjectBox";
import pweb from 'assets/projects/homepage.png';
import MHA from 'assets/projects/MHA.png';
import socs from 'assets/projects/socs.png';
import splendor from 'assets/projects/splendor.png';
import styles from './ProjectPage.module.scss';

const ProjectPage = () => {
    return (
        <div className={styles.ProjectPageStyled}>
            <PageTitle title="projects"/>
            <div className={styles.ProjectContainer}>
                <ProjectBox title="Personal Website" type="Personal Project"
                            github="https://github.com/sandynguyen8928/sandy-personal-website"
                            image={pweb} alt={"Personal Website Home Page"}/>
                <ProjectBox title="Splendor" type="School Project"
                            image={splendor} alt={"Personal Website Home Page"}/>
                <ProjectBox title="SOCS TA Management" type="School Project"
                            github="https://github.com/sandynguyen8928/sandy-personal-website"
                            image={socs} alt={"Personal Website Home Page"}/>
                <ProjectBox title="Mental Health Alphabet" type="Hackathon"
                            github="https://github.com/sandynguyen8928/sandy-personal-website"
                            image={MHA} alt={"Personal Website Home Page"}/>
            </div>
        </div>
    )
}

export default ProjectPage;
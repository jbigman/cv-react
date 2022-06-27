import React from 'react';
import SideBar from "./SideBar";
import Block from "./Block";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSuitcase, faGraduationCap} from '@fortawesome/free-solid-svg-icons'

const HomePage = () => {

    const skills = {
        stacks: [{
            type: "Web",
            stack: ["JavaScript", "TypeScript", "", "Node.js", "Socket.io", "", "React", "React Native", "AngularJs", "", "HTML5", "CSS3", "Sass"]
        }, {
            type: "Java",
            stack: ["Spring", "Android"]
        }, {
            type: "Outils",
            stack: ["Git", "Jenkins", "Docker"]
        }, {
            type: "UX",
            stack: ["Design", "Ergonomie"]
        }, {
            type: "Methodologies",
            stack: ["Agile", "Scrum"]
        }, {
            type: "Langues",
            stack: ["Anglais technique"]
        },]
    };

    const cv = {
        experiences: [{
            title: "Entrepreneuriat",
            description: "Projet tenu secret pour éviter l'appropriation du concept.",
            company: "",
            duration: "",
            tasks: [],
            stack: [],
            dateStart: 2018,
        }, {
            title: "Lead Tech application Android",
            description: "Développement en autonomie d'une application Android pour le système billettique danois. Elle permet aux conducteurs de bus de gérer les voyages, réaliser des ventes, ...",
            company: "Thales Communication & Security",
            duration: "(9 mois)",
            tasks: [
                "Réalisation d'outils de tests pour l'intégration avec les équipements",
                "Formation d'un apprenti (Master 2)",
                "Réalisation du logiciel (conception, dev et tests)"
            ],
            stack: ["Typescypt", "react-native", "jenkins", "MQTT"],
            dateStart: 2017,
            dateEnd: 2018,
        }, {
            title: "Développeur Full stack & Scrum master",
            description: "Au sein d'une équipe Agile (Scrum) de 10-12 personnes et dans le cadre du développement d'un produit billettique (Dubai, Doha, Johannesbourg, ...)",
            company: "Thales Communication & Security",
            duration: "(5 ans)",
            tasks: [
                "Conception, développement et supports aux autres développeurs",
                "Scrum master"
            ],
            stack: ["JAVA", "Spring", "Hibernate", "Docker", "Jenkins", "jUnit", "Angular", "Sass", "bootstrap"],
            dateStart: 2013,
            dateEnd: 2017,
        }, {
            title: "Développeur full-stack",
            description: "Au sein d'une équipe 6-9 personnes et pour le système billettique d'Auckland (Nouvelle-Zélande)",
            company: "Thales Communication & Security",
            duration: "(2 ans)",
            tasks: [
                "Conception, développement",
                "Rédaction des manuels utilisateurs (opérateurs de transport)"
            ],
            stack: ["ASP.Net", "C#", "WCF", "Entity Framework", ".NET 3.5", "LINQ", "SQL Server"],
            dateStart: 2011,
            dateEnd: 2013,
        }, {
            title: "Développeur applicatif",
            description: "Développement d'un éditeur XML, utilisé par les opérateurs de Lisbonne pour configurer leur système",
            company: "Thales Communication & Security",
            duration: "(2 ans en alternance)",
            tasks: [
                "Améliorations ergonomiques: ajout d'outils de visualisation (Datepicker, sliders, ...)"
                , "Renforcement de la stabilité: ajout d'outils de validation de données (Complétion de matrices, date de début inférieure à une date de fin, ...)"
            ],
            stack: ["C#", "WPF", ".NET 3.5", "MEF", "LINQ", "XML", "XSD"],
            dateStart: 2009,
            dateEnd: 2011,
        }, {
            title: "Responsable e-commerce",
            description: "Société de vente au détail de véhicules miniatures",
            company: "Gaminiature",
            duration: "",
            tasks: [
                "Réalisation du site e-commerce de la société.",
                "Création de la charte graphique (logo et impressions)",
                "Optimisation du référencement (seo)"
            ],
            stack: ["PHP", "Magento", "mySQL"],
            dateStart: 2008,
            dateEnd: 2009,
        }],

        formations: [{
            title: "Master Informatique en alternance",
            description: "Expert en conduite et ingénierie de développement logiciel et système",
            company: "CFA AFTI, Orsay",
            duration: "",
            tasks: [],
            stack: [],
            dateStart: 2007,
            dateEnd: 2009,
        }, {
            title: "Licence Informatique",
            description: "Diplôme universitaire de technologie, Informatique",
            company: "Université Paris 13 - Institut Galilée",
            duration: "",
            tasks: [],
            stack: [],
            dateStart: 2007,
            dateEnd: 2009,
        }],
    };

    return (
        <header className="App-header">
            <section id="main">
                <header id="title">
                    <h1>Jérémie <strong>GAMBIN</strong></h1>
                    <h3><span className="available"/>Disponible</h3>
                </header>
                <section className="main-block concise">
                    <h2>
                        <FontAwesomeIcon icon={faSuitcase}/> Expériences
                    </h2>
                    {
                        cv.experiences.length > 0 && cv.experiences.map((d) => {
                            return (Block(d))
                        })
                    }
                </section>
                <section className="main-block concise">
                    <h2>
                        <FontAwesomeIcon icon={faGraduationCap}/> Formation
                    </h2>
                    {
                        cv.formations.length > 0 && cv.formations.map((d) => {
                            return (Block(d))
                        })
                    }
                </section>

            </section>
            {SideBar(skills)}
        </header>
    );
};

export default HomePage;

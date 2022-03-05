import React from 'react';
import '../../App.css';
import {Button, Card, Row, Col} from "react-bootstrap";
import Project from './projects';


function Portfolio() {
    const projects=[
        {
            title: "SpaceBook",
            image: 'space.png',
            githubRepo: "https://github.com/kassidyr/Project-3",
            deployment: "https://spacebook-social-network.herokuapp.com",
        },
        {
            title: "Birthday Fun Facts",
            image: "pinkgift.jpeg",
            githubRepo: "https://github.com/kassidyr/project1",
            deployment:"https://kassidyr.github.io/project1/",

        },
        {
            title: "Run Buddy",
            image:"runbuddy.png",
            githubRepo:"https://github.com/Iviviana/Run-Buddy",
            deployment:"https://iviviana.github.io/Run-Buddy/",
        },
        {
            title:"Social Network API",
            image:"socialapi.png",
            githubRepo:"https://github.com/Iviviana/Social-Network-Api"
        },
        {
            title:"Budget Tracker",
            image:"budget.png",
            githubRepo:"https://github.com/Iviviana/Budget-Tracker",
            deployment:"https://cryptic-taiga-98876.herokuapp.com/",
        },
        {
            title:"Did You See?",
            image:"project2.png",
            githubRepo:"https://github.com/sean-elliott-97/DidYouSee",
            deployment:"https://did-you-see.herokuapp.com/",
        }
    ];

    return (
        <Row className="mt-5">
      {projects.map((project) => (
        <Col sm={4} className="mb-3">

          <Project
            title={project.title}
            image={project.image}
            githubRepo={project.githubRepo}
            deployment={project.deployment}
          />

        </Col>
      ))}
    </Row>
    );
};

export default Portfolio;
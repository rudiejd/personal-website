
import React from 'react';
import Project from './components/Project';
import {Container } from 'react-bootstrap';
import Title from './components/Title';



export const Projects = () => {
    return (
        <Container className="content-center mt-5">
            <Title text="projects" />
            <p>projects to which i've contributed. collaborative projects marked with asterisk (*)</p>
            <Project name="nba all-star predictions" link="https://github.com/rudiejd/nba_allstar_predictions" 
                desc="utilized python machine learning libraries to predict nba all-stars with 80% accuracy."
            />
            <hr/>
            <Project name="crowdrec" link="https://github.com/rudiejd/crowdrec" 
                desc="crowd-sourced spotify recommendation engine in react.js."
            />
            <hr/>
            <Project name="ventos*" link="https://gitlab.com/project-ventos/ventos" 
                desc="c/c++ rtos for operating ventilators using an arduino. mainly working on alarm module and CI/CD."
            />
            <hr/>
            <Project name="masters' thesis (in progress)*" link="https://miamioh.edu" 
                desc="library for easing the usage of 'big memory' in c++ applications. currently in preliminary stages.
                my advisor is dr. dhananjai rao."
            />
            <hr/>
            <Project name="plantpro*" link="https://github.com/rudiejd/plantpro" 
                desc="social media website for logging plant sightings in laravel (PHP framework)."
            />

        </Container>
    );
}
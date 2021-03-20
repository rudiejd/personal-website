

import React from 'react';



function Project(props) {
    return (<React.Fragment>
            <h3 class="font-weight-bold">{props.name}</h3>
            <p>{props.desc}</p>
            <a class="project-link" href={props.link}>learn more ></a>
            </React.Fragment>);
}

export default Project;
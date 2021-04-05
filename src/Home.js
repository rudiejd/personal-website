
import React from 'react';
import { Badge, Col, Row, Jumbotron, Container, Image} from 'react-bootstrap';   
import styled from 'styled-components';
import SkillBar from 'react-skillbars';
import { SocialIcon } from 'react-social-icons';
import Title from './components/Title';


const Avatar = styled.img`
border-radius: 50%;
width: 25%;
`;
const Comic = styled.img`
height: 75%;
width: 75%;`;


const skills = [
    {type: "C++", level: 70},
    {type: "Java", level: 65},
    {type: "Python", level: 65},
    {type: "Javascript", level: 60},
    {type: "GNU/Linux", level: 80},
    {type: "C#", level: 30},
    {type: "SQL", level: 70},
    {type: "PHP", level: 60},
    {type: "Hadoop", level: 55},


];

export const Home = () => {
    return <React.Fragment>
        <Container className="content-center mt-5">
            <Title text="hello there." />
            <Avatar src="me.jpg" alt="Picture of me" height="300" className="img-center img-fluid" />
            
            <h3 className="font-weight-bold">about me</h3>
            <p class="display-5">i'm a software engineer with a year of experience studying
            at miami university in ohio. i was born in marietta, ohio, but i still grew up watching cleveland sports every night i am finishing my degree in mathematics while
            simultaneously working towards a masters' degree in computer science.</p>
            
          
            <h3 className="font-weight-bold">experience</h3>
            <p class="display-5">my research experience is mainly centered around distributed systems, where i am aiming
            to improve performance on memory hungry high-performance applications. i have industry
            experience working as a data developer intern at wolfram research, where i created several new pipelines
            for transforming and reporting business critical data. i excel at researching latest trends, implementing
            novel new software, and testing said software for functionality, readability, and compliance.
            i have freelance experience working with one of my classmates for clients online to deliver high
            quality javascript, php, and sql solutions to complex problems. i have volunteer experience working for 
            helpful engineering on their ventos project, where i write c++ code for an open source ventilator operating systems
            and participate in the project management process. </p>
            
            <Comic src="dilbert_comic.png" className="img-center" alt="Dilbert comic about distributed systems"/>            
            <p class="display-5">i am currently open to any opportunities to work, whether local or remote, and look forward to the challenges they bring.</p>

            <h3 className="font-weight-bold">skills</h3>
            <SkillBar skills={skills} />

            <h3 className="font-weight-bold">connect with me</h3>
            <SocialIcon url="https://github.com/rudiejd" bgColor="black" fgColor="white" className="mr-5"/>
            <SocialIcon url="https://linkedin.com/in/jdrudie"  fgColor="white" className="mr-5"/>
            <SocialIcon url="https://gitlab.com/rudiejd" bgColor="black" fgColor="white" className="mr-5"/>
            <SocialIcon url="https://open.spotify.com/user/rudebowski/" bgColor="green" fgColor="white" className="mr-5"/>
            <SocialIcon url="https://instagram.com/jd_rude/" fgColor="white" className="mr-5"/>
            <SocialIcon url="mailto:rudiejd@miamioh.edu" network="email" />

            
        </Container>
        </React.Fragment>
}

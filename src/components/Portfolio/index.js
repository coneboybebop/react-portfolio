import React from 'react';
import Card from 'react-bootstrap/Card';
import PitcherCard from '../../assets/Card-images/pitcher-perfect-card.jpg';
import LocalCard from '../../assets/Card-images/Living-local-card.jpg';
import QuizardCard from '../../assets/Card-images/Quizard-card.png';

function Portfolio() {

    return (
        <div className="container flex-row">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={PitcherCard}></Card.Img>
            <Card.Body>
            <Card.Title>Pitcher Perfect</Card.Title>
            <Card.Link href="https://jackatkerson.github.io/pitcher-perfect/" target="_blank">App</Card.Link>
            <div> or </div>
            <Card.Link href="https://github.com/JackAtkerson/pitcher-perfect.git" target="_blank">GitHub</Card.Link>
            </Card.Body>
            </Card>

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={LocalCard}></Card.Img>
            <Card.Body>
            <Card.Title>Living Local</Card.Title>
            <Card.Link href="https://living-locally.herokuapp.com/" target="_blank">App</Card.Link>
            <div> or </div>
            <Card.Link href="https://github.com/coneboybebop/project-2-group-6" target="_blank">GitHub</Card.Link>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={QuizardCard}></Card.Img>
            <Card.Body>
            <Card.Title>Quizard</Card.Title>
            <Card.Link href="https://ltb-quizard.herokuapp.com/" target="_blank">App</Card.Link>
            <div> or </div>
            <Card.Link href="https://github.com/NangTuong/Quizard" target="_blank">GitHub</Card.Link>
            </Card.Body>
        </Card>

        

    



        </div>

    )
}

export default Portfolio
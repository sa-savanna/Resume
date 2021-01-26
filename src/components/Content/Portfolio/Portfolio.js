import React from 'react'
import { Image, Button } from 'react-bootstrap';
import icecream from './iceCream.png'
import bookfinder from './BookFinder.png'
import { FaGithub, FaRegEye } from 'react-icons/fa';
import Header from '../Header';
import weather from './weather.png'
import voyager from "./Voyager.png";
import burger from "./Burger.png"
import todo from "./todo.png"

const data = {
    header: {
        title: "Portfolio",
        paragraph: " / Portfolio",
        name: "Home"
    },
    cards: [
        {
            img: bookfinder,
            title: "Google books searcher",
            subtitle: 'Exersice for:',
            list: ['REST API', 'Styling'],
            links: ['https://sa-savanna.github.io/BookFinder/',
                'https://github.com/sa-savanna/BookFinder']
        }
        ,
        {
            img: weather,
            title: "Wheather forecast",
            subtitle: 'Exersice for:',
            list: ['REST API', 'JavaScript'],
            links: ['https://sa-savanna.github.io/WeatherApp/',
                'https://github.com/sa-savanna/WeatherApp']

        },
        {
            img: icecream,
            title: "Random idea Blog",
            subtitle: 'Exersice for:',
            list: ['NodeJS Routing', 'Registration form', 'Connect to MongoDB'],
            links: ['https://icecream-node-routing.herokuapp.com/',
                'https://github.com/sa-savanna/Node-routing']
        },
        {
            img: voyager,
            title: "Group project of Travel site",
            subtitle: 'Exersice for:',
            list: ['React hooks', 'Using multiple API', 'Team work'],
            links: ['https://sa-savanna.github.io/React-Voyager/#/',
                'https://github.com/sa-savanna/React-Voyager.git']
        },
        {
            img: burger,
            title: "Order your favourite Burger",
            subtitle: 'Exersice for:',
            list: ['React hooks', 'Connect and deploy to Firebase', 'Redux'],
            links: ['https://burgerdatabase-4cbd2.web.app/',
                'https://github.com/sa-savanna/Burger-Builder']
        },
        {
            img: todo,
            title: "Angular Todo exersice",
            subtitle: 'Exersice for:',
            list: ['Understanding the principles', 'Connect and deploy to Firebase'],
            links: ['https://angular-todo-app-2dcd0.web.app/',
                '']
        }
    ]
}

const Portfolio = () => {

    


    return (
        <>
            <div className="inner">

                <Header header={data.header.title} paragraph={data.header.paragraph} name={data.header.name} />
                <div className="title">
                    <p>This site is made with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React </a>library, without backend, using <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">SASS</a>  styling and <a href="https://greensock.com/" target="_blank" rel="noopener noreferrer"> GreenSock</a> animation.</p>
                    <a href='https://github.com/sa-savanna/Resume' target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="View code">
                        <Button variant="warning" size="sm"><FaGithub />View code</Button>
                    </a>
                </div>

                <div className="wrapper p-0">
                    {
                        data.cards.map((card, i) => (
                            <div key={i} className="card">
                                <Image variant="top" src={card.img} />
                                <div className="info">
                                    <h4 className="mb-5">{card.title}</h4>
                                    <h5>{card.subtitle}</h5>
                                    <ul>
                                        {
                                            card.list.map((x, y) => (
                                                <li key={y}>{x}</li>
                                            ))
                                        }
                                    </ul>

                                    <div>
                                        <a href={card.links[0]} target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="Click to watch">
                                            <Button className={card.links[0] === '' && 'disabled'} variant="warning" size="lg"> <FaRegEye /></Button>
                                        </a>

                                        <a href={card.links[1]} target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="View code">
                                            <Button className={card.links[1] === '' && 'disabled'} variant="warning" size="lg"><FaGithub /></Button>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div >
        </>
    )

}

export default Portfolio;
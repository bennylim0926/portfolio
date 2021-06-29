import * as React from 'react';
import '../Css/mainContent.css';
import SideMenu from './sideMenu';
import { Heading } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import { ArrowForwardIcon } from "@chakra-ui/icons";
// import CollapsedGrey from '../PortfolioImages/CollapsedGray.png'
// import ApocaForce from '../PortfolioImages/ApocaForce.png'
// import ISeikai from '../PortfolioImages/ISeikai.jpg'
import { Link } from 'react-router-dom';
import {PortfolioData} from './Data';
import {Divider} from '@chakra-ui/react';

class MainContent extends React.Component {
    render() {
        return (
            <div className="mainContent">
                <Heading size="3xl" marginTop={10} marginBottom={10} textAlign={'center'}>{PortfolioData.title}</Heading>
                <Divider marginBottom={5} size={10} />
                {PortfolioData.projects.map((item, index) => {
                    return (
                        <div className='container' id={item.id} >
                            <div className='childContainer'>
                                <div className="childImage">
                                    <img src={item.imageUrl} alt={item.imageTitle} style={item.style} />
                                </div>
                            </div>
                            <div className='childContainer'>
                                <div className="childDescription">
                                    <span className="theTitle"><Heading >{item.imageTitle}</Heading></span>
                                    <p>{item.imageDescription}</p>
                                    <Link to={item.linkTo}>
                                        <Button rightIcon={<ArrowForwardIcon />}>Learn More</Button>
                                    </Link>
                                </div>
                            </div>
                            <Divider marginTop={5} marginBottom={5}/>
                        </div>
                    )
                })
                }
            </div>
        )
    }
}


class Portfolio extends React.Component {
    render() {
        return (
            <div >
                <div className="flex-container">
                    <div className="flex-child">
                        <SideMenu name="sideMenu" buttonName="cButton" />
                    </div>
                    <div className="flex-child">
                        <MainContent />
                        {/* <Footer /> */}
                    </div>
                </div>
            </div>
        )
    }
}


export default Portfolio;
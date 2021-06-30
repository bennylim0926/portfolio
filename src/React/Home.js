import '../Css/home.css';
import React from 'react';
import { Heading } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {HompageData} from './Data'
import {Divider} from '@chakra-ui/react'; 


function Home() {
    return (
        <div>
            <TitleSection />
            <ImageSection />
        </div>
    )
}

function TitleSection() {
    return (
        <div className="titleSection">
            <Heading className="title" size="4xl">{HompageData.title}</Heading>
            <Heading size="md" className="description">
                {HompageData.description}
            </Heading>
        </div>
    )
}

function ImageSection() {
    const history = useHistory();
    function handleClick(){
        history.push('/mywork');
    }    
    return (
        <div className="imageSection">
            <Heading size="3xl" paddingTop={20} paddingBottom={10} color={'black'}>Featured</Heading>
            <Divider marginBottom={5}/>
            <div className="flexContainer">
                {HompageData.imagesData.map((item, index) => {
                    return (
                        <div className="flexChild">
                            <Link to={item.linkTo}>
                            <img src={item.url} alt={item.alt}></img>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <Button marginTop={5} marginBottom={10} onClick={handleClick}> See more</Button>
        </div>
    )
}

export default Home;
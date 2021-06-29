import { Heading, Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import '../Css/project.css';
import ImageSlider from './imageSlider';
// import Video from '../Videos/mickeyMouse.mp4';
// import { Project1 } from './Data';
import { Link } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import ReacPlayer from 'react-player'

let VideoPlayer = ({ videoUrl }) => {
    return (
        <div className="videoPlayer">
            {/* <video width="550" controls>
                <source src={videoUrl} type="video/mp4" />
            </video> */}
            <ReacPlayer url={videoUrl} controls={true}></ReacPlayer>
        </div>
    )
}

let ProjectBackground = ({ bImage, title }) => {
    return (
        <div className="projectBackground" style={{ backgroundImage: `url(${bImage})` }}>
            <div className="backgroundText">
                <Box bg="black" p={5} opacity={0.8}>
                    <Heading color="white" size="4xl" >{title}</Heading>
                </Box>

            </div>
        </div>
    )
}

let ProjectDescription = ({ description }) => {
    return (
        <div className="DescriptionContent">
            <Heading >Summary</Heading>
            {description}
        </div>
    )
}

let ProjectRole = ({ role }) => {
    return (
        <div className="DescriptionContent">
            <Heading>Information</Heading>
            {/* {role} */}
            {
                role.map((current, index) => {
                    return (
                        <ul className="infoList">
                            <li>
                                <span className="infoTitle">{current.title}</span>  {current.description}
                            </li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

let DownloadLink = ({ link }) => {
    return (
        <div className="DescriptionContent">
            <Link href={link}>
                <Button>Download Link</Button>
            </Link>
        </div>
    )
}

function ProjectDetails({ project }) {
    return (
        <div>
            <div className="projectImageContainer">
                <ProjectBackground title={project.title} bImage={project.bImage} />
            </div>
            <div>
                <div className="galleryContainer">
                    <div className="galleryChild">
                        <div className="projectDescription">
                            <ProjectDescription description={project.summary} />
                            <ProjectRole role={project.projectInfo} />
                            <DownloadLink link={project.downloadLink} />
                        </div>
                    </div>
                    <div className="galleryChild">
                        {project.videeo !== null ? <VideoPlayer videoUrl={project.videeo} /> : <div />}
                        {/* <VideoPlayer videoUrl={project.videeo} /> */}

                    </div>
                </div>
                <Divider />
                <div className="ImageGallery">
                    <Heading paddingTop={5} textAlign={'center'}>Gallery</Heading>
                    <ImageSlider slides={project.imageSet} />
                </div>
            </div>

        </div>
    )
}


export default ProjectDetails;
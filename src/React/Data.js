import CollapsedGrey from '../PortfolioImages/CollapsedGray.png';
import ApocaForce from '../PortfolioImages/ApocaForce.png';
import DrawMania from '../PortfolioImages/DrawMania.png';
import Iseikai from '../PortfolioImages/ISeikai.jpg';
import HumanSystemAr from '../PortfolioImages/HumanSystemAr.png';
import Awaken2050 from '../PortfolioImages/Awaken2050.png'
import CG_B from '../PortfolioImages/C_snapShot2.png';
import CG_G1 from '../PortfolioImages/C_snapShot1.png';
import CG_G2 from '../PortfolioImages/C_snapShot3.png';
import CG_G3 from '../PortfolioImages/C_snapShot4.png';
import CG_G4 from '../PortfolioImages/C_snapShot5.png';
import CG_G5 from '../PortfolioImages/C_snapShot6.png';
import A_B from '../PortfolioImages/A_snapShot1.png'
import A_G1 from '../PortfolioImages/A_snapShot2.png'
import A_G2 from '../PortfolioImages/A_snapShot3.png'
import A_G3 from '../PortfolioImages/A_snapShot4.png'
import I_B from '../PortfolioImages/I_snapShot1.png'
import I_G1 from '../PortfolioImages/I_snapShot2.png'
// import I_G2 from '../PortfolioImages/I_snapShot3.png' //wrong size
import D_B from '../PortfolioImages/D_snapShot1.png'
import D_G1 from '../PortfolioImages/D_snapShot2.png'
import D_G2 from '../PortfolioImages/D_snapShot3.PNG'
import D_G3 from '../PortfolioImages/D_snapShot4.PNG'
import D_G4 from '../PortfolioImages/D_snapShot5.PNG'
import Aw_B from '../PortfolioImages/Aw_snapShot1.png'
import Aw_G1 from '../PortfolioImages/Aw_snapShot2.png'
import Aw_G2 from '../PortfolioImages/Aw_snapShot3.png'
import Aw_G3 from '../PortfolioImages/Aw_snapShot4.png'
import Aw_G4 from '../PortfolioImages/Aw_snapShot5.png'
import H_G1 from '../PortfolioImages/HS-snapShot1.jpg';
import H_G2 from '../PortfolioImages/HS-snapShot2.jpg';
import H_G3 from '../PortfolioImages/HS-snapShot3.jpg';
import H_G4 from '../PortfolioImages/HS-snapShot4.jpg';
// import AFVideo from '../Videos/ApocaForce.mp4'
// import CGVideo from '../Videos/CollapsedGray.mp4'
// import ISKVideo from '../Videos/ISeikai.mov'
// import AWKVideo from '../Videos/Awaken2050.mp4'



/*----------------HOMEPAGE----------------*/
let HompageData ={
    title:"Hi Welcome!",
    description:`I am a final year student studying in Game Design & Development specialized in game programming. A keen learner that always wanted to broaden knowledge as well as expand skill sets. Experienced with game prototype development using Unity Engine. Have some
    experience working as a software engineering intern to develop common backend services for the use of software applications.`,   
    imagesData:[
        {
            url:CollapsedGrey,
            alt:'CollapsedGray',
            linkTo:'/mywork/CollapsedGray',
        },
        {
            url:ApocaForce,
            alt:'ApocaForce',
            linkTo:'/mywork/ApocaForce',
        },
    ]
}

/*----------------PORTFOLIO----------------*/

let PortfolioData={
    title:'MY WORKS',
    projects:[
        {
            imageUrl:CollapsedGrey,
            imageTitle:'Collapsed Gray',
            imageDescription:"An FYP project where the objective is to create a 3D action role play game in which the player plays as a protagonist who was partly infected during an experiment carried on in an underground facility. To find out the truth of the experiment, player needs to explore the underground facility, and fight against the mutants that trying to attack her.",
            linkTo:'/mywork/CollapsedGray',
            id:'g1',
            style: {
                width: 512,
                heigh: 288,
            },
        },
        {
            imageUrl:ApocaForce,
            imageTitle:'Apoca Force',
            imageDescription: "A studio project where the objective is to create a 3D tower defence game which the anime characters act as the ’tower‘ who are trying to save their base from the zombies. The player can only deploy the unit at certain points then move the unit to a strategic position based on where the zombies are spawned, but be careful, a moving unit is unable to attack and it cost you some money also!",
            linkTo:'/mywork/ApocaForce',
            id:'g2',
            style: {
                width: 512,
                heigh: 288,
            },
        },
        {
            imageUrl:Iseikai,
            imageTitle:'Iseikai',
            imageDescription:"A client project with Anime Festival Asia(AFA) to create a 2D mobile game which Seika as the main protagonist in the game. Seika was brought to the isekai world, and she is tasked to defeat all the monster in the isekai world before going back to the original world that she used to live. As Seika has no experience combat with the monsters using a sword, so she throws the sword towards the monster instead...",
            linkTo:'/mywork/Iseikai',
            id:'g3',
            style: {
                width: 512,
                heigh: 288,
            },
        },
        {
            imageUrl:DrawMania,
            imageTitle:'DrawMania',
            imageDescription:"A mini project where the objective is to create a 2D physics-based game. The player can control the gravity which allows the player to fall downwards or fly upwards. Before that, the player has to draw a path with a limit that leads the player to the checkpoint. Be aware of the spikes and avoid fly out of the screen while trying to collect all the stars! ",
            linkTo:'/mywork/DrawMania',
            id:'g4',
            style: {
                width: 512,
                heigh: 288,
            },
        },
        {
            imageUrl:HumanSystemAr,
            imageTitle:'Human System AR',
            imageDescription:"A mini project where the objective is to create an AR app using Vuforia and Unity. This app allows user to learn the simple human system by placing certain markers in front of the camera with this app open. The user can observe the screen to see relevant human organ to appear above the markers. Try to combine different markers to see a human system that is relevant to the organ.",
            linkTo:'/mywork/HumanSystemAr',
            id:'g5',
            style: {
                width: 512,
                heigh: 288,
            },
        },
        {
            imageUrl:Awaken2050,
            imageTitle:'Awaken 2050',
            imageDescription:"A mini project where the objective is to create a VR application using Unity. In this game, the player can play as an on-mission agent that needs to kill awaken androids that kill innocent people in the city. However, you have lost your gun and thermal-detect glasses in your last mission, so you need to find out all your items before conquer with the androids!",
            linkTo:'/mywork/Awaken2050',
            id:'g6',
            style: {
                width: 512,
                heigh: 288,
            },
        },
    ]
}
/*----------------Side-Menu-List----------------*/
let sideMenuList = [
    {
        title: "3D Game",
        items: [
            {
                Name: "Collapsed Gray",
                Link: "#g1",
            },
            {
                Name: "Apoca Force",
                Link: "#g2",
            },
        ]
    },
    {
        title: "2D Game",
        items: [
            {
                Name: "iSeikai",
                Link: "#g3",
            },
            {
                Name: "Draw Mania",
                Link: "#g4",
            },            
        ]
    },
    {
        title: "Application",
        items: [
            {
                Name: "Human System AR",
                Link: "#g5",
            },
            {
                Name: "Awaken 2050",
                Link: "#g6",
            },
        ]
    },
]

/*----------------PROJECTS-1----------------*/
let Project1={
    title:'Collapsed Gray',
    bImage:CG_B,
    videeo:"https://youtu.be/l6aSJbE3W1s",
    imageSet:[
        {
            url:CG_G1   
        },
        {
            url:CG_G2   
        },
        {
            url:CG_G3
        },
        {
            url:CG_G4
        },
        {
            url:CG_G5
        },
    ],
    summary:`An FYP project where the objective is to create a 3D action role play game in which the player plays as a protagonist who was partly infected during an experiment carried on in an underground facility. To find out the truth of the experiment, player needs to explore the underground facility, and fight against the mutants that trying to attack her.`,
    projectInfo:[
        {
            title:"Theme: ",
            description:"Dystopian"
        },
        {
            title:"Genre: ",
            description:"3D Action, Role Play Game, Souls-like"
        },
        {
            title:"Target Audience: ",
            description:"Anime Enthusiast, Gamers  who love the challenging game"
        },
        {
            title:"Platform: ",
            description:"Windows"
        },
        {
            title:"Project Duration: ",
            description:"5 months (Oct 2020-Feb 2021)"
        },
        {
            title:"Team Size: ",
            description:"4 Artists, 2 Programmers"
        },
        {
            title:"Role: ",
            description:"Gameplay Programmer "
        },
        {
            title:"Contributions: ",
            description:""
        },
    ],
    downLoadLink:'',
}

/*----------------PROJECTS-2----------------*/
let Project2={
    title:'Apoca Force',
    bImage:A_B,
    videeo:"https://youtu.be/88P6S8cuOD8",
    imageSet:[
        {
            url:A_G1        
        },
        {
            url:A_G2     
        },
        {
            url:A_G3
        },

    ],
    summary:' A studio project where the objective is to create a 3D tower defence game which the anime characters act as the "tower" who are trying to save their base from the zombies. The player can only deploy the unit at certain points then move the unit to a strategic position based on where the zombies are spawned, but be careful, a moving unit is unable to attack and it cost you some money also!  ',
    projectInfo:[
        {
            title:"Theme: ",
            description:"Apocalyptic"
        },
        {
            title:"Genre: ",
            description:"3D Tower Defense, Strategic"
        },
        {
            title:"Target Audience: ",
            description:"Anime Enthusiast, Casual Player"
        },
        {
            title:"Platform: ",
            description:"Windows"
        },
        {
            title:"Project Duration: ",
            description:"5 months (Oct2019-Feb2020)"
        },
        {
            title:"Team Size: ",
            description:"4 Artists, 2 Programmers"
        },
        {
            title:"Role: ",
            description:"Programmer"
        },
        {
            title:"Contributions: ",
            description:""
        },
    ],
    downLoadLink:'',
}

/*----------------PROJECTS-3----------------*/
let Project3={
    title:'iSeikai',
    bImage:I_B,
    videeo:"https://youtu.be/3Z7wRtQ27V4",
    imageSet:[
        {
            url:I_G1
        },
    ],
    summary:`  A client project with Anime Festival Asia(AFA) to create a 2D mobile game which Seika as the main protagonist in the game. Seika was brought to the isekai world, and she is tasked to defeat all the monster in the isekai world before going back to the original world that she used to live. As Seika has no experience combat with the monsters using a sword, so she throws the sword towards the monster instead...`,
    projectInfo:[
        {
            title:"Theme: ",
            description:"Heroic"
        },
        {
            title:"Genre: ",
            description:"2D Platformer,Casual"
        },
        {
            title:"Target Audience: ",
            description:"Anime Enthusiast, Casual Player"
        },
        {
            title:"Platform: ",
            description:"Mobile(Android)"
        },
        {
            title:"Project Duration: ",
            description:"8 months (Feb-Sep 2019)"
        },
        {
            title:"Team Size: ",
            description:"4 Artists, 1 Programmer"
        },
        {
            title:"Role: ",
            description:"Programmer Lead "
        },
        {
            title:"Contributions: ",
            description:""
        },
    ],
    downLoadLink:'',
}
/*----------------PROJECTS-4----------------*/
let Project4={
    title:'Draw Mania',
    bImage:D_B,
    videeo:null,
    imageSet:[
        {
            url:D_G1
        },
        {
            url:D_G2
        },
        {
            url:D_G3
        },
        {
            url:D_G4
        },
    ],
    summary:`A mini project where the objective is to create a 2D physics-based game. The player can control the gravity which allows the player to fall downwards or fly upwards. Before that, the player has to draw a path with a limit that leads the player to the checkpoint. Be aware of the spikes and avoid fly out of the screen while trying to collect all the stars! `,
    projectInfo:[
        {
            title:"Theme: ",
            description:""
        },
        {
            title:"Genre: ",
            description:"Puzzle Game, Casual Game"
        },
        {
            title:"Target Audience: ",
            description:"Casual Player"
        },
        {
            title:"Platform: ",
            description:"Windows"
        },
        {
            title:"Project Duration: ",
            description:"3 months (Dec2019-Jan2020)"
        },
        {
            title:"Team Size: ",
            description:"Solo"
        },
        {
            title:"Role: ",
            description:"Programmer, Game Designer "
        },
        {
            title:"Contributions: ",
            description:""
        },
    ],
    downLoadLink:'',
}
/*----------------PROJECTS-5----------------*/
let Project5={
    title:'Human System AR',
    bImage:HumanSystemAr,
    videeo:null,
    imageSet:[
        {
            url:H_G1
        },
        {
            url:H_G2
        },
        {
            url:H_G3
        },
        {
            url:H_G4
        },
    ],
    summary:` A mini project where the objective is to create an AR app using Vuforia and Unity. This app allows user to learn the simple human system by placing certain markers in front of the camera with this app open. The user can observe the screen to see relevant human organ to appear above the markers. Try to combine different markers to see a human system that is relevant to the organ.`,
    projectInfo:[
        {
            title:"Theme: ",
            description:""
        },
        {
            title:"Genre: ",
            description:"Utility"
        },
        {
            title:"Target Audience: ",
            description:""
        },
        {
            title:"Platform: ",
            description:"Mobile(Android)"
        },
        {
            title:"Project Duration: ",
            description:"2 months(Oct-Nov2019)"
        },
        {
            title:"Team Size: ",
            description:"Solo"
        },
        {
            title:"Role: ",
            description:"Programmer "
        },
        {
            title:"Contributions: ",
            description:""
        },
    ],
    downLoadLink:'',
}
/*----------------PROJECTS-6----------------*/
let Project6={
    title:'Awaken2050',
    bImage:Aw_B,
    videeo:"https://youtu.be/A00v60RZvx0",
    imageSet:[
        {
            url:Aw_G1
        },
        {
            url:Aw_G2
        },
        {
            url:Aw_G3
        },
        {
            url:Aw_G4
        },
    ],
    summary:` A mini project where the objective is to create a VR application using Unity. In this game, the player can play as an on-mission agent that needs to kill awaken androids that kill innocent people in the city. However, you have lost your gun and thermal-detect glasses in your last mission, so you need to find out all your items before conquer with the androids!`,
    projectInfo:[
        {
            title:"Theme: ",
            description:"Cyberpunk"
        },
        {
            title:"Genre: ",
            description:"VR"
        },
        {
            title:"Target Audience: ",
            description:"Casual Game"
        },
        {
            title:"Platform: ",
            description:"Mobile(Android)"
        },
        {
            title:"Project Duration: ",
            description:"2 months(Jan-Feb 2021)"
        },
        {
            title:"Team Size: ",
            description:"Solo"
        },
        {
            title:"Role: ",
            description:"Gameplay Programmer "
        },
        {
            title:"Contributions: ",
            description:""
        },
    ],
    downLoadLink:'',
}

/*--------------------------------*/
export {
    HompageData,
    PortfolioData,
    sideMenuList,
    Project1,
    Project2,
    Project3,
    Project4,
    Project5,
    Project6,
}



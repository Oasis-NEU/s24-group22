import "./ProfilePage.css"
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
    
    let navigate = useNavigate(); 

    const routeChange = (pathName: string) =>{ 
        let path = pathName; 
        navigate(path);
    }

    const buttonStyle = {
        backgroundColor: 'black',
        color: 'white',
        marginBottom: '20px',
        textAlign: 'left',
        paddingLeft: '10px'
    };

    const containerStyle = {
        backgroundColor: 'black',
        border: '1px solid black',
        padding: '10px',
        borderRadius: '5px',
        width: '150px',
        height: '100vh',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    };

    return <div className="ProfilePageBackground">

            <div style={containerStyle}>
                <button style={buttonStyle} onClick={() => routeChange('/dashboard')}>Homepage</button>
                <div><button style={buttonStyle} onClick={() => routeChange('/hotdog')}>Inbox</button></div>
                <div><button style={buttonStyle} onClick={() => routeChange('/profile')}>Profile</button></div>
                <div><button style={buttonStyle}>Message</button></div>
                <div><button style={buttonStyle} onClick={() => routeChange('/people')}>Projects</button></div>
                <div><button style={buttonStyle} onClick={() => routeChange('/people')}>Your Projects</button></div>
                <div><button style={buttonStyle}>Friends</button></div>
                <div><button style={buttonStyle}>Settings</button></div>
            </div>
            <div className="ProfilePageInformation">
                <img src="images/mandarin_duck.jpg" className="ProfilePictureBox"></img>
                <img src="images/mandarin_duck.jpg" className="ProfileBanner"></img>
                <div className="SkillsBox">
                    <div> Skills </div>
                    <ul className="ProfileSkills">
                        <li>
                            <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                        </li>

                        <li>
                            Skill 2
                        </li>

                        <li>
                            Skill 3
                        </li>

                    </ul>   
                </div>
                <div className="ProfileAboutMe">
                    <p > About me: </p> 
                </div>
            </div>
        </div>
    
}
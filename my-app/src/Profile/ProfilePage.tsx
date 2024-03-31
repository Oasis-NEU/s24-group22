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
                <img src="images/defaultpfp.jpg" className="ProfilePictureBox"></img>
                <img src="images/linkedinbanner.jpg" className="ProfileBanner"></img>
                <div className="SkillsBox">
                    <div className="ProfileSkills"> Skills
                        <ul>
                            <li>
                                Java
                            </li>

                            <li>
                                TypeScript
                            </li>

                            <li>
                                HTML
                            </li>
                        </ul>
                    </div>   
                </div>
                <div className="ProfileAboutMe">
                    <p > About Me: I love coding!</p> 
                </div>
            </div>
        </div>
    
}
import "./ProfilePage.css"

export default function ProfilePage() {
    return <div className="ProfilePageBackground">

                    <div className = "flex-box">
                        <button className = "button test-button" onClick={() => routeChange('/projects')}>Projects</button>
                        <button className = "button test-button" onClick={() => routeChange('/people')}>People</button>
                        <button className = "button test-button" onClick={() => routeChange('/hotdog')}>Hotdog</button>
                        <button className = "button test-button" onClick={() => routeChange('/home')}>Home</button>
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
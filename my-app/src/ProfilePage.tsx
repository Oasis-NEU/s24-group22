import "./ProfilePage.css"

export default function ProfilePage() {
    return <div className="ProfilePageBackground">
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
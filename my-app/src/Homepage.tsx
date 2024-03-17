import './Homepage.css'
import { useNavigate } from "react-router-dom";
import useHover from './Hover'

//npm i react-router-dom react-icons styled-components@5.3.10

function Homepage() {

    function handleClick() {
        console.log("Button clicked!")
    }

    
    let navigate = useNavigate(); 

    const routeChange = (pathName: string) =>{ 
        let path = pathName; 
        navigate(path);
      }

    return <div className = "homepage_backdrop">
            <nav className = "homepage_dropdown_bar sticky">
                <div className="justified_centering" >
                    
                    <div className = "flex-box">
                        <button className = "button test-button" onClick={() => routeChange('/projects')}>Projects</button>
                        <button className = "button test-button" onClick={() => routeChange('/profile')}>People</button>
                        <button className = "button test-button" onClick={() => routeChange('/hotdog')}>Hotdog</button>
                        <button className = "button test-button" onClick={() => routeChange('/home')}>Home</button>
                    </div>

                </div>
            </nav>

            <div className='homepage_information'> 
                Welcome to Cinder! 
                <p>About Cinder: <br></br>
                    Having trouble finding a project to contribute to? Having decision anxiety? Need a 
                    kick to get working? Cinder can help you with all of these woes!
                </p>
            </div>
            
        </div>
}

export default Homepage
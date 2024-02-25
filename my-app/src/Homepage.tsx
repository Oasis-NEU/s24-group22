import './Homepage.css'
import useHover from './Hover'

//npm i react-router-dom react-icons styled-components@5.3.10

function Homepage() {

    function handleClick() {
        console.log("Button clicked!")
    }

    const [hoverRef, isHovered] = useHover();

    return <div className = "homepage_backdrop">
            <nav className = "homepage_dropdown_bar sticky">
                <div className="justified_centering" >
                    <ul>
                    
                    <a href = "https://www.youtube.com/" className = "homepage_redirect px-4 justify-center" ref={hoverRef}> 
                        {isHovered? "Projects!" : "Projects?"}
                    </a>
                    <a href = "/people"className = "homepage_redirect px-4 justify-center" ref={hoverRef}> People {isHovered? 'People!' : 'People.'}</a>
                    <a href="/Profile" className='homepage_redirect px-4 justify-center'> Profile </a>
                    <a href = "/Hotdog" className='homepage_redirect px-4 justify-center hover:shadow-md transition-all'> hotdog </a>
                    <a href = "/home" className='homepage_redirect px-4 justify-center'> Cinder </a>
                    </ul>
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
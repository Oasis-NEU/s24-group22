import './Homepage.css'

function Homepage() {

    

    function handleClick() {
        console.log("Button clicked!")
    }


    return <div className = "homepage_backdrop">
            <nav className = "homepage_dropdown_bar">
                <div className="justified_centering">
                    <ul>
                    <a href = "/Projects" className = "homepage_redirect px-4 justify-center" > Projects </a>
                    <a href = "/People"className = "homepage_redirect px-4"> People </a>
                    <a href="/Profile" className='homepage_redirect px-4'> Profile </a>
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
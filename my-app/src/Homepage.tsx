import './Homepage.css'

function Homepage() {

    function handleClick() {
        console.log("Button clicked!")
    }

    return <div className = "homepage_backdrop">
            <div className = "homepage_dropdown_bar">
                <button className = "homepage_redirect" onClick={handleClick}> Profile </button>
            </div>
        </div>
}

export default Homepage
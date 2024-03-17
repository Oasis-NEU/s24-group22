import { useState } from 'react'
import project1Logo from '/images/project1.jpeg'
import project2Logo from '/images/project2.jpg'
import project3Logo from '/images/project3.jpg'
import project4Logo from '/images/project4.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <div className = 'projects-box'>
            <div className = 'projects'>
                <p>1. Project Name </p>   
                <img className = 'thumbnail' src = {project1Logo}></img>
                <p>Contributor/Contributors: John</p>  
                <p>Description: Insert Description Here</p>  
                <p>Would you like to participate in this project?</p>       
                <button className = 'yes-button'>Yes</button>     
                <button className = 'no-button'>No</button>
            </div>

            <div className = 'projects'>
                <p>2. Project Name </p>   
                <img className = 'thumbnail' src = {project2Logo}></img>
                <p>Contributor/Contributors: Sally</p>  
                <p>Description: Insert Description Here</p>  
                <p>Would you like to participate in this project?</p>       
                <button className = 'yes-button'>Yes</button>     
                <button className = 'no-button'>No</button>
            </div>
            
            <div className = 'projects'>
                <p>3. Project Name </p>   
                <img className = 'thumbnail' src = {project3Logo}></img>
                <p>Contributor/Contributors: Sally</p>  
                <p>Description: Insert Description Here</p>  
                <p>Would you like to participate in this project?</p>       
                <button className = 'yes-button'>Yes</button>     
                <button className = 'no-button'>No</button>
            </div>

            <div className = 'projects'>
                <p>4. Project Name </p>   
                <img className = 'thumbnail' src = {project4Logo}></img>
                <p>Contributor/Contributors: Sally</p>  
                <p>Description: Insert Description Here</p>  
                <p>Would you like to participate in this project?</p>       
                <button className = 'yes-button'>Yes</button>     
                <button className = 'no-button'>No</button>
            </div>
        </div>
    </>
  )
}

export default App

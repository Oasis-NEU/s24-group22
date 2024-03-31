import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const [searchValue, setSearchValue] = useState('');

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

    const searchButtonContainerStyle = {
        position: 'fixed',
        top: '5%',
        left: '180px',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    };

    const searchInputStyle = {
        ...buttonStyle,
        width: '500px', // Adjusted width of the search input
        height: '30px' // Adjusted height of the search input
    };

    const handleSearchInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const footerStyle = {
        position: 'fixed',
        bottom: '20px',
        left: 'calc(50% + 50px)',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        color: 'white',
        display: 'flex',
        justifyContent: 'center'
    };

    const linkStyle = {
        margin: '0 20px', // Adjust margin to the left and right
        cursor: 'pointer'
    };

    return (
        <div>
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
            <div style={searchButtonContainerStyle}>
                <input
                    type="text"
                    style={searchInputStyle}
                    placeholder="Search"
                    value={searchValue}
                    onChange={handleSearchInputChange}
                />
            </div>
            <div style={footerStyle}>
                <p style={linkStyle}>About Us</p>
                <p style={linkStyle}>YouTube</p>
                <p style={linkStyle}>Instagram</p>
                <p style={linkStyle}>Facebook</p>
            </div>
        </div>
    );
}

export default Dashboard;

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App/App'
import Homepage from './Home/Homepage'
import ProfilePage from './Profile/ProfilePage'
import Login from './Login/login'
import Dashboard from './Dashboard/dashboard'

export default function Redirect() {
    return <div>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/home" element={<Homepage />}></Route>
            <Route path="/people" element={<App/>}></Route>
            <Route path="/profile" element={<ProfilePage/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
}
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Homepage from './Homepage'
import ProfilePage from './ProfilePage'
import Login from './Login/login'

export default function Redirect() {
    return <div>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/home" element={<Homepage />}></Route>
            <Route path="/people" element={<App/>}></Route>
            <Route path="/profile" element={<ProfilePage/>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
}
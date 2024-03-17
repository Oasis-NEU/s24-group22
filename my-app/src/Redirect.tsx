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
<<<<<<< HEAD
            <Route path="/people" element={<App/>}></Route>
            <Route path="/profile" element={<ProfilePage/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
=======
            <Route path="/projects" element={<App></App>}></Route>
            <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
>>>>>>> d9e2f233c46c66a97730fc0bdc8794f0cb4550b0
        </Routes>
    </BrowserRouter>
    </div>
}
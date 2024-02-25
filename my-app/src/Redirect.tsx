import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Homepage from './Homepage'
import ProfilePage from './ProfilePage'

export default function Redirect() {
    return <div>
    <BrowserRouter>
        <Routes>
            <Route index element={<Homepage />}></Route>
            <Route path="/home" element={<Homepage />}></Route>
            <Route path="/people" element={<App></App>}></Route>
            <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
}
// https://www.youtube.com/watch?v=H1V716XPUEs

// npm install @supabase/supabase-js (run this command in terminal)
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from 'react-router-dom';
import "./login.css"

const supabase = createClient(
    "https://iwpdhltgnfflxufvceas.supabase.co", // supabase URL (replace)
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3cGRobHRnbmZmbHh1ZnZjZWFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4ODY1MjAsImV4cCI6MjAyNDQ2MjUyMH0.g3Glpk6CjnULTNkCGmInHZj7UVB5QhXwnqyIylXlVSA" // key
)

// Implement User Info and Sign Out on homepage

function Login() {
    const navigate = useNavigate();

    supabase.auth.onAuthStateChange(async (event : string) => {
        if (event === "SIGNED_IN") {
            // forward to home site
            navigate("/home");
        } else {
            // back to login
            navigate("/");
        }
    })

    return (
        <div className="login-location">
            <div className="login-box-container">
                <header>
                    <Auth 
                        supabaseClient={supabase}
                        appearance={{ theme : ThemeSupa }}
                        theme="dark"
                        providers={[]}
                    />
                </header>
            </div>
            {/* <div className="login-box-container">
                <div className="login-container">
                    <form action="/login_page">
                        <label id="email-input">Email:</label><br />
                        <input id="email-input" type="text" placeholder="e.g. name123@gmail.com" size={35}></input><br /><br />
                        <label id="password-input">Password:</label><br />
                        <input id="password-input" type="password" placeholder="e.g. ilovecinder123" size={35}></input><br /><br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className="register-container">
                    <a href="#">Don't have an account?</a>
                    <a href="#">Forgot password?</a>
                </div>
            </div> */}
        </div >
    )
}
export default Login;
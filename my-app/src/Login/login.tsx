// https://www.youtube.com/watch?v=H1V716XPUEs

// npm install @supabase/supabase-js (run this command in terminal)
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
        </div >
    )
}
export default Login;

function App() {
    const [session, setSession] = useState(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        const {
            data: { subscription }
        } = supabase.auth.onAuthStateChange(( _event, session ) => {
            setSession(session);
        });

        return () => subscription.unsubscribe();
    });

    const logOut = () => {
        supabase.auth.signOut();
    }

    if (!session) {
        return (
            <Auth 
                supabaseClient={supabase} 
                appearance={{theme: ThemeSupa}}
                providers={[]}
            />
        );
    } else {
        return (
            <div>
                <h1>LOGGED IN!</h1>
                <button onClick={(e) => logOut(e)}>Log Out</button>
            </div>
        )
    }
}
"use client";
import '@styles/admin.css';
import { useRouter } from "next/navigation";
import { alert } from '@components/functions/alertmessage';
import { useState } from 'react';

const LoginComponent = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');


    async function LoginClick(e) {
        e.preventDefault();
        setError(''); 
        if (!username || !password) {
            setError("Please enter both your username and password.");
            alert("Please enter both your username and password.");
            return;
        }

        setIsSubmitting(true);

        const loginPayload = {
            username: username,
            password: password,
            switchOption: "AdminLogin" 
        };

        try {

            const response = await fetch(`/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginPayload),
            });

            if (!response.ok) {
                console.log('Login failed: Server responded with an error.');
            }

            const data = await response.json();
            

            if (data?.resData && data.resData.toLowerCase() === 'success') {

                router.push('/admin/pages/welcome');
            } else {

                const errorMessage = data?.message || 'Login Failed: Invalid credentials';
                setError(errorMessage);
                alert(errorMessage);
            }
        } catch (err) {

            console.error('Login error:', err);
            const errorMessage = 'Login Failed: Something Went Wrong. Please try again.';
            setError(errorMessage);
            alert(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (

    <div className='login-wrapper'>
        <div className="split-container">

        <div className="left-panel">
            <div className="left-panel-content">
                <h2>Welcome Back</h2>
                <p>Access your professional admin dashboard securely.</p>
            </div>
        </div>

        <div className="right-panel">
            <div className="login-container">
                <div className="company-logo">
                    <h1>Admin Dashboard</h1>
                    <p>Sign in to continue</p>
                </div>
                <form onSubmit={LoginClick} method="post">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            aria-label="Username"
                            disabled={isSubmitting} />
                    </div>
                    <div className="form-group">
                            <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" 
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            aria-label="Password"
                            disabled={isSubmitting} 
                        />
                    </div>
                    <button type="submit" className="login-button"  value={isSubmitting ? "Signing..." : "Sign In"} disabled={isSubmitting}>Sign In</button>
                </form>
            </div>
        </div>
        </div>
    </div>
    );
};

export default LoginComponent;
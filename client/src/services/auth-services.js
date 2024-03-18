import axios from 'axios'
export const handleLogin = async (userInfo, router) => {
    try {
        const response = await axios.post("/api/login", userInfo);
        if (response || response.data.token) {
            const token = response.data.token; // Extract token from response.data
            localStorage.setItem('token', token);
            alert("Login successful")
            router.push("/afterhome");
            console.log("Login Success");
        }
    } catch (error) {
        if (error.response.status === 401 || error.response.data.error === "Password doesn't match") {
            alert("Password not match")
            console.log("Password doesn't match",error);
        }
    }
}

export const handleSignUp = async (userInfo, router) => {
    try {
        const response = await axios.post("/api/register", userInfo);
        if (response || response.data.token) {
            const token = response.data.token; // Extract token from response.data
            localStorage.setItem('token', token);
           alert("Register Successfully")
            router.push("/login");
            console.log("Register Success");
        }
          
    } catch (error) {
        if (error.response.status === 400 || error.response.data.error === "Passwords don't match") {
           alert("Password do not match")
            console.log("Passwords don't match",error);
        }
    }
};

export const handleLogout = (router) => {
    localStorage.removeItem('token'); // Remove the token from localStorage 
    router.push('/login'); // Redirect to the login page
    console.log("Logged out successfully");
};
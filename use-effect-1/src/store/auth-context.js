import React, { useEffect, useState } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const userIsLoggedIn = localStorage.getItem('isLoggedIn');
        if (userIsLoggedIn === '1') setIsLoggedIn(true);
      }, []); // this runs only after the component and only if the dependencies are changed, but by passing an empty array of deps, deps will never change so this will run just when the component is called the first time

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    const loginHandler = () => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    return (
        <AuthContext.Provider value={{ 
                isLoggedIn: isLoggedIn, 
                onLogout: logoutHandler,
                onLogin: loginHandler
            }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
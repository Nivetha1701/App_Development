import { decrement, increment } from "../redux/Action"
import {useDispatch, useSelector} from 'react-redux';

export const Counter = () =>{
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);
    return(
        <div style = {{margin:'20px'}}>
            <h1>Count:{count}</h1>
            <hr width="25%" align="left"></hr>
            <button onClick={() => dispatch(increment())}>Increment</button>  
            {/* increment is the action dispatch will take the action to reducer */}
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}



import React from 'react';
import { BrowserRouter, Link, Route,Routes, useNavigate } from 'react-router-dom';

const Home = () => {
    return <h1>Home page</h1>
}
const About = () => {
    return <h1>About page</h1>
}
const Contact = () => {
    const navigate = useNavigate();
    return (
        <div>
    <h1>Contact page</h1>
    <button onClick={ ()=> navigate("/success")}>Login</button>
        </div>
    );
}
const LogSuccess = () => {
    return <h1>Welcome</h1>
}

export const Navbar = () => {
    return (
        <div>
            {/* <BrowserRouter>  since it is globally declared in index.js*/}  
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/success" element={<LogSuccess />} />
                </Routes>
            {/* </BrowserRouter> */}
        </div>
    );
};

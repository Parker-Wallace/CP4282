import { useState } from 'react';

function Navbar() {
    const [loginstate, changeloginstate] = useState("login");
    return (
        <nav>  
            <h1>Assignment 3</h1>
        <button onClick={()=>{
          loginstate === "login" ? changeloginstate("logout") : changeloginstate("login")
        }}>{loginstate}</button>
        </nav>
    )
}

export default Navbar
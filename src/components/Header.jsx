import React from "react";
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={"header"}>
            <Link to='' className={"namelogo font-cookie"}> <div ><i>{props.name}</i></div> </Link>
            <div className="navbar">
                <ul className="navUl">
                    
                    {props.topics.map( (topic) => (<Link key={topic.toLowerCase()} to={topic.toLowerCase()}>{topic}</Link>))}
                    
                </ul>
            </div>
        </div>
    );
}

export default Header;
import React from "react";
import {Link} from "react-router-dom";


const Header = (props) => {

    return (
        <div className={"header"}>
            <div className={"namelogo font-cookie"}><Link to={props.homeUrl}>{props.name}</Link></div> 
            <div className="navbar">
                <ul className="navUl">
                    {props.topics.map( (topic) => (<Link key={topic.toLowerCase()} to={props.homeUrl+topic.toLowerCase()}>{topic}</Link>))}
                </ul>
            </div>
        </div>
    );
}

export default Header;
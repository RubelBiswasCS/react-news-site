import React from "react";
import {Link} from "react-router-dom";
import {useState} from 'react';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';

const Header = (props) => {
    const [sideNavState,setSideNavState] = useState({
        style:{
            display: 'none'
        }
    });

    const handleSideNav = () => {
        if (sideNavState.style.display  === 'none'){
            setSideNavState({
                style:{
                    display: 'flex'
                }
            });
        }
        else {
            setSideNavState({
                style:{
                    display: 'none'
                }
            });
        }
    };

    return (
        <div className={"header"}>
            <div className={"header-wrapper"}>
                <div className={"minNavIcon"}><FormatAlignJustifyIcon  onClick={handleSideNav}></FormatAlignJustifyIcon></div>
                <div className={"namelogo font-cookie"}><Link to={props.homeUrl}>{props.name}</Link></div> 
            </div>
            
            <div className="navbar">
                <ul className="navUl">
                    {props.topics.map( (topic) => (<Link key={topic.toLowerCase()} to={props.homeUrl+topic.toLowerCase()}>{topic}</Link>))}
                </ul>
            </div>
            <div style={sideNavState.style} className="sideNav">
                <ul className="navUl">
                    {props.topics.map( (topic) => (<Link onClick={handleSideNav}  key={topic.toLowerCase()} to={props.homeUrl+topic.toLowerCase()}>{topic}</Link>))}
                </ul>
            </div>
        </div>
    );
}

export default Header;
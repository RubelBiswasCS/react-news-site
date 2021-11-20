import React from "react";
import {Link} from "react-router-dom";

const Footer = (props) => (
    
        <div className={"footer"}>
            <div className={'font-cookie footer-logo'} ><Link onClick={window.location.reload} to="">{props.name}</Link></div>
            <div className={"footerNav"}>
                {Object.keys(props.sections).map(
                        (section) => (
                            
                        <ul key={section.toLowerCase()} className="footerNavUl">
                            <p>{section.toUpperCase()}</p>
                            {props.sections[section].map(
                                section => (<li key={section.toLowerCase()}><Link to={section.toLowerCase()}>{section}</Link></li>)
                            )}
                        </ul>
                            )
                        )  
                }
            
            </div>
        </div>
       
    );

export default Footer;
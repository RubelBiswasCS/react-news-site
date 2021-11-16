import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

  const Article = (props) => {
        return (
            <div style={{backgroundColor:"red",minWidth:"10px",minHeight:"10px"}}>
                <h1 className="title">
                    {props.article.title}
                </h1>
            </div>
        );
    };

export default Article;
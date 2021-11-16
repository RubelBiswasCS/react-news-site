import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

  const Article = (props) => {
        return (
            <Link to=''>
            <div className={"article"}>
                <h1 className="article-title">{props.article.title}</h1>
                <div className="article-content">
                    <small>Published on {props.article.published_at.slice(0,10)}</small>
                    <p>{props.article.description}</p>
                    <img src={props.article.image} alt=''/>
                    <small>By {props.article.author}</small>
                    
                    <p>
                        {props.article.description}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam distinctio perspiciatis, iure earum molestias omnis, at similique nostrum cumque ea et? Laudantium, repellendus. Accusamus quos quis praesentium dicta est soluta. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, consectetur dignissimos a officiis sunt aperiam iusto quia adipisci dolore ipsa harum praesentium magni, possimus nobis fugit et commodi itaque amet!
                        read original aricle <a target="_blank" href={props.article.url}>here</a>
                    </p>
                </div>
                
            </div>
            </Link>
        );
    };

export default Article;
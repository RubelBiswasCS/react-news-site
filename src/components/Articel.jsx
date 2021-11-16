import React from 'react';
import { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import shortenStr from '../utils/utils';
  const Article = (props) => {
        useEffect(() => {
            window.scrollTo(0, 0);
        });
        return (
         <div className="article-page">
            <div className={"article"}>
                <h1 className="article-title">{props.article.title}</h1>
                <div className="article-content">
                    <small>Published on {props.article.published_at.slice(0,10)}</small>
                    <p >{props.article.description}</p>
                    <div className="image"><img src={props.article.image} alt=''/></div>
                    <small>By {props.article.author}</small>
                    
                    <p>
                        {props.article.description}
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, quia reprehenderit accusantium facilis labore corporis, officiis eligendi nisi, in consequuntur distinctio ex non vitae laborum animi at eius aut eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam distinctio perspiciatis, iure earum molestias omnis, at similique nostrum cumque ea et? Laudantium, repellendus. Accusamus quos quis praesentium dicta est soluta. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, consectetur dignissimos a officiis sunt aperiam iusto quia adipisci dolore ipsa harum praesentium magni, possimus nobis fugit et commodi itaque amet!
                        read original article <a target="_blank" href={props.article.url}>here</a>
                    </p>
                </div>
                
            </div>
            <div className="relatedArticles">
               { props.relatedArticles.filter( item => {
                        if(props.topic===undefined){
                            return true;
                            }
                        return (item['category']===props.topic);
                    }).map( (item, i) => {
                        return (

                            <Link className={"relatedArticle"} to={"/"+item.category+'/'+item.published_at.slice(0,10)+'/'+shortenStr(item.title,25).replaceAll(/[ ’‘]/g, x => ({' ': '-', "’": '',"‘":''}[x]))} key={i} >
                                <div className={"title"}>{ shortenStr(item.title,30)}</div>
                                <div className={"discription"}>{shortenStr(item.description,100)}</div>
                                {/* <div className={"image"}><img src={item.image} alt=""/></div> */}
                            </Link>);
                    })
                }
            </div>
        </div>
        );
    };

export default Article;
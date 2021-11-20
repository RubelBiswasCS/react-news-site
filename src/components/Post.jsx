import React from 'react';
import { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import shortenStr from '../utils/utils';



  const Posts = (props) => {
        const { posts } = props;
        if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;
        return (
            <div>
            { posts.map(post => (<div className="article-page">
             
                <div className={"article"}>
                    <h1 className="article-title">{post.title}</h1>
                    <div className="article-content">
                        {/* <small>Published on {post.published.slice(0,10)}</small> */}
                        <p >{post.excerpt}</p>
                        {/* <div className="image"><img src={post.image} alt=''/></div> */}
                        <small>By {post.author}</small>
                        
                        <p>
                            {post.content}
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, quia reprehenderit accusantium facilis labore corporis, officiis eligendi nisi, in consequuntur distinctio ex non vitae laborum animi at eius aut eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam distinctio perspiciatis, iure earum molestias omnis, at similique nostrum cumque ea et? Laudantium, repellendus. Accusamus quos quis praesentium dicta est soluta. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, consectetur dignissimos a officiis sunt aperiam iusto quia adipisci dolore ipsa harum praesentium magni, possimus nobis fugit et commodi itaque amet!
                            read original article <a target="_blank" href={post.url}>here</a>
                        </p>
                    </div>
                    
                </div>
    
            </div>))
            }
         </div>
        );
    };

export default Posts;
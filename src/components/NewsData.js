import React from "react";
import { useEffect, useState } from "react";
import Posts from "./Post";
import PostLoadingComponent from "./PostLoading";
const NewsData = () => {
    const PostLoading = PostLoadingComponent(Posts);
    const [appState, setAppState] = useState({
        loading: false,
        posts: null,
    });

    useEffect(() => {
        setAppState({
            loading: true
        });

        const apiUrl = `http://127.0.0.1:8000/api/`;

        fetch(apiUrl)
            .then((data) => (data.json())
                .then((posts) => {
                    setAppState({
                        loading: false,
                        posts: posts,
                    });
                }));
    },[setAppState]);

    return (
        <div>
            <PostLoading isLoading={appState.loading} posts={appState.posts} />        
        </div>
    );
}

export default NewsData;
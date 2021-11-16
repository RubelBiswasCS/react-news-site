import './App.css';
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
// import Articles from './Articles';
import TestData from './LoadData';
import Article from './Articel';

import {useState } from "react";

import shortenStr from '../utils/utils';
import newsData from './newsData.json';


const data = newsData;
const name = 'nameaslogo';
const topics = [
        'National','Global','Politics','Business', 'Opinion',
        'Technology', 'Science','Health','Sports','Arts',
        'Books','Style','Food','Travel','Entertainment',
    ];
const sections = {
    news : [
        'National','Global','Politics','Business', 'Tech',
        'Science','Health',],
    arts : [
        'Books','Movies','Music', 'Dance', 'Television'
],
    living : [
        'Education','Health','Food','Jobs','Style',
        'Travel'
    ],
    more : [
        'Multimedia','Video','Podcast','Photography',
    ]
}
const App = () => { 
    // const [currentArticle,setCurrentArticle] = useState('');
    // const handleUrl = (url) => {
    //     console.log(url)
    //     setCurrentArticle(url);
    // }
    return(
    <div className='app'>
        <Router>
                <Header topics={topics} name={name}/>
            <Routes>
                <Route path='' element={<TestData data={data} />}>
                {/* <Home/> */}
                    {/* <Route path='Local' element={(<p>Local</p>)}/>
                    <Route path='Politics' element={(<p>Politics</p>)}/> */}
                </Route>
                
                {data.map((article,i) => {
                    //console.log("/"+article.category+'/'+article.published_at.slice(0,10)+'/'+shortenStr(article.title,25).replaceAll(" ","-"));
                    return(
                        <Route key={i} path={"/"+article.category+'/'+article.published_at.slice(0,10)+'/'+shortenStr(article.title,25).replaceAll(/[ ’‘]/g, x => ({' ': '-', "’": '',"‘":''}[x]))} element={<Article article={article} relatedArticles={data.filter((d) => d.category === article.category).slice(0,10)}/>} />
                );} )}
                { topics.map((topic) => (<Route key={topic.toLowerCase()} path={topic.toLowerCase()} element={<TestData data={data} topic={topic.toLowerCase()}/>}/>))}
                {/* <Route path='Local' element={(<p>Local</p>)}/>
                <Route path='Politics' element={(<p>Politics</p>)}/> */}
                
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                        </main>
                    }
                    />
                
            </Routes>
            {/* <TestData/> */}
            <Footer sections={sections} name={name}/>
            {/* <Articles/> */}
            
        </Router>
    </div>
    );
}

export default App;
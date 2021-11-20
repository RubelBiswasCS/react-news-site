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

import {useState,useEffect } from "react";

import shortenStr from '../utils/utils';
import newsData from './newsData.json';
import ScrollToTop from './ScrollToTop';

const data = newsData;

const name = 'The News Time';
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

const homeUrl = process.env.PUBLIC_URL+'/'


const App = () => { 
 
    return(
    <div className='app'>
        <Router>
            <ScrollToTop/>
                <Header topics={topics} homeUrl={homeUrl} name={name}/>
            <Routes>
                <Route path={homeUrl} element={<TestData homeUrl={homeUrl} data={data} />}>
                {/* <Home/> */}
                    {/* <Route path='Local' element={(<p>Local</p>)}/>
                    <Route path='Politics' element={(<p>Politics</p>)}/> */}
                </Route>
                
                {data.map((article,i) => {
                    //console.log("/"+article.category+'/'+article.published_at.slice(0,10)+'/'+shortenStr(article.title,25).replaceAll(" ","-"));
                    return(
                        <Route key={i} path={homeUrl+article.category+'/'+article.published_at.slice(0,10)+'/'+shortenStr(article.title,25).replaceAll(/[ ’‘]/g, x => ({' ': '-', "’": '',"‘":''}[x]))} element={<Article homeUrl={homeUrl} article={article} relatedArticles={data.filter((d) => d.category === article.category).slice(0,10)}/>} />
                );} )}
                { topics.map((topic) => (<Route key={topic.toLowerCase()} path={homeUrl+topic.toLowerCase()} element={<TestData homeUrl={homeUrl} data={data} topic={topic.toLowerCase()}/>}/>))}
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
            <Footer sections={sections} homeUrl={homeUrl} name={name}/>
            {/* <Articles/> */}
            {/* <NewsData/> */}
        </Router>
    </div>
    );
}

export default App;
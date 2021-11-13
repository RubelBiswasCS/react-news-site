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

const name = 'nameaslogo';
const topics = [
        'National','Global','Politics','Business', 'Opinion',
        'Tech', 'Science','Health','Sports','Arts',
        'Books','Style','Food','Travel','Magazine',
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
const App = () => (
    <div className='app'>
        <Router>
            <Header topics={topics} name={name}/>
            <Routes>
                <Route path='' element={('')}>
                {/* <Home/> */}
                    {/* <Route path='Local' element={(<p>Local</p>)}/>
                    <Route path='Politics' element={(<p>Politics</p>)}/> */}
                </Route>
                { topics.map((topic) => (<Route key={topic.toLocaleLowerCase()} path={topic.toLocaleLowerCase()} element={(<p>{topic}</p>)}/>))}
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
            <TestData/>
            <Footer sections={sections} name={name}/>
            {/* <Articles/> */}
            
        </Router>
    </div>
    );

export default App;
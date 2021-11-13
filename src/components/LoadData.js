import newsData from './newsData.json';
import React from 'react';
const data = newsData

const TestData = () => {
    console.log(data[0])
    return (
        <div className="wrapper3">
                <div className={"title"}>{data[0].title}</div>
                <div className={"discription"}>{data[0].description}</div>
                <div className={"image"}><img src={data[0].image}/></div>
        </div>
    );
}

export default TestData;
import React from 'react';
import newsData from './newsData.json';
import shortenStr from '../utils/utils';
const data = newsData

const TestData = () => {
    console.log(data[0])
    return (
        <div class="newsContainer">
            {
                data.slice(0,10).map( (item, i) => {
                    return (
                <div key={i} className="wrapper3">
                    <div className={"title"}>{ shortenStr(item.title,50)}</div>
                    <div className={"discription"}>{shortenStr(item.description,200)}</div>
                    <div className={"image"}><img src={item.image}/></div>
                </div>);
                })
            
            }
        </div>
       
    );
}

export default TestData;
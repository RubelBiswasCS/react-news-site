import React from 'react';
import newsData from './newsData.json';
import shortenStr from '../utils/utils';
const data = newsData

const TestData = (props) => {
    //console.log(data[0])
    return (
        <div className="newsContainer">
            {
                data.slice(0,data.length-1).filter( item => {
                    if(props.topic===undefined){
                        return true;
                        }
                    return (item['category']===props.topic);
                }).map( (item, i) => {
                    return (
                <div key={i} className="wrapper3">
                    <div className={"title"}>{ shortenStr(item.title,50)}</div>
                    <div className={"discription"}>{shortenStr(item.description,200)}</div>
                    <div className={"image"}><img src={item.image} alt=""/></div>
                </div>);
                })
            
            }
        </div>
       
    );
}

export default TestData;
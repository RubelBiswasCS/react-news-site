import React from 'react';
import newsData from './newsData.json';
import shortenStr from '../utils/utils';
import {Link} from "react-router-dom";



const TestData = (props) => {

    const data = newsData;
    //console.log(data[0])
    return (
        <div className="newsContainer">
             
              
            
            {   
              
               //fsaf
                data.slice(0,data.length-1).filter( item => {
                    if(props.topic===undefined){
                        return true;
                        }
                    return (item['category']===props.topic);
                }).map( (item, i) => {
                    return (

                        <Link to={"/"+item.category+'/'+item.published_at.slice(0,10)+'/'+shortenStr(item.title,25).replaceAll(/[ ’]/g, x => ({' ': '-', "’": ''}[x]))} key={i} className="wrapper3">
                            <div className={"title"}>{ shortenStr(item.title,50)}</div>
                            <div className={"discription"}>{shortenStr(item.description,200)}</div>
                            <div className={"image"}><img src={item.image} alt=""/></div>
                        </Link>);
                })
            
            }
        </div>
       
    );
}

export default TestData;
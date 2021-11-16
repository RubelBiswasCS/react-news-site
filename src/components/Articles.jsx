import React from "react";
import { useEffect,useState } from "react";
const Articles = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

  

    useEffect(() => {
        let apiUrl = "http://api.mediastack.com/v1/news?access_key=2584e5a8613ddff755107796c30eb783&languages=en&limit=100";
      fetch(apiUrl)
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result.data);
            setIsLoaded(true);
            setItems(result.data);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          <div>
                <ul>
                    {Object.keys(items).map(
                        (item,i) => { 
                            i++;
                            return (
                            
                        <ul className="footerNavUl">
                            <p>{item}</p>
                            
                            <li key={i}><span style={{color:'red'}}>{items[item].title}</span> <span>{items[item].description}</span></li>
                            
                        </ul>
                            )}
                        )  }
                </ul>
          </div>

      );
    };
}
      
export default Articles;
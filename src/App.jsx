import React,{useState, useEffect} from "react";
import alanBtn from'@alan-ai/alan-sdk-web';
const alanKey='87694f5515c788975370c25fca8aec212e956eca572e1d8b807a3e2338fdd0dc/stage';
// const newsApiKey='9ddc028cada44fbb9311f7098238ae3b';
const App =()=>{
  const [allNews,setAllNews]=useState([]);
  useEffect(()=>{
    alanBtn({key:alanKey,
      onCommand:({command,source,News_Url})=>{
        if (command==='trial'){
            alanBtn().playText('hi');
        }
        if (command==='getNews'){
          // (() => {
          //   fetch(News_Url)
          //  .then(response => response.json())
          //  .then(json => setAllNews(json))();},[News_Url]);
          
          if (!allNews){
            alanBtn().playText(`Sorry, no news article available from ${source},try a different source.`);
            // return;
          }
            alanBtn().playText(`Here are the (latest|recent|top) ${source} news.`);
        }
      }
    }
    );
  },[]);
  async function getNews(){
    const response = await fetch('https://newsapi.org/v2/top-headlines?apiKey=9ddc028cada44fbb9311f7098238ae3b&sources=cnn');
    var data = await response.json();
    console.log(data);
  }
   return( 
  <div>
    <h1>Newsie</h1>
    <button onClick={getNews}>Click me </button>
  </div>
  );
}

export default App;

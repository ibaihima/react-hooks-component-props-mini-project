import React from "react";
import Article from "./Article"



 const ArticleList = ({posts}) => {
     const articleList = posts.map((post) => {
         return (         
             <Article key = {post.id} title = {post.title} data = {post.data} preview = {post.preview}/>
         )
     })
     return(
     <main>
      {articleList}   
     </main>
     )
 }

 export default ArticleList;


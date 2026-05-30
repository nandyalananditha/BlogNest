import React,
{
 useState,
 useEffect
}
from "react";

import axios from "axios";

function CommentSection(
{ postId }
){

 const [text,setText]
 = useState("");

 const [comments,
 setComments]
 = useState([]);

 const getComments =
 async ()=>{

 const res =
 await axios.get(
 `http://localhost:5000/api/comments/${postId}`
 );

 setComments(
 res.data
 );

 };

 useEffect(()=>{
  getComments();
 },[]);

 const addComment =
 async ()=>{

 await axios.post(
 "http://localhost:5000/api/comments",
 {
  text,
  postId
 }
 );

 setText("");

 getComments();

 };

 return(
  <div>

   <input
    type="text"
    value={text}
    placeholder="Add comment"
    onChange={
    (e)=>
    setText(
    e.target.value
    )
    }
   />

   <button
   onClick=
   {addComment}
   >
   Comment
   </button>

   {
   comments.map(
   (c)=>(
    <p key={c._id}>
     {c.text}
    </p>
   ))
   }

  </div>
 );
}

export default
CommentSection;
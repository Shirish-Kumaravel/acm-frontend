import React from 'react';
import  './commentreply.css';
import meimage from './images.jfif'

//this file is coding for the comment button and its excecution

const Comment = (props) => {
    return(
        <div className='commentboxme'>
              <div className='userme'>
               <img src= {meimage} className='ProfileImagesme'></img>
               <div className='Distme'>
               <h3>Dan Edwards</h3>
               <h6>12 December 2020</h6>
               </div>
               <input type='text' />
               </div>

    </div>

    );
};
 
export default Comment;
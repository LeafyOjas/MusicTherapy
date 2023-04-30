import React from 'react';
import { useHistory } from 'react-router-dom';

export const Blog = (props) => {
    const history=useHistory()
  return (
        <div className="blog-circle my-5" onClick={()=> history.push(props.url)}>
            <img className='img' src={props.img}/>
            <h6 className='py-3'>{props.title}</h6>
    </div>
    
  )
}

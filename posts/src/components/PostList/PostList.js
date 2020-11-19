import React, { Component } from 'react';
import Post from './Post';

const PostList = (props) => {
    return (  
        // shorter version of react fragment
        <>
            <h1>Post list is going her</h1>
            {/* for post list we need to make a loop and iterate through our object posts
            for this reason we need to use 'map'  and you can define whatever you want like 'p' or post*/}
            {props.posts.map(post=>{
                return <Post key={post.id} post={post} />
            })}
        </>
    );
}

export default PostList;
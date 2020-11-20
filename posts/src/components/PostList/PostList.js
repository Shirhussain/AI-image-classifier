import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import Post from './Post';

const PostList = (props) => {
    return (  
        // shorter version of react fragment
        <>
            <Button onClick={props.show} variant='primary' >{!props.status ? 'Show posts' : 'Hide posts' }</Button>
            {/* for post list we need to make a loop and iterate through our object posts
            for this reason we need to use 'map'  and you can define whatever you want like 'p' or post*/}
            {props.status &&
            props.posts.map(post=>{
                return <Post key={post.id} post={post} delete={props.delete} />
            })}
        </>
    );
}

export default PostList;
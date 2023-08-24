import React from 'react';
import { connect } from 'react-redux'

const PostList = (props) => {
    console.log('Props', props)
    return (
        <div>
            {props.posts.map((post) => <div id={post.id}>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </div>)}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        posts: state.blog.posts
    }
}

export default connect(mapStateToProps)(PostList);
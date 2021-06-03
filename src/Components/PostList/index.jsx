import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    postList: PropTypes.array
};
PostList.defaultProps = {
    postList: []
}
function PostList(props) {
    const {postList} = props
    return (
        <ul className="post-list">
            {
                postList.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))
            }
        </ul>
    );
}

export default PostList;
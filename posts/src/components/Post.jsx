import PropTypes from "prop-types";

const Post = ({ post }) => {
  return (
    <div className='post-box'>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};

export default Post;

import { useDispatch } from 'react-redux';
import { reactionAdded } from '../features/posts/postsSlice';
import PropTypes from 'prop-types';

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😲',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕️',
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type='button'
        className='reactionButton'
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};

ReactionButtons.propTypes = {
  post: PropTypes.object.isRequired,
};

export default ReactionButtons;

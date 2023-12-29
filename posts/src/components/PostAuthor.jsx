import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { selectAllUsers } from '../features/users/usersSlice';

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.id === userId);

  return <span>by {author ? author.name : 'Unknown author'}</span>;
};

PostAuthor.propTypes = {
  userId: PropTypes.string,
};

export default PostAuthor;

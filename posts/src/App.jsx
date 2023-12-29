import PostsList from './components/PostsList';
import AddPostForm from './components/AddPostForm';
import './App.css';

const App = () => {
  return (
    <main className='App'>
      <AddPostForm />
      <PostsList />
    </main>
  );
};

export default App;

//

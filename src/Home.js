import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    // console.log('run use effect');
    fetch('http://localhost:8000/blogss')
      .then((res) => {
        if (!res.ok) {
          throw Error('oh oh spagetti O');
          // console.log('no dice');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
        setIsPending(false);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  }, []);
  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading plese wait ...</div>}
      {blogs && <BlogList blogs={blogs} title='All blogs' />}
    </div>
  );
};

export default Home;

import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      blogName: "Horray it's lunch time!!",
      author: 'lilian Beth',
      body: '.....',
      id: 1,
    },
    {
      blogName: 'Nice job!!',
      author: 'Hath Livingston',
      body: '.....',
      id: 2,
    },
    {
      blogName: 'Time for chigong',
      author: 'darren',
      body: '.....',
      id: 3,
    },
  ]);
  return (
    <div className='home'>
      <BlogList blogs={blogs} title='All blogs' />
    </div>
  );
};

export default Home;

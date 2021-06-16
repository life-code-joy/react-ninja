import { useState } from 'react';

const Home = () => {
  const [friend, setFriend] = useState('chet');
  const [age, setAge] = useState(23);
  const [details, setDetails] = useState('CLICK TO SEE HIS DETAILS.');
  const handleClick = () => {
    setFriend('jerry muffins');
    setAge(12);
    setDetails('He loves to listen to fanhalen.');
  };
  return (
    <div className='home'>
      <h2 className='home-style-heading'>Homepage</h2>
      <p>
        {friend} is {age} years old and his details are ... {details}.
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;

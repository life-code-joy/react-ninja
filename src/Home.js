const Home = () => {
  const handleClick = (e) => {
    console.log('clicked', e);
  };

  const handleClickAgain = (name, e) => {
    console.log('I got clicked my dear friend ... ', name, e.target);
  };

  return (
    <div className='home'>
      <h2 className='home-style-heading'>Homepage</h2>
      <button onClick={handleClick}>click me</button>
      <button
        onClick={(e) => {
          handleClickAgain('Mario', e);
        }}
      >
        click me
      </button>
    </div>
  );
};

export default Home;

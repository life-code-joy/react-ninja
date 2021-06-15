import './App.css';
import './Navbar';

function App() {
  const info = 'My address is 54 longwood.';
  const list = [12, 34, 22, 55, 23];
  // const link = 'http://www.google.com';
  // no object or booleans can be outputed
  return (
    <div className='app'>
      <h1>App Component</h1>
      <p>{info}</p>
      <p>{list}</p>
      <p>{67777}</p>
      <p>{'this is a list'}</p>
      {/* expressions can be outputted */}
      <p>{Math.random() * 10}</p>
      <p>{['one ', 'two ', 'three']}</p>
      <a href='{link}'>Google</a>
      {/* <Navbar /> */}
    </div>
  );
}

export default App;

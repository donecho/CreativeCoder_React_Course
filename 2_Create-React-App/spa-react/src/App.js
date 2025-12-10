// import logo from './logo.svg';
import './App.css';
import QAImage from './assets/image/image_1.png';

function App() {
  return (
    <div className='app'>
      <h1>Hello World</h1>
      {/**1st wway - public folder way */}
      {/**absolute path */}
      {/* <img src="http://localhost:3000/image_1.png" alt="" /> */}
      {/**relative path */}
      {/* <img src="/image_1.png" alt="" /> */}

      {/**2nd way - import */}
      {/* <img src={QAImage} alt=''/> */}
    </div>
  );
}

export default App;


//npm run script



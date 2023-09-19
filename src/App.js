import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AllRestuarent from './components/AllRestuarent';
import ViewRestuarent from './components/ViewRestuarent';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='' Component={AllRestuarent}/>
        <Route path='view/:id' Component={ViewRestuarent}/>
      </Routes>
      {/* <AllRestuarent/> */}
      <Footer/>
    </>
  );
}

export default App;
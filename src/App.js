import './App.css';
import {Outlet  } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
  return (
    <div className='bg-[#060818] font-body'>
      <Header />
      <div className="flex">
        {/* <div className='w-3/10'>

        </div>
        <div className='w-7/10'>

        </div> */}
        <Menu />
        <Outlet />
      </div>


      {/* <div className='grid grid-cols-12'>
          <div className="col-span-3">
              <Menu />
          </div>
          <div className="col-span-9">
              <Outlet />
          </div>
      </div> */}
    </div>
  );
}

export default App;

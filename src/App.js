import './App.css';
import { Route, Routes } from 'react-router-dom';
import {accountRoute,homeRoute} from './Routes/Index';
import NotFoundPage from './Page/NotFoundPages/Index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          {homeRoute.map((route, index) => { return <Route key={index} path={route.path} element={<route.element />} /> })}
        </Route>
        <Route path='/Account'>
          {accountRoute.map((route, index) => { return <Route key={index} path={route.path} element={<route.element />} /> })}
        </Route>
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;

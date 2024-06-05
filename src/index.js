import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Navbars from './Navbars';
import './App.css';
import Boonies from './Boonies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Category from './Category';
import Detail from './Detail';
import Description from './Meals';
import Menuitems from './Menuitems';
import Countrypages from './Countrypages';
import Search from './Search';
import SearchResult from './SearchResult';
import Favourites from './Fav';
import { Provider } from 'react-redux';
import { store } from './Store';
import Fav from './Fav';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbars/>} >
      <Route index element={<Category/>} />
      <Route path="/detail/:catName" element={<Detail/>} />
      <Route path="/Description/:meals" element={<Description/>} />
      <Route path="/fav" element={<Fav/>} />
      <Route path="/Boonies" element={<Boonies/>} />
      <Route path="/Countrypages/:item/" element={<Countrypages/>}/> 
      <Route path='/menuitems' element={<Menuitems/>}></Route> 
      <Route path='search' element={<Search/>}/>
     <Route path='searchresult' element={<SearchResult/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

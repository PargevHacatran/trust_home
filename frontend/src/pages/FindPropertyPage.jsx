import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Filter from "../components/housing/Filter";
import LeftFilter from "../components/housing/LeftFilter";
import { ObjectsList } from '../components/housing/ObjectsList';


function FindProperty() {
  return (
    <>
      <Navbar/>
        <Filter/>
        <div className="searh-container">
          <div className="search-container_left">
            <LeftFilter/>
          </div>
          <ObjectsList />
        </div>
      <Footer/>
    </>
  );
}

export default FindProperty;
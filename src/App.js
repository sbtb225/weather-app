import React from 'react';
import SearchBar from './components/searchBar/SearchBar';
import TabBarMenu from './components/tabBarMenu/TabBarMenu';
import MetricSlider from './components/metricSlider/MetricSlider';
import './App.css';

function App() {
  return (
    <>
      <div className="weather-container">

        {/*HEADER -------------------- */}
        <div className="weather-header">
          <SearchBar/>

          <span className="location-details">
            <h2>Cloudy</h2>
            <h3> </h3>
            <h1>14 &deg;</h1>

            <button type="button">
              Retrieve data!
            </button>
          </span>
        </div>

        {/*CONTENT ------------------ */}
        <div className="weather-content">
          <TabBarMenu/>

          <div className="tab-wrapper">
            All Table data comes here!
          </div>
        </div>

        <MetricSlider/>
      </div>
    </>
  );
}

export default App;

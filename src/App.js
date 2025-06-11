import React, { useState } from 'react';
import './App.css';
import Filter from './components/Filter';

function App() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    makes: [],
    models: [],
    trims: []
  });

  const handleOpenFilter = () => {
    setIsFilterOpen(true);
  };

  const handleCloseFilter = () => {
    setIsFilterOpen(false);
  };

  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
  };

  const handleClearFilters = () => {
    setSelectedFilters({
      makes: [],
      models: [],
      trims: []
    });
  };

  return (
    <div className="App">
      {!isFilterOpen ? (
        <div className="app-main">
          <header className="app-header">
            <h1>MMT Filter Demo</h1>
            <p>Vehicle Make, Model, Trim Filter System</p>
          </header>
          
          <div className="app-content">
            <div className="filter-section">
              <h2>Current Selection</h2>
              <div className="current-filters">
                <div className="filter-item">
                  <span className="filter-label">Makes:</span>
                  <span className="filter-value">
                    {selectedFilters.makes.length > 0 
                      ? selectedFilters.makes.join(', ') 
                      : 'Not selected'}
                  </span>
                </div>
                <div className="filter-item">
                  <span className="filter-label">Models:</span>
                  <span className="filter-value">
                    {selectedFilters.models.length > 0 
                      ? selectedFilters.models.join(', ') 
                      : 'Not selected'}
                  </span>
                </div>
                <div className="filter-item">
                  <span className="filter-label">Trims:</span>
                  <span className="filter-value">
                    {selectedFilters.trims.length > 0 
                      ? selectedFilters.trims.join(', ') 
                      : 'Not selected'}
                  </span>
                </div>
              </div>
              
              <div className="filter-actions">
                <button 
                  className="btn btn-primary"
                  onClick={handleOpenFilter}
                >
                  Open Filter
                </button>
                {(selectedFilters.makes.length > 0 || selectedFilters.models.length > 0 || selectedFilters.trims.length > 0) && (
                  <button 
                    className="btn btn-secondary"
                    onClick={handleClearFilters}
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            </div>
            
            <div className="demo-info">
              <h3>Features</h3>
              <ul>
                <li>✅ Exact Figma design implementation</li>
                <li>✅ Progressive filtering: Make → Model → Trim</li>
                <li>✅ Search functionality for each level</li>
                <li>✅ Back navigation between levels</li>
                <li>✅ Vanilla CSS (no dependencies)</li>
                <li>✅ Responsive design</li>
                <li>✅ Accessibility features</li>
                <li>✅ SRP architecture</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <Filter 
          onClose={handleCloseFilter}
          onFilterChange={handleFilterChange}
        />
      )}
    </div>
  );
}

export default App; 
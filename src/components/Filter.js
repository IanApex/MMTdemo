import React, { useState, useEffect } from 'react';
import './Filter.css';
import { vehicleData, getModelsForMake, getTrimsForModel, searchVehicles } from '../data/vehicleData';

const Filter = ({ onClose, onFilterChange }) => {
  const [currentView, setCurrentView] = useState('make'); // 'make', 'model', 'trim'
  const [selectedMakes, setSelectedMakes] = useState([]); // Array of selected makes
  const [selectedModels, setSelectedModels] = useState([]); // Array of selected models
  const [selectedTrims, setSelectedTrims] = useState([]); // Array of selected trims
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [hasNavigatedAway, setHasNavigatedAway] = useState({
    make: false,
    model: false,
    trim: false
  }); // Track if user has navigated away from each view
  
  const [preNavigationSelections, setPreNavigationSelections] = useState({
    makes: [],
    models: [],
    trims: []
  }); // Track items that were selected before navigation
  
  const [contextualFilter, setContextualFilter] = useState({
    forMake: null, // When in model view, which make to show models for
    forModel: null // When in trim view, which model to show trims for
  }); // Track contextual filtering

  // Transition state management
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState('forward'); // 'forward' or 'backward'
  const [previousView, setPreviousView] = useState(null);
  const [previousItems, setPreviousItems] = useState([]);
  const [slideInActive, setSlideInActive] = useState(false);

  // Initialize data based on current view
  useEffect(() => {
    let items = [];
    
    if (currentView === 'make') {
      // Enhanced search that includes both makes and models
      if (searchQuery && searchQuery.length >= 2) {
        const searchResults = searchVehicles(searchQuery, 'enhanced');
        setFilteredItems(searchResults);
        return;
      } else if (searchQuery && searchQuery.length < 2) {
        setFilteredItems([]);
        return;
      }
      
      let allMakes = vehicleData.makes;
      
      // Only separate items if user has navigated away and come back
      if (hasNavigatedAway.make && preNavigationSelections.makes.length > 0) {
        // Separate into three groups: pre-navigation selected, newly selected, and unselected
        const preNavigationSelected = [];
        const newlySelected = [];
        const unselected = [];
        
        allMakes.forEach(make => {
          const isPreNavigationSelected = preNavigationSelections.makes.some(selected => selected.name === make.name);
          const isCurrentlySelected = selectedMakes.some(selected => selected.name === make.name);
          
          if (isPreNavigationSelected) {
            preNavigationSelected.push(make);
          } else if (isCurrentlySelected) {
            newlySelected.push(make);
          } else {
            unselected.push(make);
          }
        });
        
        // Sort all arrays alphabetically
        preNavigationSelected.sort((a, b) => a.name.localeCompare(b.name));
        newlySelected.sort((a, b) => a.name.localeCompare(b.name));
        unselected.sort((a, b) => a.name.localeCompare(b.name));
        
        // Combine: pre-navigation selected first, then newly selected mixed with unselected in original order
        const bottomSection = [...newlySelected, ...unselected].sort((a, b) => a.name.localeCompare(b.name));
        items = [...preNavigationSelected, ...bottomSection];
      } else {
        // Keep original order, just sort alphabetically
        items = allMakes.sort((a, b) => a.name.localeCompare(b.name));
      }
      
    } else if (currentView === 'model') {
      // Show models for specific make if contextual filter is set, otherwise all selected makes
      const allModels = [];
      const makesToShow = contextualFilter.forMake ? [contextualFilter.forMake] : selectedMakes;
      
      makesToShow.forEach(make => {
        const models = getModelsForMake(make.name);
        models.forEach(model => {
          allModels.push({
            ...model,
            makeName: make.name
          });
        });
      });
      
      let filteredModels = searchQuery 
        ? allModels.filter(model => model.name.toLowerCase().includes(searchQuery.toLowerCase()))
        : allModels;
      
      // Only separate items if user has navigated away and come back
      if (hasNavigatedAway.model && preNavigationSelections.models.length > 0) {
        // Separate into three groups: pre-navigation selected, newly selected, and unselected
        const preNavigationSelected = [];
        const newlySelected = [];
        const unselected = [];
        
        filteredModels.forEach(model => {
          const isPreNavigationSelected = preNavigationSelections.models.some(selected => 
            selected.name === model.name && selected.makeName === model.makeName
          );
          const isCurrentlySelected = selectedModels.some(selected => 
            selected.name === model.name && selected.makeName === model.makeName
          );
          
          if (isPreNavigationSelected) {
            preNavigationSelected.push(model);
          } else if (isCurrentlySelected) {
            newlySelected.push(model);
          } else {
            unselected.push(model);
          }
        });
        
        // Sort all arrays alphabetically
        preNavigationSelected.sort((a, b) => a.name.localeCompare(b.name));
        newlySelected.sort((a, b) => a.name.localeCompare(b.name));
        unselected.sort((a, b) => a.name.localeCompare(b.name));
        
        // Combine: pre-navigation selected first, then newly selected mixed with unselected
        const bottomSection = [...newlySelected, ...unselected].sort((a, b) => a.name.localeCompare(b.name));
        items = [...preNavigationSelected, ...bottomSection];
      } else {
        // Keep original order, just sort alphabetically
        items = filteredModels.sort((a, b) => a.name.localeCompare(b.name));
      }
      
    } else if (currentView === 'trim') {
      // Show trims for specific model if contextual filter is set, otherwise all selected models
      const allTrims = [];
      const modelsToShow = contextualFilter.forModel ? [contextualFilter.forModel] : selectedModels;
      
      modelsToShow.forEach(model => {
        const trims = getTrimsForModel(model.makeName, model.name);
        trims.forEach(trim => {
          allTrims.push({
            ...trim,
            makeName: model.makeName,
            modelName: model.name
          });
        });
      });
      
      let filteredTrims = searchQuery 
        ? allTrims.filter(trim => trim.name.toLowerCase().includes(searchQuery.toLowerCase()))
        : allTrims;
      
      // Only separate items if user has navigated away and come back
      if (hasNavigatedAway.trim && preNavigationSelections.trims.length > 0) {
        // Separate into three groups: pre-navigation selected, newly selected, and unselected
        const preNavigationSelected = [];
        const newlySelected = [];
        const unselected = [];
        
        filteredTrims.forEach(trim => {
          const isPreNavigationSelected = preNavigationSelections.trims.some(selected => 
            selected.name === trim.name && 
            selected.makeName === trim.makeName && 
            selected.modelName === trim.modelName
          );
          const isCurrentlySelected = selectedTrims.some(selected => 
            selected.name === trim.name && 
            selected.makeName === trim.makeName && 
            selected.modelName === trim.modelName
          );
          
          if (isPreNavigationSelected) {
            preNavigationSelected.push(trim);
          } else if (isCurrentlySelected) {
            newlySelected.push(trim);
          } else {
            unselected.push(trim);
          }
        });
        
        // Sort all arrays alphabetically
        preNavigationSelected.sort((a, b) => a.name.localeCompare(b.name));
        newlySelected.sort((a, b) => a.name.localeCompare(b.name));
        unselected.sort((a, b) => a.name.localeCompare(b.name));
        
        // Combine: pre-navigation selected first, then newly selected mixed with unselected
        const bottomSection = [...newlySelected, ...unselected].sort((a, b) => a.name.localeCompare(b.name));
        items = [...preNavigationSelected, ...bottomSection];
      } else {
        // Keep original order, just sort alphabetically
        items = filteredTrims.sort((a, b) => a.name.localeCompare(b.name));
      }
    }
    
    setFilteredItems(items);
  }, [currentView, selectedMakes, selectedModels, selectedTrims, searchQuery]);

  // Handle search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Clear search when navigating away from make view
  useEffect(() => {
    if (currentView !== 'make') {
      setSearchQuery('');
    }
  }, [currentView]);

  // Helper function to handle view transitions
  const navigateToView = (newView, direction = 'forward', contextualData = {}) => {
    if (isTransitioning || newView === currentView) return;

    // Store current view data for transition
    setPreviousView(currentView);
    setPreviousItems([...filteredItems]);
    setTransitionDirection(direction);

    // Apply contextual filters first
    Object.keys(contextualData).forEach(key => {
      if (contextualData[key] !== undefined) {
        setContextualFilter(prev => ({
          ...prev,
          [key]: contextualData[key]
        }));
      }
    });

    // Start transition
    setIsTransitioning(true);
    setSlideInActive(false);
    
    // Update the view immediately
    setCurrentView(newView);
    setSearchQuery('');

    // Start the slide-in animation after a brief delay
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setSlideInActive(true);
      });
    });

    // Complete transition after CSS animation duration
    setTimeout(() => {
      setIsTransitioning(false);
      setPreviousView(null);
      setPreviousItems([]);
      setSlideInActive(false);
    }, 350);
  };

  // Handle item selection (checkbox toggle)
  const handleItemSelect = (item) => {
    if (currentView === 'make') {
      const isSelected = selectedMakes.some(make => make.name === item.name);
      let newSelectedMakes;
      let newSelectedModels = selectedModels;
      let newSelectedTrims = selectedTrims;
      
      if (isSelected) {
        // Remove from selection
        newSelectedMakes = selectedMakes.filter(make => make.name !== item.name);
        
        // Also remove all models and trims belonging to this make
        newSelectedModels = selectedModels.filter(model => model.makeName !== item.name);
        newSelectedTrims = selectedTrims.filter(trim => trim.makeName !== item.name);
        
        // Update the state for models and trims as well
        setSelectedModels(newSelectedModels);
        setSelectedTrims(newSelectedTrims);
      } else {
        // Add to selection
        newSelectedMakes = [...selectedMakes, item];
      }
      
      setSelectedMakes(newSelectedMakes);
      
      // Notify parent component
      onFilterChange({
        makes: newSelectedMakes.map(make => make.name),
        models: newSelectedModels.map(model => `${model.makeName} ${model.name}`),
        trims: newSelectedTrims.map(trim => `${trim.makeName} ${trim.modelName} ${trim.name}`)
      });
    } else if (currentView === 'model') {
      const isSelected = selectedModels.some(model => 
        model.name === item.name && model.makeName === item.makeName
      );
      let newSelectedModels;
      let newSelectedTrims = selectedTrims;
      
      if (isSelected) {
        // Remove from selection
        newSelectedModels = selectedModels.filter(model => 
          !(model.name === item.name && model.makeName === item.makeName)
        );
        
        // Also remove all trims belonging to this model
        newSelectedTrims = selectedTrims.filter(trim => 
          !(trim.makeName === item.makeName && trim.modelName === item.name)
        );
        
        // Update the state for trims as well
        setSelectedTrims(newSelectedTrims);
      } else {
        // Add to selection
        newSelectedModels = [...selectedModels, item];
      }
      
      setSelectedModels(newSelectedModels);
      
      // Notify parent component
      onFilterChange({
        makes: selectedMakes.map(make => make.name),
        models: newSelectedModels.map(model => `${model.makeName} ${model.name}`),
        trims: newSelectedTrims.map(trim => `${trim.makeName} ${trim.modelName} ${trim.name}`)
      });
    } else if (currentView === 'trim') {
      const isSelected = selectedTrims.some(trim => 
        trim.name === item.name && trim.makeName === item.makeName && trim.modelName === item.modelName
      );
      let newSelectedTrims;
      
      if (isSelected) {
        // Remove from selection
        newSelectedTrims = selectedTrims.filter(trim => 
          !(trim.name === item.name && trim.makeName === item.makeName && trim.modelName === item.modelName)
        );
      } else {
        // Add to selection
        newSelectedTrims = [...selectedTrims, item];
      }
      
      setSelectedTrims(newSelectedTrims);
      
      // Notify parent component
      onFilterChange({
        makes: selectedMakes.map(make => make.name),
        models: selectedModels.map(model => `${model.makeName} ${model.name}`),
        trims: newSelectedTrims.map(trim => `${trim.makeName} ${trim.modelName} ${trim.name}`)
      });
    }
  };

  // Handle back navigation
  const handleBack = () => {
    if (currentView === 'model') {
      // Clear contextual filter when going back
      setContextualFilter(prev => ({ ...prev, forMake: null }));
      // Mark that user is returning to make view after navigating away
      setHasNavigatedAway(prev => ({ ...prev, make: true }));
      navigateToView('make', 'backward');
    } else if (currentView === 'trim') {
      // Clear contextual filter when going back
      setContextualFilter(prev => ({ ...prev, forModel: null }));
      // Mark that user is returning to model view after navigating away
      setHasNavigatedAway(prev => ({ ...prev, model: true }));
      navigateToView('model', 'backward');
    }
  };

  // Handle Model link click for a specific make
  const handleModelLinkClick = (make) => {
    // Merge existing pre-navigation selections with current selections
    setPreNavigationSelections(prev => {
      // For models: merge existing pre-navigation models with currently selected models
      const allModelSelections = [...prev.models];
      selectedModels.forEach(model => {
        if (!allModelSelections.some(existing => 
          existing.name === model.name && existing.makeName === model.makeName
        )) {
          allModelSelections.push(model);
        }
      });

      // For trims: merge existing pre-navigation trims with currently selected trims  
      const allTrimSelections = [...prev.trims];
      selectedTrims.forEach(trim => {
        if (!allTrimSelections.some(existing => 
          existing.name === trim.name && 
          existing.makeName === trim.makeName && 
          existing.modelName === trim.modelName
        )) {
          allTrimSelections.push(trim);
        }
      });

      return {
        ...prev,
        makes: [...selectedMakes], // snapshot current make selections
        models: allModelSelections,
        trims: allTrimSelections
      };
    });
    
    // Mark that user has navigated away from make view AND model view (if returning)
    setHasNavigatedAway(prev => ({ 
      ...prev, 
      make: true,
      model: true // Mark model as navigated away since we might be returning to it
    }));

    // Navigate to model view with transition
    navigateToView('model', 'forward', { forMake: make });
  };

  // Handle Trim link click for a specific model
  const handleTrimLinkClick = (model) => {
    // Merge existing pre-navigation selections with current selections
    setPreNavigationSelections(prev => {
      // For models: merge existing pre-navigation models with currently selected models
      const allModelSelections = [...prev.models];
      selectedModels.forEach(model => {
        if (!allModelSelections.some(existing => 
          existing.name === model.name && existing.makeName === model.makeName
        )) {
          allModelSelections.push(model);
        }
      });

      // For trims: merge existing pre-navigation trims with currently selected trims
      const allTrimSelections = [...prev.trims];
      selectedTrims.forEach(trim => {
        if (!allTrimSelections.some(existing => 
          existing.name === trim.name && 
          existing.makeName === trim.makeName && 
          existing.modelName === trim.modelName
        )) {
          allTrimSelections.push(trim);
        }
      });

      return {
        ...prev,
        models: allModelSelections,
        trims: allTrimSelections
      };
    });
    
    // Mark that user has navigated away from model view AND trim view (if returning)
    setHasNavigatedAway(prev => ({ 
      ...prev, 
      model: true,
      trim: true // Mark trim as navigated away since we might be returning to it
    }));

    // Navigate to trim view with transition
    navigateToView('trim', 'forward', { forModel: model });
  };

  // Check if item is selected
  const isItemSelected = (item) => {
    if (currentView === 'make') {
      return selectedMakes.some(make => make.name === item.name);
    } else if (currentView === 'model') {
      return selectedModels.some(model => 
        model.name === item.name && model.makeName === item.makeName
      );
    } else if (currentView === 'trim') {
      return selectedTrims.some(trim => 
        trim.name === item.name && trim.makeName === item.makeName && trim.modelName === item.modelName
      );
    }
    return false;
  };

  // Get current view title
  const getCurrentTitle = () => {
    switch (currentView) {
      case 'make':
        return 'Make';
      case 'model':
        return 'Model';
      case 'trim':
        return 'Trim';
      default:
        return 'Make';
    }
  };

  // Breadcrumb navigation handlers
  const handleBreadcrumbClick = (targetView) => {
    if (targetView === 'make' && currentView !== 'make') {
      // Clear contextual filter when going back via breadcrumb
      setContextualFilter(prev => ({ ...prev, forMake: null, forModel: null }));
      // Mark that user is returning to make view after navigating away
      setHasNavigatedAway(prev => ({ ...prev, make: true }));
      navigateToView('make', 'backward');
    } else if (targetView === 'model' && currentView === 'trim') {
      // Clear trim contextual filter but keep make filter
      setContextualFilter(prev => ({ ...prev, forModel: null }));
      // Mark that user is returning to model view after navigating away
      setHasNavigatedAway(prev => ({ ...prev, model: true }));
      navigateToView('model', 'backward');
    }
  };

  // Render breadcrumb navigation
  const renderBreadcrumb = () => {
    if (currentView === 'make') {
      return null; // No breadcrumb for make view
    }

    const breadcrumbItems = [];
    
    // Always show Make as clickable when not in make view
    breadcrumbItems.push(
      <span 
        key="make"
        className="breadcrumb-item clickable"
        onClick={() => handleBreadcrumbClick('make')}
      >
        Make
      </span>
    );

    if (currentView === 'model' || currentView === 'trim') {
      breadcrumbItems.push(<span key="sep1" className="breadcrumb-separator">/</span>);
      
      if (currentView === 'model') {
        breadcrumbItems.push(
          <span key="model" className="breadcrumb-item current">Model</span>
        );
      } else {
        // In trim view, model is clickable
        breadcrumbItems.push(
          <span 
            key="model"
            className="breadcrumb-item clickable"
            onClick={() => handleBreadcrumbClick('model')}
          >
            Model
          </span>
        );
      }
    }

    if (currentView === 'trim') {
      breadcrumbItems.push(<span key="sep2" className="breadcrumb-separator">/</span>);
      breadcrumbItems.push(
        <span key="trim" className="breadcrumb-item current">Trim</span>
      );
    }

    return (
      <div className="filter-breadcrumb">
        {breadcrumbItems}
      </div>
    );
  };

  // Get search placeholder
  const getSearchPlaceholder = () => {
    switch (currentView) {
      case 'make':
        return 'Search make or model';
      case 'model':
        return 'Search model';
      case 'trim':
        return 'Search trim';
      default:
        return 'Search make or model';
    }
  };

  // Check if search should be shown (only for make view in this design)
  const shouldShowSearch = () => {
    return currentView === 'make';
  };

  // Helper function to render list content for a given view and items
  const renderListContent = (view, items, isSearchMode = false) => {
    // Show "No results" when search has 2+ characters but no results
    if (searchQuery && searchQuery.length >= 2 && view === 'make' && items.length === 0) {
      return (
        <div className="filter-no-results">
          No results
        </div>
      );
    }

    // Handle hierarchical search results when searching
    if (searchQuery && searchQuery.length >= 2 && view === 'make') {
      return items.map((searchGroup, groupIndex) => (
        <div key={`search-group-${groupIndex}`} className="filter-search-group">
          {/* Make header */}
          <div
            className={`filter-selection-item make-header ${isItemSelected(searchGroup.make) ? 'selected' : ''}`}
            onClick={() => handleItemSelect(searchGroup.make)}
            tabIndex={0}
            role="button"
            aria-label={`Select ${searchGroup.make.name}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleItemSelect(searchGroup.make);
              }
            }}
          >
            <div className="filter-selection-content">
              <div className="filter-selection-left">
                {isItemSelected(searchGroup.make) && (
                  <div className="filter-checkbox">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M10 15.172L19.192 5.979L20.607 7.393L10 18L3.636 11.636L5.05 10.222L10 15.172Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                )}
                <div className="filter-selection-text">
                  <div className="filter-selection-name">{searchGroup.make.name}</div>
                  <div className="filter-selection-count">({searchGroup.make.count})</div>
                </div>
              </div>
              
              {isItemSelected(searchGroup.make) && (
                <div 
                  className="filter-selection-right"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleModelLinkClick(searchGroup.make);
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Go to ${searchGroup.make.name} models`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      e.stopPropagation();
                      handleModelLinkClick(searchGroup.make);
                    }
                  }}
                >
                  <div className="filter-model-link">
                    Model
                  </div>
                  <div className="filter-model-arrow">
                    <svg viewBox="0 0 13 8" fill="none">
                      <path
                        d="M6.364 4.95L11.314 0L12.728 1.414L6.364 7.778L0 1.414L1.414 0L6.364 4.95Z"
                        fill="var(--blue-60)"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Model children */}
          {searchGroup.models.map((model, modelIndex) => {
            // Create model object with make info for selection
            const modelWithMake = {
              ...model,
              makeName: searchGroup.make.name
            };
            const isModelSelected = selectedModels.some(selected => 
              selected.name === model.name && selected.makeName === searchGroup.make.name
            );
            
            return (
              <div
                key={`model-${modelIndex}`}
                className="filter-selection-item model-child"
                onClick={() => {
                  // First select the make if not already selected
                  if (!isItemSelected(searchGroup.make)) {
                    handleItemSelect(searchGroup.make);
                  }
                  
                  // Toggle model selection (select or deselect)
                  if (isModelSelected) {
                    // Remove from selection
                    const newSelectedModels = selectedModels.filter(selected => 
                      !(selected.name === model.name && selected.makeName === searchGroup.make.name)
                    );
                    setSelectedModels(newSelectedModels);
                    
                    // Notify parent component
                    onFilterChange({
                      makes: selectedMakes.map(make => make.name),
                      models: newSelectedModels.map(model => `${model.makeName} ${model.name}`),
                      trims: selectedTrims.map(trim => `${trim.makeName} ${trim.modelName} ${trim.name}`)
                    });
                  } else {
                    // Add to selection
                    const newSelectedModels = [...selectedModels, modelWithMake];
                    setSelectedModels(newSelectedModels);
                    
                    // Notify parent component
                    onFilterChange({
                      makes: selectedMakes.map(make => make.name),
                      models: newSelectedModels.map(model => `${model.makeName} ${model.name}`),
                      trims: selectedTrims.map(trim => `${trim.makeName} ${trim.modelName} ${trim.name}`)
                    });
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Select ${model.name} under ${searchGroup.make.name}`}
              >
                <div className="filter-selection-content">
                  <div className="filter-selection-left">
                    <div className="model-indicator">
                      <svg viewBox="0 0 16 16" fill="none" className="model-L-indicator">
                        <path
                          d="M4 2V12H12"
                          stroke="var(--park-gray-20)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                    </div>
                    {isModelSelected && (
                      <div className="filter-checkbox">
                        <svg viewBox="0 0 24 24" fill="none">
                          <path
                            d="M10 15.172L19.192 5.979L20.607 7.393L10 18L3.636 11.636L5.05 10.222L10 15.172Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    )}
                    <div className="filter-selection-text">
                      <div className="filter-selection-name">{model.name}</div>
                      <div className="filter-selection-count">({model.count})</div>
                    </div>
                  </div>
                  
                  {isModelSelected && (
                    <div 
                      className="filter-selection-right"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTrimLinkClick(modelWithMake);
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`Go to ${model.name} trims`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          e.stopPropagation();
                          handleTrimLinkClick(modelWithMake);
                        }
                      }}
                    >
                      <div className="filter-model-link">
                        Trim
                      </div>
                      <div className="filter-model-arrow">
                        <svg viewBox="0 0 13 8" fill="none">
                          <path
                            d="M6.364 4.95L11.314 0L12.728 1.414L6.364 7.778L0 1.414L1.414 0L6.364 4.95Z"
                            fill="var(--blue-60)"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ));
    }

    // Regular view - show normal items
    return items.map((item, index) => {
      const isSelected = isItemSelected(item);
      
      // Check if this item was selected before navigation (should have green background)
      let wasPreNavigationSelected = false;
      if (view === 'make') {
        wasPreNavigationSelected = preNavigationSelections.makes.some(selected => selected.name === item.name);
      } else if (view === 'model') {
        wasPreNavigationSelected = preNavigationSelections.models.some(selected => 
          selected.name === item.name && selected.makeName === item.makeName
        );
      } else if (view === 'trim') {
        wasPreNavigationSelected = preNavigationSelections.trims.some(selected => 
          selected.name === item.name && selected.makeName === item.makeName && selected.modelName === item.modelName
        );
      }
      
      const shouldShowAsSelectedGroup = wasPreNavigationSelected && (
        (view === 'make' && hasNavigatedAway.make) ||
        (view === 'model' && hasNavigatedAway.model) ||
        (view === 'trim' && hasNavigatedAway.trim)
      );
      
      return (
        <div
          key={`${item.name}-${index}`}
          className={`filter-selection-item ${shouldShowAsSelectedGroup ? 'selected' : ''}`}
          onClick={() => handleItemSelect(item)}
          tabIndex={0}
          role="button"
          aria-label={`Select ${item.name}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleItemSelect(item);
            }
          }}
        >
          <div className="filter-selection-content">
            <div className="filter-selection-left">
              {isSelected && (
                <div className="filter-checkbox">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M10 15.172L19.192 5.979L20.607 7.393L10 18L3.636 11.636L5.05 10.222L10 15.172Z"
                      fill="white"
                    />
                  </svg>
                </div>
              )}
              <div className="filter-selection-text">
                <div className="filter-selection-name">{item.name}</div>
                <div className="filter-selection-count">({item.count})</div>
              </div>
            </div>
            
            {isSelected && view === 'make' && (
              <div 
                className="filter-selection-right"
                onClick={(e) => {
                  e.stopPropagation();
                  handleModelLinkClick(item);
                }}
                tabIndex={0}
                role="button"
                aria-label={`Go to ${item.name} models`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    handleModelLinkClick(item);
                  }
                }}
              >
                <div className="filter-model-link">
                  Model
                </div>
                <div className="filter-model-arrow">
                  <svg viewBox="0 0 13 8" fill="none">
                    <path
                      d="M6.364 4.95L11.314 0L12.728 1.414L6.364 7.778L0 1.414L1.414 0L6.364 4.95Z"
                      fill="var(--blue-60)"
                    />
                  </svg>
                </div>
              </div>
            )}
            
            {isSelected && view === 'model' && (
              <div 
                className="filter-selection-right"
                onClick={(e) => {
                  e.stopPropagation();
                  handleTrimLinkClick(item);
                }}
                tabIndex={0}
                role="button"
                aria-label={`Go to ${item.name} trims`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    handleTrimLinkClick(item);
                  }
                }}
              >
                <div className="filter-model-link">
                  Trim
                </div>
                <div className="filter-model-arrow">
                  <svg viewBox="0 0 13 8" fill="none">
                    <path
                      d="M6.364 4.95L11.314 0L12.728 1.414L6.364 7.778L0 1.414L1.414 0L6.364 4.95Z"
                      fill="var(--blue-60)"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="filter-container">
      {/* Header */}
      <div className="filter-header">
        <div className="filter-header-top">
          <div 
            className="filter-back-section"
            onClick={currentView !== 'make' ? handleBack : onClose}
            tabIndex={0}
            role="button"
            aria-label={currentView !== 'make' ? 'Go back' : 'Close filters'}
          >
            <div className="filter-back-icon">
              <svg viewBox="0 0 13 8" fill="none">
                <path
                  d="M6.364 4.95L11.314 0L12.728 1.414L6.364 7.778L0 1.414L1.414 0L6.364 4.95Z"
                  fill="var(--blue-60)"
                />
              </svg>
            </div>
            <div className="filter-back-text">All filters</div>
          </div>
          
          <button 
            className="filter-reset-button"
            onClick={() => {
              // Reset all selections
              setSelectedMakes([]);
              setSelectedModels([]);
              setSelectedTrims([]);
              setSearchQuery('');
              setCurrentView('make');
              setContextualFilter({ forMake: null, forModel: null });
              setHasNavigatedAway({ make: false, model: false, trim: false });
              setPreNavigationSelections({ makes: [], models: [], trims: [] });
              // Notify parent of reset
              onFilterChange({ make: null, model: null, trim: null });
            }}
            aria-label="Reset all filters"
          >
            Reset
          </button>
        </div>
        
        {currentView === 'make' ? (
          <div className="filter-type-section">
            <div className="filter-type-title">{getCurrentTitle()}</div>
          </div>
        ) : (
          renderBreadcrumb()
        )}
      </div>

      {/* Search Section - Only show for Make view */}
      {shouldShowSearch() && (
        <div className="filter-search-section">
          <div className="filter-search-container">
            <input
              type="text"
              className="filter-search-input"
              placeholder={getSearchPlaceholder()}
              value={searchQuery}
              onChange={handleSearchChange}
              aria-label={`Search ${getCurrentTitle().toLowerCase()}`}
            />
            <div 
              className="filter-search-icon"
              onClick={searchQuery ? () => setSearchQuery('') : undefined}
              style={{ cursor: searchQuery ? 'pointer' : 'default' }}
            >
              {searchQuery ? (
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="var(--park-gray-0)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M22.314 20.899L18.031 16.617C19.3082 15.0237 20.0029 13.042 20 11C20 6.032 15.968 2 11 2C6.032 2 2 6.032 2 11C2 15.968 6.032 20 11 20C13.042 20.0029 15.0237 19.3082 16.617 18.031L20.899 22.314L22.314 20.899ZM18 11C18.0029 12.8204 17.2941 14.5699 16.025 15.875L15.875 16.025C14.5699 17.2941 12.8204 18.0029 11 18C7.132 18 4 14.867 4 11C4 7.132 7.132 4 11 4C14.867 4 18 7.132 18 11Z"
                    fill="var(--park-gray-0)"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Selection List with Transitions */}
      <div className="filter-content-wrapper">
        {!isTransitioning ? (
          /* Static view when not transitioning */
          <div className="filter-view-container static">
            <div className="filter-selection-list">
              {renderListContent(currentView, filteredItems)}
            </div>
          </div>
        ) : (
          <>
            {/* Previous View (sliding out) */}
            <div 
              className={`filter-view-container ${
                transitionDirection === 'forward' ? 'slide-out-left' : 'slide-out-right'
              }`}
            >
              <div className="filter-selection-list">
                {renderListContent(previousView, previousItems)}
              </div>
            </div>

            {/* New View (sliding in) */}
            <div 
              className={`filter-view-container ${
                transitionDirection === 'forward' 
                  ? `slide-in-from-right ${slideInActive ? 'active' : ''}` 
                  : `slide-in-from-left ${slideInActive ? 'active' : ''}`
              }`}
            >
              <div className="filter-selection-list">
                {renderListContent(currentView, filteredItems)}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Filter; 
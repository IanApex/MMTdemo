// Sample vehicle data structure for Make, Model, Trim filtering
export const vehicleData = {
  makes: [
    { name: "Acura", count: 11, models: ["ILX", "MDX", "RDX", "TLX", "NSX", "RLX"] },
    { name: "Alfa Romeo", count: 8, models: ["Giulia", "Stelvio", "4C", "Tonale"] },
    { name: "Audi", count: 23, models: ["A3", "A4", "A5", "A6", "A7", "A8", "Q3", "Q5", "Q7", "Q8", "RS3", "RS4", "RS5", "RS6", "RS7", "e-tron"] },
    { name: "BMW", count: 27, models: ["2 Series", "3 Series", "4 Series", "5 Series", "6 Series", "7 Series", "8 Series", "X1", "X2", "X3", "X4", "X5", "X6", "X7", "Z4", "i3", "i4", "iX"] },
    { name: "Buick", count: 9, models: ["Enclave", "Encore", "Encore GX", "Envision", "Regal"] },
    { name: "Cadillac", count: 15, models: ["CT4", "CT5", "CT6", "Escalade", "XT4", "XT5", "XT6", "Lyriq"] },
    { name: "Chevrolet", count: 19, models: ["Blazer", "Camaro", "Colorado", "Corvette", "Cruze", "Equinox", "Malibu", "Silverado", "Suburban", "Tahoe", "Traverse", "Trax"] },
    { name: "Chrysler", count: 5, models: ["300", "Pacifica", "Voyager"] },
    { name: "Dodge", count: 12, models: ["Challenger", "Charger", "Durango", "Journey", "Ram 1500", "Ram 2500", "Ram 3500"] },
    { name: "Ford", count: 21, models: ["Bronco", "Edge", "Escape", "Expedition", "Explorer", "F-150", "F-250", "F-350", "Focus", "Fusion", "Mustang", "Ranger", "Transit"] },
    { name: "Genesis", count: 7, models: ["G70", "G80", "G90", "GV60", "GV70", "GV80"] },
    { name: "GMC", count: 11, models: ["Acadia", "Canyon", "Sierra 1500", "Sierra 2500", "Sierra 3500", "Terrain", "Yukon", "Yukon XL"] },
    { name: "Honda", count: 14, models: ["Accord", "Civic", "CR-V", "HR-V", "Insight", "Odyssey", "Passport", "Pilot", "Ridgeline"] },
    { name: "Hyundai", count: 16, models: ["Accent", "Elantra", "Genesis", "Ioniq", "Kona", "Palisade", "Santa Cruz", "Santa Fe", "Sonata", "Tucson", "Veloster"] },
    { name: "Infiniti", count: 9, models: ["Q50", "Q60", "QX50", "QX55", "QX60", "QX80"] },
    { name: "Jaguar", count: 8, models: ["E-PACE", "F-PACE", "F-TYPE", "I-PACE", "XE", "XF", "XJ"] },
    { name: "Jeep", count: 13, models: ["Cherokee", "Compass", "Gladiator", "Grand Cherokee", "Grand Wagoneer", "Renegade", "Wagoneer", "Wrangler"] },
    { name: "Kia", count: 15, models: ["Carnival", "Forte", "K5", "Niro", "Optima", "Rio", "Sedona", "Seltos", "Sorento", "Soul", "Sportage", "Stinger", "Telluride"] },
    { name: "Land Rover", count: 10, models: ["Defender", "Discovery", "Discovery Sport", "Range Rover", "Range Rover Evoque", "Range Rover Sport", "Range Rover Velar"] },
    { name: "Lexus", count: 17, models: ["ES", "GS", "GX", "IS", "LC", "LS", "LX", "NX", "RC", "RX", "UX"] },
    { name: "Lincoln", count: 8, models: ["Aviator", "Continental", "Corsair", "MKZ", "Navigator", "Nautilus"] },
    { name: "Maserati", count: 6, models: ["Ghibli", "Levante", "Quattroporte", "MC20"] },
    { name: "Mazda", count: 9, models: ["CX-3", "CX-30", "CX-5", "CX-50", "CX-9", "Mazda3", "Mazda6", "MX-5 Miata"] },
    { name: "Mercedes-Benz", count: 25, models: ["A-Class", "C-Class", "CLA", "CLS", "E-Class", "G-Class", "GLA", "GLB", "GLC", "GLE", "GLS", "S-Class", "SL", "AMG GT"] },
    { name: "Mini", count: 7, models: ["Cooper", "Cooper Countryman", "Cooper Clubman", "Cooper SE"] },
    { name: "Mitsubishi", count: 6, models: ["Eclipse Cross", "Mirage", "Outlander", "Outlander Sport"] },
    { name: "Nissan", count: 14, models: ["370Z", "Altima", "Armada", "Frontier", "Kicks", "Leaf", "Maxima", "Murano", "Pathfinder", "Rogue", "Sentra", "Titan", "Versa"] },
    { name: "Porsche", count: 12, models: ["911", "718 Boxster", "718 Cayman", "Cayenne", "Macan", "Panamera", "Taycan"] },
    { name: "Ram", count: 8, models: ["1500", "2500", "3500", "ProMaster", "ProMaster City"] },
    { name: "Subaru", count: 11, models: ["Ascent", "BRZ", "Crosstrek", "Forester", "Impreza", "Legacy", "Outback", "WRX"] },
    { name: "Tesla", count: 6, models: ["Model 3", "Model S", "Model X", "Model Y", "Cybertruck"] },
    { name: "Toyota", count: 18, models: ["4Runner", "Avalon", "Camry", "Corolla", "Highlander", "Land Cruiser", "Prius", "RAV4", "Sequoia", "Sienna", "Tacoma", "Tundra", "Venza", "Yaris"] },
    { name: "Volkswagen", count: 12, models: ["Atlas", "Golf", "Jetta", "Passat", "Tiguan", "Touareg", "Arteon", "ID.4"] },
    { name: "Volvo", count: 9, models: ["S60", "S90", "V60", "V90", "XC40", "XC60", "XC90", "C40"] }
  ],
  
  models: {
    "Acura": [
      { name: "ILX", count: 3, trims: ["Base", "Premium", "Technology"] },
      { name: "MDX", count: 4, trims: ["Base", "Technology", "Advance", "Sport Hybrid"] },
      { name: "RDX", count: 3, trims: ["Base", "Technology", "A-Spec"] },
      { name: "TLX", count: 4, trims: ["Base", "Technology", "A-Spec", "Type S"] },
      { name: "NSX", count: 2, trims: ["Base", "Type S"] },
      { name: "RLX", count: 2, trims: ["Base", "Sport Hybrid"] }
    ],
    "BMW": [
      { name: "3 Series", count: 5, trims: ["330i", "330i xDrive", "M340i", "M340i xDrive", "M3"] },
      { name: "5 Series", count: 4, trims: ["530i", "530i xDrive", "540i xDrive", "M5"] },
      { name: "X3", count: 4, trims: ["sDrive30i", "xDrive30i", "M40i", "X3 M"] },
      { name: "X5", count: 4, trims: ["sDrive40i", "xDrive40i", "xDrive50i", "X5 M"] },
      { name: "X1", count: 2, trims: ["sDrive28i", "xDrive28i"] },
      { name: "X7", count: 3, trims: ["xDrive40i", "xDrive50i", "M50i"] },
      { name: "2 Series", count: 3, trims: ["228i", "M235i", "M2"] },
      { name: "4 Series", count: 4, trims: ["430i", "430i xDrive", "M440i xDrive", "M4"] }
    ],
    "Honda": [
      { name: "Accord", count: 5, trims: ["LX", "Sport", "EX", "EX-L", "Touring"] },
      { name: "Civic", count: 4, trims: ["LX", "Sport", "EX", "Touring"] },
      { name: "CR-V", count: 4, trims: ["LX", "EX", "EX-L", "Touring"] },
      { name: "Pilot", count: 4, trims: ["LX", "EX", "EX-L", "Touring"] },
      { name: "HR-V", count: 3, trims: ["LX", "Sport", "EX"] },
      { name: "Odyssey", count: 4, trims: ["LX", "EX", "EX-L", "Touring"] },
      { name: "Passport", count: 3, trims: ["Sport", "EX-L", "Touring"] },
      { name: "Ridgeline", count: 3, trims: ["Sport", "RTL", "RTL-E"] }
    ],
    "Toyota": [
      { name: "Camry", count: 5, trims: ["L", "LE", "SE", "XLE", "XSE"] },
      { name: "Corolla", count: 4, trims: ["L", "LE", "SE", "XLE"] },
      { name: "RAV4", count: 5, trims: ["LE", "XLE", "XLE Premium", "Adventure", "Limited"] },
      { name: "Highlander", count: 4, trims: ["L", "LE", "XLE", "Limited"] },
      { name: "4Runner", count: 4, trims: ["SR5", "TRD Off Road", "TRD Pro", "Limited"] },
      { name: "Prius", count: 4, trims: ["L Eco", "LE", "XLE", "Limited"] },
      { name: "Tacoma", count: 5, trims: ["SR", "SR5", "TRD Sport", "TRD Off Road", "Limited"] },
      { name: "Tundra", count: 4, trims: ["SR", "SR5", "Limited", "Platinum"] }
    ],
    "Ford": [
      { name: "F-150", count: 6, trims: ["Regular Cab", "SuperCab", "SuperCrew", "Raptor", "Lightning", "Limited"] },
      { name: "Mustang", count: 5, trims: ["EcoBoost", "GT", "Mach 1", "Shelby GT350", "Shelby GT500"] },
      { name: "Explorer", count: 4, trims: ["Base", "XLT", "Limited", "ST"] },
      { name: "Escape", count: 4, trims: ["S", "SE", "SEL", "Titanium"] },
      { name: "Edge", count: 3, trims: ["SE", "SEL", "Titanium"] },
      { name: "Expedition", count: 3, trims: ["XLT", "Limited", "Platinum"] },
      { name: "Bronco", count: 4, trims: ["Base", "Big Bend", "Black Diamond", "Wildtrak"] }
    ],
    "Chevrolet": [
      { name: "Silverado", count: 5, trims: ["Work Truck", "Custom", "LT", "RST", "High Country"] },
      { name: "Camaro", count: 4, trims: ["1LT", "2LT", "SS", "ZL1"] },
      { name: "Corvette", count: 3, trims: ["1LT", "2LT", "3LT"] },
      { name: "Equinox", count: 4, trims: ["L", "LS", "LT", "Premier"] },
      { name: "Malibu", count: 3, trims: ["L", "LS", "LT"] },
      { name: "Tahoe", count: 4, trims: ["LS", "LT", "RST", "High Country"] },
      { name: "Traverse", count: 4, trims: ["L", "LS", "LT", "Premier"] }
    ],
    "Mercedes-Benz": [
      { name: "C-Class", count: 4, trims: ["C 300", "C 300 4MATIC", "AMG C 43", "AMG C 63 S"] },
      { name: "E-Class", count: 4, trims: ["E 350", "E 350 4MATIC", "AMG E 53", "AMG E 63 S"] },
      { name: "S-Class", count: 3, trims: ["S 500", "S 580", "AMG S 63"] },
      { name: "GLC", count: 4, trims: ["GLC 300", "GLC 300 4MATIC", "AMG GLC 43", "AMG GLC 63 S"] },
      { name: "GLE", count: 4, trims: ["GLE 350", "GLE 450 4MATIC", "AMG GLE 53", "AMG GLE 63 S"] },
      { name: "G-Class", count: 2, trims: ["G 550", "AMG G 63"] }
    ],
    "Audi": [
      { name: "A3", count: 2, trims: ["Premium", "Premium Plus"] },
      { name: "A4", count: 3, trims: ["Premium", "Premium Plus", "Prestige"] },
      { name: "A6", count: 3, trims: ["Premium", "Premium Plus", "Prestige"] },
      { name: "Q3", count: 3, trims: ["Premium", "Premium Plus", "Prestige"] },
      { name: "Q5", count: 3, trims: ["Premium", "Premium Plus", "Prestige"] },
      { name: "Q7", count: 3, trims: ["Premium", "Premium Plus", "Prestige"] },
      { name: "RS3", count: 1, trims: ["Base"] },
      { name: "RS6", count: 1, trims: ["Base"] }
    ],
    "Tesla": [
      { name: "Model 3", count: 3, trims: ["Standard Range Plus", "Long Range", "Performance"] },
      { name: "Model S", count: 2, trims: ["Long Range", "Plaid"] },
      { name: "Model X", count: 2, trims: ["Long Range", "Plaid"] },
      { name: "Model Y", count: 3, trims: ["Standard Range", "Long Range", "Performance"] }
    ],
    "Lexus": [
      { name: "ES", count: 3, trims: ["ES 250", "ES 300h", "ES 350"] },
      { name: "IS", count: 3, trims: ["IS 300", "IS 350", "IS 500"] },
      { name: "RX", count: 4, trims: ["RX 350", "RX 350h", "RX 450h", "RX 350L"] },
      { name: "NX", count: 3, trims: ["NX 250", "NX 350", "NX 450h+"] },
      { name: "GX", count: 2, trims: ["Base", "Premium"] },
      { name: "LX", count: 2, trims: ["Base", "Premium"] }
    ],
    "Porsche": [
      { name: "911", count: 6, trims: ["Carrera", "Carrera S", "Carrera 4S", "Turbo", "Turbo S", "GT3"] },
      { name: "Cayenne", count: 4, trims: ["Base", "S", "GTS", "Turbo"] },
      { name: "Macan", count: 4, trims: ["Base", "S", "GTS", "Turbo"] },
      { name: "Panamera", count: 4, trims: ["Base", "4S", "GTS", "Turbo S"] },
      { name: "Taycan", count: 4, trims: ["Base", "4S", "GTS", "Turbo S"] }
    ]
  },
  
  trims: {
    // Acura trims
    "Acura_ILX": [
      { name: "Base", count: 1 },
      { name: "Premium", count: 1 },
      { name: "Technology", count: 1 }
    ],
    "Acura_MDX": [
      { name: "Base", count: 1 },
      { name: "Technology", count: 1 },
      { name: "Advance", count: 1 },
      { name: "Sport Hybrid", count: 1 }
    ],
    "Acura_RDX": [
      { name: "Base", count: 1 },
      { name: "Technology", count: 1 },
      { name: "A-Spec", count: 1 }
    ],
    "Acura_TLX": [
      { name: "Base", count: 1 },
      { name: "Technology", count: 1 },
      { name: "A-Spec", count: 1 },
      { name: "Type S", count: 1 }
    ],
    
    // BMW trims
    "BMW_3 Series": [
      { name: "330i", count: 1 },
      { name: "330i xDrive", count: 1 },
      { name: "M340i", count: 1 },
      { name: "M340i xDrive", count: 1 },
      { name: "M3", count: 1 }
    ],
    "BMW_5 Series": [
      { name: "530i", count: 1 },
      { name: "530i xDrive", count: 1 },
      { name: "540i xDrive", count: 1 },
      { name: "M5", count: 1 }
    ],
    "BMW_X3": [
      { name: "sDrive30i", count: 1 },
      { name: "xDrive30i", count: 1 },
      { name: "M40i", count: 1 },
      { name: "X3 M", count: 1 }
    ],
    "BMW_X5": [
      { name: "sDrive40i", count: 1 },
      { name: "xDrive40i", count: 1 },
      { name: "xDrive50i", count: 1 },
      { name: "X5 M", count: 1 }
    ],
    
    // Honda trims
    "Honda_Accord": [
      { name: "LX", count: 1 },
      { name: "Sport", count: 1 },
      { name: "EX", count: 1 },
      { name: "EX-L", count: 1 },
      { name: "Touring", count: 1 }
    ],
    "Honda_Civic": [
      { name: "LX", count: 1 },
      { name: "Sport", count: 1 },
      { name: "EX", count: 1 },
      { name: "Touring", count: 1 }
    ],
    "Honda_CR-V": [
      { name: "LX", count: 1 },
      { name: "EX", count: 1 },
      { name: "EX-L", count: 1 },
      { name: "Touring", count: 1 }
    ],
    "Honda_Pilot": [
      { name: "LX", count: 1 },
      { name: "EX", count: 1 },
      { name: "EX-L", count: 1 },
      { name: "Touring", count: 1 }
    ],
    
    // Toyota trims
    "Toyota_Camry": [
      { name: "L", count: 1 },
      { name: "LE", count: 1 },
      { name: "SE", count: 1 },
      { name: "XLE", count: 1 },
      { name: "XSE", count: 1 }
    ],
    "Toyota_Corolla": [
      { name: "L", count: 1 },
      { name: "LE", count: 1 },
      { name: "SE", count: 1 },
      { name: "XLE", count: 1 }
    ],
    "Toyota_RAV4": [
      { name: "LE", count: 1 },
      { name: "XLE", count: 1 },
      { name: "XLE Premium", count: 1 },
      { name: "Adventure", count: 1 },
      { name: "Limited", count: 1 }
    ],
    "Toyota_4Runner": [
      { name: "SR5", count: 1 },
      { name: "TRD Off Road", count: 1 },
      { name: "TRD Pro", count: 1 },
      { name: "Limited", count: 1 }
    ],
    
    // Ford trims
    "Ford_F-150": [
      { name: "Regular Cab", count: 1 },
      { name: "SuperCab", count: 1 },
      { name: "SuperCrew", count: 1 },
      { name: "Raptor", count: 1 },
      { name: "Lightning", count: 1 },
      { name: "Limited", count: 1 }
    ],
    "Ford_Mustang": [
      { name: "EcoBoost", count: 1 },
      { name: "GT", count: 1 },
      { name: "Mach 1", count: 1 },
      { name: "Shelby GT350", count: 1 },
      { name: "Shelby GT500", count: 1 }
    ],
    "Ford_Explorer": [
      { name: "Base", count: 1 },
      { name: "XLT", count: 1 },
      { name: "Limited", count: 1 },
      { name: "ST", count: 1 }
    ],
    
    // Tesla trims
    "Tesla_Model 3": [
      { name: "Standard Range Plus", count: 1 },
      { name: "Long Range", count: 1 },
      { name: "Performance", count: 1 }
    ],
    "Tesla_Model S": [
      { name: "Long Range", count: 1 },
      { name: "Plaid", count: 1 }
    ],
    "Tesla_Model Y": [
      { name: "Standard Range", count: 1 },
      { name: "Long Range", count: 1 },
      { name: "Performance", count: 1 }
    ],
    
    // Mercedes-Benz trims
    "Mercedes-Benz_C-Class": [
      { name: "C 300", count: 1 },
      { name: "C 300 4MATIC", count: 1 },
      { name: "AMG C 43", count: 1 },
      { name: "AMG C 63 S", count: 1 }
    ],
    "Mercedes-Benz_E-Class": [
      { name: "E 350", count: 1 },
      { name: "E 350 4MATIC", count: 1 },
      { name: "AMG E 53", count: 1 },
      { name: "AMG E 63 S", count: 1 }
    ],
    "Mercedes-Benz_GLC": [
      { name: "GLC 300", count: 1 },
      { name: "GLC 300 4MATIC", count: 1 },
      { name: "AMG GLC 43", count: 1 },
      { name: "AMG GLC 63 S", count: 1 }
    ],
    
    // Porsche trims
    "Porsche_911": [
      { name: "Carrera", count: 1 },
      { name: "Carrera S", count: 1 },
      { name: "Carrera 4S", count: 1 },
      { name: "Turbo", count: 1 },
      { name: "Turbo S", count: 1 },
      { name: "GT3", count: 1 }
    ],
    "Porsche_Cayenne": [
      { name: "Base", count: 1 },
      { name: "S", count: 1 },
      { name: "GTS", count: 1 },
      { name: "Turbo", count: 1 }
    ]
  }
};

// Helper function to get models for a specific make
export const getModelsForMake = (makeName) => {
  return vehicleData.models[makeName] || [];
};

// Helper function to get trims for a specific make/model combination
export const getTrimsForModel = (makeName, modelName) => {
  const key = `${makeName}_${modelName}`;
  return vehicleData.trims[key] || [];
};

// Enhanced search that includes both makes and models with hierarchical grouping
export const searchVehicles = (query, type = 'make') => {
  if (!query || query.length < 2) return [];
  
  const searchTerm = query.toLowerCase();
  
  if (type === 'make') {
    return vehicleData.makes.filter(make => 
      make.name.toLowerCase().includes(searchTerm)
    );
  }
  
  // Enhanced search that finds both makes and models, grouped hierarchically
  const results = new Map(); // Using Map to maintain order and group by make
  
  // First, search for matching makes
  vehicleData.makes.forEach(make => {
    if (make.name.toLowerCase().includes(searchTerm)) {
      if (!results.has(make.name)) {
        results.set(make.name, {
          make: make,
          models: [],
          isMatchingMake: true
        });
      }
    }
  });
  
  // Then search for matching models and group them under their makes
  Object.entries(vehicleData.models).forEach(([makeName, models]) => {
    const matchingModels = models.filter(model => 
      model.name.toLowerCase().includes(searchTerm)
    );
    
    if (matchingModels.length > 0) {
      if (!results.has(makeName)) {
        // Find the make object
        const makeObj = vehicleData.makes.find(m => m.name === makeName);
        results.set(makeName, {
          make: makeObj,
          models: matchingModels,
          isMatchingMake: false
        });
      } else {
        // Add models to existing make entry
        const existing = results.get(makeName);
        existing.models = [...existing.models, ...matchingModels];
      }
    }
  });
  
  // Convert Map to array while maintaining hierarchical structure
  return Array.from(results.values());
}; 
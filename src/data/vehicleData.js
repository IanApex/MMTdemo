// Sample vehicle data structure for Make, Model, Trim filtering
export const vehicleData = {
  makes: [
    { name: "Acura", count: 18, models: ["ILX", "Integra", "TLX", "TSX", "Vigor", "Legend", "MDX", "RDX", "ZDX", "NSX", "RLX", "RSX", "CL", "CSX", "EL", "RL", "SLX", "TL"] },
    { name: "Alfa Romeo", count: 12, models: ["Giulia", "Stelvio", "4C", "Tonale", "Spider", "GTV", "166", "159", "Brera", "MiTo", "Giulietta", "Montreal"] },
    { name: "Audi", count: 35, models: ["A1", "A3", "A4", "A5", "A6", "A7", "A8", "Q2", "Q3", "Q4 e-tron", "Q5", "Q7", "Q8", "e-tron", "e-tron GT", "R8", "RS3", "RS4", "RS5", "RS6", "RS7", "RS Q8", "S3", "S4", "S5", "S6", "S7", "S8", "SQ5", "SQ7", "SQ8", "TT", "TTS", "TT RS", "Allroad"] },
    { name: "BMW", count: 42, models: ["1 Series", "2 Series", "3 Series", "4 Series", "5 Series", "6 Series", "7 Series", "8 Series", "X1", "X2", "X3", "X4", "X5", "X6", "X7", "Z3", "Z4", "Z8", "i3", "i4", "iX", "i7", "i8", "M2", "M3", "M4", "M5", "M6", "M8", "X3 M", "X4 M", "X5 M", "X6 M", "ALPINA B7", "ALPINA B8", "ActiveHybrid", "2002", "320i", "328i", "335i", "525i", "530i", "540i"] },
    { name: "Buick", count: 15, models: ["Enclave", "Encore", "Encore GX", "Envision", "Envista", "Regal", "LaCrosse", "Verano", "Century", "LeSabre", "Park Avenue", "Riviera", "Skylark", "Electra", "Roadmaster"] },
    { name: "Cadillac", count: 25, models: ["CT4", "CT5", "CT6", "Escalade", "XT4", "XT5", "XT6", "Lyriq", "Celestiq", "ATS", "CTS", "DTS", "STS", "XLR", "DeVille", "Eldorado", "Fleetwood", "Seville", "SRX", "ELR", "Catera", "Cimarron", "Allante", "Brougham", "Sixty Special"] },
    { name: "Chevrolet", count: 45, models: ["Blazer", "Camaro", "Colorado", "Corvette", "Cruze", "Equinox", "Malibu", "Silverado 1500", "Silverado 2500", "Silverado 3500", "Suburban", "Tahoe", "Traverse", "Trax", "Spark", "Sonic", "Impala", "SS", "Monte Carlo", "Cobalt", "Aveo", "HHR", "Avalanche", "Express", "Astro", "S-10", "C10", "Bel Air", "Chevelle", "Nova", "Caprice", "Citation", "Cavalier", "Celebrity", "Beretta", "Corsica", "Lumina", "Uplander", "Venture", "TrailBlazer", "Tracker", "Metro", "Prizm", "El Camino", "Volt"] },
    { name: "Chrysler", count: 20, models: ["300", "Pacifica", "Voyager", "Town & Country", "PT Cruiser", "Sebring", "Concorde", "LHS", "New Yorker", "Fifth Avenue", "LeBaron", "Cirrus", "Stratus", "Prowler", "Crossfire", "Aspen", "TC", "Conquest", "Laser", "Imperial"] },
    { name: "Dodge", count: 30, models: ["Challenger", "Charger", "Durango", "Journey", "Grand Caravan", "Caravan", "Dart", "Avenger", "Neon", "Stratus", "Intrepid", "Magnum", "Nitro", "Caliber", "Shadow", "Spirit", "Aries", "Omni", "Colt", "Daytona", "Stealth", "Viper", "Ram 1500", "Ram 2500", "Ram 3500", "Dakota", "Rampage", "D50", "Ramcharger", "Ram Van"] },
    { name: "Ford", count: 55, models: ["Bronco", "Bronco Sport", "Edge", "Escape", "Expedition", "Explorer", "F-150", "F-250", "F-350", "F-450", "F-550", "Focus", "Fusion", "Mustang", "Ranger", "Transit", "Transit Connect", "Fiesta", "Taurus", "Freestyle", "Five Hundred", "Freestar", "Windstar", "Aerostar", "Econoline", "E-Series", "Excursion", "Crown Victoria", "Grand Marquis", "Thunderbird", "Tempo", "Escort", "Contour", "Probe", "Maverick", "Pinto", "Fairmont", "LTD", "Galaxy", "Country Squire", "Falcon", "Ranchero", "Torino", "Mustang Mach-E", "Lightning", "Raptor", "GT", "Shelby", "Cobra", "Bronco II", "Courier", "Club Wagon", "F-100", "F-250 Super Duty", "F-350 Super Duty"] },
    { name: "Genesis", count: 8, models: ["G70", "G80", "G90", "GV60", "GV70", "GV80", "Coupe", "Sedan"] },
    { name: "GMC", count: 20, models: ["Acadia", "Canyon", "Sierra 1500", "Sierra 2500", "Sierra 3500", "Terrain", "Yukon", "Yukon XL", "Savana", "Safari", "Envoy", "Jimmy", "Sonoma", "Syclone", "Typhoon", "Suburban", "Vandura", "Rally", "TopKick", "C/K Series"] },
    { name: "Honda", count: 25, models: ["Accord", "Civic", "CR-V", "HR-V", "Insight", "Odyssey", "Passport", "Pilot", "Ridgeline", "Fit", "Element", "S2000", "Prelude", "CRX", "del Sol", "Crosstour", "CR-Z", "FCX Clarity", "Clarity", "City", "Legend", "Vigor", "Ascot", "Integra", "Beat"] },
    { name: "Hyundai", count: 30, models: ["Accent", "Elantra", "Ioniq 5", "Ioniq 6", "Kona", "Palisade", "Santa Cruz", "Santa Fe", "Sonata", "Tucson", "Veloster", "Venue", "Azera", "Genesis", "Equus", "Tiburon", "Entourage", "Veracruz", "Excel", "Scoupe", "XG300", "XG350", "Matrix", "i10", "i20", "i30", "ix35", "ix20", "Genesis Coupe", "Nexo"] },
    { name: "Infiniti", count: 20, models: ["Q50", "Q60", "QX50", "QX55", "QX60", "QX70", "QX80", "Q30", "Q40", "Q45", "QX4", "QX56", "G20", "G25", "G35", "G37", "I30", "I35", "J30", "M Series"] },
    { name: "Jaguar", count: 15, models: ["E-PACE", "F-PACE", "F-TYPE", "I-PACE", "XE", "XF", "XJ", "XK", "XJS", "XJR", "S-Type", "X-Type", "XJ8", "XJL", "XKR"] },
    { name: "Jeep", count: 18, models: ["Cherokee", "Compass", "Gladiator", "Grand Cherokee", "Grand Wagoneer", "Renegade", "Wagoneer", "Wrangler", "Liberty", "Patriot", "Commander", "Comanche", "CJ Series", "Scrambler", "J-Series", "Forward Control", "FC Series", "Wagoneer Limited"] },
    { name: "Kia", count: 25, models: ["Carnival", "Forte", "K5", "Niro", "Optima", "Rio", "Sedona", "Seltos", "Sorento", "Soul", "Sportage", "Stinger", "Telluride", "Cadenza", "K900", "Amanti", "Spectra", "Sephia", "Rondo", "Borrego", "EV6", "Forte5", "Forte Koup", "Sportage (Europe)", "Cerato"] },
    { name: "Land Rover", count: 15, models: ["Defender", "Discovery", "Discovery Sport", "Range Rover", "Range Rover Evoque", "Range Rover Sport", "Range Rover Velar", "Freelander", "LR2", "LR3", "LR4", "Series I", "Series II", "Series III", "Forward Control"] },
    { name: "Lexus", count: 25, models: ["ES", "GS", "GX", "IS", "LC", "LS", "LX", "NX", "RC", "RX", "UX", "CT", "HS", "SC", "LFA", "GS F", "IS F", "RC F", "RX L", "ES 300h", "GS 300h", "NX 300h", "RX 450h", "UX 300e", "LBX"] },
    { name: "Lincoln", count: 15, models: ["Aviator", "Continental", "Corsair", "MKZ", "Navigator", "Nautilus", "MKC", "MKS", "MKT", "MKX", "Town Car", "LS", "Zephyr", "Mark LT", "Blackwood"] },
    { name: "Maserati", count: 12, models: ["Ghibli", "Levante", "Quattroporte", "MC20", "GranTurismo", "GranCabrio", "Coupe", "Spyder", "3200 GT", "Shamal", "Biturbo", "Grecale"] },
    { name: "Mazda", count: 20, models: ["CX-3", "CX-30", "CX-5", "CX-50", "CX-9", "CX-90", "Mazda3", "Mazda6", "MX-5 Miata", "MX-30", "CX-7", "Mazda2", "Mazda5", "MPV", "Millenia", "Protege", "626", "929", "MX-3", "MX-6"] },
    { name: "Mercedes-Benz", count: 45, models: ["A-Class", "C-Class", "CLA", "CLS", "E-Class", "G-Class", "GLA", "GLB", "GLC", "GLE", "GLS", "S-Class", "SL", "AMG GT", "SLC", "SLK", "SLR", "SLS", "B-Class", "R-Class", "GL-Class", "GLK-Class", "ML-Class", "M-Class", "CL-Class", "CLK-Class", "190E", "W123", "W124", "W126", "W140", "W202", "W203", "W204", "W210", "W211", "W212", "W220", "W221", "Maybach S-Class", "EQB", "EQC", "EQE", "EQS", "EQV"] },
    { name: "Mini", count: 12, models: ["Cooper", "Cooper Countryman", "Cooper Clubman", "Cooper SE", "Paceman", "Roadster", "Coupe", "John Cooper Works", "GP", "Cabrio", "One", "Convertible"] },
    { name: "Mitsubishi", count: 15, models: ["Eclipse Cross", "Mirage", "Outlander", "Outlander Sport", "Lancer", "Galant", "Diamante", "3000GT", "Eclipse", "Montero", "Montero Sport", "Endeavor", "Raider", "i-MiEV", "ASX"] },
    { name: "Nissan", count: 35, models: ["370Z", "Altima", "Armada", "Frontier", "Kicks", "Leaf", "Maxima", "Murano", "Pathfinder", "Rogue", "Sentra", "Titan", "Versa", "350Z", "300ZX", "240SX", "200SX", "NV200", "NV Cargo", "NV Passenger", "Quest", "Xterra", "Cube", "Juke", "GT-R", "Stanza", "Pulsar", "Pickup", "Hardbody", "D21", "Datsun 280Z", "Datsun 240Z", "Datsun 510", "Ariya", "Qashqai"] },
    { name: "Porsche", count: 18, models: ["911", "718 Boxster", "718 Cayman", "Cayenne", "Macan", "Panamera", "Taycan", "928", "924", "944", "968", "Carrera GT", "959", "918 Spyder", "Cayman GT4", "911 GT3", "911 Turbo", "Boxter"] },
    { name: "Ram", count: 12, models: ["1500", "2500", "3500", "4500", "5500", "ProMaster", "ProMaster City", "Classic", "Dakota", "SRT-10", "Van", "Wagon"] },
    { name: "Subaru", count: 18, models: ["Ascent", "BRZ", "Crosstrek", "Forester", "Impreza", "Legacy", "Outback", "WRX", "WRX STI", "Tribeca", "Baja", "SVX", "Loyale", "GL", "DL", "Leone", "XT", "Justy"] },
    { name: "Tesla", count: 8, models: ["Model 3", "Model S", "Model X", "Model Y", "Cybertruck", "Roadster", "Semi", "Model 2"] },
    { name: "Toyota", count: 40, models: ["4Runner", "Avalon", "Camry", "Corolla", "Highlander", "Land Cruiser", "Prius", "RAV4", "Sequoia", "Sienna", "Tacoma", "Tundra", "Venza", "Yaris", "C-HR", "86", "Supra", "Celica", "MR2", "Echo", "Tercel", "Cressida", "Crown", "Matrix", "Solara", "Previa", "T100", "Pickup", "Van", "Prius c", "Prius v", "Prius Prime", "bZ4X", "Mirai", "FJ Cruiser", "Paseo", "Carina", "Starlet", "Corolla Cross", "GR86"] },
    { name: "Volkswagen", count: 25, models: ["Atlas", "Golf", "Jetta", "Passat", "Tiguan", "Touareg", "Arteon", "ID.4", "e-Golf", "Golf GTI", "Golf R", "Beetle", "CC", "Eos", "Routan", "Phaeton", "Corrado", "Scirocco", "Cabrio", "Fox", "Rabbit", "Quantum", "Vanagon", "Eurovan", "ID. Buzz"] },
    { name: "Volvo", count: 20, models: ["S60", "S90", "V60", "V90", "XC40", "XC60", "XC90", "C40", "EX90", "XC70", "V70", "S70", "S80", "C30", "C70", "940", "960", "850", "740", "780"] }
  ],
  
  models: {
    "Acura": [
      { name: "ILX", count: 3, trims: ["Base", "Premium", "Technology"] },
      { name: "Integra", count: 3, trims: ["Base", "A-Spec", "Type S"] },
      { name: "TLX", count: 5, trims: ["Base", "Technology", "A-Spec", "Advance", "Type S"] },
      { name: "TSX", count: 3, trims: ["Base", "Technology", "V6"] },
      { name: "Vigor", count: 2, trims: ["GS", "LS"] },
      { name: "Legend", count: 3, trims: ["Base", "L", "LS"] },
      { name: "MDX", count: 5, trims: ["Base", "Technology", "A-Spec", "Advance", "Type S"] },
      { name: "RDX", count: 4, trims: ["Base", "Technology", "A-Spec", "Advance"] },
      { name: "ZDX", count: 3, trims: ["Base", "Technology", "Advance"] },
      { name: "NSX", count: 2, trims: ["Base", "Type S"] },
      { name: "RLX", count: 3, trims: ["Base", "Technology", "Sport Hybrid"] },
      { name: "RSX", count: 3, trims: ["Base", "Type-S", "Premium"] }
    ],
    "Alfa Romeo": [
      { name: "Giulia", count: 4, trims: ["Ti", "Ti Sport", "Ti Lusso", "Quadrifoglio"] },
      { name: "Stelvio", count: 4, trims: ["Ti", "Ti Sport", "Ti Lusso", "Quadrifoglio"] },
      { name: "4C", count: 2, trims: ["Base", "Spider"] },
      { name: "Tonale", count: 3, trims: ["Sprint", "Ti", "Veloce"] },
      { name: "Spider", count: 3, trims: ["Base", "S", "Veloce"] },
      { name: "GTV", count: 2, trims: ["Base", "Cup"] }
    ],
    "Audi": [
      { name: "A3", count: 3, trims: ["Premium", "Premium Plus", "Prestige"] },
      { name: "A4", count: 4, trims: ["Premium", "Premium Plus", "Prestige", "S4"] },
      { name: "A5", count: 4, trims: ["Premium", "Premium Plus", "Prestige", "S5"] },
      { name: "A6", count: 4, trims: ["Premium", "Premium Plus", "Prestige", "S6"] },
      { name: "A7", count: 3, trims: ["Premium Plus", "Prestige", "S7"] },
      { name: "A8", count: 3, trims: ["Base", "L", "S8"] },
      { name: "Q3", count: 3, trims: ["Premium", "Premium Plus", "Prestige"] },
      { name: "Q5", count: 4, trims: ["Premium", "Premium Plus", "Prestige", "SQ5"] },
      { name: "Q7", count: 4, trims: ["Premium", "Premium Plus", "Prestige", "SQ7"] },
      { name: "Q8", count: 4, trims: ["Premium Plus", "Prestige", "SQ8", "RS Q8"] },
      { name: "e-tron", count: 3, trims: ["Premium Plus", "Prestige", "S"] },
      { name: "TT", count: 3, trims: ["Base", "S", "RS"] },
      { name: "R8", count: 2, trims: ["V10", "V10 Performance"] }
    ],
    "BMW": [
      { name: "2 Series", count: 4, trims: ["228i", "M235i", "M240i", "M2"] },
      { name: "3 Series", count: 6, trims: ["320i", "330i", "330i xDrive", "M340i", "M340i xDrive", "M3"] },
      { name: "4 Series", count: 5, trims: ["430i", "430i xDrive", "M440i", "M440i xDrive", "M4"] },
      { name: "5 Series", count: 5, trims: ["530i", "530i xDrive", "540i", "540i xDrive", "M5"] },
      { name: "7 Series", count: 4, trims: ["740i", "740i xDrive", "750i xDrive", "M760i"] },
      { name: "8 Series", count: 4, trims: ["840i", "840i xDrive", "M850i xDrive", "M8"] },
      { name: "X1", count: 3, trims: ["sDrive28i", "xDrive28i", "M35i"] },
      { name: "X2", count: 3, trims: ["sDrive28i", "xDrive28i", "M35i"] },
      { name: "X3", count: 4, trims: ["sDrive30i", "xDrive30i", "M40i", "X3 M"] },
      { name: "X4", count: 4, trims: ["xDrive30i", "M40i", "M Competition", "X4 M"] },
      { name: "X5", count: 5, trims: ["sDrive40i", "xDrive40i", "xDrive50i", "M50i", "X5 M"] },
      { name: "X6", count: 4, trims: ["sDrive40i", "xDrive40i", "M50i", "X6 M"] },
      { name: "X7", count: 4, trims: ["xDrive40i", "xDrive50i", "M50i", "M60i"] },
      { name: "Z4", count: 3, trims: ["sDrive30i", "M40i", "M"] },
      { name: "i4", count: 3, trims: ["eDrive40", "M50", "xDrive40"] }
    ],
    "Buick": [
      { name: "Enclave", count: 4, trims: ["Preferred", "Essence", "Premium", "Avenir"] },
      { name: "Encore", count: 3, trims: ["Preferred", "Essence", "Premium"] },
      { name: "Encore GX", count: 4, trims: ["Preferred", "Select", "Essence", "ST"] },
      { name: "Envision", count: 4, trims: ["Preferred", "Essence", "Premium", "Avenir"] },
      { name: "Envista", count: 3, trims: ["Preferred", "Essence", "ST"] },
      { name: "Regal", count: 4, trims: ["1SV", "Preferred", "Essence", "GS"] }
    ],
    "Cadillac": [
      { name: "CT4", count: 4, trims: ["Luxury", "Premium Luxury", "Sport", "V"] },
      { name: "CT5", count: 5, trims: ["Luxury", "Premium Luxury", "Sport", "V", "Blackwing"] },
      { name: "Escalade", count: 5, trims: ["Luxury", "Premium Luxury", "Sport", "Sport Platinum", "V"] },
      { name: "XT4", count: 4, trims: ["Luxury", "Premium Luxury", "Sport", "V-Series"] },
      { name: "XT5", count: 4, trims: ["Luxury", "Premium Luxury", "Sport", "V-Series"] },
      { name: "XT6", count: 4, trims: ["Luxury", "Premium Luxury", "Sport", "V-Series"] },
      { name: "Lyriq", count: 3, trims: ["Luxury", "Sport", "Sport 3"] },
      { name: "Celestiq", count: 2, trims: ["Base", "Ultra Luxury"] }
    ],
    "Chevrolet": [
      { name: "Silverado 1500", count: 6, trims: ["Work Truck", "Custom", "LT", "RST", "LTZ", "High Country"] },
      { name: "Camaro", count: 5, trims: ["1LT", "2LT", "1SS", "2SS", "ZL1"] },
      { name: "Corvette", count: 4, trims: ["1LT", "2LT", "3LT", "Z06"] },
      { name: "Equinox", count: 4, trims: ["L", "LS", "LT", "Premier"] },
      { name: "Malibu", count: 4, trims: ["L", "LS", "LT", "Premier"] },
      { name: "Tahoe", count: 5, trims: ["LS", "LT", "Z71", "RST", "High Country"] },
      { name: "Traverse", count: 4, trims: ["L", "LS", "LT", "Premier"] },
      { name: "Blazer", count: 4, trims: ["L", "LT", "RS", "Premier"] },
      { name: "Colorado", count: 4, trims: ["Work Truck", "LT", "Z71", "ZR2"] },
      { name: "Suburban", count: 5, trims: ["LS", "LT", "Z71", "RST", "High Country"] }
    ],
    "Chrysler": [
      { name: "300", count: 4, trims: ["Touring", "300S", "300C", "SRT8"] },
      { name: "Pacifica", count: 4, trims: ["Touring", "Touring L", "Limited", "Pinnacle"] },
      { name: "Voyager", count: 2, trims: ["L", "LX"] }
    ],
    "Dodge": [
      { name: "Challenger", count: 6, trims: ["SXT", "GT", "R/T", "Scat Pack", "SRT Hellcat", "SRT Demon"] },
      { name: "Charger", count: 6, trims: ["SXT", "GT", "R/T", "Scat Pack", "SRT Hellcat", "SRT Demon"] },
      { name: "Durango", count: 5, trims: ["SXT", "GT", "R/T", "Citadel", "SRT"] },
      { name: "Journey", count: 4, trims: ["SE", "SXT", "Crossroad", "R/T"] },
      { name: "Grand Caravan", count: 4, trims: ["SE", "SXT", "GT", "R/T"] }
    ],
    "Ford": [
      { name: "F-150", count: 7, trims: ["Regular Cab", "SuperCab", "SuperCrew", "Raptor", "Lightning", "Limited", "Platinum"] },
      { name: "Mustang", count: 6, trims: ["EcoBoost", "GT", "Mach 1", "Shelby GT350", "Shelby GT500", "Dark Horse"] },
      { name: "Explorer", count: 5, trims: ["Base", "XLT", "Limited", "King Ranch", "ST"] },
      { name: "Escape", count: 4, trims: ["S", "SE", "SEL", "Titanium"] },
      { name: "Edge", count: 4, trims: ["SE", "SEL", "Titanium", "ST"] },
      { name: "Expedition", count: 4, trims: ["XLT", "Limited", "King Ranch", "Platinum"] },
      { name: "Bronco", count: 5, trims: ["Base", "Big Bend", "Black Diamond", "Outer Banks", "Wildtrak"] },
      { name: "Bronco Sport", count: 4, trims: ["Base", "Big Bend", "Outer Banks", "Badlands"] },
      { name: "Ranger", count: 4, trims: ["XL", "XLT", "Lariat", "Raptor"] },
      { name: "Maverick", count: 4, trims: ["XL", "XLT", "Lariat", "Tremor"] }
    ],
    "Genesis": [
      { name: "G70", count: 4, trims: ["2.0T", "2.0T Sport", "3.3T Sport", "3.3T Sport Prestige"] },
      { name: "G80", count: 4, trims: ["2.5T", "3.5T", "3.5T Sport", "3.5T Sport Prestige"] },
      { name: "G90", count: 3, trims: ["3.3T Premium", "3.3T Prestige", "5.0 Ultimate"] },
      { name: "GV60", count: 3, trims: ["Advanced", "Performance", "Performance+"] },
      { name: "GV70", count: 4, trims: ["2.5T", "3.5T", "3.5T Sport", "3.5T Sport Prestige"] },
      { name: "GV80", count: 4, trims: ["2.5T", "3.5T", "3.5T Advanced", "3.5T Prestige"] }
    ],
    "GMC": [
      { name: "Sierra 1500", count: 6, trims: ["Pro", "Elevation", "SLE", "SLT", "AT4", "Denali"] },
      { name: "Yukon", count: 5, trims: ["SLE", "SLT", "AT4", "Denali", "Denali Ultimate"] },
      { name: "Acadia", count: 4, trims: ["Elevation", "SLE", "SLT", "Denali"] },
      { name: "Terrain", count: 4, trims: ["Elevation", "SLE", "SLT", "Denali"] },
      { name: "Canyon", count: 4, trims: ["Elevation", "SLE", "SLT", "AT4"] },
      { name: "Yukon XL", count: 5, trims: ["SLE", "SLT", "AT4", "Denali", "Denali Ultimate"] }
    ],
    "Honda": [
      { name: "Accord", count: 5, trims: ["LX", "Sport", "EX", "EX-L", "Touring"] },
      { name: "Civic", count: 5, trims: ["LX", "Sport", "EX", "Touring", "Type R"] },
      { name: "CR-V", count: 5, trims: ["LX", "EX", "EX-L", "Sport", "Touring"] },
      { name: "Pilot", count: 5, trims: ["LX", "EX", "EX-L", "Special Edition", "Touring"] },
      { name: "HR-V", count: 4, trims: ["LX", "Sport", "EX", "EX-L"] },
      { name: "Odyssey", count: 5, trims: ["LX", "EX", "EX-L", "Touring", "Elite"] },
      { name: "Passport", count: 4, trims: ["Sport", "EX-L", "TrailSport", "Elite"] },
      { name: "Ridgeline", count: 4, trims: ["Sport", "RTL", "RTL-E", "Black Edition"] },
      { name: "Fit", count: 3, trims: ["LX", "Sport", "EX-L"] },
      { name: "Insight", count: 3, trims: ["LX", "EX", "Touring"] }
    ],
    "Hyundai": [
      { name: "Elantra", count: 4, trims: ["SE", "SEL", "Limited", "N"] },
      { name: "Sonata", count: 4, trims: ["SE", "SEL", "Limited", "N Line"] },
      { name: "Tucson", count: 5, trims: ["SE", "SEL", "N Line", "Limited", "Calligraphy"] },
      { name: "Santa Fe", count: 5, trims: ["SE", "SEL", "Limited", "Calligraphy", "XRT"] },
      { name: "Palisade", count: 4, trims: ["SE", "SEL", "Limited", "Calligraphy"] },
      { name: "Kona", count: 4, trims: ["SE", "SEL", "Limited", "N"] },
      { name: "Venue", count: 3, trims: ["SE", "SEL", "Denim"] },
      { name: "Santa Cruz", count: 4, trims: ["SE", "SEL", "Limited", "N Line"] },
      { name: "Ioniq 5", count: 4, trims: ["SE", "SEL", "Limited", "Calligraphy"] },
      { name: "Ioniq 6", count: 4, trims: ["SE", "SEL", "Limited", "Calligraphy"] }
    ],
    "Kia": [
      { name: "Forte", count: 4, trims: ["LXS", "S", "EX", "GT"] },
      { name: "K5", count: 4, trims: ["LXS", "S", "EX", "GT"] },
      { name: "Stinger", count: 4, trims: ["GT-Line", "GT1", "GT2", "GTS"] },
      { name: "Rio", count: 3, trims: ["LX", "S", "EX"] },
      { name: "Soul", count: 4, trims: ["LX", "S", "EX", "Turbo"] },
      { name: "Seltos", count: 4, trims: ["LX", "S", "EX", "SX Turbo"] },
      { name: "Sportage", count: 4, trims: ["LX", "S", "EX", "SX Turbo"] },
      { name: "Sorento", count: 5, trims: ["LX", "S", "EX", "SX", "SX Turbo"] },
      { name: "Telluride", count: 4, trims: ["LX", "S", "EX", "SX"] },
      { name: "Carnival", count: 4, trims: ["LX", "EX", "SX", "SX Prestige"] },
      { name: "Niro", count: 4, trims: ["LX", "S", "EX", "SX Touring"] },
      { name: "EV6", count: 4, trims: ["Light", "Wind", "GT-Line", "GT"] }
    ],
    "Lexus": [
      { name: "ES", count: 4, trims: ["ES 250", "ES 300h", "ES 350", "ES 350 F Sport"] },
      { name: "IS", count: 4, trims: ["IS 300", "IS 350", "IS 350 F Sport", "IS 500 F Sport"] },
      { name: "LS", count: 3, trims: ["LS 500", "LS 500h", "LS 500 F Sport"] },
      { name: "GS", count: 4, trims: ["GS 300", "GS 350", "GS 350 F Sport", "GS F"] },
      { name: "RX", count: 5, trims: ["RX 350", "RX 350h", "RX 350 F Sport", "RX 450h", "RX 350L"] },
      { name: "GX", count: 3, trims: ["Base", "Premium", "Luxury"] },
      { name: "LX", count: 3, trims: ["Base", "Premium", "Ultra Luxury"] },
      { name: "NX", count: 4, trims: ["NX 250", "NX 350", "NX 350h", "NX 450h+"] },
      { name: "UX", count: 3, trims: ["UX 200", "UX 250h", "UX 300e"] }
    ],
    "Mercedes-Benz": [
      { name: "C-Class", count: 5, trims: ["C 300", "C 300 4MATIC", "AMG C 43", "AMG C 63", "AMG C 63 S"] },
      { name: "E-Class", count: 5, trims: ["E 350", "E 450 4MATIC", "AMG E 53", "AMG E 63", "AMG E 63 S"] },
      { name: "S-Class", count: 4, trims: ["S 500", "S 580", "AMG S 63", "Maybach S 580"] },
      { name: "GLC", count: 5, trims: ["GLC 300", "GLC 300 4MATIC", "AMG GLC 43", "AMG GLC 63", "AMG GLC 63 S"] },
      { name: "GLE", count: 5, trims: ["GLE 350", "GLE 450 4MATIC", "AMG GLE 53", "AMG GLE 63", "AMG GLE 63 S"] },
      { name: "GLS", count: 4, trims: ["GLS 450", "GLS 580", "AMG GLS 63", "Maybach GLS 600"] },
      { name: "G-Class", count: 3, trims: ["G 550", "AMG G 63", "AMG G 65"] },
      { name: "A-Class", count: 3, trims: ["A 220", "AMG A 35", "AMG A 45"] }
    ],
    "Nissan": [
      { name: "Altima", count: 4, trims: ["S", "SV", "SL", "SR"] },
      { name: "Sentra", count: 4, trims: ["S", "SV", "SR", "NISMO"] },
      { name: "Maxima", count: 3, trims: ["S", "SV", "SL"] },
      { name: "Versa", count: 3, trims: ["S", "SV", "SR"] },
      { name: "Rogue", count: 4, trims: ["S", "SV", "SL", "Platinum"] },
      { name: "Murano", count: 4, trims: ["S", "SV", "SL", "Platinum"] },
      { name: "Pathfinder", count: 4, trims: ["S", "SV", "SL", "Platinum"] },
      { name: "Armada", count: 4, trims: ["S", "SV", "SL", "Platinum"] },
      { name: "Frontier", count: 4, trims: ["S", "SV", "Pro-4X", "Pro-X"] },
      { name: "Titan", count: 4, trims: ["S", "SV", "Pro-4X", "Platinum Reserve"] },
      { name: "370Z", count: 3, trims: ["Base", "Sport", "NISMO"] },
      { name: "GT-R", count: 3, trims: ["Premium", "Track Edition", "NISMO"] }
    ],
    "Subaru": [
      { name: "Impreza", count: 3, trims: ["Base", "Premium", "Sport"] },
      { name: "Legacy", count: 4, trims: ["Base", "Premium", "Limited", "Touring XT"] },
      { name: "Outback", count: 5, trims: ["Base", "Premium", "Limited", "Touring", "Wilderness"] },
      { name: "Forester", count: 4, trims: ["Base", "Premium", "Sport", "Limited"] },
      { name: "Ascent", count: 4, trims: ["Base", "Premium", "Limited", "Touring"] },
      { name: "Crosstrek", count: 4, trims: ["Base", "Premium", "Sport", "Limited"] },
      { name: "WRX", count: 3, trims: ["Base", "Premium", "Limited"] },
      { name: "BRZ", count: 3, trims: ["Premium", "Limited", "tS"] }
    ],
    "Tesla": [
      { name: "Model 3", count: 3, trims: ["Standard Range Plus", "Long Range", "Performance"] },
      { name: "Model S", count: 2, trims: ["Long Range", "Plaid"] },
      { name: "Model X", count: 2, trims: ["Long Range", "Plaid"] },
      { name: "Model Y", count: 3, trims: ["Standard Range", "Long Range", "Performance"] },
      { name: "Cybertruck", count: 3, trims: ["Single Motor", "Dual Motor", "Tri Motor"] }
    ],
    "Toyota": [
      { name: "Camry", count: 5, trims: ["LE", "SE", "XLE", "XSE", "TRD"] },
      { name: "Corolla", count: 4, trims: ["L", "LE", "SE", "XLE"] },
      { name: "RAV4", count: 5, trims: ["LE", "XLE", "XLE Premium", "Adventure", "Limited"] },
      { name: "Highlander", count: 5, trims: ["L", "LE", "XLE", "Limited", "Platinum"] },
      { name: "4Runner", count: 5, trims: ["SR5", "SR5 Premium", "TRD Off Road", "TRD Pro", "Limited"] },
      { name: "Prius", count: 4, trims: ["L Eco", "LE", "XLE", "Limited"] },
      { name: "Tacoma", count: 6, trims: ["SR", "SR5", "TRD Sport", "TRD Off Road", "Limited", "TRD Pro"] },
      { name: "Tundra", count: 5, trims: ["SR", "SR5", "Limited", "Platinum", "TRD Pro"] },
      { name: "Sienna", count: 4, trims: ["LE", "XLE", "Limited", "Platinum"] },
      { name: "Sequoia", count: 4, trims: ["SR5", "Limited", "Platinum", "TRD Pro"] },
      { name: "Avalon", count: 4, trims: ["XLE", "XSE", "Limited", "Touring"] },
      { name: "Supra", count: 3, trims: ["2.0", "3.0", "3.0 Premium"] },
      { name: "86", count: 3, trims: ["Base", "Premium", "GR86"] }
    ],
    "Volkswagen": [
      { name: "Jetta", count: 4, trims: ["S", "SE", "SEL", "GLI"] },
      { name: "Golf", count: 4, trims: ["S", "SE", "SEL", "GTI"] },
      { name: "Passat", count: 3, trims: ["S", "SE", "SEL Premium"] },
      { name: "Tiguan", count: 4, trims: ["S", "SE", "SEL", "SEL Premium"] },
      { name: "Atlas", count: 4, trims: ["S", "SE", "SEL", "SEL Premium"] },
      { name: "Arteon", count: 3, trims: ["SE", "SEL", "SEL Premium"] },
      { name: "ID.4", count: 4, trims: ["Pro", "Pro S", "AWD Pro", "AWD Pro S"] }
          ],
      "Infiniti": [
        { name: "Q50", count: 4, trims: ["Pure", "Luxe", "Sensory", "Red Sport 400"] },
        { name: "Q60", count: 4, trims: ["Pure", "Luxe", "Sensory", "Red Sport 400"] },
        { name: "QX50", count: 4, trims: ["Pure", "Luxe", "Sensory", "Autograph"] },
        { name: "QX60", count: 4, trims: ["Pure", "Luxe", "Sensory", "Autograph"] },
        { name: "QX80", count: 4, trims: ["Pure", "Luxe", "Sensory", "Autograph"] }
      ],
      "Jeep": [
        { name: "Wrangler", count: 6, trims: ["Sport", "Sport S", "Sahara", "Rubicon", "Sahara High Altitude", "Rubicon High Altitude"] },
        { name: "Grand Cherokee", count: 5, trims: ["Laredo", "Limited", "Overland", "Summit", "SRT"] },
        { name: "Cherokee", count: 4, trims: ["Latitude", "Latitude Plus", "Limited", "Overland"] },
        { name: "Compass", count: 4, trims: ["Sport", "Latitude", "Limited", "Trailhawk"] },
        { name: "Renegade", count: 4, trims: ["Sport", "Latitude", "Limited", "Trailhawk"] },
        { name: "Gladiator", count: 4, trims: ["Sport", "Sport S", "Overland", "Rubicon"] }
      ],
      "Land Rover": [
        { name: "Range Rover", count: 4, trims: ["Base", "HSE", "Autobiography", "SVAutobiography"] },
        { name: "Range Rover Sport", count: 4, trims: ["HSE", "HSE Dynamic", "Autobiography", "SVR"] },
        { name: "Range Rover Evoque", count: 3, trims: ["S", "SE", "HSE"] },
        { name: "Discovery", count: 4, trims: ["S", "SE", "HSE", "HSE Luxury"] },
        { name: "Discovery Sport", count: 3, trims: ["S", "SE", "HSE"] },
        { name: "Defender", count: 4, trims: ["Base", "S", "SE", "HSE"] }
      ],
      "Mazda": [
        { name: "Mazda3", count: 4, trims: ["Base", "Select", "Preferred", "Premium"] },
        { name: "Mazda6", count: 4, trims: ["Sport", "Touring", "Grand Touring", "Signature"] },
        { name: "CX-30", count: 4, trims: ["Base", "Select", "Preferred", "Premium"] },
        { name: "CX-5", count: 4, trims: ["Sport", "Touring", "Grand Touring", "Signature"] },
        { name: "CX-9", count: 4, trims: ["Sport", "Touring", "Grand Touring", "Signature"] },
        { name: "MX-5 Miata", count: 3, trims: ["Sport", "Club", "Grand Touring"] }
      ],
      "Mitsubishi": [
        { name: "Mirage", count: 3, trims: ["ES", "SE", "GT"] },
        { name: "Outlander", count: 4, trims: ["ES", "SE", "SEL", "GT"] },
        { name: "Eclipse Cross", count: 4, trims: ["ES", "LE", "SE", "SEL"] },
        { name: "Outlander PHEV", count: 3, trims: ["SE", "SEL", "GT"] }
      ],
      "Ram": [
        { name: "1500", count: 6, trims: ["Tradesman", "Big Horn", "Laramie", "Rebel", "Limited", "TRX"] },
        { name: "2500", count: 4, trims: ["Tradesman", "Big Horn", "Laramie", "Limited"] },
        { name: "3500", count: 4, trims: ["Tradesman", "Big Horn", "Laramie", "Limited"] },
        { name: "ProMaster", count: 3, trims: ["1500", "2500", "3500"] }
      ],
      "Volvo": [
        { name: "S60", count: 4, trims: ["Momentum", "R-Design", "Inscription", "Polestar"] },
        { name: "S90", count: 3, trims: ["Momentum", "R-Design", "Inscription"] },
        { name: "XC40", count: 4, trims: ["Momentum", "R-Design", "Inscription", "Recharge"] },
        { name: "XC60", count: 4, trims: ["Momentum", "R-Design", "Inscription", "Polestar"] },
        { name: "XC90", count: 4, trims: ["Momentum", "R-Design", "Inscription", "Excellence"] }
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
      make.name.toLowerCase().startsWith(searchTerm)
    );
  }
  
  // Enhanced search that finds both makes and models, grouped hierarchically
  const results = new Map(); // Using Map to maintain order and group by make
  
  // First, search for matching makes
  vehicleData.makes.forEach(make => {
    if (make.name.toLowerCase().startsWith(searchTerm)) {
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
      model.name.toLowerCase().startsWith(searchTerm)
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
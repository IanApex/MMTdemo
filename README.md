# MMT Filter System

A React-based Make, Model, Trim (MMT) filter component system that follows Single Responsibility Principle (SRP) architecture. This implementation is based on an exact Figma design specification.

## Features

- ✅ **Exact Figma Design Implementation** - Pixel-perfect recreation of the provided design
- ✅ **Progressive Filtering** - Make → Model → Trim selection flow
- ✅ **Search Functionality** - Search at each level (Make, Model, Trim)
- ✅ **Back Navigation** - Navigate between filter levels
- ✅ **Vanilla CSS** - No CSS framework dependencies (no Tailwind, Bootstrap, etc.)
- ✅ **Responsive Design** - Works on mobile and desktop
- ✅ **Accessibility Features** - ARIA labels, keyboard navigation, focus states
- ✅ **SRP Architecture** - Clean separation of concerns

## Design System

The project uses the exact design tokens from the Figma specification:

### Colors
- `--blue-60`: #006FA6 (Primary blue)
- `--park-gray-0`: #242C33 (Primary text)
- `--park-gray-20`: #666B70 (Secondary text)
- `--park-gray-100`: #F4F5F7 (Background gray)
- `--white`: #FFFFFF (White background)
- `--border-color`: #E8E9EB (Border color)

### Typography
- **Font Family**: Roboto
- **Weights**: Light (300), Regular (400), Bold (700)
- **Body SM**: 14px/22px
- **Body LG**: 16px/24px

## Project Structure

```
src/
├── components/
│   ├── Filter.js          # Main filter component
│   └── Filter.css         # Filter styles (vanilla CSS)
├── data/
│   └── vehicleData.js     # Mock data structure
├── App.js                 # Demo application
├── App.css               # App styles
├── index.js              # React entry point
└── index.css             # Global styles & design system
```

## Architecture

### Single Responsibility Principle (SRP)

Each component has a single, well-defined responsibility:

1. **Filter Component** - Handles the filtering UI and navigation logic
2. **Data Layer** - Manages vehicle data and search functionality
3. **Design System** - Centralized CSS variables and styling
4. **App Component** - Demonstrates filter usage and state management

### Component Hierarchy

```
App
└── Filter
    ├── Filter Header (Back/Close navigation)
    ├── Filter Type Section (Current view title)
    ├── Search Section (Input with search icon)
    └── Selection List (Filterable list items)
```

### State Management

The filter component manages:
- Current view (`make`, `model`, `trim`)
- Selected values at each level
- Search query state
- Filtered items display

## Usage

### Basic Implementation

```jsx
import Filter from './components/Filter';

function MyApp() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    make: null,
    model: null,
    trim: null
  });

  return (
    <div>
      {isFilterOpen && (
        <Filter 
          onClose={() => setIsFilterOpen(false)}
          onFilterChange={(filters) => setSelectedFilters(filters)}
        />
      )}
    </div>
  );
}
```

### Filter Component Props

| Prop | Type | Description |
|------|------|-------------|
| `onClose` | Function | Callback when filter is closed |
| `onFilterChange` | Function | Callback when selection changes |

### Filter Change Event

The `onFilterChange` callback receives an object with the current selection:

```javascript
{
  make: "Honda",      // Selected make name
  model: "Accord",    // Selected model name (null if not selected)
  trim: "EX"          // Selected trim name (null if not selected)
}
```

## Data Structure

The vehicle data follows this structure:

```javascript
{
  makes: [
    { name: "Honda", count: 11, models: ["Accord", "Civic", "CR-V"] }
  ],
  models: {
    "Honda": [
      { name: "Accord", count: 4, trims: ["LX", "Sport", "EX"] }
    ]
  },
  trims: {
    "Honda_Accord": [
      { name: "LX", count: 1 }
    ]
  }
}
```

## Running the Project

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Customization

### Adding More Vehicle Data

Edit `src/data/vehicleData.js` to add more makes, models, and trims:

```javascript
export const vehicleData = {
  makes: [
    { name: "NewMake", count: 5, models: ["Model1", "Model2"] }
    // Add more makes...
  ],
  models: {
    "NewMake": [
      { name: "Model1", count: 2, trims: ["Base", "Premium"] }
      // Add more models...
    ]
  },
  trims: {
    "NewMake_Model1": [
      { name: "Base", count: 1 },
      { name: "Premium", count: 1 }
      // Add more trims...
    ]
  }
};
```

### Styling Customization

Modify the CSS variables in `src/index.css` to match your brand:

```css
:root {
  --blue-60: #006FA6;        /* Change primary color */
  --park-gray-0: #242C33;    /* Change text color */
  /* ... other variables */
}
```

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## Accessibility Features

- ARIA labels for all interactive elements
- Keyboard navigation support (Tab, Enter, Space)
- Focus indicators for all focusable elements
- Screen reader compatible
- Semantic HTML structure

## Performance Considerations

- Efficient search filtering with early returns
- Optimized re-renders using proper React patterns
- CSS variables for consistent theming
- Minimal bundle size (no external dependencies)

## License

MIT License - feel free to use in your projects. 
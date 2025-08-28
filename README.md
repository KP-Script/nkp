# 🎨 NKP - React Component Library

A modern, lightweight, and highly customizable React component library built with TypeScript.

## 📦 Installation

```bash
npm install nkp
# or
yarn add nkp
```

## 🚀 Quick Start
```Jsx
import React from 'react';
import { NBadge, NToggle } from 'nkp';
// or using the alternative import style
import { nbadge, ntoggle } from 'nkp';

function App() {
  return (
    <div>
      <NBadge content={5} position="top-right">
        <button>Notifications</button>
      </NBadge>
      
      <NToggle 
        label="Dark Mode" 
        onChange={(checked) => console.log('Toggle:', checked)} 
      />
    </div>
  );
}
```

## 🏷️ NBadge Component

A flexible badge component for displaying status, counts, or labels.


### Basic Usage

```Jsx
import { NBadge } from 'nkp';

// Number badge
<NBadge content={42}>
  <button>Messages</button>
</NBadge>

// Dot badge
<NBadge dot>
  <span>Online Status</span>
</NBadge>

// Text badge
<NBadge content="NEW" backgroundColor="#52c41a">
  <div>Product</div>
</NBadge>
```

### Props

| Prop            | Type                                                                     | Default     | Description                        |
| --------------- | ------------------------------------------------------------------------ | ----------- | ---------------------------------- |
| children        | ReactNode                                                                | -           | Element to wrap with badge         |
| content         | ReactNode                                                                | -           | Badge content (number, text, icon) |
| type            | 'dot' \| 'number' \| 'text' \| 'icon'                                    | 'number'    | Badge type                         |
| position        | 'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right' \| 'center' | 'top-right' | Badge position                     |
| offset          | {x: number, y: number}                                                   | -           | Custom position offset             |
| size            | 'small' \| 'medium' \| 'large'                                           | 'medium'    | Badge size                         |
| shape           | 'round' \| 'square' \| 'pill'                                            | 'round'     | Badge shape                        |
| color           | string                                                                   | '#fff'      | Text color                         |
| backgroundColor | string                                                                   | '#ff4d4f'   | Background color                   |
| borderColor     | string                                                                   | -           | Border color                       |
| maxCount        | number                                                                   | 99          | Max count to display (99+)         |
| showZero        | boolean                                                                  | false       | Show badge when count is 0         |
| dot             | boolean                                                                  | false       | Show as dot badge                  |
| invisible       | boolean                                                                  | false       | Hide badge                         |
| onClick         | () => void                                                               | -           | Click handler                      |


### Advanced Examples
```Jsx
// Custom positioning with offset
<NBadge 
  content={8} 
  position="top-right" 
  offset={{x: 10, y: -5}}
  backgroundColor="#722ed1"
>
  <Avatar src="user.jpg" />
</NBadge>

// Large pill-shaped badge
<NBadge 
  content="PREMIUM" 
  size="large" 
  shape="pill"
  backgroundColor="#gold"
  color="#000"
>
  <Card>Premium Content</Card>
</NBadge>

// Interactive badge
<NBadge 
  content={notifications.length} 
  onClick={() => setShowNotifications(true)}
  maxCount={999}
>
  <BellIcon />
</NBadge>
```

## 🔄 NToggle Component

A customizable toggle switch component with smooth animations.

### Basic Usage
```Jsx
import { NToggle } from 'nkp';

// Basic toggle
<NToggle onChange={(checked) => console.log(checked)} />

// With label
<NToggle 
  label="Enable notifications" 
  defaultChecked={true}
/>

// Custom colors
<NToggle 
  onColor="#52c41a"
  offColor="#f5222d"
  size="large"
/>
```

### Props

| Prop           | Type                           | Default   | Description               |
| -------------- | ------------------------------ | --------- | ------------------------- |
| checked        | boolean                        | -         | Controlled mode value     |
| defaultChecked | boolean                        | false     | Default checked state     |
| disabled       | boolean                        | false     | Disable the toggle        |
| size           | 'small' \| 'medium' \| 'large' | 'medium'  | Toggle size               |
| onColor        | string                         | '#1890ff' | Background color when on  |
| offColor       | string                         | '#d9d9d9' | Background color when off |
| knobColor      | string                         | '#fff'    | Knob color                |
| knobShape      | 'round' \| 'square'            | 'round'   | Knob shape                |
| onText         | string                         | -         | Text shown when on        |
| offText        | string                         | -         | Text shown when off       |
| onIcon         | ReactNode                      | -         | Icon shown when on        |
| offIcon        | ReactNode                      | -         | Icon shown when off       |
| label          | string                         | -         | Toggle label              |
| labelPosition  | 'left' \| 'right'              | 'right'   | Label position            |
| animated       | boolean                        | true      | Enable animations         |
| onChange       | (checked: boolean) => void     | -         | Change handler            |


### Advanced Examples
```Jsx
// Toggle with icons
<NToggle 
  onIcon={<SunIcon />}
  offIcon={<MoonIcon />}
  label="Theme"
  size="large"
/>

// Toggle with text inside
<NToggle 
  onText="ON"
  offText="OFF"
  onColor="#52c41a"
  offColor="#ff4d4f"
/>

// Controlled toggle
const [darkMode, setDarkMode] = useState(false);

<NToggle 
  checked={darkMode}
  onChange={setDarkMode}
  label="Dark Mode"
  labelPosition="left"
/>

// Custom styled toggle
<NToggle 
  size="large"
  knobShape="square"
  onColor="linear-gradient(45deg, #667eea 0%, #764ba2 100%)"
  animated={true}
/>
```

## 🎨 Styling & Customization

### CSS Classes

Both components provide CSS classes for additional styling:

```Css
/* NBadge */
.nkp-badge-wrapper { /* Badge wrapper */ }
.nkp-badge { /* Badge element */ }

/* NToggle */
.nkp-toggle-wrapper { /* Toggle with label wrapper */ }
.nkp-toggle { /* Toggle button */ }
.nkp-toggle-knob { /* Toggle knob */ }
```

### Custom Styles
```Jsx
// Custom styles via props
<NBadge 
  style={{ margin: '10px' }}
  badgeStyle={{ fontSize: '16px' }}
  content="Custom"
>
  <button>Styled Badge</button>
</NBadge>

<NToggle 
  style={{ border: '2px solid #1890ff' }}
  className="my-custom-toggle"
/>
```

## ♿ Accessibility

Both components are built with accessibility in mind:

### NBadge
• Proper ARIA labels
• Screen reader support
• Keyboard navigation (when clickable)

### NToggle
• ARIA switch role
• Keyboard support (Space/Enter)
• Focus management
• Screen reader announcements

``` Jsx
// Accessibility examples
<NBadge 
  content={5} 
  aria-label="5 unread messages"
>
  <button>Messages</button>
</NBadge>

<NToggle 
  aria-label="Toggle dark mode"
  onChange={handleDarkModeToggle}
/>
```

## 🔧 TypeScript Support

Full TypeScript support with comprehensive type definitions:

```TypeScript
import { NBadgeProps, NToggleProps } from 'nkp';

const MyBadge: React.FC<NBadgeProps> = (props) => {
  return <NBadge {...props} />;
};

const MyToggle: React.FC<NToggleProps> = (props) => {
  return <NToggle {...props} />;
};
```

## 📱 Responsive Design

Components are designed to work seamlessly across different screen sizes:

```Jsx
// Responsive badge sizes
<NBadge 
  size={window.innerWidth < 768 ? 'small' : 'medium'}
  content={count}
>
  <button>Responsive Badge</button>
</NBadge>

// Responsive toggle
<NToggle 
  size={isMobile ? 'small' : 'large'}
  labelPosition={isMobile ? 'right' : 'left'}
/>
```

### 🎯 Performance
• Lightweight bundle size
• Tree-shakable exports
• Optimized re-renders
• No external dependencies (except React)


### 🧪 Testing
```Jsx
import { render, fireEvent, screen } from '@testing-library/react';
import { NBadge, NToggle } from 'nkp';

// Test NBadge
test('renders badge with content', () => {
  render(
    <NBadge content={5}>
      <button>Test</button>
    </NBadge>
  );
  expect(screen.getByText('5')).toBeInTheDocument();
});

// Test NToggle
test('toggle changes state', () => {
  const handleChange = jest.fn();
  render(<NToggle onChange={handleChange} />);
  
  fireEvent.click(screen.getByRole('switch'));
  expect(handleChange).toHaveBeenCalledWith(true);
});
```

### 🌟 Examples & Demos

Real-world Usage Examples
```Jsx
// E-commerce cart badge
<NBadge 
  content={cartItems.length} 
  backgroundColor="#ff6b35"
  maxCount={99}
  invisible={cartItems.length === 0}
>
  <ShoppingCartIcon />
</NBadge>

// Notification system
<NBadge 
  dot={hasUnreadNotifications}
  backgroundColor="#52c41a"
  position="top-right"
>
  <BellIcon />
</NBadge>

// Settings panel
<div className="settings-panel">
  <NToggle 
    label="Push Notifications"
    checked={settings.pushNotifications}
    onChange={(checked) => updateSetting('pushNotifications', checked)}
  />
  
  <NToggle 
    label="Dark Mode"
    checked={settings.darkMode}
    onChange={(checked) => updateSetting('darkMode', checked)}
    onIcon={<MoonIcon />}
    offIcon={<SunIcon />}
  />
  
  <NToggle 
    label="Auto-save"
    checked={settings.autoSave}
    onChange={(checked) => updateSetting('autoSave', checked)}
    size="small"
  />
</div>
```

### 🎨 Theme Integration

With CSS Variables
```Css
:root {
  --nkp-primary-color: #1890ff;
  --nkp-success-color: #52c41a;
  --nkp-warning-color: #faad14;
  --nkp-error-color: #ff4d4f;
}

.themed-badge {
  --badge-bg: var(--nkp-primary-color);
}
```
```Jsx
<NBadge 
  className="themed-badge"
  style={{ '--badge-bg': 'var(--nkp-primary-color)' }}
  content="Themed"
>
  <button>Themed Badge</button>
</NBadge>
```

With Styled Components
```Jsx
import styled from 'styled-components';
import { NBadge, NToggle } from 'nkp';

const StyledBadge = styled(NBadge)`
  .nkp-badge {
    background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  }
`;

const StyledToggle = styled(NToggle)`
  &.nkp-toggle {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  }
`;
```

### 🔄 Migration Guide

From v0.x to v1.x
```Jsx
// Old way (v0.x)
<Badge count={5} position="topRight">
  <button>Old Badge</button>
</Badge>

// New way (v1.x)
<NBadge content={5} position="top-right">
  <button>New Badge</button>
</NBadge>
```

### 🛠️ Development

Building from Source
```Bash
# Clone the repository
git clone https://github.com/KP-Script/nkp.git
cd nkp

# Install dependencies
npm install

# Build the library
npm run build

# Run in development mode
npm run dev
```

### Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


### 📄 License

MIT © KP-Script.


🤝 Support
* 📧 Email: kp.script@gmail.com
* 🐛 Issues: [GitHub Issues](https://github.com/KP-Script/nkp/issues)
* 💬 Discussions: [GitHub Discussions](https://github.com/KP-Script/nkp/discussions)


---

Made with ❤️ by KP-Script.

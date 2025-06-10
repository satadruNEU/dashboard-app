# Influur Design System

A comprehensive design system for building consistent and beautiful user interfaces.

## Installation

The design system is included in the project by default. Import components directly from the design system:

```typescript
import { Button, Card, Typography } from '@/design-system';
```

## Components

- [Button](./docs/Button.md) - Versatile button component with multiple variants
- [Card](./docs/Card.md) - Flexible card component for content containers
- [Typography](./docs/Typography.md) - Text components with consistent styling
- [Input](./docs/Input.md) - Form input component with various states
- [Select](./docs/Select.md) - Dropdown select component
- [Modal](./docs/Modal.md) - Modal dialog component
- [Badge](./docs/Badge.md) - Status and label indicators

## Theme

The design system includes a comprehensive theme with:

- Colors
- Typography
- Spacing
- Shadows
- Border Radius
- Breakpoints
- Z-index

Import theme values:

```typescript
import { colors, spacing, typography } from '@/design-system';
```

## Usage

### Basic Example

```typescript
import { Button, Card, Typography } from '@/design-system';

function MyComponent() {
  return (
    <Card>
      <Typography variant="h1">Welcome</Typography>
      <Button variant="primary">Click me</Button>
    </Card>
  );
}
```

### Styling

Components accept standard HTML/CSS props:

```typescript
<Button
  style={{ marginTop: '1rem' }}
  className="custom-class"
>
  Custom Styled Button
</Button>
```

## Best Practices

1. **Consistency**: Use the design system components instead of custom HTML elements
2. **Accessibility**: All components are built with accessibility in mind
3. **Responsive Design**: Components are responsive by default
4. **TypeScript**: All components are fully typed

## Contributing

When adding new components or modifying existing ones:

1. Follow the established component structure
2. Include proper TypeScript types
3. Use the theme values for styling
4. Add documentation
5. Ensure accessibility

## License

Internal use only - Influur Dashboard App 
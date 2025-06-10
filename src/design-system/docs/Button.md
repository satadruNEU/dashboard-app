# Button

A versatile button component with multiple variants, sizes, and states.

## Import

```typescript
import { Button } from '@/design-system';
```

## Usage

```typescript
<Button variant="primary" size="md">
  Click me
</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger'` | `'primary'` | The visual style of the button |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | The size of the button |
| isLoading | `boolean` | `false` | Shows a loading spinner and disables the button |
| leftIcon | `React.ReactNode` | `undefined` | Icon to display before the button text |
| rightIcon | `React.ReactNode` | `undefined` | Icon to display after the button text |
| fullWidth | `boolean` | `false` | Makes the button take up the full width of its container |
| disabled | `boolean` | `false` | Disables the button |
| className | `string` | `undefined` | Additional CSS class name |
| style | `CSSProperties` | `undefined` | Additional inline styles |

## Variants

### Primary
```typescript
<Button variant="primary">Primary Button</Button>
```

### Secondary
```typescript
<Button variant="secondary">Secondary Button</Button>
```

### Outline
```typescript
<Button variant="outline">Outline Button</Button>
```

### Ghost
```typescript
<Button variant="ghost">Ghost Button</Button>
```

### Danger
```typescript
<Button variant="danger">Danger Button</Button>
```

## Sizes

### Small
```typescript
<Button size="sm">Small Button</Button>
```

### Medium (Default)
```typescript
<Button size="md">Medium Button</Button>
```

### Large
```typescript
<Button size="lg">Large Button</Button>
```

## States

### Loading
```typescript
<Button isLoading>Loading Button</Button>
```

### Disabled
```typescript
<Button disabled>Disabled Button</Button>
```

## With Icons

```typescript
<Button
  leftIcon={<IconComponent />}
  rightIcon={<IconComponent />}
>
  Button with Icons
</Button>
```

## Full Width

```typescript
<Button fullWidth>Full Width Button</Button>
```

## Best Practices

1. Use primary variant for main actions
2. Use secondary variant for alternative actions
3. Use outline or ghost variants for less prominent actions
4. Use danger variant for destructive actions
5. Include loading state for async operations
6. Use appropriate size based on context
7. Add icons to enhance visual hierarchy
8. Use fullWidth for mobile-first designs

## Accessibility

- Buttons are keyboard accessible
- Loading and disabled states are properly announced
- Color contrast meets WCAG standards
- Icons are decorative and don't need additional labels 
# Input

A versatile input component with various states, sizes, and features.

## Import

```typescript
import { Input } from '@/design-system';
```

## Usage

```typescript
<Input
  label="Email"
  placeholder="Enter your email"
  error="Invalid email"
  startIcon={<EmailIcon />}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | `string` | `undefined` | Input label text |
| error | `string` | `undefined` | Error message text |
| helperText | `string` | `undefined` | Helper text below input |
| startIcon | `React.ReactNode` | `undefined` | Icon to display before input |
| endIcon | `React.ReactNode` | `undefined` | Icon to display after input |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Input size |
| fullWidth | `boolean` | `false` | Makes input take full width |
| containerStyle | `CSSProperties` | `undefined` | Styles for the container |
| className | `string` | `undefined` | Additional CSS class name |
| style | `CSSProperties` | `undefined` | Additional inline styles |
| disabled | `boolean` | `false` | Disables the input |

## Sizes

### Small
```typescript
<Input size="sm" placeholder="Small input" />
```

### Medium (Default)
```typescript
<Input size="md" placeholder="Medium input" />
```

### Large
```typescript
<Input size="lg" placeholder="Large input" />
```

## States

### With Label
```typescript
<Input label="Username" placeholder="Enter username" />
```

### With Error
```typescript
<Input
  label="Email"
  error="Please enter a valid email"
  placeholder="Enter email"
/>
```

### With Helper Text
```typescript
<Input
  label="Password"
  helperText="Must be at least 8 characters"
  type="password"
/>
```

### Disabled
```typescript
<Input
  label="Disabled Input"
  disabled
  placeholder="Cannot edit"
/>
```

## With Icons

### Start Icon
```typescript
<Input
  label="Search"
  startIcon={<SearchIcon />}
  placeholder="Search..."
/>
```

### End Icon
```typescript
<Input
  label="Password"
  type="password"
  endIcon={<EyeIcon />}
/>
```

### Both Icons
```typescript
<Input
  label="Amount"
  startIcon={<DollarIcon />}
  endIcon={<CurrencyIcon />}
  placeholder="0.00"
/>
```

## Full Width
```typescript
<Input
  label="Full Width Input"
  fullWidth
  placeholder="Takes full width"
/>
```

## Best Practices

1. Always provide a label for better accessibility
2. Use helper text for additional information
3. Show error messages when validation fails
4. Use appropriate input type (email, password, etc.)
5. Add icons to enhance visual hierarchy
6. Use fullWidth for mobile-first designs
7. Maintain consistent spacing
8. Group related inputs together

## Accessibility

- Proper label association
- Error messages are announced
- Helper text provides context
- Keyboard navigation support
- Screen reader friendly
- Color contrast meets WCAG standards
- Disabled state is properly announced 
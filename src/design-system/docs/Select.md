# Select

A dropdown select component with various states and features.

## Import

```typescript
import { Select } from '@/design-system';
```

## Usage

```typescript
<Select
  label="Country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
  ]}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | `string` | `undefined` | Select label text |
| error | `string` | `undefined` | Error message text |
| helperText | `string` | `undefined` | Helper text below select |
| options | `SelectOption[]` | `[]` | Array of options to display |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Select size |
| fullWidth | `boolean` | `false` | Makes select take full width |
| containerStyle | `CSSProperties` | `undefined` | Styles for the container |
| className | `string` | `undefined` | Additional CSS class name |
| style | `CSSProperties` | `undefined` | Additional inline styles |
| disabled | `boolean` | `false` | Disables the select |

## SelectOption Type

```typescript
interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}
```

## Sizes

### Small
```typescript
<Select
  size="sm"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ]}
/>
```

### Medium (Default)
```typescript
<Select
  size="md"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ]}
/>
```

### Large
```typescript
<Select
  size="lg"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ]}
/>
```

## States

### With Label
```typescript
<Select
  label="Category"
  options={[
    { value: 'tech', label: 'Technology' },
    { value: 'food', label: 'Food' },
  ]}
/>
```

### With Error
```typescript
<Select
  label="Country"
  error="Please select a country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
  ]}
/>
```

### With Helper Text
```typescript
<Select
  label="Plan"
  helperText="Select your subscription plan"
  options={[
    { value: 'basic', label: 'Basic' },
    { value: 'pro', label: 'Pro' },
  ]}
/>
```

### Disabled
```typescript
<Select
  label="Disabled Select"
  disabled
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ]}
/>
```

### Disabled Options
```typescript
<Select
  label="Plan"
  options={[
    { value: 'basic', label: 'Basic' },
    { value: 'pro', label: 'Pro', disabled: true },
  ]}
/>
```

## Full Width
```typescript
<Select
  label="Full Width Select"
  fullWidth
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ]}
/>
```

## Best Practices

1. Always provide a label for better accessibility
2. Use helper text for additional information
3. Show error messages when validation fails
4. Group related options together
5. Use clear, concise option labels
6. Use fullWidth for mobile-first designs
7. Maintain consistent spacing
8. Disable options that are not applicable

## Accessibility

- Proper label association
- Error messages are announced
- Helper text provides context
- Keyboard navigation support
- Screen reader friendly
- Color contrast meets WCAG standards
- Disabled state is properly announced
- Option groups are properly announced 
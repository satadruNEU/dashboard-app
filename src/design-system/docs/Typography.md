# Typography

A comprehensive typography system for consistent text styling across the application.

## Import

```typescript
import { Typography } from '@/design-system';
```

## Usage

```typescript
<Typography variant="h1" color="primary">
  Heading Text
</Typography>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6' \| 'subtitle1' \| 'subtitle2' \| 'body1' \| 'body2' \| 'caption' \| 'button'` | `'body1'` | The typography variant |
| color | `'primary' \| 'secondary' \| 'disabled'` | `'primary'` | The text color |
| align | `'left' \| 'center' \| 'right'` | `'left'` | The text alignment |
| gutterBottom | `boolean` | `false` | Adds bottom margin |
| noWrap | `boolean` | `false` | Prevents text from wrapping |
| className | `string` | `undefined` | Additional CSS class name |
| style | `CSSProperties` | `undefined` | Additional inline styles |

## Variants

### Headings

```typescript
<Typography variant="h1">Heading 1</Typography>
<Typography variant="h2">Heading 2</Typography>
<Typography variant="h3">Heading 3</Typography>
<Typography variant="h4">Heading 4</Typography>
<Typography variant="h5">Heading 5</Typography>
<Typography variant="h6">Heading 6</Typography>
```

### Subtitles

```typescript
<Typography variant="subtitle1">Subtitle 1</Typography>
<Typography variant="subtitle2">Subtitle 2</Typography>
```

### Body Text

```typescript
<Typography variant="body1">Body 1</Typography>
<Typography variant="body2">Body 2</Typography>
```

### Other

```typescript
<Typography variant="caption">Caption Text</Typography>
<Typography variant="button">Button Text</Typography>
```

## Colors

### Primary
```typescript
<Typography color="primary">Primary Text</Typography>
```

### Secondary
```typescript
<Typography color="secondary">Secondary Text</Typography>
```

### Disabled
```typescript
<Typography color="disabled">Disabled Text</Typography>
```

## Alignment

### Left (Default)
```typescript
<Typography align="left">Left Aligned</Typography>
```

### Center
```typescript
<Typography align="center">Center Aligned</Typography>
```

### Right
```typescript
<Typography align="right">Right Aligned</Typography>
```

## Additional Features

### Gutter Bottom
```typescript
<Typography gutterBottom>
  Text with bottom margin
</Typography>
```

### No Wrap
```typescript
<Typography noWrap>
  This text will not wrap to the next line
</Typography>
```

## Best Practices

1. Use appropriate heading levels for hierarchy
2. Maintain consistent text colors for different purposes
3. Use body1 for main content
4. Use body2 for secondary content
5. Use caption for small, supplementary text
6. Use button variant for button text
7. Use gutterBottom for spacing between text blocks
8. Use noWrap for single-line text that shouldn't break

## Accessibility

- Proper heading hierarchy (h1-h6)
- Sufficient color contrast
- Appropriate text size for readability
- Semantic HTML elements
- Screen reader friendly 
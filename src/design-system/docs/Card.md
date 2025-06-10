# Card

A flexible card component for content containers with different variants and subcomponents.

## Import

```typescript
import { Card, CardHeader, CardBody, CardFooter } from '@/design-system';
```

## Usage

```typescript
<Card variant="elevated" padding="md">
  <CardHeader>Header Content</CardHeader>
  <CardBody>Main Content</CardBody>
  <CardFooter>Footer Content</CardFooter>
</Card>
```

## Props

### Card Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'elevated' \| 'outlined' \| 'filled'` | `'elevated'` | The visual style of the card |
| padding | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | The padding size of the card |
| className | `string` | `undefined` | Additional CSS class name |
| style | `CSSProperties` | `undefined` | Additional inline styles |

### CardHeader Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | `undefined` | Additional CSS class name |
| style | `CSSProperties` | `undefined` | Additional inline styles |

### CardBody Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | `undefined` | Additional CSS class name |
| style | `CSSProperties` | `undefined` | Additional inline styles |

### CardFooter Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | `string` | `undefined` | Additional CSS class name |
| style | `CSSProperties` | `undefined` | Additional inline styles |

## Variants

### Elevated (Default)
```typescript
<Card variant="elevated">
  Elevated Card Content
</Card>
```

### Outlined
```typescript
<Card variant="outlined">
  Outlined Card Content
</Card>
```

### Filled
```typescript
<Card variant="filled">
  Filled Card Content
</Card>
```

## Padding Sizes

### None
```typescript
<Card padding="none">
  No Padding Content
</Card>
```

### Small
```typescript
<Card padding="sm">
  Small Padding Content
</Card>
```

### Medium (Default)
```typescript
<Card padding="md">
  Medium Padding Content
</Card>
```

### Large
```typescript
<Card padding="lg">
  Large Padding Content
</Card>
```

## Subcomponents

### CardHeader
```typescript
<Card>
  <CardHeader>
    <h2>Card Title</h2>
  </CardHeader>
  <CardBody>Content</CardBody>
</Card>
```

### CardBody
```typescript
<Card>
  <CardHeader>Header</CardHeader>
  <CardBody>
    <p>Main content goes here</p>
  </CardBody>
</Card>
```

### CardFooter
```typescript
<Card>
  <CardBody>Content</CardBody>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

## Best Practices

1. Use elevated variant for primary content
2. Use outlined variant for secondary content
3. Use filled variant for background content
4. Use appropriate padding based on content density
5. Use subcomponents to maintain consistent spacing
6. Keep card content focused and concise
7. Use cards to group related content
8. Maintain visual hierarchy with proper spacing

## Accessibility

- Cards are semantic containers
- Content is properly structured with headers and sections
- Color contrast meets WCAG standards
- Interactive elements within cards are keyboard accessible 
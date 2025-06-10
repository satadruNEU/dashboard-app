# Badge

A versatile badge component for displaying status, labels, and notifications.

## Import

```typescript
import { Badge } from '@/design-system';
```

## Usage

```typescript
<Badge variant="success" size="md">
  Active
</Badge>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | The visual style of the badge |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | The size of the badge |
| dot | `boolean` | `false` | Renders as a dot instead of text |
| className | `string` | `undefined` | Additional CSS class name |
| style | `CSSProperties` | `undefined` | Additional inline styles |

## Variants

### Primary
```typescript
<Badge variant="primary">Primary</Badge>
```

### Secondary
```typescript
<Badge variant="secondary">Secondary</Badge>
```

### Success
```typescript
<Badge variant="success">Success</Badge>
```

### Warning
```typescript
<Badge variant="warning">Warning</Badge>
```

### Error
```typescript
<Badge variant="error">Error</Badge>
```

### Info
```typescript
<Badge variant="info">Info</Badge>
```

## Sizes

### Small
```typescript
<Badge size="sm">Small</Badge>
```

### Medium (Default)
```typescript
<Badge size="md">Medium</Badge>
```

### Large
```typescript
<Badge size="lg">Large</Badge>
```

## Dot Variant

### Small Dot
```typescript
<Badge variant="success" dot size="sm" />
```

### Medium Dot
```typescript
<Badge variant="success" dot size="md" />
```

### Large Dot
```typescript
<Badge variant="success" dot size="lg" />
```

## Common Use Cases

### Status Indicators
```typescript
<Badge variant="success">Active</Badge>
<Badge variant="error">Inactive</Badge>
<Badge variant="warning">Pending</Badge>
```

### Notifications
```typescript
<Badge variant="primary">New</Badge>
<Badge variant="error">3</Badge>
```

### Labels
```typescript
<Badge variant="info">Beta</Badge>
<Badge variant="secondary">Pro</Badge>
```

### Status Dots
```typescript
<Badge variant="success" dot /> Online
<Badge variant="error" dot /> Offline
<Badge variant="warning" dot /> Away
```

## Best Practices

1. Use appropriate variant for the context
2. Keep badge text short and concise
3. Use dot variant for status indicators
4. Use consistent sizing across similar badges
5. Ensure sufficient color contrast
6. Use badges sparingly to avoid visual clutter
7. Consider mobile responsiveness
8. Use semantic colors for status indicators

## Accessibility

- Sufficient color contrast
- Meaningful text content
- Screen reader friendly
- Status changes are announced
- Color is not the only indicator
- Proper ARIA attributes when needed

## Examples

### With Icons
```typescript
<Badge variant="primary">
  <Icon /> New Feature
</Badge>
```

### With Custom Styling
```typescript
<Badge
  variant="success"
  style={{ marginLeft: '0.5rem' }}
>
  Custom Styled
</Badge>
```

### Status in Table
```typescript
<td>
  <Badge variant="success" dot /> Active
</td>
```

### Notification Badge
```typescript
<Button>
  Notifications
  <Badge
    variant="error"
    style={{ marginLeft: '0.5rem' }}
  >
    3
  </Badge>
</Button>
``` 
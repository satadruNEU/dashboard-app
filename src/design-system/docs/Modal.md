# Modal

A modal dialog component for displaying content in an overlay.

## Import

```typescript
import { Modal } from '@/design-system';
```

## Usage

```typescript
const [isOpen, setIsOpen] = useState(false);

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Edit Profile"
  size="md"
>
  <p>Modal content goes here</p>
</Modal>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| isOpen | `boolean` | `false` | Controls modal visibility |
| onClose | `() => void` | `undefined` | Callback when modal closes |
| title | `string` | `undefined` | Modal title |
| children | `React.ReactNode` | `undefined` | Modal content |
| size | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'md'` | Modal size |
| showCloseButton | `boolean` | `true` | Shows close button |
| closeOnOverlayClick | `boolean` | `true` | Closes modal when clicking overlay |
| className | `string` | `undefined` | Additional CSS class name |
| style | `CSSProperties` | `undefined` | Additional inline styles |

## Sizes

### Small
```typescript
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  size="sm"
>
  Small modal content
</Modal>
```

### Medium (Default)
```typescript
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  size="md"
>
  Medium modal content
</Modal>
```

### Large
```typescript
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  size="lg"
>
  Large modal content
</Modal>
```

### Extra Large
```typescript
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  size="xl"
>
  Extra large modal content
</Modal>
```

### Full
```typescript
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  size="full"
>
  Full width modal content
</Modal>
```

## Features

### With Title
```typescript
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
>
  Modal content
</Modal>
```

### Without Close Button
```typescript
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  showCloseButton={false}
>
  Modal without close button
</Modal>
```

### Prevent Overlay Close
```typescript
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  closeOnOverlayClick={false}
>
  Modal that doesn't close on overlay click
</Modal>
```

## Best Practices

1. Use appropriate size based on content
2. Keep modal content focused and concise
3. Use clear, descriptive titles
4. Provide clear close actions
5. Handle keyboard navigation (Escape key)
6. Maintain proper focus management
7. Use modals for focused tasks
8. Consider mobile responsiveness

## Accessibility

- Proper ARIA attributes
- Focus management
- Keyboard navigation
- Screen reader support
- Color contrast meets WCAG standards
- Close button is properly labeled
- Modal role and description
- Focus trap within modal

## Example with Form

```typescript
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Edit Profile"
  size="md"
>
  <form onSubmit={handleSubmit}>
    <Input
      label="Name"
      placeholder="Enter your name"
    />
    <Input
      label="Email"
      type="email"
      placeholder="Enter your email"
    />
    <Button type="submit">
      Save Changes
    </Button>
  </form>
</Modal>
```

## Example with Confirmation

```typescript
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Delete"
  size="sm"
>
  <Typography>
    Are you sure you want to delete this item?
  </Typography>
  <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
    <Button variant="danger" onClick={handleDelete}>
      Delete
    </Button>
    <Button variant="outline" onClick={() => setIsOpen(false)}>
      Cancel
    </Button>
  </div>
</Modal>
``` 
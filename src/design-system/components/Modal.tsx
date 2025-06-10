import React, { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';
import { colors, spacing, borderRadius, shadows, zIndex } from '../styles/theme';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  className?: string;
  style?: CSSProperties;
}

const getSizeStyles = (size: ModalProps['size']): CSSProperties => {
  switch (size) {
    case 'sm':
      return { maxWidth: '24rem' };
    case 'md':
      return { maxWidth: '32rem' };
    case 'lg':
      return { maxWidth: '48rem' };
    case 'xl':
      return { maxWidth: '64rem' };
    case 'full':
      return { maxWidth: '100%' };
    default:
      return { maxWidth: '32rem' };
  }
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
  className,
  style,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const overlayStyles: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: zIndex.modal,
    padding: spacing.md,
  };

  const modalStyles: CSSProperties = {
    backgroundColor: colors.background.paper,
    borderRadius: borderRadius.lg,
    boxShadow: shadows.xl,
    width: '100%',
    maxHeight: '90vh',
    overflow: 'auto',
    position: 'relative',
    ...getSizeStyles(size),
    ...style,
  };

  const headerStyles: CSSProperties = {
    padding: spacing.md,
    borderBottom: `1px solid ${colors.grey[200]}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const contentStyles: CSSProperties = {
    padding: spacing.md,
  };

  const closeButtonStyles: CSSProperties = {
    background: 'none',
    border: 'none',
    padding: spacing.xs,
    cursor: 'pointer',
    color: colors.grey[500],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.full,
    transition: 'all 0.2s ease-in-out',
  };

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div style={overlayStyles} onClick={handleOverlayClick} className={className}>
      <div ref={modalRef} style={modalStyles}>
        <div style={headerStyles}>
          {title && (
            <h2
              style={{
                margin: 0,
                fontSize: '1.25rem',
                fontWeight: 600,
                color: colors.text.primary,
              }}
            >
              {title}
            </h2>
          )}
          {showCloseButton && (
            <button
              style={closeButtonStyles}
              onClick={onClose}
              aria-label="Close modal"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>
        <div style={contentStyles}>{children}</div>
      </div>
    </div>
  );
}; 
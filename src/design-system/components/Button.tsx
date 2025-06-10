import React from 'react';
import { colors, spacing, borderRadius, typography } from '../styles/theme';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return {
        backgroundColor: colors.primary.main,
        color: 'white',
        '&:hover': {
          backgroundColor: colors.primary.dark,
        },
      };
    case 'secondary':
      return {
        backgroundColor: colors.secondary.main,
        color: 'white',
        '&:hover': {
          backgroundColor: colors.secondary.dark,
        },
      };
    case 'outline':
      return {
        backgroundColor: 'transparent',
        border: `1px solid ${colors.primary.main}`,
        color: colors.primary.main,
        '&:hover': {
          backgroundColor: colors.primary.main,
          color: 'white',
        },
      };
    case 'ghost':
      return {
        backgroundColor: 'transparent',
        color: colors.primary.main,
        '&:hover': {
          backgroundColor: colors.grey[100],
        },
      };
    case 'danger':
      return {
        backgroundColor: colors.error.main,
        color: 'white',
        '&:hover': {
          backgroundColor: colors.error.dark,
        },
      };
    default:
      return {};
  }
};

const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case 'sm':
      return {
        padding: `${spacing.xs} ${spacing.sm}`,
        fontSize: typography.fontSize.sm,
      };
    case 'md':
      return {
        padding: `${spacing.sm} ${spacing.md}`,
        fontSize: typography.fontSize.base,
      };
    case 'lg':
      return {
        padding: `${spacing.md} ${spacing.lg}`,
        fontSize: typography.fontSize.lg,
      };
    default:
      return {};
  }
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled,
  style,
  ...props
}) => {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.md,
    fontWeight: typography.fontWeight.medium,
    transition: 'all 0.2s ease-in-out',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    width: fullWidth ? '100%' : 'auto',
    gap: spacing.sm,
    border: 'none',
    outline: 'none',
    ...getVariantStyles(variant),
    ...getSizeStyles(size),
    ...style,
  };

  return (
    <button
      style={baseStyles}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin"
          style={{ width: '1em', height: '1em' }}
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!isLoading && leftIcon}
      {children}
      {!isLoading && rightIcon}
    </button>
  );
}; 
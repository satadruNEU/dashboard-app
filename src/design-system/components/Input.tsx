import React from 'react';
import type { CSSProperties } from 'react';
import { colors, spacing, borderRadius, typography } from '../styles/theme';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  containerStyle?: CSSProperties;
}

const getSizeStyles = (size: InputProps['size']): CSSProperties => {
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

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  startIcon,
  endIcon,
  size = 'md',
  fullWidth = false,
  containerStyle,
  style,
  className,
  disabled,
  ...props
}) => {
  const baseStyles: CSSProperties = {
    width: fullWidth ? '100%' : 'auto',
    backgroundColor: colors.background.paper,
    border: `1px solid ${error ? colors.error.main : colors.grey[300]}`,
    borderRadius: borderRadius.md,
    color: colors.text.primary,
    transition: 'all 0.2s ease-in-out',
    outline: 'none',
    ...getSizeStyles(size),
    ...style,
  };

  const containerStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.xs,
    width: fullWidth ? '100%' : 'auto',
    ...containerStyle,
  };

  const inputWrapperStyles: CSSProperties = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyles: CSSProperties = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    color: colors.grey[500],
  };

  const startIconStyles: CSSProperties = {
    ...iconStyles,
    left: spacing.sm,
  };

  const endIconStyles: CSSProperties = {
    ...iconStyles,
    right: spacing.sm,
  };

  const inputStyles: CSSProperties = {
    ...baseStyles,
    paddingLeft: startIcon ? `calc(${spacing.xl} + ${spacing.sm})` : undefined,
    paddingRight: endIcon ? `calc(${spacing.xl} + ${spacing.sm})` : undefined,
  };

  return (
    <div style={containerStyles} className={className}>
      {label && (
        <label
          style={{
            color: colors.text.primary,
            fontSize: typography.fontSize.sm,
            fontWeight: typography.fontWeight.medium,
          }}
        >
          {label}
        </label>
      )}
      <div style={inputWrapperStyles}>
        {startIcon && <div style={startIconStyles}>{startIcon}</div>}
        <input
          style={inputStyles}
          disabled={disabled}
          {...props}
        />
        {endIcon && <div style={endIconStyles}>{endIcon}</div>}
      </div>
      {(error || helperText) && (
        <span
          style={{
            color: error ? colors.error.main : colors.text.secondary,
            fontSize: typography.fontSize.xs,
          }}
        >
          {error || helperText}
        </span>
      )}
    </div>
  );
}; 
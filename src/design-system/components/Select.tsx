import React from 'react';
import type { CSSProperties } from 'react';
import { colors, spacing, borderRadius, typography } from '../styles/theme';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  options: SelectOption[];
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  containerStyle?: CSSProperties;
}

const getSizeStyles = (size: SelectProps['size']): CSSProperties => {
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

export const Select: React.FC<SelectProps> = ({
  label,
  error,
  helperText,
  options,
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
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 0.5rem center',
    backgroundSize: '1.5em 1.5em',
    paddingRight: spacing.xl,
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
      <select
        style={baseStyles}
        disabled={disabled}
        {...props}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
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
import React from 'react';
import type { CSSProperties } from 'react';
import { colors, spacing, borderRadius, typography } from '../styles/theme';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  className?: string;
  style?: CSSProperties;
}

const getVariantStyles = (variant: BadgeVariant): CSSProperties => {
  switch (variant) {
    case 'primary':
      return {
        backgroundColor: colors.primary.main,
        color: 'white',
      };
    case 'secondary':
      return {
        backgroundColor: colors.secondary.main,
        color: 'white',
      };
    case 'success':
      return {
        backgroundColor: colors.success.main,
        color: 'white',
      };
    case 'warning':
      return {
        backgroundColor: colors.warning.main,
        color: 'white',
      };
    case 'error':
      return {
        backgroundColor: colors.error.main,
        color: 'white',
      };
    case 'info':
      return {
        backgroundColor: colors.grey[500],
        color: 'white',
      };
    default:
      return {};
  }
};

const getSizeStyles = (size: BadgeSize, dot: boolean): CSSProperties => {
  if (dot) {
    switch (size) {
      case 'sm':
        return {
          width: '0.5rem',
          height: '0.5rem',
          borderRadius: borderRadius.full,
        };
      case 'md':
        return {
          width: '0.75rem',
          height: '0.75rem',
          borderRadius: borderRadius.full,
        };
      case 'lg':
        return {
          width: '1rem',
          height: '1rem',
          borderRadius: borderRadius.full,
        };
      default:
        return {};
    }
  }

  switch (size) {
    case 'sm':
      return {
        padding: `${spacing.xs} ${spacing.sm}`,
        fontSize: typography.fontSize.xs,
        borderRadius: borderRadius.sm,
      };
    case 'md':
      return {
        padding: `${spacing.xs} ${spacing.md}`,
        fontSize: typography.fontSize.sm,
        borderRadius: borderRadius.md,
      };
    case 'lg':
      return {
        padding: `${spacing.sm} ${spacing.lg}`,
        fontSize: typography.fontSize.base,
        borderRadius: borderRadius.lg,
      };
    default:
      return {};
  }
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  dot = false,
  className,
  style,
}) => {
  const baseStyles: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: typography.fontWeight.medium,
    ...getVariantStyles(variant),
    ...getSizeStyles(size, dot),
    ...style,
  };

  if (dot) {
    return <span style={baseStyles} className={className} />;
  }

  return (
    <span style={baseStyles} className={className}>
      {children}
    </span>
  );
}; 
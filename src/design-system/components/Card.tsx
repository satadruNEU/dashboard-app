import React from 'react';
import { colors, spacing, borderRadius, shadows } from '../styles/theme';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'elevated' | 'outlined' | 'filled';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
}

const getVariantStyles = (variant: CardProps['variant']) => {
  switch (variant) {
    case 'elevated':
      return {
        backgroundColor: colors.background.paper,
        boxShadow: shadows.md,
        border: 'none',
      };
    case 'outlined':
      return {
        backgroundColor: colors.background.paper,
        border: `1px solid ${colors.grey[200]}`,
        boxShadow: 'none',
      };
    case 'filled':
      return {
        backgroundColor: colors.grey[50],
        border: 'none',
        boxShadow: 'none',
      };
    default:
      return {};
  }
};

const getPaddingStyles = (padding: CardProps['padding']) => {
  switch (padding) {
    case 'none':
      return { padding: 0 };
    case 'sm':
      return { padding: spacing.sm };
    case 'md':
      return { padding: spacing.md };
    case 'lg':
      return { padding: spacing.lg };
    default:
      return { padding: spacing.md };
  }
};

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'elevated',
  padding = 'md',
  className,
  style,
}) => {
  const baseStyles = {
    borderRadius: borderRadius.lg,
    ...getVariantStyles(variant),
    ...getPaddingStyles(padding),
    ...style,
  };

  return (
    <div className={className} style={baseStyles}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}> = ({ children, className, style }) => {
  return (
    <div
      className={className}
      style={{
        paddingBottom: spacing.md,
        borderBottom: `1px solid ${colors.grey[200]}`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export const CardBody: React.FC<{
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}> = ({ children, className, style }) => {
  return (
    <div
      className={className}
      style={{
        paddingTop: spacing.md,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export const CardFooter: React.FC<{
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}> = ({ children, className, style }) => {
  return (
    <div
      className={className}
      style={{
        paddingTop: spacing.md,
        borderTop: `1px solid ${colors.grey[200]}`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}; 
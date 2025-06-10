import React from 'react';
import type { CSSProperties } from 'react';
import { colors, typography } from '../styles/theme';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button';

export interface TypographyProps {
  variant?: TypographyVariant;
  color?: keyof typeof colors.text;
  align?: 'left' | 'center' | 'right';
  gutterBottom?: boolean;
  noWrap?: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const getVariantStyles = (variant: TypographyVariant): CSSProperties => {
  switch (variant) {
    case 'h1':
      return {
        fontSize: typography.fontSize['4xl'],
        fontWeight: typography.fontWeight.bold,
        lineHeight: 1.2,
      };
    case 'h2':
      return {
        fontSize: typography.fontSize['3xl'],
        fontWeight: typography.fontWeight.bold,
        lineHeight: 1.2,
      };
    case 'h3':
      return {
        fontSize: typography.fontSize['2xl'],
        fontWeight: typography.fontWeight.semibold,
        lineHeight: 1.3,
      };
    case 'h4':
      return {
        fontSize: typography.fontSize.xl,
        fontWeight: typography.fontWeight.semibold,
        lineHeight: 1.4,
      };
    case 'h5':
      return {
        fontSize: typography.fontSize.lg,
        fontWeight: typography.fontWeight.semibold,
        lineHeight: 1.4,
      };
    case 'h6':
      return {
        fontSize: typography.fontSize.base,
        fontWeight: typography.fontWeight.semibold,
        lineHeight: 1.4,
      };
    case 'subtitle1':
      return {
        fontSize: typography.fontSize.base,
        fontWeight: typography.fontWeight.medium,
        lineHeight: 1.5,
      };
    case 'subtitle2':
      return {
        fontSize: typography.fontSize.sm,
        fontWeight: typography.fontWeight.medium,
        lineHeight: 1.5,
      };
    case 'body1':
      return {
        fontSize: typography.fontSize.base,
        fontWeight: typography.fontWeight.normal,
        lineHeight: 1.5,
      };
    case 'body2':
      return {
        fontSize: typography.fontSize.sm,
        fontWeight: typography.fontWeight.normal,
        lineHeight: 1.5,
      };
    case 'caption':
      return {
        fontSize: typography.fontSize.xs,
        fontWeight: typography.fontWeight.normal,
        lineHeight: 1.5,
      };
    case 'button':
      return {
        fontSize: typography.fontSize.sm,
        fontWeight: typography.fontWeight.medium,
        lineHeight: 1.5,
        textTransform: 'uppercase' as const,
      };
    default:
      return {};
  }
};

const getElement = (variant: TypographyVariant) => {
  switch (variant) {
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    case 'h5':
      return 'h5';
    case 'h6':
      return 'h6';
    case 'subtitle1':
    case 'subtitle2':
      return 'h6';
    case 'body1':
    case 'body2':
      return 'p';
    case 'caption':
      return 'span';
    case 'button':
      return 'span';
    default:
      return 'p';
  }
};

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  color = 'primary',
  align = 'left',
  gutterBottom = false,
  noWrap = false,
  children,
  className,
  style,
}) => {
  const Component = getElement(variant);
  const baseStyles = {
    margin: 0,
    color: colors.text[color],
    textAlign: align,
    marginBottom: gutterBottom ? '0.35em' : 0,
    whiteSpace: noWrap ? 'nowrap' : 'normal',
    overflow: noWrap ? 'hidden' : 'visible',
    textOverflow: noWrap ? 'ellipsis' : 'clip',
    ...getVariantStyles(variant),
    ...style,
  };

  return (
    <Component className={className} style={baseStyles}>
      {children}
    </Component>
  );
}; 
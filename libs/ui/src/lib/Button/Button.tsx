import React from 'react';

import classNames from 'classnames/dedupe';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonStyle = 'default' | 'link';
/* eslint-disable-next-line */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  buttonStyle?: ButtonStyle;
}
export function Button({
  children,
  variant = 'primary',
  buttonStyle = 'default',
  className,
  ...props
}: ButtonProps) {
  const btnClass = classNames('px-3 py-2 rounded-sm', className, {
    'text-gray-50': buttonStyle === 'default',
    'bg-blue-900': variant === 'primary' && buttonStyle === 'default',
    'bg-red-900': variant === 'secondary' && buttonStyle === 'default',
    'bg-teal-900': variant === 'tertiary' && buttonStyle === 'default',
    'bg-transparent': buttonStyle === 'link',
    'text-blue-900': variant === 'primary' && buttonStyle === 'link',
    'text-red-900': variant === 'secondary' && buttonStyle === 'link',
    'text-teal-900': variant === 'tertiary' && buttonStyle === 'link',
  });

  return (
    <button className={btnClass} {...props}>
      {children}
    </button>
  );
}

export default Button;

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'secondary';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  className = '', 
  variant = 'default', 
  size = 'default', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
    outline: "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900",
    ghost: "hover:bg-slate-100 hover:text-slate-900",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200/80",
  };

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8 text-base",
    icon: "h-10 w-10",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  size = 'md',
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = '',
  type = 'text',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  
  const baseClasses = 'border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors';
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-2',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-4 py-3',
  };
  
  const errorClasses = error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300';
  const widthClass = fullWidth ? 'w-full' : '';
  const iconClass = (leftIcon || rightIcon || isPassword) ? 'pr-10' : '';
  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = isPassword && showPassword ? 'text' : type;
  
  return (
    <div className={`${widthClass} mb-4`}>
      {label && (
        <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
            {leftIcon}
          </div>
        )}
        <input
          type={inputType}
          className={`
            ${baseClasses}
            ${sizeClasses[size]}
            ${errorClasses}
            ${widthClass}
            ${leftIcon ? 'pl-10' : ''}
            ${iconClass}
            ${className}
          `}
          {...props}
        />
        {(rightIcon || isPassword) && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
            {isPassword ? (
              <button 
                type="button" 
                className="focus:outline-none" 
                onClick={toggleShowPassword}
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            ) : (
              rightIcon
            )}
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
import React from 'react'

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
  children: React.ReactElement
}

const IconButton: React.FC<IconButtonProps> = ({ className = '', children, ...props }: IconButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center p-1 rounded hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default IconButton
  
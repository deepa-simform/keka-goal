import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const avatarVariants = cva(
  'relative flex shrink-0 overflow-hidden rounded-full',
  {
    variants: {
      size: {
        sm: 'h-6 w-6',
        default: 'h-8 w-8',
        md: 'h-10 w-10',
        lg: 'h-12 w-12',
        xl: 'h-16 w-16'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
);

const avatarImageVariants = cva(
  'aspect-square h-full w-full object-cover',
  {
    variants: {
      size: {
        sm: 'h-6 w-6',
        default: 'h-8 w-8', 
        md: 'h-10 w-10',
        lg: 'h-12 w-12',
        xl: 'h-16 w-16'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
);

const avatarFallbackVariants = cva(
  'flex h-full w-full items-center justify-center rounded-full font-medium text-white',
  {
    variants: {
      size: {
        sm: 'text-xs',
        default: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: string;
  backgroundColor?: string;
}

export function Avatar({
  className,
  size,
  src,
  alt,
  fallback,
  backgroundColor,
  ...props
}: AvatarProps) {
  const [imageError, setImageError] = React.useState(false);

  // Generate initials from fallback text
  const getInitials = (text?: string) => {
    if (!text) return '?';
    return text
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Default background colors for different initials
  const getDefaultBackgroundColor = (initials: string) => {
    const colors = [
      '#c7b9da', '#aa9c75', '#d4b5ad', '#bea887', '#d1baa9',
      '#d1dfc3', '#d2c7ac', '#dbc0dd', '#b8d4c8', '#c9b8d9'
    ];
    
    const charCode = initials.charCodeAt(0) + (initials.charCodeAt(1) || 0);
    return colors[charCode % colors.length];
  };

  const initials = getInitials(fallback);
  const bgColor = backgroundColor || getDefaultBackgroundColor(initials);

  return (
    <div className={cn(avatarVariants({ size }), className)} {...props}>
      {src && !imageError ? (
        <img
          src={src}
          alt={alt}
          className={cn(avatarImageVariants({ size }))}
          onError={() => setImageError(true)}
        />
      ) : (
        <div
          className={cn(avatarFallbackVariants({ size }))}
          style={{ backgroundColor: bgColor }}
        >
          {initials}
        </div>
      )}
    </div>
  );
}

// User Avatar component specifically for team member data
export interface UserAvatarProps {
  user: {
    name: string;
    avatar?: string;
    initials?: string;
    avatarBg?: string;
  };
  size?: 'sm' | 'default' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function UserAvatar({ user, size = 'md', className }: UserAvatarProps) {
  return (
    <Avatar
      src={user.avatar}
      alt={user.name}
      fallback={user.initials || user.name}
      backgroundColor={user.avatarBg}
      size={size}
      className={className}
    />
  );
}
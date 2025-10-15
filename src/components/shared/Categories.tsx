import { CATEGORIES_OPTIONS } from '@/constants';
import { cn } from '@/lib/utils';
import React from 'react';
import { Button } from '../ui';

interface Props {
  className?: string;
}
export const Categories: React.FC<Props> = ({ className }) => {
  const [activeCategory, setActiveCategory] = React.useState(0);

  return (
    <div
      className={cn(
        'bg-secondary flex flex-wrap gap-2 rounded-2xl p-1.5',
        className
      )}
    >
      {CATEGORIES_OPTIONS.map((category, index) => (
        <Button
          onClick={() =>
            setActiveCategory(CATEGORIES_OPTIONS.indexOf(category))
          }
          className={activeCategory === index ? 'text-primary shadow' : ''}
          variant={'secondary'}
          key={category}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

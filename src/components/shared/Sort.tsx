import { cn } from '@/lib/utils';
import { SlidersHorizontal } from 'lucide-react';
import React from 'react';
import { Button } from '../ui';

interface Props {
  className?: string;
}
export const Sort: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        'bg-secondary flex items-center gap-2 rounded-2xl px-4 py-1.5',
        className
      )}
    >
      <SlidersHorizontal size={12} />
      <span>Сортировка:</span>
      <Button className="h-auto p-0" variant={'link'}>
        По популярности
      </Button>
    </div>
  );
};

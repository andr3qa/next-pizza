import { cn } from '@/lib/utils';
import { SlidersHorizontal } from 'lucide-react';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui';
import { sortOptions } from '@/constants/sortOptions';

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

      <Select defaultValue={sortOptions[0].name}>
        <SelectTrigger className="text-primary cursor-pointer border-0 shadow-none [&>svg]:hidden">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {sortOptions.map((option) => (
            <SelectItem
              key={option.name}
              className="cursor-pointer"
              value={option.name}
            >
              {option.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

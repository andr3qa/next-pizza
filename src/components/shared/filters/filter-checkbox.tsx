import { cn } from '@/lib/utils';
import React from 'react';
import { Checkbox, Label } from '../../ui';

interface Props {
  className?: string;
  id: string;
  name: string;
  label: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const FilterCheckbox: React.FC<Props> = ({
  id,
  name,
  label,
  className,
  checked,
  onCheckedChange,
}) => {
  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <Checkbox
        id={id}
        name={name}
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
      <Label className="leading-5" htmlFor={id}>
        {label}
      </Label>
    </div>
  );
};

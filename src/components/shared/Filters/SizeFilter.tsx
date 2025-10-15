import React from 'react';
import { cn } from '@/lib/utils';
import { FilterCheckbox } from '../FilterCheckbox';
import { SIZE_OPTIONS } from '@/constants';

interface Props {
  className?: string;
  selectSize: Set<string>;
  toggleSize: (id: string) => void;
}
export const SizeFilter: React.FC<Props> = ({
  className,
  selectSize,
  toggleSize,
}) => {
  return (
    <fieldset className={cn('mt-7.5 flex flex-col gap-3.5', className)}>
      <legend className="mb-3.5">Тип теста:</legend>
      {SIZE_OPTIONS.map(({ id, label }) => (
        <FilterCheckbox
          key={id}
          id={id}
          name="size"
          label={label}
          checked={selectSize.has(id)}
          onCheckedChange={() => toggleSize(id)}
        />
      ))}
    </fieldset>
  );
};

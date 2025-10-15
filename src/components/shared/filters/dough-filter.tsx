import React from 'react';
import { FilterCheckbox } from './filter-checkbox';
import { cn } from '@/lib/utils';
import { DOUGH_OPTIONS } from '@/constants';

interface Props {
  className?: string;
  selectDough: Set<string>;
  toggleDough: (id: string) => void;
}
export const DoughFilter: React.FC<Props> = ({
  className,
  selectDough,
  toggleDough,
}) => {
  return (
    <fieldset className={cn('mt-7.5 flex flex-col gap-3.5', className)}>
      <legend className="mb-3.5">Тип теста:</legend>
      {DOUGH_OPTIONS.map(({ id, label }) => (
        <FilterCheckbox
          key={id}
          id={id}
          name="dough"
          label={label}
          checked={selectDough.has(id)}
          onCheckedChange={() => toggleDough(id)}
        />
      ))}
    </fieldset>
  );
};

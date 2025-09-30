'use client';

import { cn } from '@/lib/utils';
import React, { ChangeEvent } from 'react';
import { Input } from '../ui';

interface Props {
  className?: string;
}
export const FilterPrice: React.FC<Props> = ({ className }) => {
  const [value1, setValue1] = React.useState<string>('');
  const [value2, setValue2] = React.useState<string>('');

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const value = e.target.value;

    if (
      value === '' ||
      (/^\d+$/.test(value) && Number(value) >= 0 && Number(value) <= 5000)
    ) {
      setValue(value);
    }
  };

  return (
    <div
      className={cn('grid grid-cols-[auto_auto] items-center gap-2', className)}
    >
      <span>от</span>
      <Input
        className="w-20"
        type="number"
        min={0}
        max={5000}
        placeholder="0"
        value={value1}
        onChange={(e) => handleInputChange(e, setValue1)}
      />
      <span>до</span>
      <Input
        className="w-20"
        type="number"
        min={0}
        max={5000}
        placeholder="5000"
        value={value2}
        onChange={(e) => handleInputChange(e, setValue2)}
      />
    </div>
  );
};

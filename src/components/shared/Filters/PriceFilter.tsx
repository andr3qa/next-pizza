import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui';
import { PriceProps } from '@/hooks/useFilters';

interface Props {
  className?: string;
  prices: PriceProps;
  setPrices: React.Dispatch<React.SetStateAction<PriceProps>>;
}

export const PriceFilter: React.FC<Props> = ({
  className,
  prices,
  setPrices,
}) => {
  const handlePriceChange = (field: keyof PriceProps, value: string) => {
    if (
      value === '' ||
      (/^\d+$/.test(value) && Number(value) >= 0 && Number(value) <= 5000)
    ) {
      setPrices((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  return (
    <fieldset className={cn('mt-7.5 flex flex-col gap-3.5', className)}>
      <legend>Цена:</legend>
      <div className="grid grid-cols-[auto_auto] items-center gap-2">
        <span>от</span>
        <Input
          className="w-20"
          type="number"
          min={0}
          max={5000}
          placeholder="0"
          value={prices.priceFrom}
          onChange={(e) => handlePriceChange('priceFrom', e.target.value)}
          aria-label="Минимальная цена"
        />
        <span>до</span>
        <Input
          className="w-20"
          type="number"
          min={0}
          max={5000}
          placeholder="5000"
          value={prices.priceTo}
          onChange={(e) => handlePriceChange('priceTo', e.target.value)}
          aria-label="Максимальная цена"
        />
      </div>
    </fieldset>
  );
};

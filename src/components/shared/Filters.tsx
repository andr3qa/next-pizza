'use client';

import { cn } from '@/lib/utils';
import React, { ChangeEvent } from 'react';
import { Button, Input, ScrollArea, Skeleton } from '../ui';
import { FilterCheckbox } from './FilterCheckbox';
import { Api } from '../../../services/api-client';
import { Ingredient } from '../../../generated/prisma';
import { useSet } from 'react-use';

interface Props {
  className?: string;
}
export const Filters: React.FC<Props> = ({ className }) => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  const [showMoreIngredients, setShowMoreIngredients] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const [selectDough, { toggle: toggleDough }] = useSet(new Set<string>([]));
  const [selectSize, { toggle: toggleSize }] = useSet(new Set<string>([]));
  const [selectIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>([])
  );
  const [priceFrom, setPriceFrom] = React.useState<string>('');
  const [priceTo, setPriceTo] = React.useState<string>('');

  React.useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true);
        const response = await Api.ingredients.getAll();
        setIngredients(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchIngredients();
  }, []);

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

  // React.useEffect(() => {
  //   console.log({
  //     selectDough,
  //     selectSize,
  //     selectIngredients,
  //     priceTo,
  //     priceFrom,
  //   });
  // }, [selectDough, selectSize, selectIngredients, priceTo, priceFrom]);

  return (
    <aside className={cn('w-50', className)}>
      <h2 className="text-xl font-bold text-black">Фильтрация</h2>
      <fieldset className="mt-7.5 flex flex-col gap-3.5">
        <legend className="mb-3.5">Тип теста:</legend>
        <FilterCheckbox
          id="traditional"
          name="dough"
          label="Традиционное"
          checked={selectDough.has('traditional')}
          onCheckedChange={() => toggleDough('traditional')}
        />
        <FilterCheckbox
          id="thin"
          name="dough"
          label="Тонкое"
          checked={selectDough.has('thin')}
          onCheckedChange={() => toggleDough('thin')}
        />
      </fieldset>
      <fieldset className="mt-7.5 flex flex-col gap-3.5">
        <legend className="mb-3.5">Размер:</legend>
        <FilterCheckbox
          id="20"
          name="size"
          label="20 см."
          checked={selectSize.has('20')}
          onCheckedChange={() => toggleSize('20')}
        />
        <FilterCheckbox
          id="30"
          name="size"
          label="30 см."
          checked={selectSize.has('30')}
          onCheckedChange={() => toggleSize('30')}
        />
        <FilterCheckbox
          id="40"
          name="size"
          label="40 см."
          checked={selectSize.has('40')}
          onCheckedChange={() => toggleSize('40')}
        />
      </fieldset>
      <fieldset className="mt-7.5 flex flex-col gap-3.5">
        <legend>Цена:</legend>
        <div
          className={cn(
            'grid grid-cols-[auto_auto] items-center gap-2',
            className
          )}
        >
          <span>от</span>
          <Input
            className="w-20"
            type="number"
            min={0}
            max={5000}
            placeholder="0"
            value={priceFrom}
            onChange={(e) => handleInputChange(e, setPriceFrom)}
          />
          <span>до</span>
          <Input
            className="w-20"
            type="number"
            min={0}
            max={5000}
            placeholder="5000"
            value={priceTo}
            onChange={(e) => handleInputChange(e, setPriceTo)}
          />
        </div>
      </fieldset>
      <fieldset className="mt-7.5">
        <legend className="mb-3.5">Ингридиенты:</legend>
        <ScrollArea className={cn('h-57', showMoreIngredients && 'h-auto')}>
          <div className="mt-3.5 flex flex-col gap-4 pr-4">
            {loading
              ? [...new Array(7)].map((_, i) => (
                  <Skeleton className="w-50 h-4 bg-gray-100" key={i} />
                ))
              : ingredients.map((ingredient) => (
                  <FilterCheckbox
                    key={ingredient.id}
                    id={ingredient.name}
                    name="ingredients"
                    label={ingredient.name}
                    checked={selectIngredients.has(String(ingredient.id))}
                    onCheckedChange={() =>
                      toggleIngredients(String(ingredient.id))
                    }
                  />
                ))}
          </div>
        </ScrollArea>
      </fieldset>
      <Button
        className="mt-7.5"
        variant={'link'}
        onClick={() => setShowMoreIngredients(!showMoreIngredients)}
      >
        {showMoreIngredients ? 'Скрыть' : 'Раскрыть'}
      </Button>
      {/* <Button className="mt-7.5">Применить</Button> */}
    </aside>
  );
};

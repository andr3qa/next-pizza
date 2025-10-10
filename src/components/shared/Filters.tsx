'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { Button, Input, ScrollArea, Skeleton } from '../ui';
import { FilterCheckbox } from './FilterCheckbox';
import { FilterPrice } from './FilterPrice';
import { Api } from '../../../services/api-client';
import { Ingredient } from '../../../generated/prisma';

interface Props {
  className?: string;
}
export const Filters: React.FC<Props> = ({ className }) => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  const [showMoreIngredients, setShowMoreIngredients] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true);
        const response = await Api.ingredients.ingredients();
        setIngredients(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchIngredients();
  }, []);

  return (
    <aside className={cn('w-50', className)}>
      <h2 className="text-xl font-bold text-black">Фильтрация</h2>
      <fieldset className="mt-7.5 flex flex-col gap-3.5">
        <legend className="mb-3.5">Тип теста:</legend>
        <FilterCheckbox id="traditional" name="dough" label="Традиционное" />
        <FilterCheckbox id="thin" name="dough" label="Тонкое" />
      </fieldset>
      <fieldset className="mt-7.5 flex flex-col gap-3.5">
        <legend>Цена:</legend>
        <FilterPrice className="mt-3.5" />
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

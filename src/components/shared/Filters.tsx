import { cn } from '@/lib/utils';
import React from 'react';
import { Button, Checkbox, Label } from '../ui';
import { FilterCheckbox } from './FilterCheckbox';
import { FilterPrice } from './FilterPrice';

interface Props {
  className?: string;
}
export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <aside className={cn('', className)}>
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
      <fieldset className="mt-7.5 flex flex-col gap-3.5">
        <legend className="mb-3.5">Ингридиенты:</legend>
        <FilterCheckbox id="garlic" name="ingredients" label="Чеснок" />
        <FilterCheckbox id="olives" name="ingredients" label="Маслины" />
        <FilterCheckbox id="pepper" name="ingredients" label="Перец" />
        <FilterCheckbox id="tomatoes" name="ingredients" label="Томаты" />
        <FilterCheckbox id="onion" name="ingredients" label="Лук" />
        <FilterCheckbox id="sausage" name="ingredients" label="Колбаса" />
      </fieldset>
      <Button className="mt-7.5">Применить</Button>
    </aside>
  );
};

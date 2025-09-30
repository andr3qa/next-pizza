import { cn } from '@/lib/utils';
import React from 'react';
import { Button, Checkbox, Label } from '../ui';
import { FilterPrice } from './FilterPrice';

interface Props {
  className?: string;
}
export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <aside className={cn('', className)}>
      <h2 className="text-xl font-bold text-black">Фильтрация</h2>
      <fieldset className="mt-7.5 flex flex-col gap-3.5">
        <legend>Тип теста:</legend>
        <div className="mt-3.5 flex items-center space-x-2">
          <Checkbox id="traditional" name="dough" />
          <Label htmlFor="traditional">Традиционное</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="thin" name="dough" />
          <Label htmlFor="thin">Тонкое</Label>
        </div>
      </fieldset>
      <fieldset className="mt-7.5 flex flex-col gap-3.5">
        <legend>Цена:</legend>
        <FilterPrice className="mt-3.5" />
      </fieldset>
      <fieldset className="mt-7.5 flex flex-col gap-3.5">
        <legend>Ингридиенты:</legend>
        <div className="mt-3.5 flex items-center space-x-2">
          <Checkbox id="garlic" name="ingridients" />
          <Label htmlFor="garlic">Чеснок</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="tomatoes" name="ingridients" />
          <Label htmlFor="tomatoes">Томаты</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="onion" name="ingridients" />
          <Label htmlFor="onion">Лук</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="sausage" name="ingridients" />
          <Label htmlFor="sausage">Колбаса</Label>
        </div>
      </fieldset>
      <Button className="mt-7.5">Применить</Button>
    </aside>
  );
};

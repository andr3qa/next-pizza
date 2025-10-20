import { Button, ScrollArea, Skeleton } from '@/components/ui';
import { useIngredients } from '@/hooks';
import { cn } from '@/lib/utils';
import React from 'react';
import { FilterCheckbox } from './filter-checkbox';

interface Props {
  className?: string;
  selectIngredients: Set<string>;
  toggleIngredients: (id: string) => void;
}

export const IngredientsFilter: React.FC<Props> = ({
  className,
  selectIngredients,
  toggleIngredients,
}) => {
  const { ingredients, loading } = useIngredients();
  const [showMore, setShowMore] = React.useState(false);

  return (
    <>
      <fieldset className={cn('mt-7.5', className)}>
        <legend className="mb-3.5">Ингридиенты:</legend>
        <ScrollArea className={cn('h-57', showMore && 'h-auto')}>
          <div className="mt-3.5 flex flex-col gap-4 pr-4">
            {loading
              ? [...new Array(7)].map((_, i) => (
                  <Skeleton className="h-4 w-full bg-gray-100" key={i} />
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
        variant="link"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'Скрыть' : 'Раскрыть'}
      </Button>
    </>
  );
};

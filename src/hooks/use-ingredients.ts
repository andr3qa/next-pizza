'use client';

import React from 'react';
import { Ingredient } from '../../generated/prisma';
import { Api } from '../services/api-client';

export const useIngredients = () => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  const [loading, setLoading] = React.useState(false);

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

  return { ingredients, loading };
};

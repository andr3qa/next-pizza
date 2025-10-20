'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { Categories, Sort } from '.';
import { Container } from '../container';
import { Category } from '@prisma/client';

interface Props {
  className?: string;
  categories: Category[];
}

export const TopBar: React.FC<Props> = ({ className, categories }) => {
  return (
    <div
      className={cn(
        'sticky top-0 z-10 bg-white py-5 shadow-lg shadow-black/5',
        className
      )}
    >
      <Container className="flex flex-col items-start justify-between gap-5 lg:flex-row">
        <Categories items={categories} />
        <Sort />
      </Container>
    </div>
  );
};

'use client';

import React from 'react';
import { Input } from '../ui';
import { Search } from 'lucide-react';
import { useClickAway, useDebounce } from 'react-use';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Api } from '../../services/api-client';
import { Product } from '@/prisma/generated/prisma';

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [focused, setFocused] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const [products, setProducts] = React.useState<Product[]>([]);
  const ref = React.useRef<HTMLDivElement>(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    async () => {
      try {
        const response = await Api.products.search(query);
        setProducts(response);
      } catch (error) {
        console.error(error);
      }
    },
    250,
    [query]
  );

  const onClickItem = () => {
    setFocused(false);
    setQuery('');
    setProducts([]);
  };

  return (
    <>
      <div
        className={cn(
          'invisible fixed left-0 top-0 h-dvh w-full bg-black/60 opacity-0 transition-opacity duration-300 ease-in-out',
          focused && 'visible opacity-100'
        )}
      ></div>
      <div ref={ref} className={cn('relative', className)}>
        <Search className="absolute left-3 top-1/2 w-4 -translate-y-1/2 stroke-gray-400" />
        <Input
          className="bg-secondary border-none pl-9 focus-visible:ring-transparent"
          type="text"
          placeholder="Поиск..."
          onFocus={() => setFocused(true)}
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        {products.length > 0 && (
          <div
            className={cn(
              'top-10/12 invisible absolute left-0 mt-1 w-full rounded-2xl bg-white p-1 opacity-0 shadow-md transition-opacity duration-300 ease-in-out',
              focused && 'visible top-full opacity-100'
            )}
          >
            {products.map((product) => (
              <Link
                key={product.id}
                onClick={onClickItem}
                href={`/product/${product.id}`}
                className="hover:text-primary flex items-center gap-2 p-2 transition-colors duration-150 ease-in-out"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  width={32}
                  height={32}
                />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

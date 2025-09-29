import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';
import { Button } from '../ui';

interface Props {
  className?: string;
}
export const Product: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('max-w-2xs', className)}>
      <div className="bg-primary-foreground flex items-center justify-center rounded-2xl py-6">
        <img
          src="https://media.dodostatic.net/image/r:584x584/0198bf57bc517218ab93c762f4b0193e.avif"
          alt="Pizza"
          width={212}
          height={212}
        />
      </div>
      <h3 className="mt-4 text-lg font-bold text-black">Пепперони</h3>
      <p className="mt-2 text-sm text-gray-400">
        Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты,
        сладкий перец, красный лук, моцарелла
      </p>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-lg font-bold text-black">520 ₽</p>
        <Button>Добавить</Button>
      </div>
    </div>
  );
};

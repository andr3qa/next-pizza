import { cn } from '@/lib/utils';
import React from 'react';
import { Container } from './Container';
import Image from 'next/image';
import { Button, Input } from '../ui';
import { ShoppingCart, User } from 'lucide-react';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('py-11', className)}>
      <Container className="sm:justify-items-normal grid grid-cols-1 items-center justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-[auto_1fr_auto] md:gap-16">
        <div className="flex gap-4">
          <Image src="/logo.svg" alt="Logo" width={32} height={32} />
          <div>
            <p className="text-2xl/5 font-black uppercase text-black">
              Next-Pizza
            </p>
            <p className="text-base font-normal text-gray-400">
              вкусней уже некуда
            </p>
          </div>
        </div>
        <Input
          className="col-span-2 md:col-auto"
          type="text"
          placeholder="Поиск..."
        />
        <div className="row-start-2 row-end-3 flex items-center gap-2 sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 sm:justify-end md:col-auto md:row-auto">
          <Button className="cursor-pointer gap-1" variant={'outline'}>
            <User />
            <span>Войти</span>
          </Button>
          <Button className="cursor-pointer">
            <span>520 ₽</span>
            <div className="w-0.25 h-4 bg-white/30"></div>
            <div className="flex items-center gap-1">
              <ShoppingCart />
              <span>1</span>
            </div>
          </Button>
        </div>
      </Container>
    </header>
  );
};

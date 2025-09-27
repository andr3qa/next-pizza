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
      <Container className="grid grid-cols-[auto_1fr_auto] items-center gap-x-16">
        <div className="flex items-start gap-4">
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
        <Input type="text" placeholder="Поиск..." />
        <div className="flex items-center gap-2 justify-self-end">
          <Button className="gap-1" variant={'outline'}>
            <User />
            <span>Войти</span>
          </Button>
          <Button>
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

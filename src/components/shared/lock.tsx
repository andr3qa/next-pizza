import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Button } from '../ui';

interface Props {
  className?: string;
}

export const Lock: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-12 pt-5 md:flex-row md:pt-20',
        className
      )}
    >
      <div className="max-w-100 text-center md:text-left">
        <h1 className="text-4xl font-extrabold text-black">Доступ запрещён</h1>
        <p className="mt-4 text-sm text-gray-400">
          Данную страницу могут просматривать только авторизованные пользователи
        </p>
        <Button asChild variant="outline" className="mt-8">
          <Link href="/">
            <ArrowLeft /> На главную
          </Link>
        </Button>
      </div>
      <Image
        className="order-first w-52 md:order-last md:w-auto"
        src="/lock.svg"
        alt="404"
        width={340}
        height={346}
      />
    </div>
  );
};

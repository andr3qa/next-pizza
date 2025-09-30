import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Button } from '../ui';

interface Props {
  className?: string;
}
export const NotFound: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn('flex items-center justify-center gap-12 pt-20', className)}
    >
      <div className="max-w-100">
        <h1 className="text-4xl font-extrabold text-black">
          Страница не найдена
        </h1>
        <p className="mt-4 text-sm text-gray-400">
          Проверьте корректность введённого адреса или повторите попытку позже
        </p>
        <Button asChild variant="outline" className="mt-8">
          <Link href="/">
            <ArrowLeft /> На главную
          </Link>
        </Button>
      </div>
      <Image src="/notfound.svg" alt="404" width={340} height={346} />
    </div>
  );
};

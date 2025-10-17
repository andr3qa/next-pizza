import type { Metadata } from 'next';
import { Header } from '@/components/shared';

export const metadata: Metadata = {
  title: 'Next Pizza | Главная',
  description: 'Самая вкусная пицца во вселенной',
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="pb-10">{children}</main>
    </>
  );
}

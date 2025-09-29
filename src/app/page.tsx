import { Container, Filters, Product, TopBar } from '@/components/shared';

export default function Home() {
  return (
    <Container>
      <TopBar />
      <div className="gap-13 mt-9 grid grid-cols-[auto_1fr]">
        <Filters />
        <div className="mt-10 grid grid-cols-3 justify-items-center gap-12">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </Container>
  );
}

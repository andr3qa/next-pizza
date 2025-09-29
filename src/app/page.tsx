import { Container, Filters, TopBar } from '@/components/shared';

export default function Home() {
  return (
    <Container>
      <TopBar />
      <div className="mt-9">
        <Filters />
      </div>
    </Container>
  );
}

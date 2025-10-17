import { notFound } from 'next/navigation';
import prisma from '../../../../../prisma/prisma';
import { Container } from '@/components/shared';

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
  });

  console.log(product);

  if (!product) {
    return notFound();
  }

  return (
    <Container>
      <img src={product.imageUrl} alt={product.name} />
      <h1>{product.name}</h1>
    </Container>
  );
}

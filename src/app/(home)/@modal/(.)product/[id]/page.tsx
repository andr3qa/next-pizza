import React from 'react';
import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';
import { ProductModalPopup } from '@/components/shared';

export default async function ProductModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      ingredients: true,
      productVariant: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return <ProductModalPopup product={product} />;
}

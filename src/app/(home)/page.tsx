import { Container, Filters, ProductsGroup, TopBar } from '@/components/shared';
import prisma from '@/lib/prisma';

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          productVariant: true,
        },
      },
    },
  });

  return (
    <>
      <TopBar
        categories={categories.filter(
          (category) => category.products.length > 0
        )}
      />
      <Container>
        <div className="gap-13 mt-9 grid grid-cols-1 items-start md:grid-cols-[auto_1fr]">
          <Filters />
          <div className="flex flex-col gap-10">
            {categories.map(
              (category) =>
                category.products.length > 0 && (
                  <ProductsGroup
                    key={category.id}
                    title={category.name}
                    items={category.products}
                    categoryId={category.id}
                  />
                )
            )}
          </div>
        </div>
      </Container>
    </>
  );
}

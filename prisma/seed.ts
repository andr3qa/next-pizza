import { categorySeed } from './constants/categorySeed';
import prisma from './prisma';
import { hashSync } from 'bcrypt';
import { ingredientsSeed } from './constants/ingredientsSeed';
import { productsSeed } from './constants/productsSeed';
import { Prisma } from '../generated/prisma';

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductVariant = ({
  productId,
  pizzaType,
  size,
}: {
  productId: number;
  pizzaType?: 1 | 2;
  size?: 20 | 30 | 40;
}) => {
  return {
    productId,
    price: randomDecimalNumber(190, 600),
    pizzaType,
    size,
  } as Prisma.ProductVariantUncheckedCreateInput;
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User Test',
        email: 'user@example.com',
        password: hashSync('password', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullName: 'Admin Test',
        email: 'admin@example.com',
        password: hashSync('password', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  });

  await prisma.category.createMany({
    data: categorySeed,
  });

  await prisma.ingredient.createMany({
    data: ingredientsSeed,
  });

  await prisma.product.createMany({
    data: productsSeed,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: 'Пепперони фреш',
      imageUrl:
        'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
      categoryId: 1,
      ingredients: {
        connect: ingredientsSeed.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: 'Сырная',
      imageUrl:
        'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
      categoryId: 1,
      ingredients: {
        connect: ingredientsSeed.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: 'Чоризо фреш',
      imageUrl:
        'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
      categoryId: 1,
      ingredients: {
        connect: ingredientsSeed.slice(10, 40),
      },
    },
  });

  await prisma.productVariant.createMany({
    data: [
      // Пицца "Пепперони фреш"
      generateProductVariant({ productId: pizza1.id, pizzaType: 1, size: 20 }),
      generateProductVariant({ productId: pizza1.id, pizzaType: 2, size: 30 }),
      generateProductVariant({ productId: pizza1.id, pizzaType: 2, size: 40 }),

      // Пицца "Сырная"
      generateProductVariant({ productId: pizza2.id, pizzaType: 1, size: 20 }),
      generateProductVariant({ productId: pizza2.id, pizzaType: 1, size: 30 }),
      generateProductVariant({ productId: pizza2.id, pizzaType: 1, size: 40 }),
      generateProductVariant({ productId: pizza2.id, pizzaType: 2, size: 20 }),
      generateProductVariant({ productId: pizza2.id, pizzaType: 2, size: 30 }),
      generateProductVariant({ productId: pizza2.id, pizzaType: 2, size: 40 }),

      // Пицца "Чоризо фреш"
      generateProductVariant({ productId: pizza3.id, pizzaType: 1, size: 20 }),
      generateProductVariant({ productId: pizza3.id, pizzaType: 2, size: 30 }),
      generateProductVariant({ productId: pizza3.id, pizzaType: 2, size: 40 }),

      // Остальные продукты
      generateProductVariant({ productId: 1 }),
      generateProductVariant({ productId: 2 }),
      generateProductVariant({ productId: 3 }),
      generateProductVariant({ productId: 4 }),
      generateProductVariant({ productId: 5 }),
      generateProductVariant({ productId: 6 }),
      generateProductVariant({ productId: 7 }),
      generateProductVariant({ productId: 8 }),
      generateProductVariant({ productId: 9 }),
      generateProductVariant({ productId: 10 }),
      generateProductVariant({ productId: 11 }),
      generateProductVariant({ productId: 12 }),
      generateProductVariant({ productId: 13 }),
      generateProductVariant({ productId: 14 }),
      generateProductVariant({ productId: 15 }),
      generateProductVariant({ productId: 16 }),
      generateProductVariant({ productId: 17 }),
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: '1111',
      },
      {
        userId: 2,
        totalAmount: 0,
        token: '2222',
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      cartId: 1,
      productVariantId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      },
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductVariant" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

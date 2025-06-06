import prismaClient from "../../prisma";


interface CreateOrderRequest {
  name: string;
  delivery_type: 'retirada' | 'encomenda';
  delivery_date?: Date;
  observation?: string;
  items: {
    productId: string;
    amount: number;
    price: number;
  }[];
}

class CreateOrderService {
  async execute({ name, delivery_type, delivery_date, observation, items }: CreateOrderRequest) {
    const order = await prismaClient.order.create({
      data: {
        name,
        delivery_type,
        delivery_date,
        observation,
        orderItems: {
          create: items.map(item => ({
            productId: item.productId,
            amount: item.amount,
            price: item.price,
          })),
        },
      },
      include: {
        orderItems: true,
      },
    });

    return order;
  }
}

export { CreateOrderService };
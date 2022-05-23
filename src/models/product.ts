export interface IProduct {
  productId: string;
  name: string;
  description: string;
  images: string;
  price: 0;
  categoryId: string;
  isFeatured: true;
  dateCreated: Date;
}

export interface ICartItem {
  productId: string;
  name: string;
  quantity: number;
  images: string;
  price: number;
}

export interface IOrderRequest {
  CustomerId: string;
  Address: string;
  OrderItems: {
    ProductId: string;
    Quantity: number;
  }[];
  TotalPrice: number;
}

export interface IOrderRespone {
  orderId: string;
  address: string;
  status: string;
  orderItems: [
    {
      orderItemId: string;
      quantity: number;
      orderId: string;
      productId: string;
    }
  ];
  totalPrice: number;
  customersId: string;
  employeesId: string;
  dateOrdered: string;
}

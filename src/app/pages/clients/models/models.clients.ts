export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    additionalNotes?: string;
  }
  
 export interface CartItem extends Product {
    quantity: number;
  }

export interface Order {
    BranchId: string;
    CustomerName: string;
    CustomerPhone: string;
    CustomerEmail: string;
    Total: number;
    Status: number;
    Id_GUID: string;
    CreatedAt?:string;
    FechaEntrega?:string;
    OrderItems: OrderItem[];
}

export interface OrderItem {
    ProductId: number;
    Quantity: number;
    Price: number;
    OrderId?: number;
    Id_GUID: string;
    AditionalNotes: string;
}
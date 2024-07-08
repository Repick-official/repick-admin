export interface TitleType {
  mainTitleName: string;
}

export interface TotalCurrentType {
  totalPickup: number;
  totalPaymentCompleted: number;
  totalReturnRequested: number;
}

export interface PurchaseCurrentType {
  purchaseRequested: number;
  purchaseInTransit: number;
  purchaseWaiting: number;
  purchaseConfirm: number;
}

export interface OrderStatus {
  statusCode: number;
  message: string;
  result: {
    content: [
      {
        productOrderId: number;
        productCode: string;
        productName: string;
        userName: string;
        userAddress: string;
        userPhoneNumber: string;
        state: string;
        trackingNumber: string;
        isConfirmed: boolean;
        confirmRemainingDays: number;
      }
    ];
    totalPages: number;
    totalElements: number;
  };
}
export interface RequestPurchaseProps {
  orders: OrderStatus | null;
}
export interface RequestReturnProps {
  returns: OrderStatus | null;
}

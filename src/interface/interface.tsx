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
export interface ClothingSalesStatus {
  statusCode: number;
  message: string;
  result: [
    {
      code: string;
      name: string;
      userId: number;
      clothingSalesCount: number;
      totalQuantity: number;
      sellingQuantity: number;
      soldQuantity: number;
      rejectedQuantity: number;
      expiredQuantity: number;
      weight: number;
      createdDate: string;
    }
  ];
}
export interface ClothingSalesItemStatus {
  statusCode: number;
  message: string;
  result: [
    {
      productCode: string;
      thumbnailImageUrl: string;
      productName: string;
      grade: string;
      salesPeriod: string;
      salesPrice: number;
      settlementPrice: number;
      fee: number;
      requestDate: string;
      isReturned: boolean;
    }
  ];
}

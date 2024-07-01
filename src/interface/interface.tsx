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

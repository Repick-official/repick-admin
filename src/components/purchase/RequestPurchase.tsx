"use client";
import PurchaseItem from "./PurchaseItem";
import { useState, useEffect } from "react";
import { RequestPurchaseProps } from "@/interface/interface";
import ModModal from "./ModModal";

export default function RequestPurchase({ orders }: RequestPurchaseProps) {
  const [items, setItems] = useState(orders?.result.content);
  console.log("items", items);

  useEffect(() => {
    if (orders) {
      setItems(orders.result.content);
    }
  }, [orders]);

  return (
    <div className="w-1216pxr h-1038pxr rounded-10pxr border-1pxr border-solid border-dark-gray bg-white ml-32pxr">
      <div className="mt-28pxr ml-40pxr w-1144pxr">
        <div className="text-16pxr font-medium leading-24pxr">
          전체 {orders?.result.totalElements}개
        </div>
        <div className="bg-circle-gray h-48pxr flex mt-24pxr">
          <div className="text-14pxr font-medium leading-22pxr text-unSelected-color flex items-center">
            <div className="ml-18pxr w-91pxr">상품 코드</div>
            <div className="w-255pxr">상품명</div>
            <div className="w-113pxr">이름</div>
            <div className="w-291pxr">주소</div>
            <div className="w-154pxr">전화번호</div>
            <div>상태</div>
          </div>
        </div>

        {items?.map((item) => (
          <PurchaseItem item={item} setItems={setItems} />
        ))}
      </div>
    </div>
  );
}

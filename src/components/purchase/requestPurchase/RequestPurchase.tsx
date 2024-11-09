"use client";
import PurchaseItem from "./PurchaseItem";
import { useState, useEffect } from "react";
import { RequestPurchaseProps } from "@/interface/interface";
import ModModal from "./ModModal";

export default function RequestPurchase({ orders }: RequestPurchaseProps) {
  const [items, setItems] = useState(orders?.result.content);
  console.log("items", items);

  const [page, setPage] = useState(0); // 현재 페이지 상태
  const size = 10; // 페이지당 아이템 수

  useEffect(() => {
    if (orders) {
      setItems(orders.result.content);
    }
  }, [orders]);

  // 페이지 변경 함수
  const handlePageChange = (newPage: number) => {
    if (newPage >= 0 && (!orders || newPage < orders.result.totalPages)) {
      setPage(newPage);
    }
  };

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
            <div className="w-110pxr">전화번호</div>
            <div className="w-154pxr">상태</div>
            <div>반품</div>
          </div>
        </div>

        {items?.map((item) => (
          <PurchaseItem
            key={item.productCode}
            item={item}
            setItems={setItems}
          />
        ))}
      </div>
      {/* 페이지네이션 버튼 */}
      <div className="pagination mt-16pxr flex justify-center space-x-2">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 0}
          className="px-4 py-2 border rounded"
        >
          이전
        </button>

        {[...Array(orders?.result.totalPages || 1)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index)}
            className={`px-3 py-1 border rounded ${
              index === page ? "bg-gray-300" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={!orders || page + 1 >= (orders.result.totalPages || 0)}
          className="px-4 py-2 border rounded"
        >
          다음
        </button>
      </div>
    </div>
  );
}

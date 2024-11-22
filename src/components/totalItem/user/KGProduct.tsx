"use client";
import { useState, useEffect } from "react";
import { getClothingSalesDetails, updateProductReturn } from "@/api/request";

export default function KGProduct({ items, clothingSalesId }: any) {
  const [view, setView] = useState<{ [key: string]: boolean }>({});
  const [userItems, setUserItems] = useState<any[]>(items?.result?.content);

  const [page, setPage] = useState(0); // 현재 페이지 상태
  const size = 10; // 페이지당 아이템 수

  const [isExpired, setIsExpired] = useState(false);

  const [reloadTrigger, setReloadTrigger] = useState(false); // 데이터 재로드 트리거

  // 데이터 가져오기 함수
  const fetchItems = async () => {
    const updatedReturns = await getClothingSalesDetails(
      clothingSalesId,
      "kg-sell",
      String(page),
      String(size) + `&isExpired=${isExpired}`
    );
    setUserItems(updatedReturns.result.content);
  };
  console.log("kkkkkkkk", userItems);

  // 페이지나 트리거가 변경될 때 데이터를 다시 가져오기
  useEffect(() => {
    fetchItems();
  }, [page, reloadTrigger]);

  const handleClickOutside = (event: any) => {
    if (
      Object.values(view).some(Boolean) &&
      !event.target.closest(".dropdown-container")
    ) {
      setView({});
    }
  };

  const toggleDropdown = (id: string) => {
    setView((prevView) => ({
      ...prevView,
      [id]: !prevView[id],
    }));
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [view]);

  return (
    <div className="w-1216pxr h-1038pxr border-1pxr border-solid border-dark-gray bg-white ml-32pxr">
      <div className="mt-28pxr ml-40pxr w-1144pxr">
        <div className="flex">
          <div className="text-16pxr font-medium leading-24pxr">
            전체 {userItems?.length ?? 0}개
          </div>
        </div>
        <div className="bg-circle-gray h-48pxr flex mt-24pxr">
          <div className="text-14pxr font-medium leading-22pxr text-unSelected-color flex items-center">
            <div className="ml-15pxr w-91pxr">상품 코드</div>
            <div className="w-239pxr">상품명</div>
            <div className="w-69pxr">등급</div>
            <div className="w-149pxr">신청일</div>
            <div className="w-127pxr">경로</div>
            <div className="w-125pxr">정산상태</div>
          </div>
        </div>

        {userItems?.map((item) => (
          <div key={item.productCode}>
            <div className="h-92pxr flex items-center text-14pxr font-normal leading-21pxr">
              <div className="ml-15pxr w-91pxr">{item.productCode}</div>
              <div className="flex items-center w-239pxr">
                <div className="w-60pxr h-60pxr border-1pxr border-solid border-circle-gray"></div>
                <div className="w-146pxr ml-12pxr">{item.productName}</div>
              </div>
              <div className="w-69pxr">{item.grade}</div>
              <div className="w-149pxr">{item.requestDate}</div>
              <div className="w-127pxr">
                {item.isExpired ? "기한 만료" : "리젝"}
              </div>
              <div className="w-125pxr">{item.settlementStatus}</div>
            </div>
            <div className="h-1pxr w-full bg-dark-gray"></div>
          </div>
        ))}
        <div className="h-1pxr w-full bg-dark-gray"></div>
      </div>
    </div>
  );
}

"use client";
import MainTitle from "@/components/titles/MainTitle";
import TotalItemContent from "@/components/totalItem/TotalItemContent";
import TopInfo from "@/components/wardrobe/TopInfo";
import { useState, useEffect } from "react";
import { getClothingSales } from "@/api/request";
import { ClothingSalesStatus } from "@/interface/interface";

function Totalitem() {
  const [clothing, setClothing] = useState<ClothingSalesStatus | null>(null);
  const [page, setPage] = useState(0); // 현재 페이지 상태
  const size = 10; // 페이지당 아이템 수
  const [sortType, setSortType] = useState("latest"); // 정렬 기준 상태

  const fetchItem = async () => {
    const requestPurchase = await getClothingSales(
      String(page),
      String(size),
      sortType
    );
    setClothing(requestPurchase);
    console.log("requestPurchase", requestPurchase);
  };

  // 데이터 가져오기 함수
  useEffect(() => {
    fetchItem();
  }, [page, sortType]);

  // 정렬 기준 변경 함수
  const handleSortChange = (sort: string) => {
    setSortType(sort);
  };

  return (
    <div className="mt-69pxr ml-104pxr">
      <div>
        <MainTitle mainTitleName="상품 종합 현황" />
        <div>
          <TopInfo
            total={clothing?.result.totalElements}
            onSortChange={handleSortChange}
            currentSort={sortType}
          />
          <TotalItemContent clothing={clothing} />
        </div>
      </div>
    </div>
  );
}
export default Totalitem;

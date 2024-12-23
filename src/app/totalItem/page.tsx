"use client";
import MainTitle from "@/components/titles/MainTitle";
import TotalItemContent from "@/components/totalItem/TotalItemContent";
import TopInfo from "@/components/wardrobe/TopInfo";
import { useState, useEffect } from "react";
import { getClothingSales } from "@/api/request";
import { ClothingSalesStatus } from "@/interface/interface";

function Totalitem() {
  const [clothing, setClothing] = useState<any>(null);
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
    setClothing(null); // 새로운 데이터를 로드하기 전에 상태 초기화
    fetchItem();
  }, [page, sortType]);

  // 정렬 기준 변경 함수
  const handleSortChange = (sort: string) => {
    setSortType(sort);
  };

  // 페이지 변경 함수
  const handlePageChange = (newPage: number) => {
    if (newPage >= 0 && (!clothing || newPage < clothing.result.totalPages)) {
      setPage(newPage);
    }
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

          {/* 페이지네이션 버튼 */}
          <div className="pagination mt-16pxr flex justify-center space-x-2">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 0}
              className="px-4 py-2 border rounded"
            >
              이전
            </button>

            {[...Array(clothing?.result.totalPages || 1)].map((_, index) => (
              <button
                key={`${sortType}-${index}`} // 고유한 키 생성
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
              disabled={clothing && page + 1 >= clothing.result.totalPages}
              className="px-4 py-2 border rounded"
            >
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Totalitem;

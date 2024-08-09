"use client";
import MainTitle from "@/components/titles/MainTitle";
import { useState, useEffect } from "react";
import { getClothingSalesDetails } from "@/api/request";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import SellingOrSold from "@/components/totalItem/\buser/SellingOrSold";
import { ClothingSalesItemStatus } from "@/interface/interface";

export default function page() {
  const path = usePathname().split("/");

  const userId = Number(path[3]);
  const clothingSalesCount = Number(path[4]);

  const [items, setItems] = useState<ClothingSalesItemStatus | null>(null);

  const [selectedButtons, setSelectedButtons] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);

  const handleButtonClick = (index: any) => {
    const updatedButtons = selectedButtons.map((_, i) => i === index);
    setSelectedButtons(updatedButtons);
  };

  useEffect(() => {
    const fetchItem = async () => {
      const requestPurchase = await getClothingSalesDetails(
        userId,
        clothingSalesCount,
        "SELLING",
        "0",
        "4"
      );
      console.log("requestPurchase", requestPurchase);
      setItems(requestPurchase);
    };
    fetchItem();
  }, []);

  return (
    <div className="mt-69pxr ml-104pxr">
      <div>
        <MainTitle mainTitleName="유저 상품 현황" />
        <div className="mt-24pxr">
          <div className="flex font-14pxr font-medium leading-22pxr">
            <div className="text-unSelected-color">이름</div>
            <div className="text-nav-color ml-8pxr mr-36pxr">이도현</div>

            <div className="text-unSelected-color">코드</div>
            <div className="text-nav-color ml-8pxr mr-36pxr">161-1</div>

            <div className="text-unSelected-color">주소</div>
            <div className="text-nav-color ml-8pxr mr-36pxr">
              서울특별시 마포구 와우산로 94
            </div>

            <div className="text-unSelected-color">번호</div>
            <div className="text-nav-color ml-8pxr mr-36pxr">010-8190-9773</div>
          </div>
        </div>

        {/* <div className="mt-51pxr flex flex-row"> 여기 api가 어디로.. 갔지?
          <div>
            {["판매 중", "판매 완료", "리젝 상품", "만료 상품", "KG 매입"].map(
              (title, index) => (
                <div
                  key={index}
                  className={classNames(
                    "cursor-pointer w-178pxr h-56pxr rounded-10pxr flex items-center justify-center mt-16pxr",
                    {
                      "text-background-color bg-nav-color":
                        selectedButtons[index],
                      "text-nav-color bg-background-color":
                        !selectedButtons[index],
                    }
                  )}
                  onClick={() => handleButtonClick(index)}
                >
                  <div className="text-16pxr font-medium leading-24pxr ml-17pxr">
                    {title}
                  </div>
                  <div className="text-18pxr font-bold leading-27pxr ml-8pxr">
                    24
                  </div>
                  <div className="ml-auto mr-14pxr">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M9.70711 5.29289C9.31658 4.90237 8.68342 4.90237 8.29289 5.29289C7.90237 5.68342 7.90237 6.31658 8.29289 6.70711L13.5858 12L8.29289 17.2929C7.90237 17.6834 7.90237 18.3166 8.29289 18.7071C8.68342 19.0976 9.31658 19.0976 9.70711 18.7071L15.7071 12.7071C16.0976 12.3166 16.0976 11.6834 15.7071 11.2929L9.70711 5.29289Z"
                        fill={selectedButtons[index] ? "#F9FAFB" : "#2D3648"}
                      />
                    </svg>
                  </div>
                </div>
              )
            )}
          </div>
          <SellingOrSold content={items} />
        </div> */}

        {/* <div className="mt-24pxr">
              {selectedButtons[0] && <RequestPurchase orders={orders} />}
              {selectedButtons[1] && <RequestPurchase orders={ordersCompleted} />}
              {selectedButtons[2] && <RejectedProduct rejectedItems={rejectedItems} />}
              {selectedButtons[3] && <ExpiredProduct expiredItems={expiredItems} />}
              {selectedButtons[4] && <div>KG 매입 관련 컴포넌트는 아직 없습니다.</div>}
            </div> */}
      </div>
    </div>
  );
}

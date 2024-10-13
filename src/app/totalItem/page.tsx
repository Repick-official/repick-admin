"use client";
import MainTitle from "@/components/titles/MainTitle";
import TotalItemContent from "@/components/totalItem/TotalItemContent";
import TopInfo from "@/components/wardrobe/TopInfo";
import { useState, useEffect } from "react";
import { getClothingSales } from "@/api/request";
import { ClothingSalesStatus } from "@/interface/interface";

function totalitem() {
  const [clothing, setClothing] = useState<ClothingSalesStatus | null>(null);

  useEffect(() => {
    const fetchItem = async () => {
      const requestPurchase = await getClothingSales(1, "0", "4");
      setClothing(requestPurchase);

      console.log("requestPurchase", requestPurchase);
    };
    fetchItem();
  }, []);

  console.log(clothing?.result.content.length);

  return (
    <div className="mt-69pxr ml-104pxr">
      <div>
        <MainTitle mainTitleName="상품 종합 현황" />
        <div>
          <TopInfo total={clothing?.result.totalElements} />
          <TotalItemContent clothing={clothing} />
        </div>
      </div>
    </div>
  );
}
export default totalitem;

"use client";
import DateNow from "@/components/dashboard/DateNow";
import TotalCurrent from "@/components/dashboard/TotalCurrent";
import PickupCurrent from "@/components/dashboard/PickupCurrent";
import PurchaseCurrent from "@/components/dashboard/PurchaseCurrent";
import UserCurrent from "@/components/dashboard/UserCurrent";
import { useEffect, useState } from "react";
import { getDashboardClothing, getDashboardToday } from "@/api/request";

function dashboard() {
  const [todayState, setTodayState] = useState<any>(null);
  const [clothingState, setClothingState] = useState<any>(null);
  const purchaseRequested = 123;
  const purchaseInTransit = 24;
  const purchaseWaiting = 3;
  const purchaseConfirm = 1234;
  const returnRequested = 0;

  useEffect(() => {
    const fetchItem = async () => {
      const today = await getDashboardToday();
      const clothing = await getDashboardClothing();
      setTodayState(today);
      setClothingState(clothing);
    };
    fetchItem();
  }, []);
  console.log("clothing", clothingState?.result);

  return (
    <div className="mt-69pxr ml-104pxr">
      <div className="flex space-x-16pxr">
        <DateNow />
        <TotalCurrent
          totalPickup={todayState?.result.collectionRequestCount}
          totalPaymentCompleted={todayState?.result.paymentCompleteCount}
          totalReturnRequested={todayState?.result.returnRequestCount}
        />
      </div>
      <div className="mt-24pxr flex">
        <div>
          <PickupCurrent
            collectionRequestCount={
              clothingState?.result.collectionRequestCount
            }
            collectingCount={clothingState?.result.collectingCount}
            productionCompleteCount={
              clothingState?.result.productionCompleteCount
            }
            sellingCount={clothingState?.result.sellingCount}
            settlementRequestCount={
              clothingState?.result.settlementRequestCount
            }
          />
          <PurchaseCurrent
            purchaseRequested={}
            purchaseInTransit={}
            purchaseWaiting={}
            purchaseConfirm={}
            returnRequested={}
          />
        </div>
        <div>
          <UserCurrent />
        </div>
      </div>
    </div>
  );
}
export default dashboard;

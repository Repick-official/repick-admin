"use client";
import DateNow from "@/components/dashboard/DateNow";
import TotalCurrent from "@/components/dashboard/TotalCurrent";
import PickupCurrent from "@/components/dashboard/PickupCurrent";
import PurchaseCurrent from "@/components/dashboard/PurchaseCurrent";
import UserCurrent from "@/components/dashboard/UserCurrent";
import { useEffect, useState } from "react";
import { getDashboardToday } from "@/api/request";

function dashboard() {
  const totalPickup = 12;
  const totalPaymentCompleted = 12;
  const totalReturnRequested = 3;
  const [todayState, setTodayState] = useState<any>(null);

  const purchaseRequested = 123;
  const purchaseInTransit = 24;
  const purchaseWaiting = 3;
  const purchaseConfirm = 1234;
  const returnRequested = 0;

  useEffect(() => {
    const fetchItem = async () => {
      const today = await getDashboardToday();
      setTodayState(today);
    };
    fetchItem();
  }, []);
  console.log("today", todayState?.result);

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
          <PickupCurrent />
          <PurchaseCurrent
            purchaseRequested={purchaseRequested}
            purchaseInTransit={purchaseInTransit}
            purchaseWaiting={purchaseWaiting}
            purchaseConfirm={purchaseConfirm}
            returnRequested={returnRequested}
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

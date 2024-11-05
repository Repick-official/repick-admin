"use client";
import DateNow from "@/components/dashboard/DateNow";
import TotalCurrent from "@/components/dashboard/TotalCurrent";
import PickupCurrent from "@/components/dashboard/PickupCurrent";
import PurchaseCurrent from "@/components/dashboard/PurchaseCurrent";
import UserCurrent from "@/components/dashboard/UserCurrent";
import { useEffect, useState } from "react";
import {
  getDashboardClothing,
  getDashboardOrder,
  getDashboardToday,
  getUserStatistics,
} from "@/api/request";

function Dashboard() {
  const [todayState, setTodayState] = useState<any>(null);
  const [clothingState, setClothingState] = useState<any>(null);
  const [orderState, setOrderState] = useState<any>(null);
  const [users, setUsers] = useState<any>(null);

  useEffect(() => {
    const fetchItem = async () => {
      const today = await getDashboardToday();
      const clothing = await getDashboardClothing();
      const order = await getDashboardOrder();
      const userData = await getUserStatistics();
      setTodayState(today);
      setClothingState(clothing);
      setOrderState(order);
      setUsers(userData);
    };
    fetchItem();
  }, []);
  console.log("order", orderState);
  console.log("userData", users);

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
            purchaseRequested={orderState?.result.paymentCompletedCount}
            purchaseInTransit={orderState?.result.shippingCount}
            purchaseWaiting={orderState?.result.confirmWaitCount}
            purchaseConfirm={orderState?.result.confirmedCount}
            returnRequested={orderState?.result.returnRequestCount}
          />
        </div>
        <div>
          <UserCurrent users={users} />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;

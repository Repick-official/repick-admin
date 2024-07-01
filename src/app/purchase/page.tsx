"use client";
import MainTitle from "@/components/titles/MainTitle";
import { useState } from "react";
import classNames from "classnames";
import RequestPurchase from "@/components/purchase/RequestPurchase";
import RequestReturn from "@/components/purchase/RequestReturn";

function purchase() {
  const [isPurchase, setIsPurchase] = useState(true);
  const [isSelected, setIsSelected] = useState(true);

  const purchaseNum = 24;
  const ReturnNum = 5;

  return (
    <div className="mt-69pxr ml-104pxr">
      <div>
        <MainTitle mainTitleName="구매 현황" />
        <div className="mt-39pxr flex flex-row">
          <div>
            <div
              className={classNames(
                "cursor-pointer w-178pxr h-56pxr rounded-10pxr flex items-center justify-center",
                {
                  "text-background-color bg-nav-color": isSelected,
                  "text-nav-color bg-background-color": !isSelected,
                }
              )}
              onClick={() => {
                setIsSelected(true);
              }}
            >
              <div className="text-16pxr font-medium leading-24pxr">
                구매 신청
              </div>
              <div className="text-18pxr font-bold leading-27pxr">
                {purchaseNum}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.70711 5.29289C9.31658 4.90237 8.68342 4.90237 8.29289 5.29289C7.90237 5.68342 7.90237 6.31658 8.29289 6.70711L13.5858 12L8.29289 17.2929C7.90237 17.6834 7.90237 18.3166 8.29289 18.7071C8.68342 19.0976 9.31658 19.0976 9.70711 18.7071L15.7071 12.7071C16.0976 12.3166 16.0976 11.6834 15.7071 11.2929L9.70711 5.29289Z"
                  fill={isSelected ? "#F9FAFB" : "#2D3648"}
                />
              </svg>
            </div>
            <div
              className={classNames(
                "cursor-pointer w-178pxr h-56pxr rounded-10pxr flex items-center justify-center mt-16pxr",
                {
                  "text-background-color bg-nav-color": !isSelected,
                  "text-nav-color bg-background-color": isSelected,
                }
              )}
              onClick={() => {
                setIsSelected(false);
              }}
            >
              <div className="text-16pxr font-medium leading-24pxr">
                반품 신청
              </div>
              <div className="text-18pxr font-bold leading-27pxr">
                {ReturnNum}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.70711 5.29289C9.31658 4.90237 8.68342 4.90237 8.29289 5.29289C7.90237 5.68342 7.90237 6.31658 8.29289 6.70711L13.5858 12L8.29289 17.2929C7.90237 17.6834 7.90237 18.3166 8.29289 18.7071C8.68342 19.0976 9.31658 19.0976 9.70711 18.7071L15.7071 12.7071C16.0976 12.3166 16.0976 11.6834 15.7071 11.2929L9.70711 5.29289Z"
                  fill={isSelected ? "#2D3648" : "#F9FAFB"}
                />
              </svg>
            </div>
          </div>

          <div>{isSelected ? <RequestPurchase /> : <RequestReturn />}</div>
        </div>
      </div>
    </div>
  );
}
export default purchase;
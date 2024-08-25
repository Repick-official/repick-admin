import React from "react";

export default function PickupCurrent({
  collectionRequestCount,
  collectingCount,
  productionCompleteCount,
  sellingCount,
  settlementRequestCount,
}: any) {
  return (
    <div className="w-927pxr h-242pxr rounded-10pxr border-1pxr border-solid border-dark-gray bg-white">
      <div className="flex flex-col mt-17pxr ml-27pxr">
        <div className="flex">
          <div className="text-20pxr font-bold leading-30pxr">
            옷장정리 현황
          </div>
          <div className="text-12pxr font-medium leading-18pxr text-unSelected-color mt-10pxr ml-8pxr mb-2pxr">
            최근 1개월 기준
          </div>
        </div>

        <div className="w-864pxr h-136pxr bg-background-color rounded-10pxr mt-30pxr">
          <div className="w-816pxr ml-24pxr mt-27pxr flex justify-between">
            <div className="flex flex-col  w-112pxr">
              <div className="h-24pxr text-16pxr font-medium leading-24pxr text-text-sub text-center">
                수거 신청
              </div>
              <div className="flex text-center justify-center">
                <div className="text-36pxr font-bold text-nav-btn">
                  {collectionRequestCount}
                </div>
                <div className="text-16pxr font-medium text-text-gray ml-4pxr mt-18pxr">
                  건
                </div>
              </div>
            </div>
            <div className="w-1pxr h-83pxr bg-box-color" />

            <div className="flex flex-col w-112pxr">
              <div className="h-24pxr text-16pxr font-medium leading-24pxr text-text-sub text-center">
                진행 요청
              </div>
              <div className="flex text-center justify-center">
                <div className="text-36pxr font-bold text-nav-btn">
                  {collectingCount}
                </div>
                <div className="text-16pxr font-medium text-text-gray ml-4pxr mt-18pxr">
                  건
                </div>
              </div>
            </div>
            <div className="w-1pxr h-83pxr bg-box-color" />

            <div className="flex flex-col w-112pxr">
              <div className="h-24pxr text-16pxr font-medium leading-24pxr text-text-sub text-center">
                상품화 완료
              </div>
              <div className="flex text-center justify-center">
                <div className="text-36pxr font-bold text-nav-btn">
                  {productionCompleteCount}
                </div>
                <div className="text-16pxr font-medium text-text-gray ml-4pxr mt-18pxr">
                  건
                </div>
              </div>
            </div>
            <div className="w-1pxr h-83pxr bg-box-color" />

            <div className="flex flex-col w-112pxr">
              <div className="h-24pxr text-16pxr font-medium leading-24pxr text-text-sub text-center">
                판매 중
              </div>
              <div className="flex text-center justify-center">
                <div className="text-36pxr font-bold text-nav-btn">
                  {sellingCount}
                </div>
                <div className="text-16pxr font-medium text-text-gray ml-4pxr mt-18pxr">
                  건
                </div>
              </div>
            </div>
            <div className="w-1pxr h-83pxr bg-box-color" />

            <div className="flex flex-col w-112pxr">
              <div className="h-24pxr text-16pxr font-medium leading-24pxr text-text-sub text-center">
                정산 요청
              </div>
              <div className="flex text-center justify-center">
                <div className="text-36pxr font-bold text-nav-btn">
                  {settlementRequestCount}
                </div>
                <div className="text-16pxr font-medium text-text-gray ml-4pxr mt-18pxr">
                  건
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

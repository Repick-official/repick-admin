import React from "react";

export default function PurchaseCurrent({
  purchaseRequested,
  purchaseInTransit,
  purchaseWaiting,
  purchaseConfirm,
  returnRequested,
}: any) {
  return (
    <div className="w-927pxr h-242pxr rounded-10pxr border-1pxr border-solid border-dark-gray bg-white mt-20pxr">
      <div className="flex mt-17pxr ml-27pxr">
        <div className="text-20pxr font-bold leading-30pxr">구매 현황</div>
        <div className="text-12pxr font-medium leading-18pxr text-unSelected-color mt-10pxr ml-8pxr mb-2pxr">
          최근 1개월 기준
        </div>
      </div>

      <div className="mt-30pxr ml-36pxr w-860pxr flex justify-between items-center">
        <div className="w-117pxr h-117pxr bg-circle-gray rounded-full flex flex-col items-center justify-center">
          <div className="text-32pxr font-bold leading-48pxr">
            {purchaseRequested}
          </div>
          <div className="text-14pxr font-medinum leading-21pxr text-text-gray">
            구매 요청
          </div>
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
            fill="#D0D5DD"
          />
        </svg>

        <div className="w-117pxr h-117pxr bg-circle-gray rounded-full flex flex-col items-center justify-center">
          <div className="text-32pxr font-bold leading-48pxr">
            {purchaseInTransit}
          </div>
          <div className="text-14pxr font-medinum leading-21pxr text-text-gray">
            발송중
          </div>
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
            fill="#D0D5DD"
          />
        </svg>

        <div className="w-117pxr h-117pxr bg-circle-gray rounded-full flex flex-col items-center justify-center">
          <div className="text-32pxr font-bold leading-48pxr">
            {purchaseWaiting}
          </div>
          <div className="text-14pxr font-medinum leading-21pxr text-text-gray">
            구매 확정 대기
          </div>
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
            fill="#D0D5DD"
          />
        </svg>

        <div className="w-117pxr h-117pxr bg-circle-gray rounded-full flex flex-col items-center justify-center">
          <div className="text-32pxr font-bold leading-48pxr">
            {purchaseConfirm}
          </div>
          <div className="text-14pxr font-medinum leading-21pxr text-text-gray">
            구매 확정 완료
          </div>
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
            fill="#D0D5DD"
          />
        </svg>

        <div className="w-117pxr h-117pxr bg-circle-gray rounded-full flex flex-col items-center justify-center">
          <div className="text-32pxr font-bold leading-48pxr">
            {returnRequested}
          </div>
          <div className="text-14pxr font-medinum leading-21pxr text-text-gray">
            구매 요청
          </div>
        </div>
      </div>
    </div>
  );
}

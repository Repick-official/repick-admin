import { TotalCurrentType } from "@/interface/interface";

export default function TotalCurrent({
  totalPickup,
  totalPaymentCompleted,
  totalReturnRequested,
}: TotalCurrentType) {
  return (
    <div className="w-1216pxr h-132pxr bg-white rounded-10pxr border-dark-gray border-solid border-1pxr">
      <div className="flex mt-20pxr">
        <div className="ml-24pxr w-381pxr">
          <div className="text-18pxr font-bold leading-27pxr">수거 신청</div>
          <div className="flex">
            <div className="text-text-blue text-48pxr font-bold leading-72pxr">
              {totalPickup}
            </div>
            <div className="text-text-gray text-20pxr font-medium leading-30pxr mt-33pxr ml-8pxr mb-9pxr">
              건
            </div>
          </div>
        </div>

        <div className="w-1pxr h-96pxr bg-dark-gray" />

        <div className="ml-24pxr w-381pxr">
          <div className="text-18pxr font-bold leading-27pxr">결제 완료</div>
          <div className="flex">
            <div className="text-text-blue text-48pxr font-bold leading-72pxr">
              {totalPaymentCompleted}
            </div>
            <div className="text-text-gray text-20pxr font-medium leading-30pxr mt-33pxr ml-8pxr mb-9pxr">
              건
            </div>
          </div>
        </div>

        <div className="w-1pxr h-96pxr bg-dark-gray" />

        <div className="ml-24pxr ">
          <div className="text-18pxr font-bold leading-27pxr">반품 요청</div>
          <div className="flex">
            <div className="text-text-red text-48pxr font-bold leading-72pxr">
              {totalReturnRequested}
            </div>
            <div className="text-text-gray text-20pxr font-medium leading-30pxr mt-33pxr ml-8pxr mb-9pxr">
              건
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

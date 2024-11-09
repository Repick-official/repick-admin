"use client";
import { useState } from "react";
import ModModal from "./ModModal";

export default function PurchaseItem({ item, setItems }: any) {
  const [mod, setMod] = useState(false);

  return (
    <div>
      <div key={item.productOrderId}>
        <div className="h-92pxr flex items-center text-14pxr font-normal leading-21pxr">
          <div className="ml-18pxr w-91pxr">{item.productCode}</div>
          <div className="flex items-center w-255pxr">
            <div className="w-60pxr h-60pxr border-1pxr border-solid border-circle-gray"></div>
            <div className="w-146pxr ml-12pxr">{item.productName}</div>
          </div>
          <div className="w-113pxr">{item.userName}</div>
          <div className="w-291pxr">
            <div className="w-260pxr">{item.userAddress}</div>
          </div>
          <div className="w-110pxr">{item.userPhoneNumber}</div>
          <div className="w-154pxr">
            {item.trackingNumber ? (
              <div>
                <div className="cursor-pointer" onClick={() => setMod(true)}>
                  {item.trackingNumber}
                </div>
                {mod && (
                  <ModModal
                    onClose={() => setMod(false)}
                    item={item}
                    setItems={setItems}
                  />
                )}
              </div>
            ) : (
              <div className="cursor-pointer rounded-8pxr border-1pxr border-solid border-black py-8pxr px-12pxr dropdown-container">
                <div className="flex items-center" onClick={() => setMod(true)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z"
                      fill="#1D2939"
                    />
                  </svg>
                  <div className="ml-8pxr">운송장 번호 추가</div>
                </div>
                {mod && (
                  <ModModal
                    onClose={() => setMod(false)}
                    item={item}
                    setItems={setItems}
                  />
                )}
              </div>
            )}
          </div>
          <div className="cursor-pointer rounded-8pxr border-1pxr border-solid border-black py-8pxr px-12pxr dropdown-container">
            <div>반품</div>
          </div>
        </div>
        <div className="h-1pxr w-full bg-dark-gray"></div>
      </div>
    </div>
  );
}

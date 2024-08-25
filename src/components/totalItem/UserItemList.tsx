"use client";
import { useRouter } from "next/navigation";

export default function UserItemList({ clothing }: any) {
  const router = useRouter();

  console.log("clothing", clothing);

  return (
    <div>
      {clothing?.result.content.map((item: any) => (
        <div>
          <div className="w-1262pxr h-53pxr text-14pxr font-medium leading-21pxr text-text-sub flex items-center">
            <div className="ml-18pxr w-104pxr">{item.code}</div>
            <div className="w-127pxr">{item.name}</div>
            <div className="w-97pxr">{item.totalQuantity}</div>

            <div className="w-97pxr">{item.sellingQuantity}</div>

            <div className="w-110pxr">{item.soldQuantity}</div>
            <div className="w-82pxr">{item.rejectedQuantity}</div>
            <div className="w-110pxr">{item.expiredQuantity}</div>
            <div className="w-517pxr flex items-center">
              {item.weight}
              <div className="flex justify-center ml-auto mr-12pxr rounded-8pxr border-1pxr border-solid bg-white border-nav-btn w-68pxr h-29pxr font-12pxr text-nav-btn">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() =>
                    router.push(
                      `/totalItem/userItem/${item.clothingSalesId}/${item.clothingSalesCount}`
                    )
                  }
                >
                  상세보기
                </div>
              </div>
            </div>
          </div>

          <div className="w-1262pxr bg-dark-gray h-1pxr"></div>
        </div>
      ))}
    </div>
  );
}

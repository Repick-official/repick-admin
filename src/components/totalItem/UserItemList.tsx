"use client";
import { useRouter } from "next/navigation";

export default function UserItemList() {
  const router = useRouter();

  return (
    <div>
      <div className="w-1262pxr h-53pxr text-14pxr font-medium leading-21pxr text-text-sub flex items-center">
        <div className="ml-18pxr w-104pxr">1-3</div>
        <div className="w-127pxr">이도현</div>
        <div className="w-97pxr">30</div>

        <div className="w-97pxr">24</div>

        <div className="w-110pxr">24</div>
        <div className="w-82pxr">24</div>
        <div className="w-110pxr">24</div>
        <div className="w-517pxr flex items-center">
          24
          <div className="flex justify-center ml-auto mr-12pxr rounded-8pxr border-1pxr border-solid bg-white border-nav-btn w-68pxr h-29pxr font-12pxr text-nav-btn">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => router.push("/totalItem/userItem")}
            >
              상세보기
            </div>
          </div>
        </div>
      </div>

      <div className="w-1262pxr bg-dark-gray h-1pxr"></div>
    </div>
  );
}

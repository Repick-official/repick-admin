"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { selectedNavPage } from "@/atoms/states";
import { useRecoilState } from "recoil";
import classNames from "classnames";

function Navigation() {
  const router = useRouter();

  const [selectedPage, setSelectedPage] =
    useRecoilState<string>(selectedNavPage);

  const goDashBoard = () => {
    router.push("/dashboard");
    setSelectedPage("대시보드");
  };
  const goWardrobe = () => {
    router.push("/wardrobe");
    setSelectedPage("옷장 정리 현황");
  };
  const goPurchaseInfo = () => {
    router.push("/purchase");
    setSelectedPage("구매 정보 현황");
  };
  const goItemManage = () => {
    router.push("/item");
    setSelectedPage("상품 등록");
  };
  const goTotalItem = () => {
    router.push("/totalItem");
    setSelectedPage("상품 종합 현황");
  };

  return (
    <div>
      <div className="w-300pxr h-full bg-nav-color">
        <div className="flex flex-col pt-60pxr pl-39pxr">
          <img
            src="/assets/images/Navigation/repick_logo.png"
            className="w-111pxr h-32pxr"
          />
          <div className="pt-60pxr text-lg font-bold leading-27pxr">
            <div
              className={classNames("pb-24pxr cursor-pointer", {
                "text-white": selectedPage === "대시보드",
                "text-unSelected-color": selectedPage !== "대시보드",
              })}
              onClick={() => goDashBoard()}
            >
              {"대시보드"}
            </div>
            <div
              className={classNames("pb-24pxr cursor-pointer", {
                "text-white": selectedPage === "구매 정보 현황",
                "text-unSelected-color": selectedPage !== "구매 정보 현황",
              })}
              onClick={() => goPurchaseInfo()}
            >
              {"구매 정보 현황"}
            </div>
            <div
              className={classNames("pb-24pxr cursor-pointer", {
                "text-white": selectedPage === "옷장 정리 현황",
                "text-unSelected-color": selectedPage !== "옷장 정리 현황",
              })}
              onClick={() => goWardrobe()}
            >
              {"옷장 정리 현황"}
            </div>
            <div
              className={classNames("pb-24pxr cursor-pointer", {
                "text-white": selectedPage === "상품 등록",
                "text-unSelected-color": selectedPage !== "상품 등록",
              })}
              onClick={() => goItemManage()}
            >
              {"상품 등록"}
            </div>
            <div
              className={classNames("pb-24pxr cursor-pointer", {
                "text-white": selectedPage === "상품 종합 현황",
                "text-unSelected-color": selectedPage !== "상품 종합 현황",
              })}
              onClick={() => goTotalItem()}
            >
              {"상품 종합 현황"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navigation;

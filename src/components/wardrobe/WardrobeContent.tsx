"use client";
import { useState, useEffect } from "react";
import UserList from "./UserList";
import { getClothingSalesStatus } from "@/api/request";

export default function WardrobeContent({ users }: any) {
  return (
    <div>
      <div className="w-1262pxr h-54pxr bg-circle-gray mt-16pxr text-14pxr font-medium leading-22pxr text-unSelected-color flex items-center">
        <div className="ml-18pxr w-79pxr">유저 코드</div>
        <div className="w-86pxr">이름</div>
        <div className="w-99pxr">수거방식</div>
        <div className="w-165pxr">현황</div>
        <div className="w-83pxr">신청일</div>
        <div className="w-116pxr">수거 진행 여부</div>
        <div className="w-111pxr">상품화 시작일</div>
        <div className="w-136pxr">판매기간</div>
        <div className="w-87pxr">정산신청</div>
        <div className="w-86pxr">정산완료</div>
        <div className="w-99pxr">리젝 상품</div>
        <div className="w-79pxr">판매만료 리턴</div>
      </div>

      <div>
        <UserList users={users} />
      </div>
    </div>
  );
}

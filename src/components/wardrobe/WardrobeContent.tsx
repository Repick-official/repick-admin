"use client";
import React from "react";
import { useState } from "react";
import Dropdown from "./Dropdown";

export default function WardrobeContent() {
  const [view, setView] = useState(false);

  return (
    // <div className="mt-21pxr">
    //   <div className="bg-circle-gray h-48pxr flex">
    //     <div className="text-14pxr font-medium leading-22pxr text-unSelected-color flex items-center">
    //       <div className="ml-18pxr w-116pxr">유저 코드</div>
    //       <div>상태</div>
    //     </div>
    //   </div>

    //   <div>
    //     <div className="h-52pxr flex items-center">
    //       <div className="ml-18pxr w-116pxr text-14pxr font-normal leading-21pxr">
    //         1-1
    //       </div>

    //       <div className="text-14pxr font-medium leading-21pxr  w-402pxr">
    //         박스 신청
    //       </div>

    //       <div className="flex flex-col ">
    //         <div className="border-1pxr border-solid rounded-5pxr border-dark-gray p-8pxr flex space-x-* w-134pxr ">
    //           <div className="text-13pxr font-medium leading-19pxr">
    //             박스 신청
    //           </div>
    //           <ul
    //             onClick={() => {
    //               setView(!view);
    //             }}
    //           >
    //             {view ? (
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="20"
    //                 height="20"
    //                 viewBox="0 0 20 20"
    //                 fill="none"
    //               >
    //                 <path
    //                   d="M5.59056 13.0889C5.26512 13.4144 4.73748 13.4144 4.41205 13.0889C4.08661 12.7635 4.08661 12.2359 4.41205 11.9104L9.41205 6.91042C9.73748 6.58498 10.2651 6.58498 10.5906 6.91042L15.5906 11.9104C15.916 12.2359 15.916 12.7635 15.5906 13.0889C15.2651 13.4144 14.7375 13.4144 14.412 13.0889L10.0013 8.67819L5.59056 13.0889Z"
    //                   fill="#1D2939"
    //                 />
    //               </svg>
    //             ) : (
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="20"
    //                 height="20"
    //                 viewBox="0 0 20 20"
    //                 fill="none"
    //               >
    //                 <path
    //                   d="M5.59056 6.91107C5.26512 6.58563 4.73748 6.58563 4.41205 6.91107C4.08661 7.23651 4.08661 7.76414 4.41205 8.08958L9.41205 13.0896C9.73748 13.415 10.2651 13.415 10.5906 13.0896L15.5906 8.08958C15.916 7.76414 15.916 7.23651 15.5906 6.91107C15.2651 6.58563 14.7375 6.58563 14.412 6.91107L10.0013 11.3218L5.59056 6.91107Z"
    //                   fill="#1D2939"
    //                 />
    //               </svg>
    //             )}
    //           </ul>
    //         </div>
    //         {view && <Dropdown />}
    //       </div>
    //     </div>

    //     <div className="h-1pxr bg-dark-gray" />
    //   </div>
    //   <div>
    //     <div className="h-52pxr flex items-center">
    //       <div className="ml-18pxr w-116pxr text-14pxr font-normal leading-21pxr">
    //         1-1
    //       </div>

    //       <div className="text-14pxr font-medium leading-21pxr  w-402pxr">
    //         박스 신청
    //       </div>

    //       <div className="border-1pxr border-solid rounded-5pxr border-dark-gray p-8pxr flex space-x-* w-134pxr">
    //         <div className="text-13pxr font-medium leading-19pxr">
    //           박스 신청
    //         </div>
    //         <ul
    //           onClick={() => {
    //             setView(!view);
    //           }}
    //         >
    //           {view ? (
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="20"
    //               height="20"
    //               viewBox="0 0 20 20"
    //               fill="none"
    //             >
    //               <path
    //                 d="M5.59056 13.0889C5.26512 13.4144 4.73748 13.4144 4.41205 13.0889C4.08661 12.7635 4.08661 12.2359 4.41205 11.9104L9.41205 6.91042C9.73748 6.58498 10.2651 6.58498 10.5906 6.91042L15.5906 11.9104C15.916 12.2359 15.916 12.7635 15.5906 13.0889C15.2651 13.4144 14.7375 13.4144 14.412 13.0889L10.0013 8.67819L5.59056 13.0889Z"
    //                 fill="#1D2939"
    //               />
    //             </svg>
    //           ) : (
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="20"
    //               height="20"
    //               viewBox="0 0 20 20"
    //               fill="none"
    //             >
    //               <path
    //                 d="M5.59056 6.91107C5.26512 6.58563 4.73748 6.58563 4.41205 6.91107C4.08661 7.23651 4.08661 7.76414 4.41205 8.08958L9.41205 13.0896C9.73748 13.415 10.2651 13.415 10.5906 13.0896L15.5906 8.08958C15.916 7.76414 15.916 7.23651 15.5906 6.91107C15.2651 6.58563 14.7375 6.58563 14.412 6.91107L10.0013 11.3218L5.59056 6.91107Z"
    //                 fill="#1D2939"
    //               />
    //             </svg>
    //           )}
    //         </ul>
    //       </div>
    //     </div>

    //     <div className="h-1pxr bg-dark-gray" />
    //   </div>
    // </div>
    <div className="w-1262pxr h-54pxr bg-circle-gray mt-16pxr text-14pxr font-medium leading-22pxr text-unSelected-color flex items-center">
      <div className="ml-18pxr w-54pxr">유저 코드</div>
      <div className="ml-25pxr w-26pxr">이름</div>
      <div className="ml-60pxr w-51pxr">수거방식</div>
      <div className="ml-48pxr w-26pxr">현황</div>
      <div className="ml-139pxr w-38pxr">신청일</div>
      <div className="ml-45pxr w-82pxr">수거 진행 여부</div>
      <div className="ml-34pxr w-79pxr">상품화 시작일</div>
      <div className="ml-32pxr w-51pxr">판매기간</div>
      <div className="ml-85pxr w-51pxr">정산신청</div>
      <div className="ml-36pxr w-51pxr">정산완료</div>
      <div className="ml-35pxr w-54pxr">리젝 상품</div>
      <div className="ml-45pxr w-79pxr">판매만료 리턴</div>
    </div>
  );
}

import React, { useState } from "react";

export default function TopInfo({ total, onDateFilter, onSortChange }: any) {
  const [selectedSort, setSelectedSort] = useState("최신순");
  const [isSortDropdownVisible, setIsSortDropdownVisible] = useState(false);

  const handleSortSelection = (sort: string) => {
    setSelectedSort(sort);
    setIsSortDropdownVisible(false);
    onSortChange(sort === "최신순" ? "latest" : "oldest");
  };

  return (
    <div className="relative">
      <div className="flex items-center mt-39pxr w-1262pxr">
        <div className="text-16pxr font-medium leading-24pxr">
          <div className="flex">
            전체 <div className="text-text-blue ml-5pxr">{total}</div>개
          </div>
        </div>

        <div className="flex items-center ml-auto">
          <div className="w-208pxr h-36pxr rounded-8pxr border-1pxr border-solid border-box-color">
            <div className="ml-174pxr mt-8pxr">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.168 1.66634C14.168 1.2061 13.7949 0.833008 13.3346 0.833008C12.8744 0.833008 12.5013 1.2061 12.5013 1.66634V2.49967H7.5013V1.66634C7.5013 1.2061 7.12821 0.833008 6.66797 0.833008C6.20773 0.833008 5.83464 1.2061 5.83464 1.66634V2.49967H4.16797C2.78726 2.49967 1.66797 3.61896 1.66797 4.99967V16.6663C1.66797 18.0471 2.78726 19.1663 4.16797 19.1663H15.8346C17.2153 19.1663 18.3346 18.0471 18.3346 16.6663V4.99967C18.3346 3.61896 17.2153 2.49967 15.8346 2.49967H14.168V1.66634ZM16.668 7.49967V4.99967C16.668 4.53944 16.2949 4.16634 15.8346 4.16634H14.168V4.99967C14.168 5.45991 13.7949 5.83301 13.3346 5.83301C12.8744 5.83301 12.5013 5.45991 12.5013 4.99967V4.16634H7.5013V4.99967C7.5013 5.45991 7.12821 5.83301 6.66797 5.83301C6.20773 5.83301 5.83464 5.45991 5.83464 4.99967V4.16634H4.16797C3.70773 4.16634 3.33464 4.53944 3.33464 4.99967V7.49967H16.668ZM3.33464 9.16634H16.668V16.6663C16.668 17.1266 16.2949 17.4997 15.8346 17.4997H4.16797C3.70773 17.4997 3.33464 17.1266 3.33464 16.6663V9.16634Z"
                  fill="#2D3648"
                />
              </svg>
            </div>
          </div>

          <div className="rounded-8pxr bg-nav-color h-36pxr px-12pxr py-10pxr text-background-color text-12pxr leading-18pxr font-medium ml-8pxr">
            검색
          </div>

          <div
            onClick={() => setIsSortDropdownVisible(!isSortDropdownVisible)}
            className="rounded-5pxr border-1pxr border-solid border-dark-gray py-8pxr px-12pxr flex items-center ml-17pxr"
          >
            {selectedSort}
            <div className="ml-40pxr">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5.59056 6.91107C5.26512 6.58563 4.73748 6.58563 4.41205 6.91107C4.08661 7.23651 4.08661 7.76414 4.41205 8.08958L9.41205 13.0896C9.73748 13.415 10.2651 13.415 10.5906 13.0896L15.5906 8.08958C15.916 7.76414 15.916 7.23651 15.5906 6.91107C15.2651 6.58563 14.7375 6.58563 14.412 6.91107L10.0013 11.3218L5.59056 6.91107Z"
                  fill="#1D2939"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {isSortDropdownVisible && (
        <div className="absoulte ml-1140pxr mt-16pxr">
          <div className="absolute w-152pxr h-76pxr rounded-10pxr text-13pxr border-1pxr border-solid bg-white font-medium">
            {["최신순", "오래된 순"].map((sort) => (
              <div
                key={sort}
                onClick={() => handleSortSelection(sort)}
                className="h-36pxr hover:bg-circle-gray pt-9pxr pl-17pxr cursor-pointer"
              >
                {sort}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

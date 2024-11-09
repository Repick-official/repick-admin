import React, { use, useEffect, useState } from "react";
import PushBtn from "./stateBtn/PushBtn";
import FinishBtn from "./stateBtn/FinishBtn";
import UserDropdown from "./dropdown/UserDropdown";

export default function UserList({ users, page, size }: any) {
  const [view, setView] = useState<{ [key: number]: boolean }>({});
  const [items, setItems] = useState(users?.result.content);

  const handleClickOutside = (event: any) => {
    if (
      Object.values(view).some(Boolean) &&
      !event.target.closest(".dropdown-container")
    ) {
      setView({});
      {
      }
    }
  };

  const toggleDropdown = (id: number) => {
    setView((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [view]);

  useEffect(() => {
    if (users) {
      setItems(users.result.content);
    }
  }, [users]);

  return (
    <div>
      {items?.map((item: any) => (
        <div key={item.id}>
          <div className="w-1262pxr h-53pxr text-14pxr font-medium leading-21pxr text-text-sub flex items-center">
            <div className="ml-18pxr w-79pxr">{item.code}</div>
            <div className="w-86pxr">{item.name}</div>
            <div className="w-99pxr">
              {item.isBoxCollect ? "박스" : "리픽백"}
            </div>

            <ul
              onClick={() => toggleDropdown(item.id)}
              className="cursor-pointer"
            >
              <div className="w-133pxr mr-32pxr flex">
                {item.status}
                {view[item.id] ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="ml-auto"
                  >
                    <path
                      d="M6.70711 15.7071C6.31658 16.0976 5.68342 16.0976 5.29289 15.7071C4.90237 15.3166 4.90237 14.6834 5.29289 14.2929L11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L18.7071 14.2929C19.0976 14.6834 19.0976 15.3166 18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071L12 10.4142L6.70711 15.7071Z"
                      fill="#2D3648"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="ml-auto"
                  >
                    <path
                      d="M6.70711 8.29289C6.31658 7.90237 5.68342 7.90237 5.29289 8.29289C4.90237 8.68342 4.90237 9.31658 5.29289 9.70711L11.2929 15.7071C11.6834 16.0976 12.3166 16.0976 12.7071 15.7071L18.7071 9.70711C19.0976 9.31658 19.0976 8.68342 18.7071 8.29289C18.3166 7.90237 17.6834 7.90237 17.2929 8.29289L12 13.5858L6.70711 8.29289Z"
                      fill="#2D3648"
                    />
                  </svg>
                )}
              </div>
              {view[item.id] && (
                <UserDropdown
                  item={item}
                  setItems={setItems}
                  page={page}
                  size={size}
                />
              )}
            </ul>

            <div className="w-83pxr">{item.requestDate}</div>
            <div className="w-116pxr">
              <PushBtn push={item.isForCollect} />
            </div>
            <div className="w-111pxr">{item.productStartDate}</div>
            <div className="w-136pxr">{item.salesPeriod}</div>
            <div className="w-87pxr">{item.settlementRequestDate}</div>
            <div className="w-86pxr">{item.settlementCompleteDate}</div>
            <div className="w-99pxr">
              <FinishBtn finish={item.isRejected} />
            </div>
            <div className="w-79pxr">
              <FinishBtn finish={item.isExpiredAndReturned} />
            </div>
          </div>
          <div className="w-1262pxr bg-dark-gray h-1pxr"></div>
        </div>
      ))}
    </div>
  );
}

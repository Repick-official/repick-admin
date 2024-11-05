import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function UserCurrent({ users }: any) {
  const totalUserCount =
    users?.result?.femaleUserRatio + users?.result?.maleUserRatio;

  const femaleRatio = (users?.result?.femaleUserRatio / totalUserCount) * 100;
  const maleRatio = (users?.result?.maleUserRatio / totalUserCount) * 100;

  const data = [
    { name: "여자", value: femaleRatio },
    { name: "남자", value: maleRatio },
  ];

  const COLORS = ["#F76056", "#439AFF"];

  return (
    <div className="w-466pxr h-504pxr rounded-10pxr border-1pxr border-solid border-dark-gray bg-white ml-19pxr">
      <div className="ml-31pxr mt-27pxr">
        <div className="text-20pxr font-bold leading-30pxr">유저 통계</div>
        <div className="rounded-10pxr bg-background-color w-402pxr h-168pxr mt-24pxr">
          <div className="pl-27pxr pt-24pxr">
            <div className="text-16pxr font-medium leading-24pxr text-text-sub">
              총 유저 수
            </div>
            <div className="flex">
              <div className="text-48pxr font-bold leading-72pxr text-nav-btn">
                {users?.result?.totalUserCount}
              </div>
              <div className="text-20pxr font-medium leading-30pxr text-text-gray ml-8pxr mt-27pxr">
                명
              </div>
            </div>

            <div className="flex items-center h-24pxr space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 10L12 6M12 6L16 10M12 6V18"
                  stroke="#3DC061"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="text-14pxr font-medium leading-21pxr text-text-green">
                {users?.result?.newUserCount}명 신규 가입
              </div>
              <div className="text-12pxr font-medium leading-18pxr text-unSelected-color">
                최근 1개월 기준
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-10pxr bg-background-color w-402pxr h-220pxr mt-16pxr">
          <div className="pl-27pxr pt-24pxr flex">
            <div className="mr-69pxr">
              <div className="text-16pxr font-medium leading-24pxr text-text-sub">
                유저 성별
              </div>
              <div className="text-18pxr font-medium leading-27pxr text-text-sub mt-20pxr">
                <div className="flex items-center mb-8pxr">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <circle cx="9" cy="9.5" r="9" fill="#F76056" />
                  </svg>
                  <div className="font-bold mx-12pxr">{femaleRatio}%</div>
                  여성
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <circle cx="9" cy="9.5" r="9" fill="#439AFF" />
                  </svg>
                  <div className="font-bold mx-12pxr">{maleRatio}%</div>
                  남성
                </div>
              </div>
            </div>
            <div>
              <PieChart width={168} height={168}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

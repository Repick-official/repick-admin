"use client";
import { useState, useEffect } from "react";
import ModModal from "./ModModal";
import DelModal from "./DelModal";

export default function Dropdown() {
  const [mod, setMod] = useState(false);
  const [del, setDel] = useState(false);

  return (
    <div>
      <div className="absolute" onClick={(e) => e.stopPropagation()}>
        <div className="text-13pxr text-text-sub font-medium leading-19pxr w-171pxr border-1pxr border-solid border-dark-gray rounded-5pxr pt-13pxr pl-17pxr pb-14pxr bg-white">
          <li className="mb-25pxr" onClick={() => setMod(true)}>
            수정하기
          </li>
          <li onClick={() => setDel(true)}>삭제하기</li>
        </div>
      </div>
      {mod && <ModModal onClose={() => setMod(false)} />}
      {del && <DelModal onClose={() => setDel(false)} />}
    </div>
  );
}

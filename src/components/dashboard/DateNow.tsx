export default function DateNow() {
  const date = new Date();
  const todayMonth = date.getMonth() + 1;
  const todayDate = date.getDate();

  return (
    <div>
      <div className="w-180pxr h-132pxr bg-dark-gray rounded-10pxr flex flex-col items-center justify-center">
        <div className="grid justify-items-center text-20pxr font-medium leading-30px">
          <div className="text-text-gray">오늘</div>
          <div>
            {todayMonth}월 {todayDate}일 기준
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function DateDropdown({ onDateFilter }: any) {
  const [selectedRange, setSelectedRange] = useState("전체");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [startDate, setStartDate] = useState<string>(
    new Date().toLocaleDateString("en-CA")
  );
  const [endDate, setEndDate] = useState<string>(
    new Date().toLocaleDateString("en-CA")
  );

  const handleRangeSelection = (range: string) => {
    setSelectedRange(range);
    setIsDropdownVisible(false);

    const currentDate = new Date();
    let calculatedStartDate: Date | null = null;

    switch (range) {
      case "1일":
        calculatedStartDate = new Date(
          currentDate.setDate(currentDate.getDate() - 1)
        );
        break;
      case "1주":
        calculatedStartDate = new Date(
          currentDate.setDate(currentDate.getDate() - 7)
        );
        break;
      case "1개월":
        calculatedStartDate = new Date(
          currentDate.setMonth(currentDate.getMonth() - 1)
        );
        break;
      case "6개월":
        calculatedStartDate = new Date(
          currentDate.setMonth(currentDate.getMonth() - 6)
        );
        break;
      case "1년":
        calculatedStartDate = new Date(
          currentDate.setFullYear(currentDate.getFullYear() - 1)
        );
        break;
      case "전체":
        calculatedStartDate = null;
        break;
      case "직접입력":
        // Reset the start and end dates for manual entry
        setStartDate("");
        setEndDate("");
        return;
      default:
        calculatedStartDate = null;
    }

    const formattedStartDate = calculatedStartDate
      ? calculatedStartDate.toISOString().split("T")[0] // Format as YYYY-MM-DD
      : null;
    const formattedEndDate = currentDate.toISOString().split("T")[0];

    setStartDate(formattedStartDate || new Date().toLocaleDateString("en-CA"));
    setEndDate(formattedEndDate);
    console.log("Selected Range:", range);
    console.log("Start Date:", formattedStartDate);
    console.log("End Date:", formattedEndDate);

    onDateFilter({
      startDate: formattedStartDate,
      endDate: formattedStartDate ? formattedEndDate : null,
    });
  };

  return (
    <div className="relative">
      <div className="w-248pxr h-118pxr border-1pxr border-solid bg-white ml-819pxr mt-15pxr">
        <div className="text-12pxr font-medium flex items-center ml-18pxr mt-18pxr">
          검색 기간
          <div
            className="w-152pxr h-36pxr border-dark-gray bg-white rounded-8pxr border-1pxr border-solid flex pt-8pxr px-13pxr ml-10pxr justify-between cursor-pointer"
            onClick={() => setIsDropdownVisible(!isDropdownVisible)}
          >
            {selectedRange}
            {isDropdownVisible ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10.5906 6.91107C10.2651 6.58563 9.73748 6.58563 9.41205 6.91107L4.41205 11.9111C4.08661 12.2365 4.08661 12.7641 4.41205 13.0896C4.73748 13.415 5.26512 13.415 5.59056 13.0896L10.0013 8.67884L14.412 13.0896C14.7375 13.415 15.2651 13.415 15.5906 13.0896C15.916 12.7641 15.916 12.2365 15.5906 11.9111L10.5906 6.91107Z"
                  fill="#2D3648"
                />
              </svg>
            ) : (
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
            )}
          </div>
          {isDropdownVisible && (
            <div className="absolute border-dark-gray bg-white w-152pxr rounded-8pxr border-1pxr border-solid mt-300pxr ml-59pxr">
              {["전체", "1일", "1주", "1개월", "6개월", "1년", "직접입력"].map(
                (range) => (
                  <div
                    key={range}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleRangeSelection(range)}
                  >
                    {range}
                  </div>
                )
              )}
            </div>
          )}
        </div>
        <div className="ml-18pxr mt-12pxr flex text-14pxr">
          <input
            type="text"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            disabled={selectedRange !== "직접입력"}
            className="w-96pxr h-36pxr border-dark-gray bg-white border-1pxr border-solid rounded-8pxr pl-10pxr"
          />
          <div className="mx-6pxr mt-4pxr">-</div>

          <input
            type="text"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            disabled={selectedRange !== "직접입력"}
            className="w-96pxr h-36pxr border-dark-gray bg-white border-1pxr border-solid rounded-8pxr pl-10pxr"
          />
        </div>
      </div>
    </div>
  );
}

'use client';
/**
 * @param dropdownItems 드롭다운에 표시할 항목들의 배열
 * @param selectedValue 현재 선택된 값
 * @param onChange 항목 클릭 시 실행할 콜백
 */
interface CommonDropdownProps<T> {
	dropdownItems: T[];
	selectedValue: T;
	onChange: (newValue: T) => void;
}

export default function CommonDropdown<T extends string | number>({
	dropdownItems,
	selectedValue,
	onChange,
}: CommonDropdownProps<T>) {
	return (
		<div className="relative" onClick={(e) => e.stopPropagation()}>
			<div className="text-13pxr text-text-sub font-medium leading-19pxr w-171pxr border-1pxr border-solid border-circle-gray rounded-5pxr bg-white mt-6pxr">
				{dropdownItems.map((item) => (
					<li
						key={String(item)}
						className={`w-130pxr h-36pxr pt-8pxr pl-17pxr pb-8pxr hover:bg-circle-gray cursor-pointer ${
							selectedValue === item ? 'font-bold' : ''
						}`}
						onClick={() => onChange(item)}
					>
						{item}
					</li>
				))}
			</div>
		</div>
	);
}

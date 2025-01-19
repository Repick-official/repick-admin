'use client';
import { useState, useEffect } from 'react';
import CommonDropdown from '../common/Dropdown';
import { SettlementRequestResponse, patchSettlement } from '@/api/settlement';
import { formatDateTime } from '@/util/date';

type SettlementListProps = {
	items: SettlementRequestResponse[];
	// PATCH 후 다시 데이터 불러오기 위한 콜백
	reloadData: () => void;
};

export default function SettlementList({
	items,
	reloadData,
}: SettlementListProps) {
	const [view, setView] = useState<{ [key: string]: boolean }>({});

	const handleClickOutside = (event: any) => {
		if (
			Object.values(view).some(Boolean) &&
			!event.target.closest('.dropdown-container')
		) {
			setView({});
		}
	};

	const toggleDropdown = (id: string) => {
		setView((prevView) => ({
			...prevView,
			[id]: !prevView[id],
		}));
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [view]);

	const dataList = items ?? [];

	// 드롭다운 항목 선택 -> PATCH -> 성공 시 reloadData
	const handleDropdownChange = async (itemId: number, newValue: string) => {
		// 출금 완료 선택 시 PATCH
		if (newValue === '출금 완료') {
			try {
				const result = await patchSettlement(itemId);
				// 서버에서 { result: true } 같은 형식이라 가정
				if (result.result === true) {
					console.log('정산 완료 PATCH 성공. 데이터 재조회 실행');
					reloadData(); // 부모에서 totals + list 재조회
				}
			} catch (error) {
				console.error('PATCH 에러:', error);
			}
		}

		// 드롭다운 닫기
		setView((prev) => ({ ...prev, [itemId]: false }));
	};

	return (
		<div className="w-[1200px] h-[1000px] border-[1px] border-solid border-dark-gray bg-white ml-[32px]">
			<div className="mt-[28px] ml-[40px] w-[1144px]">
				<div className="flex">
					<div className="text-[16px] font-medium leading-[24px]">
						전체 {dataList.length ?? 0}개
					</div>
				</div>

				{/* 테이블 헤더 */}
				<div className="bg-circle-gray h-[48px] flex mt-[24px]">
					<div className="text-[14px] font-medium leading-[22px] text-unSelected-color flex items-center">
						<div className="ml-[15px] w-[50px]">유저 ID</div>
						<div className="w-[90px]">이름</div>
						<div className="w-[80px]">출금액</div>
						<div className="w-[200px]">출금 신청일</div>
						<div className="w-[200px]">출금 완료일</div>
						<div className="w-[100px]">예금주</div>
						<div className="w-[100px]">은행</div>
						<div className="w-[140px]">계좌번호</div>
						<div className="w-[100px]">상태</div>
					</div>
				</div>

				{dataList.map((item) => {
					const currentStatus = item.isCompleted ? '출금 완료' : '출금 전';

					return (
						<div key={item.id}>
							<div className="h-[92px] flex items-center text-[14px] font-normal leading-[21px]">
								<div className="ml-[15px] w-[50px]">{item.userId}</div>
								<div className="flex items-center w-[90px]">
									<div className="ml-[12px]">{item.userName}</div>
								</div>
								<div className="w-[80px]">{item.amount}</div>
								<div className="w-[200px]">
									{formatDateTime(item.requestDate)}
								</div>
								<div className="w-[200px]">
									{item.completeDate ? formatDateTime(item.completeDate) : '-'}
								</div>
								<div className="w-[100px]">{item.accountHolder}</div>
								<div className="w-[100px]">{item.bankName}</div>
								<div className="w-[140px]">{item.accountNumber}</div>

								<ul
									className="w-[150px] h-[36px] cursor-pointer rounded-[8px] border-[1px] border-solid border-dark-gray dropdown-container"
									onClick={() => toggleDropdown(String(item.id))}
								>
									<div className="flex items-center px-[8px] py-[8px]">
										<div>{currentStatus}</div>
										<div className="ml-auto">
											{view[item.id] ? (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="20"
													height="20"
													viewBox="0 0 20 20"
													fill="none"
												>
													<path
														d="M5.59056 13.0889C5.26512 13.4144 4.73748 13.4144 4.41205 13.0889C4.08661 12.7635 4.08661 12.2359 4.41205 11.9104L9.41205 6.91042C9.73748 6.58498 10.2651 6.58498 10.5906 6.91042L15.5906 11.9104C15.916 12.2359 15.916 12.7635 15.5906 13.0889C15.2651 13.4144 14.7375 13.4144 14.412 13.0889L10.0013 8.67819L5.59056 13.0889Z"
														fill="#1D2939"
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
									</div>

									{view[item.id] && (
										<CommonDropdown
											dropdownItems={['출금 전', '출금 완료']}
											selectedValue={currentStatus}
											onChange={(newValue) =>
												handleDropdownChange(item.id, newValue)
											}
										/>
									)}
								</ul>
							</div>
							<div className="h-[1px] w-full bg-dark-gray"></div>
						</div>
					);
				})}

				<div className="h-[1px] w-full bg-dark-gray"></div>
			</div>
		</div>
	);
}

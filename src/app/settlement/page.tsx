'use client';
import MainTitle from '@/components/titles/MainTitle';
import { useState, useEffect } from 'react';
import {
	SettlementRequestResponse,
	getSettlementReqeust,
} from '@/api/settlement';
import SettlementList from '@/components/settlement.ts/SettlementList';

const TABS = [
	{ label: '출금 신청', value: 'requested' },
	{ label: '출금 완료', value: 'completed' },
];

export default function Page() {
	const [state, setState] = useState<string>('requested');

	const [totalElements, setTotalElements] = useState({
		requested: 0,
		completed: 0,
	});

	const [items, setItems] = useState<SettlementRequestResponse[]>([]);

	// 탭 버튼 클릭 시 상태 변경
	const handleButtonClick = (value: string) => {
		setState(value);
	};

	// (A) 상태별 개수 조회
	const fetchTotalElementsForAllStates = async () => {
		const states = ['requested', 'completed'];

		try {
			const responses = await Promise.all(
				states.map(async (status) => {
					try {
						return await getSettlementReqeust(status);
					} catch (error) {
						console.error(`Error fetching data for status "${status}":`, error);
						throw error;
					}
				})
			);

			const totalElementsResult = {
				requested: responses[0]?.result?.length || 0,
				completed: responses[1]?.result?.length || 0,
			};

			setTotalElements(totalElementsResult);
		} catch (error) {
			console.error('Error fetching total elements:', error);
		}
	};

	// (B) 해당 state의 리스트 조회
	const fetchItemsForSelectedState = async () => {
		try {
			const result = await getSettlementReqeust(state);
			setItems(result.result);
		} catch (error) {
			console.error('Error fetching items for selected state:', error);
		}
	};

	// (C) **두 함수**를 한 번에 호출 (재조회)
	const reloadAllData = async () => {
		// 1) 상태별 개수
		await fetchTotalElementsForAllStates();
		// 2) 선택된 state의 아이템
		await fetchItemsForSelectedState();
	};

	// 마운트 시 전체 요약정보 먼저 불러옴
	useEffect(() => {
		fetchTotalElementsForAllStates();
	}, []);

	// state가 바뀔 때마다 해당 state의 리스트 불러옴
	useEffect(() => {
		fetchItemsForSelectedState();
	}, [state]);

	return (
		<div className="mt-69pxr ml-104pxr">
			<MainTitle mainTitleName="출금 신청 현황" />

			<div className="mt-51pxr flex flex-row">
				{/* 왼쪽 탭 영역 */}
				<div>
					{TABS.map((tab) => (
						<div
							key={tab.value}
							className={`
                cursor-pointer w-178pxr h-56pxr rounded-10pxr flex items-center justify-center mt-16pxr
                ${
									state === tab.value
										? 'text-background-color bg-nav-color'
										: 'text-nav-color bg-background-color'
								}
              `}
							onClick={() => handleButtonClick(tab.value)}
						>
							<div className="text-16pxr font-medium leading-24pxr ml-17pxr">
								{tab.label}
							</div>
							<div className="text-18pxr font-bold leading-27pxr ml-8pxr">
								{tab.value === 'requested'
									? totalElements.requested
									: totalElements.completed}
							</div>
							<div className="ml-auto mr-14pxr">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
								>
									<path
										d="M9.70711 5.29289C9.31658 4.90237 8.68342 4.90237 8.29289 5.29289C7.90237 5.68342 7.90237 6.31658 8.29289 6.70711L13.5858 12L8.29289 17.2929C7.90237 17.6834 7.90237 18.3166 8.29289 18.7071C8.68342 19.0976 9.31658 19.0976 9.70711 18.7071L15.7071 12.7071C16.0976 12.3166 16.0976 11.6834 15.7071 11.2929L9.70711 5.29289Z"
										fill={state === tab.value ? '#F9FAFB' : '#2D3648'}
									/>
								</svg>
							</div>
						</div>
					))}
				</div>

				{/* 오른쪽 내용 영역 */}
				<div className="mt-24pxr">
					<SettlementList
						items={items}
						// PATCH 후 데이터를 새로 불러오기 위한 콜백
						reloadData={reloadAllData}
					/>
				</div>
			</div>
		</div>
	);
}

'use client';
import MainTitle from '@/components/titles/MainTitle';
import { useState, useEffect } from 'react';
import { getClothingSalesDetails, getUserInfo } from '@/api/request';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { ClothingSalesItemStatus } from '@/interface/interface';
import { it } from 'node:test';
import item from '@/app/item/page';
import SellingProduct from '@/components/totalItem/user/SellingProduct';
import RejectedProduct from '@/components/totalItem/user/RejectedProduct';
import ExpiredProduct from '@/components/totalItem/user/ExpiredProduct';
import KGProduct from '@/components/totalItem/user/KGProduct';
import SoldProduct from '@/components/totalItem/user/SoldProduct';

export default function Page() {
	const path = usePathname().split('/');

	const clothingSalesId = Number(path[3]);
	//const clothingSalesCount = Number(path[4]);

	// 상태별 totalElements를 저장할 state
	const [totalElements, setTotalElements] = useState({
		selling: 0,
		soldOut: 0,
		rejected: 0,
		sellingEnd: 0,
		kgSell: 0,
	});

	const [state, setState] = useState<string>('selling');
	const [items, setItems] = useState<any>(null);
	const [user, setUser] = useState<any>(null);
	const [selectedButtons, setSelectedButtons] = useState([
		true,
		false,
		false,
		false,
		false,
	]);

	const [page, setPage] = useState(0); // 현재 페이지 상태
	const size = 6; // 페이지당 아이템 수
	// 데이터 재로드 트리거
	const [reloadTrigger, setReloadTrigger] = useState(false);

	const handleButtonClick = (index: number) => {
		const updatedButtons = selectedButtons.map((_, i) => i === index);
		setSelectedButtons(updatedButtons);

		// 버튼 인덱스에 따라 상태값을 변경
		switch (index) {
			case 0:
				setState('selling');
				break;
			case 1:
				setState('sold-out');
				break;
			case 2:
				setState('rejected');
				break;
			case 3:
				setState('selling-end');
				break;
			case 4:
				setState('kg-sell');
				break;
			default:
				setState('selling');
		}
	};

	const fetchTotalElementsForAllStates = async () => {
		console.log('clothingSalesId:', clothingSalesId); // 디버깅을 위해 추가

		const states = [
			'selling',
			'sold-out',
			'rejected',
			'selling-end',
			'kg-sell',
		];

		try {
			// 모든 상태에 대해 API 요청을 병렬로 처리
			const responses = await Promise.all(
				states.map(async (status) => {
					try {
						const response = await getClothingSalesDetails(
							clothingSalesId,
							status,
							String(page),
							String(size)
						);
						return response;
					} catch (error) {
						console.error(`Error fetching data for status "${status}":`, error);
						throw error; // 에러가 있으면 해당 상태의 요청을 실패로 처리
					}
				})
			);

			const totalElementsResult = {
				selling: responses[0]?.result?.totalElements || 0,
				soldOut: responses[1]?.result?.totalElements || 0,
				rejected: responses[2]?.result?.totalElements || 0,
				sellingEnd: responses[3]?.result?.totalElements || 0,
				kgSell: responses[4]?.result?.totalElements || 0,
			};

			setTotalElements(totalElementsResult);
		} catch (error) {
			console.error('Error fetching total elements:', error);
		}
	};

	// 선택된 상태에 따라 아이템 로드
	const fetchItemsForSelectedState = async () => {
		try {
			const result = await getClothingSalesDetails(
				clothingSalesId, // path 파라미터
				state, // path 파라미터 (productState)
				String(page),
				String(size)
			);
			setItems(result);
			console.log('result', result);
		} catch (error) {
			console.error('Error fetching items for selected state:', error);
		}
	};

	// 트리거를 통해 데이터 재로드 가능하도록 설정
	const fetchItems = async () => {
		try {
			const result = await getClothingSalesDetails(
				clothingSalesId,
				state,
				String(page),
				String(size)
			);
			setItems(result?.result?.content);
		} catch (error) {
			console.error('Error fetching items:', error);
		}
	};

	// 페이지 변경 함수
	const handlePageChange = (newPage: number) => {
		if (newPage >= 0 && (!items || newPage < items.result.totalPages)) {
			setPage(newPage);
		}
	};

	useEffect(() => {
		fetchTotalElementsForAllStates(); // 처음에 전체 상태의 totalElements 불러오기
	}, []);

	useEffect(() => {
		fetchItemsForSelectedState(); // 선택된 상태의 아이템 불러오기
	}, [state, page, reloadTrigger]);

	useEffect(() => {
		const fetchUser = async () => {
			const userInfo = await getUserInfo(clothingSalesId);
			setUser(userInfo?.result);
		};
		fetchUser();
	}, []);

	return (
		<div className="mt-69pxr ml-104pxr">
			<div>
				<MainTitle mainTitleName="유저 상품 현황" />
				<div className="mt-24pxr">
					<div className="flex font-14pxr font-medium leading-22pxr">
						<div className="text-unSelected-color">이름</div>
						<div className="text-nav-color ml-8pxr mr-36pxr">{user?.name}</div>

						<div className="text-unSelected-color">코드</div>
						<div className="text-nav-color ml-8pxr mr-36pxr">{user?.code}</div>

						<div className="text-unSelected-color">주소</div>
						<div className="text-nav-color ml-8pxr mr-36pxr">
							{user?.address}
						</div>

						<div className="text-unSelected-color">번호</div>
						<div className="text-nav-color ml-8pxr mr-36pxr">
							{user?.phoneNumber}
						</div>
						<div className="text-unSelected-color">보유포인트</div>
						<div className="text-nav-color ml-8pxr mr-36pxr">
							{user?.settlement}
						</div>
					</div>
				</div>

				{
					<div className="mt-51pxr flex flex-row">
						<div>
							{[
								'판매 중',
								'판매 완료',
								'리젝 상품',
								'만료 상품',
								'KG 매입',
							].map((title, index) => (
								<div
									key={index}
									className={classNames(
										'cursor-pointer w-178pxr h-56pxr rounded-10pxr flex items-center justify-center mt-16pxr',
										{
											'text-background-color bg-nav-color':
												selectedButtons[index],
											'text-nav-color bg-background-color':
												!selectedButtons[index],
										}
									)}
									onClick={() => handleButtonClick(index)}
								>
									<div className="text-16pxr font-medium leading-24pxr ml-17pxr">
										{title}
									</div>
									<div className="text-18pxr font-bold leading-27pxr ml-8pxr">
										{/* 상태에 따른 totalElements 표시 */}
										{index === 0 && totalElements.selling}
										{index === 1 && totalElements.soldOut}
										{index === 2 && totalElements.rejected}
										{index === 3 && totalElements.sellingEnd}
										{index === 4 && totalElements.kgSell}
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
												fill={selectedButtons[index] ? '#F9FAFB' : '#2D3648'}
											/>
										</svg>
									</div>
								</div>
							))}
						</div>

						<div className="mt-24pxr">
							{selectedButtons[0] && (
								<SellingProduct
									clothing={items}
									clothingSalesId={clothingSalesId}
									handlePageChange={handlePageChange}
									page={page}
									size={size}
								/>
							)}
							{selectedButtons[1] && (
								<SoldProduct
									clothing={items}
									clothingSalesId={clothingSalesId}
									handlePageChange={handlePageChange}
									page={page}
									size={size}
								/>
							)}
							{selectedButtons[2] && (
								<RejectedProduct
									rejectedItems={items}
									clothingSalesId={clothingSalesId}
									handlePageChange={handlePageChange}
									page={page}
									size={size}
								/>
							)}
							{selectedButtons[3] && (
								<ExpiredProduct
									expiredItems={items}
									clothingSalesId={clothingSalesId}
									handlePageChange={handlePageChange}
									page={page}
									size={size}
								/>
							)}
							{selectedButtons[4] && (
								<KGProduct
									items={items}
									clothingSalesId={clothingSalesId}
									handlePageChange={handlePageChange}
									page={page}
									size={size}
								/>
							)}
						</div>
					</div>
				}
			</div>
		</div>
	);
}

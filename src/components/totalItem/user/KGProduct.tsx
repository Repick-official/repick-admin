'use client';
import { useState, useEffect } from 'react';
import { ClothingSalesItemStatus } from '@/interface/interface';

export default function KGProduct({ items }: any) {
	const [view, setView] = useState<{ [key: string]: boolean }>({});
	const [userItems, setUserItems] = useState<any[]>([]);

	useEffect(() => {
		if (items?.clothing?.result?.content) {
			setUserItems(items.clothing.result.content);
		}
	}, [items]);

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

	return (
		<div className="w-1216pxr h-1038pxr border-1pxr border-solid border-dark-gray bg-white ml-32pxr">
			<div className="mt-28pxr ml-40pxr w-1144pxr">
				<div className="flex">
					<div className="text-16pxr font-medium leading-24pxr">
						전체 {userItems?.length ?? 0}개
					</div>
				</div>
				<div className="bg-circle-gray h-48pxr flex mt-24pxr">
					<div className="text-14pxr font-medium leading-22pxr text-unSelected-color flex items-center">
						<div className="ml-15pxr w-91pxr">상품 코드</div>
						<div className="w-239pxr">상품명</div>
						<div className="w-69pxr">등급</div>
						<div className="w-149pxr">신청일</div>
						<div className="w-127pxr">경로</div>
						<div className="w-125pxr">정산상태</div>
					</div>
				</div>

				{userItems?.map((item) => (
					<div key={item.productCode}>
						<div className="h-92pxr flex items-center text-14pxr font-normal leading-21pxr">
							<div className="ml-15pxr w-91pxr">{item.productCode}</div>
							<div className="flex items-center w-239pxr">
								<div className="w-60pxr h-60pxr border-1pxr border-solid border-circle-gray"></div>
								<div className="w-146pxr ml-12pxr">{item.productName}</div>
							</div>
							<div className="w-69pxr">{item.grade}</div>
							<div className="w-149pxr">{item.salesPeriod}</div>
							<div className="w-127pxr">{item.salesPrice}</div>
							<div className="w-125pxr">{item.settlementPrice}</div>
						</div>
						<div className="h-1pxr w-full bg-dark-gray"></div>
					</div>
				))}
				<div className="h-1pxr w-full bg-dark-gray"></div>
			</div>
		</div>
	);
}

import { updateClothingSalesStatus } from '@/api/request';
import React from 'react';
import { useState, useEffect } from 'react';

export default function UserDropdown({ item, setItems }: any) {
	const handleSave = async (state: string) => {
		try {
			await updateClothingSalesStatus(item.id, state);
			setItems((prevItems: any) =>
				prevItems.map((it: any) =>
					it.id === item.id ? { ...it, status: state } : it
				)
			);
		} catch (error) {
			console.error('Failed to update tracking number:', error);
		}
	};

	const stateList = [
		'리픽백 배송',
		'수거 중',
		'수거 완료(푸시)',
		'촬영 중',
		'촬영 완료',
		'상품화 중',
		'상품화 완료',
		'상품 등록 완료',
		'요청 취소',
		'판매 중',
		'판매 기간 만료',
	];
	return (
		<div>
			<div className="absolute" onClick={(e) => e.stopPropagation()}>
				<div className="relative text-12pxr text-nav-btn font-medium leading-19pxr w-148pxr h-402pxr rounded-10pxr border-1pxr border-solid border-dark-gray bg-white mt-14pxr">
					{stateList.map((state) => (
						<li
							key={state}
							className="w-148pxr h-36pxr hover:bg-circle-gray pt-8pxr pl-17pxr pb-8pxr"
							onClick={() => handleSave(state)}
						>
							{state}
						</li>
					))}
				</div>
			</div>
		</div>
	);
}

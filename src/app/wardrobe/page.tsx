'use client';
import MainTitle from '@/components/titles/MainTitle';
import TopInfo from '@/components/wardrobe/TopInfo';
import WardrobeContent from '@/components/wardrobe/WardrobeContent';
import { useState, useEffect } from 'react';
import { getClothingSalesStatus } from '@/api/request';

function Wardrobe() {
	const [users, setUsers] = useState<any>(null);
	const [page, setPage] = useState(0); // 현재 페이지 상태
	const size = 10; // 페이지당 아이템 수

	// 데이터 가져오기 함수
	useEffect(() => {
		const fetchItem = async () => {
			const userList = await getClothingSalesStatus(String(page), String(size));
			setUsers(userList);
		};
		fetchItem();
	}, [page]);

	// 페이지 변경 함수
	const handlePageChange = (newPage: number) => {
		if (newPage >= 0 && (!users || newPage < users.result.totalPages)) {
			setPage(newPage);
		}
	};

	return (
		<div className="mt-69pxr ml-104pxr">
			<div>
				<MainTitle mainTitleName="옷장 정리 현황" />
				<div>
					<TopInfo total={users?.result.totalElements} />
					<WardrobeContent users={users} />

					{/* 페이지네이션 버튼 */}
					<div className="pagination mt-16pxr flex justify-center space-x-2">
						<button
							onClick={() => handlePageChange(page - 1)}
							disabled={page === 0}
							className="px-4 py-2 border rounded"
						>
							이전
						</button>

						{[...Array(users?.result.totalPages || 1)].map((_, index) => (
							<button
								key={index}
								onClick={() => handlePageChange(index)}
								className={`px-3 py-1 border rounded ${
									index === page ? 'bg-gray-300' : ''
								}`}
							>
								{index + 1}
							</button>
						))}

						<button
							onClick={() => handlePageChange(page + 1)}
							disabled={users && page + 1 >= users.result.totalPages}
							className="px-4 py-2 border rounded"
						>
							다음
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Wardrobe;

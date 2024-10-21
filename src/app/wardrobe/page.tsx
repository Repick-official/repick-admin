'use client';
import MainTitle from '@/components/titles/MainTitle';
import TopInfo from '@/components/wardrobe/TopInfo';
import WardrobeContent from '@/components/wardrobe/WardrobeContent';
import { useState, useEffect } from 'react';
import { getClothingSalesStatus } from '@/api/request';

function Wardrobe() {
	const [users, setUsers] = useState<any>(null);

	useEffect(() => {
		const fetchItem = async () => {
			const userList = await getClothingSalesStatus('0', '4');
			setUsers(userList);
		};
		fetchItem();
	}, []);

	console.log(users);

	return (
		<div className="mt-69pxr ml-104pxr">
			<div>
				<MainTitle mainTitleName="옷장 정리 현황" />
				<div>
					<TopInfo total={users?.result.totalElements} />
					<WardrobeContent users={users} />
				</div>
			</div>
		</div>
	);
}
export default Wardrobe;

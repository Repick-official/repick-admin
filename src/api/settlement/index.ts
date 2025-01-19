export interface SettlementRequestResponse {
	id: number;
	userId: number;
	userName: string;
	amount: number;
	bankName: string;
	accountNumber: string;
	accountHolder: string;
	isCompleted: boolean;
	requestDate: string;
	completeDate: string | null;
}

/**
 * 정산금 출금 신청 내역 조회
 */
export const getSettlementReqeust = async (status: string) => {
	try {
		const response = await fetch(
			process.env.API_URL + `/settlement/${status}`,
			{
				method: 'GET',
			}
		);
		if (response.ok) {
			const data = await response.json();
			return data;
		} else {
			throw new Error('Error fetching poll types');
		}
	} catch (error) {
		throw error;
	}
};

/**
 * 정산완료 처리
 */
export const patchSettlement = async (settlementRequestId: number) => {
	try {
		const response = await fetch(
			process.env.API_URL + `/settlement/${settlementRequestId}`,
			{
				method: 'PATCH',
			}
		);
		if (response.ok) {
			const data = await response.json();
			return data;
		} else {
			throw new Error('Error fetching poll types');
		}
	} catch (error) {
		throw error;
	}
};

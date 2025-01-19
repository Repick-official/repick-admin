export function formatDateTime(dateString?: string | null) {
	if (!dateString) return '-';

	const date = new Date(dateString);

	if (isNaN(date.getTime())) {
		return '-';
	}

	// 'ko-KR' 로컬 형식으로 변환
	// 예: "2025. 01. 19. 오후 10:11:47"
	return date.toLocaleString('ko-KR', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	});
}

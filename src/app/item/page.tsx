import ExcelUpload from '@/components/item/ExcelUpload';
import FileUpload from '@/components/item/FileUpload';
import MainTitle from '@/components/titles/MainTitle';

function item() {
	return (
		<div className="mt-69pxr ml-104pxr">
			<div>
				<MainTitle mainTitleName="상품 등록" />
			</div>
			<div className="mt-48pxr">
				<div className="w-454pxr h-432pxr bg-white rounded-10pxr border-dark-gray border-1pxr border-solid">
					<div className="mt-22pxr ml-29pxr">
						<div className="mt-40pxr">
							<div>
								<div className="text-16pxr text-nav-color font-medium leading-24pxr mb-12pxr">
									엑셀표
								</div>
								<ExcelUpload />
							</div>

							<div className="mt-24pxr">
								<div className="text-16pxr text-nav-color font-medium leading-24pxr mb-12pxr">
									사진
								</div>
								<FileUpload />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default item;

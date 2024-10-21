'use client';
import { getPresignedUrl } from '@/api/request';
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function FileUpload() {
	const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

	const onDrop = useCallback(async (acceptedFiles: File[]) => {
		acceptedFiles.forEach(async (file) => {
			// Presigned URL 가져오기
			const fileType = file.type === 'image/png' ? 'IMAGE' : 'EXCEL';
			const presignedUrlData = await getPresignedUrl(file.name, fileType);

			if (presignedUrlData?.result?.url) {
				try {
					// Presigned URL로 PUT 요청
					const response = await fetch(presignedUrlData.result.url, {
						method: 'PUT',
						body: file,
						headers: {
							'Content-Type': file.type,
						},
					});

					if (response.ok) {
						console.log(`File uploaded successfully: ${file.name}`);

						// S3에 저장된 이미지 파일 URL 생성 (이미지로 바로 표시할 수 있도록)
						const imageUrl = presignedUrlData.result.url.split('?')[0];

						// 업로드된 파일 목록에 이미지 URL 추가
						setUploadedFiles((prev) => [...prev, imageUrl]);
					} else {
						console.error(`Failed to upload file: ${file.name}`);
					}
				} catch (error) {
					console.error('Error uploading file:', error);
				}
			}
		});
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: {
			'image/*': [],
		},
		multiple: true,
	});

	return (
		<div
			{...getRootProps()}
			className="w-390pxr h-104pxr bg-circle-gray rounded-10pxr border-dashed border-2 border-gray-300 p-4"
		>
			<input {...getInputProps()} />
			{uploadedFiles.length > 0 ? (
				<div className="flex gap-2">
					{uploadedFiles.map((file, index) => (
						<div key={index} className="w-24 h-24">
							<img
								src={file}
								alt={`Uploaded ${file}`}
								className="w-full h-full object-cover rounded"
							/>
						</div>
					))}
				</div>
			) : isDragActive ? (
				<p>파일을 여기에 놓으세요...</p>
			) : (
				<div className="flex">
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M12 11C12.5523 11 13 11.4477 13 12V14H15C15.5523 14 16 14.4477 16 15C16 15.5523 15.5523 16 15 16H13V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V16H9C8.44772 16 8 15.5523 8 15C8 14.4477 8.44772 14 9 14H11V12C11 11.4477 11.4477 11 12 11Z"
								fill="#98A2B3"
							/>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M6 1C5.20435 1 4.44129 1.31607 3.87868 1.87868C3.31607 2.44129 3 3.20435 3 4V20C3 20.7957 3.31607 21.5587 3.87868 22.1213C4.44129 22.6839 5.20435 23 6 23H18C18.7957 23 19.5587 22.6839 20.1213 22.1213C20.6839 21.5587 21 20.7957 21 20V8C21 7.73478 20.8946 7.48043 20.7071 7.29289L14.7071 1.29289C14.5196 1.10536 14.2652 1 14 1H6ZM5.29289 3.29289C5.48043 3.10536 5.73478 3 6 3H13V8C13 8.55228 13.4477 9 14 9H19V20C19 20.2652 18.8946 20.5196 18.7071 20.7071C18.5196 20.8946 18.2652 21 18 21H6C5.73478 21 5.48043 20.8946 5.29289 20.7071C5.10536 20.5196 5 20.2652 5 20V4C5 3.73478 5.10536 3.48043 5.29289 3.29289ZM17.5858 7L15 4.41421V7H17.5858Z"
								fill="#98A2B3"
							/>
						</svg>
					</div>
					<div className="text-text-gray ml-8pxr text-14pxr font-normal leading-21pxr">
						이곳에 파일을 올려주세요
					</div>
				</div>
			)}
		</div>
	);
}

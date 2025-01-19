"use client";
import { getPresignedUrl } from "@/api/request";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function ExcelUpload() {
  const [fileStatuses, setFileStatuses] = useState<
    { name: string; status: "uploading" | "uploaded" }[]
  >([]);

  // 엑셀 파일을 드래그 앤 드롭하여 업로드하는 함수
  const onExcelDrop = useCallback(async (acceptedFiles: File[]) => {
    const newFileStatuses = acceptedFiles.map((file) => ({
      name: file.name,
      status: "uploading" as "uploading",
    }));

    setFileStatuses((prev) => [...prev, ...newFileStatuses]);

    await Promise.all(
      acceptedFiles.map(async (file) => {
        // Presigned URL 가져오기
        const presignedUrlData = await getPresignedUrl(file.name, "EXCEL");

        if (presignedUrlData?.result?.url) {
          try {
            // Presigned URL로 PUT 요청
            const response = await fetch(presignedUrlData.result.url, {
              method: "PUT",
              body: file,
              headers: {
                "Content-Type": file.type,
              },
            });

            setFileStatuses((prev) =>
              prev.map((f) =>
                f.name === file.name
                  ? { ...f, status: response.ok ? "uploaded" : "uploading" }
                  : f
              )
            );

            if (response.ok) {
              console.log(`Excel file uploaded successfully: ${file.name}`);
              alert("엑셀 파일이 업로드되었습니다");
            } else {
              console.error(`Failed to upload Excel file: ${file.name}`);
            }
          } catch (error) {
            console.error("Error uploading Excel file:", error);
          }
        }
      })
    );
  }, []);

  // 엑셀 파일 드롭존 설정
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onExcelDrop,
    accept: {
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
    },
    multiple: true,
  });

  return (
    <div
      {...getRootProps()}
      className={`w-390pxr h-104pxr rounded-10pxr border-gray-300 p-4 ${
        isDragActive ? "bg-dark-gray" : "bg-circle-gray"
      }`}
    >
      <input {...getInputProps()} />
      {fileStatuses.length === 0 ? (
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 1C5.20435 1 4.44129 1.31607 3.87868 1.87868C3.31607 2.44129 3 3.20435 3 4V20C3 20.7957 3.31607 21.5587 3.87868 22.1213C4.44129 22.6839 5.20435 23 6 23H18C18.7957 23 19.5587 22.6839 20.1213 22.1213C20.6839 21.5587 21 20.7957 21 20V8C21 7.73478 20.8946 7.48043 20.7071 7.29289L14.7071 1.29289C14.5196 1.10536 14.2652 1 14 1H6ZM5.29289 3.29289C5.48043 3.10536 5.73478 3 6 3H13V8C13 8.55228 13.4477 9 14 9H19V20C19 20.2652 18.8946 20.5196 18.7071 20.7071C18.5196 20.8946 18.2652 21 18 21H6C5.73478 21 5.48043 20.8946 5.29289 20.7071C5.10536 20.5196 5 20.2652 5 20V4C5 3.73478 5.10536 3.48043 5.29289 3.29289ZM17.5858 7L15 4.41421V7H17.5858Z"
                fill="#98A2B3"
              />
            </svg>
          </div>
          <div className="text-text-gray ml-8pxr text-14pxr font-normal leading-21pxr">
            엑셀 파일을 올려주세요
          </div>
        </div>
      ) : (
        <ul>
          {fileStatuses.map((file) => (
            <li key={file.name}>
              {file.status === "uploading" ? (
                <div>
                  <span className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M13 2C13 1.44772 12.5523 1 12 1C11.4477 1 11 1.44772 11 2V6C11 6.55228 11.4477 7 12 7C12.5523 7 13 6.55228 13 6V2Z"
                        fill="#439AFF"
                      />
                      <path
                        d="M13 18C13 17.4477 12.5523 17 12 17C11.4477 17 11 17.4477 11 18V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V18Z"
                        fill="#439AFF"
                      />
                      <path
                        d="M4.22282 4.22289C4.61335 3.83236 5.24651 3.83236 5.63704 4.22289L8.46704 7.05289C8.85756 7.44341 8.85756 8.07658 8.46704 8.4671C8.07651 8.85762 7.44335 8.85762 7.05282 8.4671L4.22282 5.6371C3.8323 5.24658 3.8323 4.61341 4.22282 4.22289Z"
                        fill="#439AFF"
                      />
                      <path
                        d="M16.9471 15.5329C16.5566 15.1424 15.9234 15.1424 15.5329 15.5329C15.1424 15.9234 15.1424 16.5566 15.5329 16.9471L18.3629 19.7771C18.7534 20.1676 19.3866 20.1676 19.7771 19.7771C20.1676 19.3866 20.1676 18.7534 19.7771 18.3629L16.9471 15.5329Z"
                        fill="#439AFF"
                      />
                      <path
                        d="M1 12C1 11.4477 1.44772 11 2 11H6C6.55228 11 7 11.4477 7 12C7 12.5523 6.55228 13 6 13H2C1.44772 13 1 12.5523 1 12Z"
                        fill="#439AFF"
                      />
                      <path
                        d="M18 11C17.4477 11 17 11.4477 17 12C17 12.5523 17.4477 13 18 13H22C22.5523 13 23 12.5523 23 12C23 11.4477 22.5523 11 22 11H18Z"
                        fill="#439AFF"
                      />
                      <path
                        d="M8.46704 15.5329C8.85756 15.9234 8.85756 16.5566 8.46704 16.9471L5.63704 19.7771C5.24651 20.1676 4.61335 20.1676 4.22282 19.7771C3.8323 19.3866 3.8323 18.7534 4.22283 18.3629L7.05282 15.5329C7.44335 15.1424 8.07651 15.1424 8.46704 15.5329Z"
                        fill="#439AFF"
                      />
                      <path
                        d="M19.7771 5.6371C20.1676 5.24657 20.1676 4.61341 19.7771 4.22289C19.3866 3.83236 18.7534 3.83236 18.3629 4.22289L15.5329 7.05289C15.1424 7.44341 15.1424 8.07658 15.5329 8.4671C15.9234 8.85762 16.5566 8.85762 16.9471 8.4671L19.7771 5.6371Z"
                        fill="#439AFF"
                      />
                    </svg>
                    <div className="ml-8pxr">{file.name}</div>
                  </span>
                </div>
              ) : (
                <div>
                  <span className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M10.0166 3.21542C11.9096 2.78771 13.8902 2.9834 15.663 3.77329C16.1675 3.99807 16.7587 3.77134 16.9834 3.26687C17.2082 2.76239 16.9815 2.17122 16.477 1.94644C14.3103 0.981007 11.8896 0.741837 9.57581 1.2646C7.26206 1.78736 5.17929 3.04404 3.63811 4.84722C2.09693 6.6504 1.17992 8.90346 1.02384 11.2704C0.86777 13.6373 1.48099 15.9913 2.77206 17.9812C4.06312 19.9711 5.96285 21.4904 8.18792 22.3125C10.413 23.1345 12.8442 23.2153 15.1189 22.5427C17.3936 21.8702 19.39 20.4803 20.8103 18.5804C22.2306 16.6806 22.9986 14.3725 23 12.0004V11.0799C23 10.5276 22.5523 10.0799 22 10.0799C21.4477 10.0799 21 10.5276 21 11.0799V11.9993C20.9989 13.9401 20.3705 15.8285 19.2084 17.3829C18.0464 18.9374 16.413 20.0745 14.5518 20.6248C12.6907 21.1751 10.7015 21.109 8.88103 20.4364C7.06051 19.7638 5.50619 18.5208 4.44987 16.8927C3.39354 15.2645 2.89181 13.3386 3.01951 11.402C3.14721 9.4654 3.89749 7.62199 5.15845 6.14666C6.41942 4.67133 8.12351 3.64314 10.0166 3.21542Z"
                        fill="#3DC061"
                      />
                      <path
                        d="M22.7075 4.70663C23.0978 4.31591 23.0975 3.68275 22.7068 3.29242C22.316 2.90209 21.6829 2.90241 21.2925 3.29313L11.9996 12.5953L9.70711 10.3028C9.31658 9.91225 8.68342 9.91225 8.29289 10.3028C7.90237 10.6933 7.90237 11.3265 8.29289 11.717L11.2929 14.717C11.4805 14.9046 11.7349 15.0099 12.0003 15.0099C12.2656 15.0098 12.52 14.9043 12.7075 14.7166L22.7075 4.70663Z"
                        fill="#3DC061"
                      />
                    </svg>
                    <div className="ml-8pxr">{file.name}</div>
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

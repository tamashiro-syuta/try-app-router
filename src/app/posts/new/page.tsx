"use client";

import { useRef } from "react";

const Page = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 登録処理を実装してください
    console.log(titleRef.current?.value, descriptionRef.current?.value);
  };

  return (
    <div className="mx-auto flex flex-col items-center justify-center">
      <div className="container p-20">
        <div className="rounded bg-white p-6 shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="mb-2 block font-bold text-gray-700"
              >
                タイトル<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                placeholder="タイトルを入力してください"
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                // NOTE: useRefを使って定義したtitleRefに紐づけている
                ref={titleRef}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="text"
                className="mb-2 block font-bold text-gray-700"
              >
                テキスト<span className="text-red-500">*</span>
              </label>
              <textarea
                id="text"
                placeholder="テキストを入力してください"
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                // NOTE: useRefを使って定義したdescriptionRefに紐づけている
                ref={descriptionRef}
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
              >
                登録
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;

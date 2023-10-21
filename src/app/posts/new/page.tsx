"use client";

// import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface Post {
  title: string;
  text: string;
}

const postSchema = z.object({
  title: z.string().min(1, { message: "必須です" }),
  text: z.string().min(1, { message: "必須です" }),
});

const Page = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Post>({
    resolver: zodResolver(postSchema),
  });

  const onSubmit = (data: Post) => console.log(data);

  console.log(watch("title"));
  console.log(watch("text"));

  return (
    <div className="mx-auto flex flex-col items-center justify-center">
      <div className="container p-20">
        <div className="rounded bg-white p-6 shadow-md">
          <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register("title")}
              />
              {errors.title && (
                <p className="text-red-400">{errors.title.message}</p>
              )}
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
                {...register("text")}
              ></textarea>
              {errors.text && (
                <p className="text-red-400">{errors.text.message}</p>
              )}
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
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

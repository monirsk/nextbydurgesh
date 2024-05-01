"use client";
import React from "react";

import { useQuery, useIsFetching, useMutation } from "@tanstack/react-query";

// export const metadata = {
//   title: "Show tasks",
// };

const ShowTasks = () => {
  const {
    data: todoData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      return data;
    },
  });

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (newPost) => {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(newPost),
      }).then((res) => res.json());
    },
  });

  if (isLoading) {
    return (
      <main className="mt-4 flex min-h-screen flex-col items-center text-blue-300">
        It is loading...
      </main>
    );
  }

  if (isError) {
    return (
      <main className="mt-4 flex min-h-screen flex-col items-center text-red-300">
        There is an error...
      </main>
    );
  }

  return (
    <>
      <button
        onClick={() =>
          mutate({
            userId: 5000,
            id: 4000,
            title: "Shihab",
            body: "Vivasoft",
          })
        }
        className="bg-primary p-2 rounded m-4 text-white"
      >
        Add Post
      </button>
      <main className="flex min-h-screen flex-col items-center justify-between p-16">
        <h1 className="text-3xl text-primary font-bold mb-20">TODOS</h1>
        <div className="flex flex-col gap-2">
          {todoData?.slice(0, 20).map((todo) => {
            return (
              <div className="flex border border-blue-200" key={todo.id}>
                <h2 className="capitalize">Title: {todo.title}</h2>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default ShowTasks;

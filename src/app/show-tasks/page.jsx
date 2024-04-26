"use client";
import React from "react";

import { useQuery, useIsFetching } from "@tanstack/react-query";

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
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      return data;
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-xl">TODOS</h1>
      <div className="flex flex-col gap-2">
        {todoData?.map((todo) => {
          return (
            <div className="flex" key={todo.id}>
              <h2>{todo.title}</h2>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default ShowTasks;

"use client";

import React from "react";
import { useQuery, useIsFetching, useMutation } from "@tanstack/react-query";

const ShowUserPage = () => {
  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/api/users");
      const data = await response.json();
      return data;
    },
  });
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error fetching data</div>}
        <h1 className="text-center mb-6 text-3xl font-bold text-primary">
          User List
        </h1>
        {userData && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10 px-40">
            {userData.map((user) => (
              <div
                key={user.name}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <div className="font-semibold text-lg">{user.name}</div>
                <div className="text-gray-500">{user.email}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ShowUserPage;

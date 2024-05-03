"use client";

import React, { useEffect, useState } from "react";
import UserContext from "./userContext";
import { currentUser } from "@/services/userService";
import { toast } from "react-toastify";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const currentUserData = await currentUser();
        console.log(currentUserData);
        setUser({ ...currentUserData });
      } catch (error) {
        console.log(error);
        toast.error("Error in loading current user.");
        setUser(undefined);
      }
    };

    fetchCurrentUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

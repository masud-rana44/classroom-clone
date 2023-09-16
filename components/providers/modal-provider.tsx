"use client";

import { useEffect, useState } from "react";

import { CreateClassModal } from "@/components/create-class-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <CreateClassModal />
    </>
  );
};

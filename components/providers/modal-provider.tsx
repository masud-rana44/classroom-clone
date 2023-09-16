"use client";

import { useEffect, useState } from "react";

import { CreateClassModal } from "@/components/modal/create-class-modal";
import { ClassCodeModal } from "@/components/modal/classcode-modal";
import { JoinClassModal } from "@/components/modal/join-class-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <CreateClassModal />
      <ClassCodeModal />
      <JoinClassModal />
    </>
  );
};

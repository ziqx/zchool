"use client";

import { ReactNode } from "react";

type ZButtonProps = {
  text: string;
  onClick: () => void;
  icon?: ReactNode;
};
const ZButton = ({ onClick, text, icon }: ZButtonProps) => {
  return (
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-3 hover:bg-blue-700 transition-colors duration-200"
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
};

export default ZButton;

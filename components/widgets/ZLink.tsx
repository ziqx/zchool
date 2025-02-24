import Link from "next/link";
import { ReactNode } from "react";

type ZLinkProp = {
  text: string;
  href: string;
  icon?: ReactNode;
};
const ZLink = ({ href, text, icon }: ZLinkProp) => {
  return (
    <Link
      href={href}
      className="bg-primaryblue text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors duration-200"
    >
      {icon}
      {text}
    </Link>
  );
};

export default ZLink;

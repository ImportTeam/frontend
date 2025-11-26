"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menu = [
    {
      name: "대시보드",
      href: "/dashboard",
      icon: "/dashboard.png",
      activeFilter: "none",
      inactiveFilter: "grayscale(100%)",
    },
    {
      name: "리포트",
      href: "/report",
      icon: "/dashboard_report.png",
      activeFilter:
        "brightness(0) saturate(100%) invert(33%) sepia(87%) saturate(2555%) hue-rotate(201deg) brightness(95%) contrast(92%)",
      inactiveFilter: "none",
    },
  ];

  return (
    <aside className="w-70 bg-[#FFFCF9] h-screen px-4 py-6 flex flex-col gap-3">
      {menu.map((item) => {
        const isActive = pathname.startsWith(item.href);

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 w-full rounded-lg text-base transition border
              ${
                isActive
                  ? "border-blue-500 bg-blue-50 text-blue-600 font-semibold"
                  : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
              }
            `}
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={16}
              height={16}
              className="opacity-80"
              style={{
                filter: isActive ? item.activeFilter : item.inactiveFilter,
              }}
            />
            <span>{item.name}</span>
          </Link>
        );
      })}
    </aside>
  );
}

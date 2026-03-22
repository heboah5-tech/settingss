"use client";

import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
interface LinkCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  image: string;
  featured?: boolean;
}

export function LinkCard({
  title,
  description,
  href,
  icon: Icon,
  image,
  featured,
}: LinkCardProps) {
  return (
    <Link href={href} className="group block">
      <div
        className={`relative overflow-hidden rounded-2xl ${
          featured ? "min-h-[200px]" : "min-h-[140px]"
        } transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, 600px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:from-black/85 group-hover:via-black/50 transition-all duration-300" />
        <div className="relative z-10 flex flex-col justify-end h-full p-5">
          <div className="flex items-center gap-3 mb-2">
            <div
              className={`flex-shrink-0 flex items-center justify-center rounded-xl backdrop-blur-sm ${
                featured ? "w-12 h-12 bg-white/20" : "w-10 h-10 bg-white/15"
              }`}
            >
              <Icon
                className={`${featured ? "w-6 h-6" : "w-5 h-5"} text-white`}
              />
            </div>
            <div className="flex-1">
              <h3
                className={`font-bold text-white ${
                  featured ? "text-2xl" : "text-lg"
                } leading-tight`}
              >
                {title}
              </h3>
            </div>
          </div>
          <p
            className={`text-white/80 ${
              featured ? "text-base" : "text-sm"
            } leading-relaxed mr-[52px]`}
          >
            {description}
          </p>
          <div className="absolute left-5 bottom-5 flex items-center justify-center w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-[-4px]">
            <svg
              className="w-5 h-5 text-white rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

"use client";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  span = 1,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  span?: 1 | 2 | 3;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black shadow-sm dark:border-white/[0.2] bg-white border border-transparent flex flex-col h-full",
        span === 2 && "md:col-span-2",
        span === 3 && "md:col-span-3",
        className
      )}
    >
      <div className="flex-1">{header}</div>
      <div className="group-hover/bento:translate-x-2 transition duration-200 mt-4">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 text-sm">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};

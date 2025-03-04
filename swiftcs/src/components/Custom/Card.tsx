import Link from "next/link";
import React from "react";
import clsx from "clsx";
interface CardProps {
    title: string;
    description: string;
    buttonText?: string;
    onClick?: () => void;
    customClass?: string;
    titleClass?: string;
    descriptionClass?: string;
    linkClass?: string;
    icons?: React.ReactNode;
    LinkIcons?: React.ReactNode;
    border?: "Lime" | "Indigo";
    IconBg?: "Rounded";
    href:string;
}

const Card: React.FC<CardProps> = ({
    title,
    description,
    buttonText,
    onClick,
    customClass,
    titleClass,
    descriptionClass,
    linkClass,
    icons,
    border,
    IconBg,
    LinkIcons,
    href,
}) => {
    return (
        <div className={`${clsx(
            {
                "rounded-sm border border-lime-300 bg-teal-400": border === "Lime",
                "rounded-sm border border-indigo-300 bg-teal-400": border === "Indigo"
            }
        )}p-2 max-w-sm ${customClass}`}>
            <div className={`flex rounded-lg h-full p-4 flex-col`}>
                <div className={`flex items-center mb-3`}>
                    <div className={`${clsx({ "w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0 ": IconBg === "Rounded" })}`}>
                        <i>{icons}</i>
                    </div>
                    <h2 className={`text-lg font-medium ${titleClass}`}>{title}</h2>
                </div>
                <div className={`flex flex-col justify-between flex-grow`}>
                    <p className={`leading-relaxed text-base ${descriptionClass}`}>
                        {description}
                    </p>
                    {buttonText && (
                        <Link
                        href={href}
                        onClick={onClick}
                        className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 w-32 mt-5 ${linkClass}`}
                      >
                          {buttonText}
                          {LinkIcons && <i>{LinkIcons}</i>}
                      </Link>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Card;
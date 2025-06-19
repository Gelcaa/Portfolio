import React from "react";

interface PrimaryButtonProps {
  text?: string; 
  href?: string;
  color: string;
  textColor: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  href,
  color,
  textColor,
  onClick,
  icon,
}) => {
  const isIconOnly = !!icon && !text;

  const baseStyles =
    "inline-flex items-center justify-center shadow-md hover:opacity-90 transition duration-300";
  const circleStyles = "rounded-full w-12 h-12"; // circle size for icon-only buttons
  const normalStyles = "rounded-full px-6 py-3";

  const buttonStyles = `
    ${baseStyles}
    ${color} 
    ${textColor} 
    ${isIconOnly ? circleStyles : normalStyles}
  `;

  return href ? (
    <a
      href={href}
      className={buttonStyles}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={text || "icon button"}
    >
      {icon}
      {!isIconOnly && text}
    </a>
  ) : (
    <button
      className={buttonStyles}
      onClick={onClick}
      aria-label={text || "icon button"}
    >
      {icon}
      {!isIconOnly && text}
    </button>
  );
};

export default PrimaryButton;

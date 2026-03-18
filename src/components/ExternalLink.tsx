import { ExternalLink as ExternalLinkIcon } from "lucide-react";
import React from "react";

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  showIcon?: boolean;
  children: React.ReactNode;
}

export default function ExternalLink({
  href,
  showIcon = false,
  children,
  className = "",
  ...props
}: ExternalLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Force new tab even inside iframes
    e.preventDefault();
    const w = window.open(href, "_blank", "noopener,noreferrer");
    if (!w) window.location.href = href;
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity ${className}`}
      {...props}
    >
      {children}
      {showIcon && <ExternalLinkIcon size={12} aria-hidden="true" className="flex-shrink-0" />}
    </a>
  );
}

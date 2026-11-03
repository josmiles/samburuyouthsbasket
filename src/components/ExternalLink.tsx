import { ExternalLink as ExternalLinkIcon } from "lucide-react";
import React from "react";

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  showIcon?: boolean;
  children: React.ReactNode;
}

// Web links open in ONE new tab and the site stays open.
// mailto: and tel: links open the email or phone app, with no extra tab.
export default function ExternalLink({
  href,
  showIcon = false,
  children,
  className = "",
  ...props
}: ExternalLinkProps) {
  const isWeb = /^https?:\/\//i.test(href);

  return (
    <a
      href={href}
      {...(isWeb ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity ${className}`}
      {...props}
    >
      {children}
      {showIcon && <ExternalLinkIcon size={12} aria-hidden="true" className="flex-shrink-0" />}
    </a>
  );
}

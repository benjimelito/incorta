import * as React from "react";
import { cn } from "@/lib/utils";
import { header3Variants, type Header3Variants } from "./variants";

/**
 * Header3
 * 
 * Extracted from source site.
 * Original structure:
 * <header class="section_blog-post1-content background-color-background-secondary"><div class="padding-global-2"><div class="container-large"><div class="padding-bottom padding-xhuge"><div class="max-wi
 * 
 * Observed on: https://www.incorta.com/blog/ai-reality-check
 * Usage count: 1x
 */
export interface Header3Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Header3Variants {}

export const Header3 = React.forwardRef<HTMLDivElement, Header3Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(header3Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Header3.displayName = "Header3";

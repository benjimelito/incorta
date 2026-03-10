import * as React from "react";
import { cn } from "@/lib/utils";
import { header2Variants, type Header2Variants } from "./variants";

/**
 * Header2
 * 
 * Extracted from source site.
 * Original structure:
 * <header class="section_header section_solution_header blue-tint"><div class="padding-global-2"><div class="container-large"><div class="padding-section-medium"><div class="header2_component"><div clas
 * 
 * Observed on: https://www.incorta.com/press-releases/incorta-raises-120m-in-series-d-funding-amid-soaring-global-demand-for-unified-data-analytics
 * Usage count: 1x
 */
export interface Header2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Header2Variants {}

export const Header2 = React.forwardRef<HTMLDivElement, Header2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(header2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Header2.displayName = "Header2";

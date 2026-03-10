import * as React from "react";
import { cn } from "@/lib/utils";
import { nav1Variants, type Nav1Variants } from "./variants";

/**
 * Nav1
 * 
 * Extracted from source site.
 * Original structure:
 * <nav role="navigation" class="rl_navbar5_menu w-nav-menu"><div class="rl_navbar5_menu-left"><div data-hover="false" data-delay="300" data-w-id="dae70880-3529-e2ac-88f8-a60b1751a4c0" class="rl_navbar5_
 * 
 * Observed on: https://www.incorta.com, https://www.incorta.com/legal-pages/global-privacy-policy, https://www.incorta.com/contact, https://www.incorta.com/solutions/sap, https://www.incorta.com/blog/ai-reality-check, https://www.incorta.com/press-releases/incorta-raises-120m-in-series-d-funding-amid-soaring-global-demand-for-unified-data-analytics
 * Usage count: 6x
 */
export interface Nav1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Nav1Variants {}

export const Nav1 = React.forwardRef<HTMLDivElement, Nav1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(nav1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Nav1.displayName = "Nav1";

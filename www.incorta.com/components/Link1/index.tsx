import * as React from "react";
import { cn } from "@/lib/utils";
import { link1Variants, type Link1Variants } from "./variants";

/**
 * Link1
 * 
 * Extracted from source site.
 * Original structure:
 * <a href="https://www.incorta.com/demo" class="button cta-btn1 w-button"><strong>Request a Demo</strong></a>
 * 
 * Observed on: https://www.incorta.com/solutions/sap, https://www.incorta.com/blog/ai-reality-check
 * Usage count: 2x
 */
export interface Link1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Link1Variants {}

export const Link1 = React.forwardRef<HTMLDivElement, Link1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(link1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Link1.displayName = "Link1";

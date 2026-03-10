import * as React from "react";
import { cn } from "@/lib/utils";
import { input3Variants, type Input3Variants } from "./variants";

/**
 * Input3
 * 
 * Extracted from source site.
 * Original structure:
 * <input id="email-fbf741b6-a9d7-4269-acd6-16beb0665abd" name="email" required="" placeholder="Enter your email*" type="email" class="hs-input" inputmode="email" autocomplete="email" value="">
 * 
 * Observed on: https://www.incorta.com/legal-pages/global-privacy-policy, https://www.incorta.com/contact, https://www.incorta.com/blog/ai-reality-check, https://www.incorta.com/press-releases/incorta-raises-120m-in-series-d-funding-amid-soaring-global-demand-for-unified-data-analytics
 * Usage count: 4x
 */
export interface Input3Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Input3Variants {}

export const Input3 = React.forwardRef<HTMLDivElement, Input3Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(input3Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Input3.displayName = "Input3";

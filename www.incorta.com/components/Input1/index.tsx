import * as React from "react";
import { cn } from "@/lib/utils";
import { input1Variants, type Input1Variants } from "./variants";

/**
 * Input1
 * 
 * Extracted from source site.
 * Original structure:
 * <input class="c_search_input w-input" tr-search-element="input" maxlength="256" name="query" placeholder="What can we help you find?" type="search" id="search" required="">
 * 
 * Observed on: https://www.incorta.com, https://www.incorta.com/legal-pages/global-privacy-policy, https://www.incorta.com/contact, https://www.incorta.com/solutions/sap, https://www.incorta.com/blog/ai-reality-check, https://www.incorta.com/press-releases/incorta-raises-120m-in-series-d-funding-amid-soaring-global-demand-for-unified-data-analytics
 * Usage count: 6x
 */
export interface Input1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Input1Variants {}

export const Input1 = React.forwardRef<HTMLDivElement, Input1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(input1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Input1.displayName = "Input1";

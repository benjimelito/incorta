import * as React from "react";
import { cn } from "@/lib/utils";
import { input2Variants, type Input2Variants } from "./variants";

/**
 * Input2
 * 
 * Extracted from source site.
 * Original structure:
 * <input type="submit" class="c_search_button w-button" value="Search">
 * 
 * Observed on: https://www.incorta.com, https://www.incorta.com/legal-pages/global-privacy-policy, https://www.incorta.com/contact, https://www.incorta.com/solutions/sap, https://www.incorta.com/blog/ai-reality-check, https://www.incorta.com/press-releases/incorta-raises-120m-in-series-d-funding-amid-soaring-global-demand-for-unified-data-analytics
 * Usage count: 6x
 */
export interface Input2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Input2Variants {}

export const Input2 = React.forwardRef<HTMLDivElement, Input2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(input2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Input2.displayName = "Input2";

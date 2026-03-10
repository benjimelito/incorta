import * as React from "react";
import { cn } from "@/lib/utils";
import { button2Variants, type Button2Variants } from "./variants";

/**
 * Button2
 * 
 * Extracted from source site.
 * Original structure:
 * <button class="delve-btn delve-btn-tertiary" data-action="settings">Cookie preferences</button>
 * 
 * Observed on: https://www.incorta.com, https://www.incorta.com/legal-pages/global-privacy-policy, https://www.incorta.com/contact, https://www.incorta.com/solutions/sap, https://www.incorta.com/blog/ai-reality-check, https://www.incorta.com/press-releases/incorta-raises-120m-in-series-d-funding-amid-soaring-global-demand-for-unified-data-analytics
 * Usage count: 6x
 */
export interface Button2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Button2Variants {}

export const Button2 = React.forwardRef<HTMLDivElement, Button2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(button2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button2.displayName = "Button2";

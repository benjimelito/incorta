import * as React from "react";
import { cn } from "@/lib/utils";
import { button3Variants, type Button3Variants } from "./variants";

/**
 * Button3
 * 
 * Extracted from source site.
 * Original structure:
 * <button class="delve-btn delve-btn-primary" data-action="accept">Accept all cookies</button>
 * 
 * Observed on: https://www.incorta.com, https://www.incorta.com/legal-pages/global-privacy-policy, https://www.incorta.com/contact, https://www.incorta.com/solutions/sap, https://www.incorta.com/blog/ai-reality-check, https://www.incorta.com/press-releases/incorta-raises-120m-in-series-d-funding-amid-soaring-global-demand-for-unified-data-analytics
 * Usage count: 6x
 */
export interface Button3Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Button3Variants {}

export const Button3 = React.forwardRef<HTMLDivElement, Button3Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(button3Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button3.displayName = "Button3";

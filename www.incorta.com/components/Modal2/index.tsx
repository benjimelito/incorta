import * as React from "react";
import { cn } from "@/lib/utils";
import { modal2Variants, type Modal2Variants } from "./variants";

/**
 * Modal2
 * 
 * Extracted from source site.
 * Original structure:
 * <div class="search-modal-screen">
 * 
 * Observed on: https://www.incorta.com, https://www.incorta.com/legal-pages/global-privacy-policy, https://www.incorta.com/contact, https://www.incorta.com/solutions/sap, https://www.incorta.com/blog/ai-reality-check, https://www.incorta.com/press-releases/incorta-raises-120m-in-series-d-funding-amid-soaring-global-demand-for-unified-data-analytics
 * Usage count: 6x
 */
export interface Modal2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Modal2Variants {}

export const Modal2 = React.forwardRef<HTMLDivElement, Modal2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(modal2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Modal2.displayName = "Modal2";

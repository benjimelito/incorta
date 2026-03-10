import * as React from "react";
import { cn } from "@/lib/utils";
import { form1Variants, type Form1Variants } from "./variants";

/**
 * Form1
 * 
 * Extracted from source site.
 * Original structure:
 * <form action="https://www.incorta.com/search" class="c_search_bar w-form"><input class="c_search_input w-input" tr-search-element="input" maxlength="256" name="query" placeholder="What can we help you
 * 
 * Observed on: https://www.incorta.com, https://www.incorta.com/legal-pages/global-privacy-policy, https://www.incorta.com/contact, https://www.incorta.com/solutions/sap, https://www.incorta.com/blog/ai-reality-check, https://www.incorta.com/press-releases/incorta-raises-120m-in-series-d-funding-amid-soaring-global-demand-for-unified-data-analytics
 * Usage count: 6x
 */
export interface Form1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Form1Variants {}

export const Form1 = React.forwardRef<HTMLDivElement, Form1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(form1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Form1.displayName = "Form1";

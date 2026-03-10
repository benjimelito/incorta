import * as React from "react";
import { cn } from "@/lib/utils";
import { form2Variants, type Form2Variants } from "./variants";

/**
 * Form2
 * 
 * Extracted from source site.
 * Original structure:
 * <form id="email-form" name="email-form" data-name="Email Form" method="get" class="rl_cta8_form" data-wf-page-id="69702fb21a5a2294f3183839" data-wf-element-id="d4d51bd3-fd22-2dd0-c0ff-48cb99c7c97f" ar
 * 
 * Observed on: https://www.incorta.com
 * Usage count: 1x
 */
export interface Form2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Form2Variants {}

export const Form2 = React.forwardRef<HTMLDivElement, Form2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(form2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Form2.displayName = "Form2";

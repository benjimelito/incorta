import * as React from "react";
import { cn } from "@/lib/utils";
import { card1Variants, type Card1Variants } from "./variants";

/**
 * Card1
 * 
 * Extracted from source site.
 * Original structure:
 * <div class="layout364_card-content-top-2"><div class="card-header"><div class="layout364_item-icon-wrapper-3"><img width="48" height="48" alt="refresh data icon" src="https://cdn.prod.website-files.co
 * 
 * Observed on: https://www.incorta.com
 * Usage count: 1x
 */
export interface Card1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Card1Variants {}

export const Card1 = React.forwardRef<HTMLDivElement, Card1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(card1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Card1.displayName = "Card1";

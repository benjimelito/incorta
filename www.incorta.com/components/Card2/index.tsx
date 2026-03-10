import * as React from "react";
import { cn } from "@/lib/utils";
import { card2Variants, type Card2Variants } from "./variants";

/**
 * Card2
 * 
 * Extracted from source site.
 * Original structure:
 * <div class="card-description"><div id="w-node-_2c4aa1ae-43bb-6350-0c3d-6dc81d67b4d9-f3183839" class="layout209_item"><div class="layout209_item-icon-wrapper"><div class="icon-embed-xsmall-18 w-embed">
 * 
 * Observed on: https://www.incorta.com
 * Usage count: 1x
 */
export interface Card2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Card2Variants {}

export const Card2 = React.forwardRef<HTMLDivElement, Card2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(card2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Card2.displayName = "Card2";

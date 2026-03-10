import { cva, type VariantProps } from "class-variance-authority";

/**
 * Card1 Variants
 * Extracted from: https://www.incorta.com
 * Usage count: 1x
 */
export const card1Variants = cva(
  // Base styles observed
  "layout364_card-content-top-2",
  {
    variants: {
      variant: {
        default: "",
        // Add more variants based on observed patterns
      },
      size: {
        default: "",
        // Add size variants if detected
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type Card1Variants = VariantProps<typeof card1Variants>;

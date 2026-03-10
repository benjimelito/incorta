import { cva, type VariantProps } from "class-variance-authority";

/**
 * Card2 Variants
 * Extracted from: https://www.incorta.com
 * Usage count: 1x
 */
export const card2Variants = cva(
  // Base styles observed
  "card-description",
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

export type Card2Variants = VariantProps<typeof card2Variants>;

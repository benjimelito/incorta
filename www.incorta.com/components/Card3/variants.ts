import { cva, type VariantProps } from "class-variance-authority";

/**
 * Card3 Variants
 * Extracted from: https://www.incorta.com
 * Usage count: 1x
 */
export const card3Variants = cva(
  // Base styles observed
  "cards_arrow w-embed",
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

export type Card3Variants = VariantProps<typeof card3Variants>;

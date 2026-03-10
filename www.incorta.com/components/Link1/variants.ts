import { cva, type VariantProps } from "class-variance-authority";

/**
 * Link1 Variants
 * Extracted from: https://www.incorta.com/solutions/sap, https://www.incorta.com/blog/ai-reality-check
 * Usage count: 2x
 */
export const link1Variants = cva(
  // Base styles observed
  "button cta-btn1 w-button",
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

export type Link1Variants = VariantProps<typeof link1Variants>;

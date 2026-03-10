import { cva, type VariantProps } from "class-variance-authority";

/**
 * Form2 Variants
 * Extracted from: https://www.incorta.com
 * Usage count: 1x
 */
export const form2Variants = cva(
  // Base styles observed
  "rl_cta8_form",
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

export type Form2Variants = VariantProps<typeof form2Variants>;

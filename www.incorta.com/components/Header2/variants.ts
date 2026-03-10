import { cva, type VariantProps } from "class-variance-authority";

/**
 * Header2 Variants
 * Extracted from: https://www.incorta.com/press-releases/incorta-raises-120m-in-series-d-funding-amid-soaring-global-demand-for-unified-data-analytics
 * Usage count: 1x
 */
export const header2Variants = cva(
  // Base styles observed
  "section_header section_solution_header blue-tint",
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

export type Header2Variants = VariantProps<typeof header2Variants>;

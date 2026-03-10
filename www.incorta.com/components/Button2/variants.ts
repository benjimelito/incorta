import { cva, type VariantProps } from "class-variance-authority";

/**
 * Button2 Variants
 * Extracted from: https://www.incorta.com, https://www.incorta.com/legal-pages/global-privacy-policy, https://www.incorta.com/contact, https://www.incorta.com/solutions/sap, https://www.incorta.com/blog/ai-reality-check, https://www.incorta.com/press-releases/incorta-raises-120m-in-series-d-funding-amid-soaring-global-demand-for-unified-data-analytics
 * Usage count: 6x
 */
export const button2Variants = cva(
  // Base styles observed
  "delve-btn delve-btn-tertiary",
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

export type Button2Variants = VariantProps<typeof button2Variants>;

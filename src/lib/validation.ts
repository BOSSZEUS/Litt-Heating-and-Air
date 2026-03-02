import { z } from 'zod';

export const quoteSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^[\d\s\-\(\)\+\.]{7,20}$/, 'Please enter a valid phone number'),
  message: z.string().min(1, 'Please tell us how we can help'),
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  emailConsent: z.enum(['Yes', 'No'], {
    errorMap: () => ({ message: 'Please select an option' }),
  }),
});

export const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^[\d\s\-\(\)\+\.]{7,20}$/, 'Please enter a valid phone number'),
  message: z.string().min(1, 'Please enter a message'),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;

'use client';

import { useState } from 'react';

interface UseFormSubmissionOptions {
  endpoint: string;
}

interface SubmissionResult {
  success: boolean;
  message: string;
}

export function useFormSubmission({ endpoint }: UseFormSubmissionOptions) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<SubmissionResult | null>(null);

  const submit = async (data: Record<string, unknown>) => {
    setIsSubmitting(true);
    setResult(null);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await response.json();

      if (response.ok) {
        setResult({ success: true, message: json.message || 'Submitted successfully!' });
      } else {
        setResult({ success: false, message: json.error || 'Something went wrong. Please try again.' });
      }
    } catch {
      setResult({ success: false, message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => setResult(null);

  return { submit, isSubmitting, result, reset };
}

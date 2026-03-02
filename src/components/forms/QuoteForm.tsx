'use client';

import { useState } from 'react';
import { quoteSchema } from '@/lib/validation';
import { useFormSubmission } from '@/hooks/useFormSubmission';
import { serviceCheckboxOptions } from '@/data/companyInfo';
import FormField from './FormField';
import FormTextarea from './FormTextarea';
import FormCheckboxGroup from './FormCheckboxGroup';
import FormSelect from './FormSelect';
import SuccessMessage from './SuccessMessage';

export default function QuoteForm() {
  const { submit, isSubmitting, result, reset } = useFormSubmission({ endpoint: '/api/quote' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    services: [] as string[],
    emailConsent: '',
  });

  const updateField = (field: string, value: string | string[]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const validation = quoteSchema.safeParse(form);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.errors.forEach((err) => {
        const field = err.path[0] as string;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    await submit(form);
  };

  if (result?.success) {
    return (
      <SuccessMessage
        message="Thank you for your quote request! We will contact you within 24 hours."
        onReset={() => {
          reset();
          setForm({ name: '', email: '', phone: '', message: '', services: [], emailConsent: '' });
        }}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-[560px] mx-auto">
      {result && !result.success && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-sm">
          {result.message}
        </div>
      )}

      <FormField label="Name" name="name" value={form.name} onChange={(v) => updateField('name', v)} error={errors.name} />
      <FormField label="Email" name="email" type="email" value={form.email} onChange={(v) => updateField('email', v)} error={errors.email} />
      <FormField label="Phone" name="phone" type="tel" value={form.phone} onChange={(v) => updateField('phone', v)} error={errors.phone} />
      <FormTextarea label="How can we help?" name="message" value={form.message} onChange={(v) => updateField('message', v)} error={errors.message} />

      <FormCheckboxGroup
        legend="Which service are you interested in?"
        options={serviceCheckboxOptions}
        selected={form.services}
        onChange={(v) => updateField('services', v)}
        error={errors.services}
      />

      <FormSelect
        label="May we email you about this?"
        name="emailConsent"
        value={form.emailConsent}
        onChange={(v) => updateField('emailConsent', v)}
        options={[
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' },
        ]}
        error={errors.emailConsent}
        helperText="You agree to receive future emails and understand you may opt-out at any time"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-primary text-white font-bold uppercase tracking-wider text-base hover:bg-primary-hover transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

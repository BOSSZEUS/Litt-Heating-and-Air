'use client';

import { useState } from 'react';
import { contactSchema } from '@/lib/validation';
import { useFormSubmission } from '@/hooks/useFormSubmission';
import FormField from './FormField';
import FormTextarea from './FormTextarea';
import SuccessMessage from './SuccessMessage';

export default function ContactForm() {
  const { submit, isSubmitting, result, reset } = useFormSubmission({ endpoint: '/api/contact' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const validation = contactSchema.safeParse(form);
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
        message="Thank you for reaching out! We will get back to you shortly."
        onReset={() => {
          reset();
          setForm({ name: '', email: '', phone: '', message: '' });
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

      <FormField label="Name" name="contact-name" value={form.name} onChange={(v) => updateField('name', v)} error={errors.name} />
      <FormField label="Email" name="contact-email" type="email" value={form.email} onChange={(v) => updateField('email', v)} error={errors.email} />
      <FormField label="Phone" name="contact-phone" type="tel" value={form.phone} onChange={(v) => updateField('phone', v)} error={errors.phone} />
      <FormTextarea label="Message" name="contact-message" value={form.message} onChange={(v) => updateField('message', v)} error={errors.message} />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-primary text-white font-bold uppercase tracking-wider text-base hover:bg-primary-hover transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

import { Metadata } from 'next';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Hero from '@/components/sections/Hero';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for Litt Heating and Air website. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
      <Hero title="Privacy Policy" size="sm" />

      <section className="section-padding">
        <div className="max-w-container mx-auto prose prose-lg">
          <p className="text-grey leading-relaxed">
            <strong>Last Updated:</strong> January 2025
          </p>

          <h2 className="text-xl font-bold text-primary uppercase tracking-wide mt-8 mb-3">
            Information We Collect
          </h2>
          <p className="text-grey leading-relaxed mb-4">
            When you visit our website or submit a form, we may collect personal
            information that you voluntarily provide, including your name, email
            address, phone number, and any messages or service preferences you
            share with us. We use this information solely to respond to your
            inquiries and provide the HVAC services you request.
          </p>

          <h2 className="text-xl font-bold text-primary uppercase tracking-wide mt-8 mb-3">
            How We Use Your Information
          </h2>
          <p className="text-grey leading-relaxed mb-4">
            The information we collect is used to respond to your service
            requests and quote inquiries, schedule appointments and provide HVAC
            services, communicate with you about your service, send promotional
            offers and updates if you have opted in, and improve our website and
            customer experience.
          </p>

          <h2 className="text-xl font-bold text-primary uppercase tracking-wide mt-8 mb-3">
            Information Sharing
          </h2>
          <p className="text-grey leading-relaxed mb-4">
            We do not sell, trade, or rent your personal information to third
            parties. We may share your information with trusted service providers
            who assist us in operating our website or conducting our business, so
            long as those parties agree to keep this information confidential.
          </p>

          <h2 className="text-xl font-bold text-primary uppercase tracking-wide mt-8 mb-3">
            Data Security
          </h2>
          <p className="text-grey leading-relaxed mb-4">
            We implement reasonable security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction. However, no method of transmission over the Internet is
            completely secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-xl font-bold text-primary uppercase tracking-wide mt-8 mb-3">
            Cookies and Tracking
          </h2>
          <p className="text-grey leading-relaxed mb-4">
            Our website may use cookies and similar tracking technologies to
            enhance your browsing experience and analyze website traffic. You can
            control cookie settings through your browser preferences.
          </p>

          <h2 className="text-xl font-bold text-primary uppercase tracking-wide mt-8 mb-3">
            Your Rights
          </h2>
          <p className="text-grey leading-relaxed mb-4">
            You have the right to request access to the personal information we
            hold about you, request corrections to inaccurate information,
            request deletion of your personal information, and opt out of
            marketing communications at any time.
          </p>

          <h2 className="text-xl font-bold text-primary uppercase tracking-wide mt-8 mb-3">
            Contact Us
          </h2>
          <p className="text-grey leading-relaxed mb-4">
            If you have any questions about this Privacy Policy or how we handle
            your personal information, please contact us at:
          </p>
          <div className="bg-grey-light rounded-lg p-6">
            <p className="text-dark font-bold">Litt Heating and Air</p>
            <p className="text-grey">424 Standiford Ave, Modesto, CA 95350</p>
            <p className="text-grey">
              Phone:{' '}
              <a
                href="tel:+12093803032"
                className="text-primary hover:underline"
              >
                (209) 380-3032
              </a>
            </p>
            <p className="text-grey">
              Email:{' '}
              <a
                href="mailto:littheatingandair@gmail.com"
                className="text-primary hover:underline"
              >
                littheatingandair@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

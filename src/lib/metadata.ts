import { Metadata } from 'next';

const BASE_URL = 'https://littheatingandair.com';

export function createMetadata({
  title,
  description,
  path = '',
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      locale: 'en_US',
      siteName: 'Litt Heating and Air',
    },
    alternates: {
      canonical: url,
    },
  };
}

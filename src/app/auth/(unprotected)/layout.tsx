import type { Metadata } from 'next';

import Container from '@/components/layout/Container';

const title = 'Authentication';
const description = 'We are The Monkeys! A blogging and educational platform.';

export const metadata: Metadata = {
  title,
  description,
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Container className='mb-20'>{children}</Container>;
}

'use client';
import Link from 'next/link';
import { LinkTo } from './styles';

const CTAButton = ({ padding }: { padding: string }) => {
  return (
    <Link href="/https://calendly.com/buildarealgreatsite/one-on-one-call?month=2025-11" style={{ textDecoration: 'none' }}>
      <LinkTo
        style={{
          padding: padding,
        }}
      >
        Book a Call
      </LinkTo>
    </Link>
  );
};

export default CTAButton;

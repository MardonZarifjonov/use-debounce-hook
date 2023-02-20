import { PropsWithChildren } from 'react';

export default function Wrapper({ children }: PropsWithChildren) {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: 'fit-content',
      }}
    >
      {children}
    </section>
  );
}

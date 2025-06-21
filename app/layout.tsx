import '../styles/global.css';
import React from 'react';
import { Analytics } from '@vercel/analytics/react'


export const metadata = {
  title: 'Itinerary App',
  description: 'Plan and organize your trips effortlessly',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
// app/layout.js

import '../globals.css';

export const metadata = {
  title: 'Parker\'s Weather',
  description: 'Weather app',
};

export default function DashboardLayout({ children }) {
    return <section>{children}</section>}
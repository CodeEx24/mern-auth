// Layout.tsx
import { Navbar } from '@/components/Navbar';
import { Toaster } from '@/components/ui/toaster';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const AuthLayout = ({ children }: Props) => {
  return (
    // Assuming you are using Tailwind CSS for styling
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex flex-1 overflow-y-auto justify-center items-center p-4">
        {children} {/* Renders the child routes */}
        <Toaster />
      </main>
    </div>
  );
};

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}

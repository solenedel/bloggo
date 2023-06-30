import Navbar from './Navbar';
import { useRouter } from 'next/router';

// @ts-ignore
export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      {router.route !== '/' ? <Navbar /> : ''}

      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}

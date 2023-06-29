import Navbar from './Navbar';

// @ts-ignore
export default function Layout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}

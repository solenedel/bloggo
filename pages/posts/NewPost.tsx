import Head from 'next/head';

import dynamic from 'next/dynamic';

const Test = dynamic(() => import('../../components/test'), { ssr: false });

function NewPost() {
  return (
    <div>
      <Head>
        <title>Bloggo | new post</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-10 bg-indigo-100">
        <h1 className="font-pathwayExtreme font-semibold text-2xl py-10">
          Create a new post with Bloggo
        </h1>
        {/* PAGE TO EDIT HERE */}
        <Test />
      </main>
    </div>
  );
}

export default NewPost;

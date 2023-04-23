import Head from 'next/head';

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
        <section className="h-screen rounded-md w-2/3">
          <form action="submit" className="flex flex-col">
            <button className="text-xl w-1/4 my-10 bg-indigo-200 p-2 font-pathwayExtreme font-semibold rounded-md hover:bg-indigo-300">
              Save changes
            </button>
            <input
              type="text"
              placeholder="Title"
              defaultValue={'My first post on Bloggo'}
              className="my-10 h-10 bg-indigo-100 font-semibold text-xl"
            />
            <textarea className="bg-white w-full h-80 border-2 border-black" />
          </form>
        </section>
      </main>
    </div>
  );
}

export default NewPost;

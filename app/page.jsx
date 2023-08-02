import Feed from "@components/Feed"

// const fetchPosts = async () => {
//   const response = await fetch("http:/localhost:3000/api/prompt");
//   const data = await response.json();

//   return data;
// };

const Home = async () => {

  // const data = await fetchPosts();
  // console.log(data);

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden"/>
        <span className="orange_gradient text-center"> AI-powered Prompts</span>
      </h1>
      <p className="desc text-center">
         Promptopia is an open-source AI prompting tool for modern world to discover, create and share prompts.
      </p>

      <Feed />
    </section>
  )
}
export default Home
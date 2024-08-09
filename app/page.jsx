import Link from "next/link";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col home">
      <h1 className="head_text text-center">
        Discover & Study
        <br className="max-md:hidden" />
        <span className="blue_gradient">
          Tools that help us in our daily lives!
        </span>
      </h1>
      <p className="desc text-center">
        Estudos sobre Google Analytics e Google Tag Manager.
      </p>
      <Link href="/results">
        <button className="blue_btn mt-10">Começar</button>
      </Link>
    </section>
  );
};

export default Home;

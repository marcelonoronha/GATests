"use client";

import Header from "@components/Header";
import ChartCards from "@components/ChartCards";

const ResultsPage = () => {
  return (
    <section className="w-full h-full px-10 flex-col flex-center">
      <Header />
      <ChartCards />
    </section>
  );
};

export default ResultsPage;

import React from "react";
import Link from "next/link";

const IndicatorsTable = () => {
  return (
    <div className="flex flex-col col-span-2 p-8 bg-white rounded-lg shadow-md">
      <div className="flex flex-row flex-between items-center">
        <span className="font-semibold text-cyan-700 uppercase tracking-widest">
          Indicadores
        </span>
      </div>
      <div className="flex m-auto text-gray-300">Em construção!</div>

      <Link
        href="/allresults"
        className="flex w-full justify-center pt-4	m-auto mb-1 text-cyan-700 font-semibold tracking-wide border-t-2 border-gray-100"
      >
        Todos os resultados da equipe
      </Link>
    </div>
  );
};

export default IndicatorsTable;

import React from "react";
import Link from "next/link";
import { CloudIcon, MoneyIcon, FilterIcon } from "@public/assets/icons";
import IconButton from "./IconButton";

const ChartCards = () => {
  return (
    <section className="h-full w-full flex-center">
      <div className="grid grid-cols-1 grid-rows-[100px_auto_minmax(100px,200px)] gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[100px_auto_minmax(100px,200px)] w-full h-full">
        {/* Card Nivel Geral */}
        <div className="h-24 flex flex-row items-center flex-between col-span-2 p-8 px-8 bg-white rounded-lg shadow-md">
          <div className="flex flex-row h-full items-center gap-2">
            <div className=" bg-green-500 rounded-full w-10 h-10 flex flex-center">
              <CloudIcon width={20} height={20} className="fill-white" />
            </div>
            <span className="font-semibold text-green-700 ">Nível Geral</span>
          </div>
          <div className="flex-center gap-1">
            <MoneyIcon width={16} height={16} className="fill-green-600" />
            <span className="text-green-600 font-semibold text-2xl pl-1">
              20.402
            </span>
            <span className="text-gray-500 font-normal">/34.034</span>
          </div>
        </div>
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
        <div className="flex flex-col row-start-1 row-end-3 col-start-3 p-8 px-8 bg-white rounded-lg shadow-md">
          <div className="flex flex-row flex-between items-center">
            <span className="font-semibold text-cyan-700 uppercase tracking-widest">
              Reincidentes
            </span>
            <Link href="/filter">
              <IconButton
                Icon={FilterIcon}
                id="home"
                className="fill-cyan-700"
              />
            </Link>
          </div>
          <div className="flex m-auto text-gray-300">Em construção!</div>

          <Link
            href="/reincidentes"
            className="flex w-full justify-center pt-4	m-auto mb-1 text-cyan-700 font-semibold tracking-wide border-t-2 border-gray-100"
          >
            Ver detalhes
          </Link>
        </div>
        <Link
          href="/exchanges"
          className="flex flex-col p-8 bg-white rounded-lg shadow-md"
        >
          <div className="flex flex-row flex-between items-center">
            <span className="font-semibold text-cyan-700 uppercase tracking-widest">
              Trocas
            </span>
          </div>
          <div className="flex m-auto text-gray-300">Em construção!</div>
        </Link>
        <Link
          href="/campaigns"
          className="flex flex-col p-8 bg-white rounded-lg shadow-md"
        >
          <div className="flex flex-row flex-between items-center">
            <span className="font-semibold text-cyan-700 uppercase tracking-widest">
              Campanhas
            </span>
          </div>
          <div className="flex m-auto text-gray-600">
            Não há campanhas ativas no momento.
          </div>
        </Link>
        <Link
          href="/shop"
          className="flex flex-col p-8 bg-white rounded-lg shadow-md"
        >
          <div className="flex flex-row flex-between items-center">
            <span className="font-semibold text-cyan-700 uppercase tracking-widest">
              Dicas
            </span>
          </div>
          <div className="flex m-auto text-gray-600">
            Não temos nenhuma dica para você, seja o primeiro a compartilhar uma
            dica com seus colegas.
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ChartCards;

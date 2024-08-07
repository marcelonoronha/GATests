"use client";

import { MoneyIcon } from "@public/assets/icons";
import { NotificationIcon } from "@public/assets/icons";
import { CalendarIcon } from "@public/assets/icons";
import { ChatIcon } from "@public/assets/icons";

const Header = () => {
  return (
    <section className="my-10 flex flex-row flex-between w-full">
      <h1 className="text-3xl font-bold text-cyan-700">Resultados</h1>
      <div className="flex flex-row divide-x-[2px] divide-gray-200">
        <div className="flex gap-2 px-6 flex-center">
          <CalendarIcon width={16} height={16} className="fill-zinc-400" />
          <span className="text-sm text-zinc-400">01 a 02 ago 24</span>
        </div>

        <div className="flex gap-2 px-6 flex-center">
          <MoneyIcon width={16} height={16} className="fill-cyan-700" />
          <span className="text-sm text-cyan-700">Saldo</span>
        </div>

        <button type="button" className="flex gap-2 flex-row px-6 items-center">
          <NotificationIcon
            width={16}
            height={16}
            className="fill-cyan-700 text-sm text-cyan-700"
          />
          <span className="text-sm text-cyan-700">Notificações</span>
        </button>

        <button type="button" className="flex gap-2 flex-row px-6 items-center">
          <ChatIcon
            width={16}
            height={16}
            className="fill-cyan-700 text-sm text-cyan-700"
          />
          <span className="text-sm text-cyan-700">Chat</span>
        </button>
      </div>
    </section>
  );
};

export default Header;

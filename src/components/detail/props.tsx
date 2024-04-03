import { database } from "@/database/detail/database";

type PartParam = {
  urlPart: string;
};

export function Props({ urlPart }: PartParam) {
  const curPart = database.find((item) => item.name === urlPart);

  return (
    <div className="w-full h-full rounded-2xl bg-teal-950 space-y-5 pt-3">
      <div className="ml-3">
        <h1 className="text-white text-2xl mb-2 font-semibold">Nomes Utilizados</h1>
        <ul className="text-zinc-300 text-sm space-y-1">
          {curPart?.props?.names.map((item, index) => (
            <li key={index} className="">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <p className="w-full border-b flex"/>
      <div className="ml-3">
        <h1 className="text-white text-2xl mb-2 font-semibold">Tratamento Superficial</h1>
        <ul className="text-zinc-300 text-sm space-y-1">
          {curPart?.props?.tratS.map((item, index) => (
            <li key={index} className="">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <p className="w-full border-b flex"/>
      <div className="ml-3">
        <h1 className="text-white text-2xl mb-2 font-semibold">Tratamento Térmico</h1>
        <ul className="text-zinc-300 text-sm space-y-1">
          {curPart?.props?.tratT.map((item, index) => (
            <li key={index} className="">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <p className="w-full border-b flex"/>
      <div className="ml-3">
        <h1 className="text-white text-2xl mb-2 font-semibold">Material</h1>
        <ul className="text-zinc-300 text-sm space-y-1">
          {curPart?.props?.material.map((item, index) => (
            <li key={index} className="">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <p className="w-full border-b flex"/>
      <div className="ml-3">
        <h1 className="text-white text-2xl mb-2 font-semibold">Notas</h1>
        <ul className="text-zinc-300 text-sm space-y-1">
          {curPart?.props?.notes.map((material, index) => (
            <li key={index} className="">
              {material}
            </li>
          ))}
        </ul>
      </div>
      <p className="w-full border-b flex"/>
    </div>
  );
}

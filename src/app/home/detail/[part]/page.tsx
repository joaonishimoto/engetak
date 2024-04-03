"use client";

// component
import { Props } from "@/components/Detail/props";

// database imports
import { database } from "@/database/detail/database";
import * as image from "@/database/detail/exports";

// next imports
import Image from "next/image";

// react imports
import { Suspense, useEffect, useState } from "react";

// icons
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

interface PartProps {
  params: {
    part: string;
  };
}

export default function Page(props: PartProps) {
  const [slide, setSlide] = useState(-1);

  const urlPart = props.params.part;
  const curPart = database.find((item) => item.name === urlPart);

  const checklistPartLength = curPart?.checklist.length;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" && slide > -1) {
        setSlide(slide - 1);
      } else if (event.key === "ArrowRight" && slide < (checklistPartLength || 0) - 1) {
        setSlide(slide + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [slide, checklistPartLength]);

  if (!checklistPartLength) {
    return null;
  }

  return (
    <main className="bg-teal-100 text-teal-950 flex flex-col w-full items-center justify-between py-20 h-screen overflow-hidden
    sm:py-0 sm:justify-center
    ">
      <div className="flex items-center justify-center text-center font-semibold h-20 px-3 pb-5
      sm:px-0 sm:h-20 sm:pb-0 sm:mt-7"
      >
        <div className="text-2xl border-teal-950/50
        sm:text-3xl"
        >
          {slide > -1 ? curPart.checklist[slide].title : "Propriedades"}
        </div>
      </div>
      <div className="flex items-center justify-center w-full py-7 
      sm:w-[calc(100%-20%)] sm:h-[600px] md:h-[700px]"
      >
        <div className="flex items-center justify-center bg-teal-950 w-full h-full shadow-[10px_10px_30px_5px_rgba(0,0,0,0.5)] 
        sm:sm:rounded-2xl"
        >
          
            {slide < 0 ? (
              <Props urlPart={urlPart} />
            ) : (
              <Suspense fallback={<div>carregando imagem..</div>}>
                <Image
                  src={image[`${urlPart}${slide}` as keyof typeof image]}
                  alt=""
                  style={{ objectFit: "contain" }}
                  className="w-full h-full"
                  onClick={() =>
                    slide < (checklistPartLength || 0) - 1 ? setSlide(slide + 1) : null
                  }
                />
              </Suspense>
            )}
          
        </div>
      </div>
      <div className="
      sm:hidden"
      >
          <button
            disabled={slide === -1}
            onClick={() => (slide > -1 ? setSlide(slide - 1) : null)}
            className="text-3xl font-bold pr-10 text-zinc-700"
          >
            <ArrowLeftCircle
              size={30}
              className={`${
                slide === -1
                  ? "text-zinc-300"
                  : "hover:-translate-x-1 transition-all duration-500 hover:text-zinc-950"
              }`}
            />
          </button>
          <button
            disabled={slide === (checklistPartLength || 0) - 1}
            onClick={() =>
              slide < (checklistPartLength || 0) - 1 ? setSlide(slide + 1) : null
            }
            className="text-3xl font-bold pl-10 text-zinc-700"
          >
            <ArrowRightCircle
              size={30}
              className={`${
                slide === (checklistPartLength || 0) - 1
                  ? "text-zinc-300"
                  : "hover:translate-x-1 transition-all duration-300 hover:text-zinc-950"
              }`}
            />
          </button>
      </div>
    </main>
  );
}

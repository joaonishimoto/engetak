import Image from "next/image";
import Link from "next/link";

import { database } from "@/database/detail/database";
import * as image from "@/database/detail/exports";


export default function Page() {

  return (
    <main className="min-h-screen bg-teal-100">
      <div className="fixed z-10 h-20 flex items-center justify-center w-[calc(100%-4rem)] bg-white shadow-sm">
        <h1 className="text-3xl text-teal-400 font-bold">Checklists</h1>
      </div>
      <div
         className="h-[calc(100%-4rem)] text-teal-600 font-semibold pt-20
        grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {database?.map((item, index) => (
          <div key={index} className="flex justify-center py-5">
            <div className="size-40 flex items-center justify-center text-center ">
              <Link  href={`/detail/${item.name}`} className="hover:-translate-y-2 transition-all duration-500">
                <div className="size-32 bg-white rounded-full m-auto mb-3">
                  <Image 
                    src={image[`${item.name}` as keyof typeof image]}
                    alt=""
                    className="rounded-full p-5"
                  />  
                </div>
                <h1 className="text-lg">
                  {item.nickname}
                </h1>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
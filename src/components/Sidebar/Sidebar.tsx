import React, { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const [collapShow, setCollapShow] = useState("hidden");
  const [subMenuCollapse, setSubMenuCollapse] = useState<string>('hidden')
  const subMenu = useRef<HTMLUListElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const router = useRouter;
  return (
    <div className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 shadow-xl bg-blue-700 py-4 md:w-64">
      <div className="md:flex-col md:min-h-full md:flex-nowrap md:justify-start md:px-0 px-3 flex flex-wrap justify-between w-full">
        <button
          className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl bg-transparent rounded border border-solid"
          type="button"
          onClick={() => setCollapShow("bg-blue-700  m-2 py-3 px-6")}
        >
          <i className="fas fa-bars"></i>
        </button>
        <Link
          href="#"
          className="md:block text-start md:pb-2 text-black text-sm uppercase font-bold p-4 px-0"
        >
          Raya Pass
        </Link>
        <div
          className={
            "md:flex md:flex-col md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 rounded " +
            collapShow
          }
        >
          <div className="md:hidden block pb-4 mb-4 border-b border-solid border-gray-200">
            <div className="flex flex-wrap">
              <div className="w-6/12">
                <Link
                  href="#"
                  className="md:block text-left md:pb-2 text-black-200 mr-0 inline-block text-sm uppercase font-bold p-4 px-0"
                >
                  Raya PASS
                </Link>
              </div>
              <div className="w-6/12 flex justify-end">
                <button
                  onClick={() => setCollapShow("hidden")}
                  type="button"
                  className="cursor-pointer text-black opacity-50 px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-separate"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
          {/* <h6 className="md:min-w-full text-white text-xs uppercase block font-bold pt-1 pb-4">
            Dashboard
          </h6> */}
          <ul className="md:min-w-full flex flex-col list-none gap-4">
            <li className="flex items-center hover:bg-orange-500 px-5 md:h-10">
              <Link
                href="#"
                className="text-xs text-white uppercase py-3 font-bold"
              >
                Dashboard
              </Link>
            </li>
            <li className="flex items-center flex-wrap hover:bg-orange-500 px-5 md:h-10">
              <Link
                href="#"
                onClick={()=> {
                    subMenu.current?.classList.toggle('hidden')
                    imgRef.current?.classList.toggle('rotate-180')
                }}
                className="text-xs text-white uppercase py-3 font-bold justify-between flex w-full"
              >
                <span className="">Inisiasi Partner</span>
                <img ref={imgRef} src="/angle-bot.svg" alt="arrow" className="transition-03 rotate-180" />
              </Link>

              <ul className="list-none hidden" ref={subMenu}>
                <li>
                  <Link href="#" className="text-xs text-white uppercase font-bold">Upload Dokumen</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

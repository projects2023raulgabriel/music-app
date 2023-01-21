import React from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="absolute w-full bottom-0 left-0">
      <footer className="w-full text-slate-400 ">
        <div className="pt-16 pb-12 text-sm border-t border-slate-900 bg-slate-800">
          <div className="px-6 mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-8 lg:grid-cols-12 justify-center pocket:grid-cols-1">
              <nav
                className="col-span-1 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-docs-dark"
              >
                <h3
                  className="mb-6 text-base font-medium text-white pocket:mb-3"
                  id="footer-docs-dark"
                >
                  Docs & help
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                  <span
                      className="transition-colors duration-300 hover:text-indigo-500 focus:text-indigo-600 cursor-pointer"
                      onClick={()=>window.location.assign("https://github.com/projects2023raulgabriel/music-app/docs")}
                    >
                      Documentation
                    </span>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-1 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-about-dark"
              >
                <h3
                  className="mb-6 text-base font-medium text-white pocket:mb-3"
                  id="footer-about-dark "
                >
                  About us
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <span
                      className="transition-colors duration-300 hover:text-indigo-500 focus:text-indigo-600 cursor-pointer"
                      onClick={()=>window.location.assign("https://github.com/projects2023raulgabriel")}
                    >
                      About us
                    </span>
                  </li>

                  <li className="mb-2 leading-6">
                    <a className="transition-colors duration-300 hover:text-indigo-500 focus:text-indigo-600">
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-1 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-get-in-touch-dark"
              >
                <h3
                  className="mb-6 text-base font-medium text-white pocket:mb-3"
                  id="footer-get-in-touch-dark"
                >
                  Get in touch
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a className="transition-colors duration-300 hover:text-indigo-500 focus:text-indigo-600">
                      Contact
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a className="transition-colors duration-300 hover:text-indigo-500 focus:text-indigo-600">
                      Support
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="py-4 text-sm border-t border-slate-900 bg-slate-700">
          <div className="container px-6 mx-auto">
            <div className="grid grid-cols-3 gap-6 md:grid-cols-8 lg:grid-cols-12">
              <div className="col-span-1 md:col-span-4 lg:col-span-6 pocket:whitespace-nowrap">
                <a
                  href="https://github.com/projects2023raulgabriel"
                  className="transition-colors duration-300 hover:text-indigo-500"
                  target={"_blank"}
                >
                  {" "}
                  <>Projects - Raul Gabriel {dayjs().year().toString()} </>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*    <!-- End Dark Theme Footer --> */}
    </div>
  );
}

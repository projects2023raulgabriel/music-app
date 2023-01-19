import React from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { Text } from "./Text";

export default function Footer() {
  return (
    <>
      <footer className="w-full text-slate-400">
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
                  <Text tid="footerFirstTitle" />
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <span
                      className="transition-colors duration-300 hover:text-indigo-500 focus:text-indigo-600 cursor-pointer"
                      onClick={() =>
                        window.location.assign(
                          "https://github.com/projects2023raulgabriel/music-app/docs"
                        )
                      }
                    >
                      <Text tid="footerFirstColumnText" />
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
                  <Text tid="footerSecondTitle" />{" "}
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <span
                      className="transition-colors duration-300 hover:text-indigo-500 focus:text-indigo-600 cursor-pointer"
                      onClick={() =>
                        window.location.assign(
                          "https://github.com/projects2023raulgabriel"
                        )
                      }
                    >
                      <Text tid="footerSecondColumnFirstText" />
                    </span>
                  </li>

                  <li className="mb-2 leading-6">
                    <a className="transition-colors duration-300 hover:text-indigo-500 focus:text-indigo-600">
                      <Text tid="footerSecondColumnSecondText" />
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
                  <Text tid="footerThirdTitle" />
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a className="transition-colors duration-300 hover:text-indigo-500 focus:text-indigo-600">
                      <Text tid="footerThirdColumnFirstText" />
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a className="transition-colors duration-300 hover:text-indigo-500 focus:text-indigo-600">
                      <Text tid="footerThirdColumnSecondText" />
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
                  <>
                    <Text tid="footerCopyright" /> {dayjs().year().toString()}{" "}
                  </>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*    <!-- End Dark Theme Footer --> */}
    </>
  );
}

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [ref, inView] = useInView({
    rootMargin: "0px",
    threshold: 1,
    initialInView: true,
    delay: 10,
  });
  return (
    <>
      {!inView && (
        <section className="top-0 sticky z-30">
          <div className="bg-slate-800 text-white text-3xl pb-3 top-0 lazy pt-3">
            <h1 className="transition-colors duration-300 hover:text-indigo-500 focus:text-indigo-600 text-center">
              <NavLink to="/"> Home </NavLink>
            </h1>
          </div>
        </section>
      )}
      <section className="default top" ref={ref}>
        <div className="bg-slate-800 text-white text-3xl pb-3">
          <h1 className="transition-colors duration-300 hover:text-indigo-500 focus:text-indigo-600 text-center">
            <Link to="/" className="items-center justify-center"> Home </Link>
          </h1>
        </div>
      </section>
    </>
  );
};

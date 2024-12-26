import React from "react";
import { MyContext } from "./App";
import { useContext } from "react";
import Logo from "./assets/logo.png";

const SkeletonCard = () => (
  <div className="min-w-xl px-8 bg-gray-200 border border-gray-300 rounded-lg shadow animate-pulse py-4">
    <div className="rounded-t-lg min-w-[120px] bg-gray-300 h-[120px] mx-auto"></div>
    <div className="p-5">
      <div className="h-5 bg-gray-300 rounded mb-3 max-w-[80%]"></div>
      <div className="h-4 bg-gray-300 rounded mb-3 max-w-[60%]"></div>
      <div className="h-8 bg-gray-400 rounded max-w-[50%]"></div>
    </div>
  </div>
);

const Todos = () => {
  const { todos, setTodos, setSkip, skip } = useContext(MyContext);

  const handleClick = () => {
    setTodos([]);
    setSkip(skip + 10);
  };

  return (
    <section>
      <div className="flex flex-wrap gap-7 px-4 py-11">
        {todos.length > 0
          ? todos.map((todo) => (
              <div
                key={todo.id}
                className="max-w-xl px-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="#">
                  <img
                    className="rounded-t-lg max-w-[120px]"
                    src={Logo}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-[20px] font-bold tracking-tight text-gray-900 dark:text-white truncate max-w-[60px]">
                      {todo.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    ${todo.price}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))
          : // Render skeletons when todos are empty
            [...Array(10)].map((_, index) => <SkeletonCard key={index} />)}
      </div>
      <div className="text-center w-full">
        <button
          onClick={handleClick}
          className="px-4 my-2 text-white bg-orange-500 rounded hover:bg-orange-600"
        >
          Fetch Next
        </button>
      </div>
    </section>
  );
};

export default Todos;

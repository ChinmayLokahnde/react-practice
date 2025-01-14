import React from 'react';

export function Landing() {
  const handleClick = () => {
    
  };

  return (
    <div>
      <section className="text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
              Get stylish with
              <span className="sm:block">Streets Wear</span>
            </h1>
            <div className=" mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              <p className="text-black">
                A modern street style clothing brand that helps to find your Street style in modern and minimalistic styling
              </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button onClick={handleClick} className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium focus:outline-none focus:ring active:text-opacity-75 sm:w-auto" href="#">
                Login
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
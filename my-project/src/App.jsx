import React from 'react';

const App = () => {
  return (
    <div>
      <nav className="bg-red-500 p-4 text-white">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">Kalvium</div>
          <div className="flex items-center">
            <a href="#" className="mr-4 hover:text-red-300">About Us</a>
            <a href="#" className="mr-4 hover:text-red-300">Contacts</a>
            <a href="#" className="hover:text-red-300">Courses</a>
            <button className="ml-4 px-4 py-2 bg-white text-blue-500 rounded-full hover:bg-black-100 hover:text-red-700">Login</button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto mt-5 px-2">
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
          Button One
        </button>

        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded my-5" role="alert">
          <strong className="font-bold">Alert!</strong>
          <span className="block sm:inline"> This is awesome!</span>
        </div>

        <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
          <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" className="h-12 w-12" />
          <div className="ml-6 pt-1">
            <h4 className="text-2xl text-gray-900">Kalvium Store</h4>
            <p className="text-base text-gray-600">You have a new course!</p>
          </div>
        </div>

        <footer className="bg-gray-200 text-center lg:text-left mt-10 p-4">
          <div className="text-gray-700">
            <p className="text-center">2021 Copyright: <a className="text-red-500" href="https://kalvium.com/">Kalvium</a></p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
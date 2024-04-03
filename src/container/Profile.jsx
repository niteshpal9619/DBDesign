import React from "react";

function Profile() {
  return (
    <>
      <div>
        <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden">
          <div className="px-6 py-4">
            <h2 className="text-xl font-semibold mb-2 text-center">Account</h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="company"
              >
                Company
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                id="company"
                type="text"
                placeholder="Enter your company"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-center">
              <button className="w-1/2 bg-black-500 text-red py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 border border-black">
                Save
              </button>
              <button className="w-1/2 m-1 bg-black-500 text-red py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:bg-blue-600 border border-black">
                Close Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

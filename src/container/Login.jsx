import React,{useState} from "react";

function Login() {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="max-w-md mx-auto my-20">
      <div className="flex justify-center mt-8">
        <button
          className={`mr-4 px-4 py-2 rounded-t-lg focus:outline-none ${
            activeTab === 'login' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
          }`}
          onClick={() => handleTabChange('login')}
        >
          Login
        </button>
        <button
          className={`mr-4 px-4 py-2 rounded-t-lg focus:outline-none ${
            activeTab === 'register' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
          }`}
          onClick={() => handleTabChange('register')}
        >
          Register
        </button>
      </div>

      <div className="bg-white rounded-b-lg shadow-lg p-8 mt-2">
        {activeTab === 'login' && (
          <form>
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
            {/* Login form inputs */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input type="email" id="email" className="form-input rounded-lg w-full border border-solid border-gray-500 p-2" placeholder="Enter your email" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input type="password" id="password" className="form-input rounded-lg w-full border border-solid border-gray-500 p-2" placeholder="Enter your password" />
            </div>
            <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg w-full">Login</button>
            <p className="text-sm mt-4 text-center"></p>
            <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg w-full">Login with Google</button>
          </form>
        )}

        {activeTab === 'register' && (
          <form>
            <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
            {/* Signup form inputs */}
            <div className="mb-4">
              <label htmlFor="newEmail" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input type="email" id="newEmail" className="form-input rounded-lg w-full border border-solid border-gray-500 p-2" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
              <label htmlFor="newPassword" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input type="password" id="newPassword" className="form-input rounded-lg w-full border border-solid border-gray-500 p-2" placeholder="Enter your password" />
            </div>
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
              <input type="password" id="confirmPassword" className="form-input rounded-lg w-full border border-solid border-gray-500 p-2" placeholder="Confirm your password" />
            </div>
            <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg w-full">Register</button>
            <p className="mt-4"></p>
            <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg w-full">Register with Google</button>
          </form>
        )}
      </div>
    </div>
    </>
  );
}

export default Login;

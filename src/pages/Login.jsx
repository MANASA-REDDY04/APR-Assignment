import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="
      min-h-screen flex justify-center items-center 
      bg-gradient-to-br from-indigo-100 via-white to-blue-100
      px-4
    ">
      <div className="
        w-full max-w-md 
        bg-white/80 backdrop-blur-md 
        p-8 rounded-3xl shadow-lg border border-gray-100
      ">

        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          APR Hub Login
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="
                w-full px-4 py-2 rounded-lg border border-gray-200 
                focus:outline-none focus:ring-2 focus:ring-indigo-200
              "
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="
                w-full px-4 py-2 rounded-lg border border-gray-200 
                focus:outline-none focus:ring-2 focus:ring-indigo-200
              "
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="
              w-full py-3 bg-gradient-to-r 
              from-indigo-400 to-blue-400 
              text-white font-semibold rounded-lg 
              shadow-md hover:shadow-xl transition
            "
          >
            Login
          </button>
        </form>

      </div>
    </div>
  );
};

export default Login;

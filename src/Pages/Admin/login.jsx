

function Login() {
  return (
    <div className="pic-bg w-full h-screen flex justify-center items-center bg-cover bg-center relative">
    {/* Background Decoration */}
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900 via-purple-900 to-black opacity-50 z-0"></div>

    {/* Login Container */}
    <div className="w-[400px] h-auto backdrop-blur-md rounded-lg p-6 flex flex-col items-center shadow-lg bg-white/10 z-10">
      {/* Title */}
      <h1 className="text-4xl font-bold text-white mb-8">Login</h1>

      {/* Email Input */}
      <input
        type="email"
        placeholder="Enter your email address"
        className="w-full bg-transparent border border-white text-white placeholder:text-gray-300 py-3 px-4 rounded-md mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
        defaultValue={''}
        onChange={() => {
          
        }}
      />

      {/* Password Input */}
      <input
        type="password"
        placeholder="Enter your password"
        className="w-full bg-transparent border border-white text-white placeholder:text-gray-300 py-3 px-4 rounded-md mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
        defaultValue={''}
        onChange={() => {
          
        }}
      />

      {/* Login Button */}
      <button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl mb-4"
        onClick={() => {
          
        }}
      >
        Login
      </button>

      {/* Sign Up Button */}
      <button
        className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl"
        onClick={() => {
          // Navigate to the Sign Up page
        }}
      >
        Sign Up
      </button>
    </div>
  </div>
  )
}

export default Login
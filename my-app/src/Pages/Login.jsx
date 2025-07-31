import LoginForm from "../components/Auth/LoginForm"; 

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome Back</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;

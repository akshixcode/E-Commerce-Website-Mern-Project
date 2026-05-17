"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/app/store/Hooks";
import { loginUser } from "@/app/store/Slices/authSlice";

type FormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const dispatch = useAppDispatch();
  const onSubmit = async (data: any) => {

    const res: any = await dispatch(loginUser(data));

    if (res.meta.requestStatus === "fulfilled") {

      if (res.payload.user.role === "admin") {
        router.push("/dashboard");
      } else {
        router.push("/");
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-[500px] rounded-2xl bg-white p-8 shadow-xl">
        <h2 className="mb-6 text-center text-3xl font-bold">
          Login
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          {/* EMAIL */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",

                pattern: {
                  value:
                    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email",
                },
              })}
              className="w-full rounded-lg border p-3 outline-none focus:border-black"
            />

            {errors.email && (
              <p style={{ color: "red", marginTop: "5px" }}>
                {errors.email.message}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",

                minLength: {
                  value: 6,
                  message:
                    "Password must be at least 6 characters",
                },
              })}
              className="w-full rounded-lg border p-3 outline-none focus:border-black"
            />

            {errors.password && (
              <p style={{ color: "red", marginTop: "5px" }}>
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-black py-3 text-white hover:bg-gray-800"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
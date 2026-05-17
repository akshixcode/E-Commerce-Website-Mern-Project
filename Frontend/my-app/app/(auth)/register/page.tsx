"use client";

import { useAppDispatch } from "@/app/store/Hooks";
import { signupUser } from "@/app/store/Slices/authSlice";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const SignupPage = () => {
type FormData = {
  name: string;
  email: string;
  password: string;
};

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<FormData>()
  console.log(errors);
  const dispatch = useAppDispatch();

  const router = useRouter();

  const onSubmit = async (data: any) => {
    const res: any = await dispatch(signupUser(data));

    if (res.payload.success === true) {
      router.push("/login");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-[500px] rounded-2xl bg-white p-8 shadow-xl">
        <h2 className="mb-6 text-center text-3xl font-bold">
          SignUp
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          {/* NAME */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", {
                required: "Name is required",
              })}
              className="w-full rounded-lg border p-3 outline-none focus:border-black"
            />

            {errors.name && (
              <p className="text-red-500">
                {String(errors.name.message)}
              </p>
            )}
          </div>

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
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message as string}
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
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message as string}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-black py-3 text-white transition hover:bg-gray-800"
          >
            Signup
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
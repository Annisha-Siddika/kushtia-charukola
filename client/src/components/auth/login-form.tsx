"use client";

import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

import { LoginRequest } from "@/types";
import { useAuth } from '@/hooks/auth/use-auth';

export default function LoginForm() {
  const searchParams = useSearchParams();
  const { login, isLoading } = useAuth();
  const [formData, setFormData] = useState<LoginRequest>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(formData);
    } catch {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  const handleGoogleLogin = () => {
    toast.error("Google login not implemented yet");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden bg-kc-dark">
      {/* Form Side */}
      <div className="flex flex-col w-full md:w-1/2 p-4 md:p-8">
        <Link href="/" className="mb-8">
          <Image
            src="/images/kc-logo.png"
            alt="Sign Up logo"
            width={100}
            height={100}
            className="object-contain w-20"
          />
        </Link>

        <div className="flex flex-1 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md space-y-6"
          >
            <h2 className="text-3xl font-bold text-kc-orange text-center">
              Login to your account
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="text-sm text-gray-600">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md hover:shadow-kc-green hover:shadow-md focus:ring-2 focus:ring-kc-orange"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="password" className="text-sm text-gray-600">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md hover:shadow-kc-green hover:shadow-md focus:ring-2 focus:ring-kc-orange"
                  required
                  disabled={isLoading}
                />
                <div className="flex justify-end mt-1">
                  <Link
                    href="/forgot-password"
                    className="text-sm text-kc-orange hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-kc-orange text-white py-2 font-bold rounded-md hover:bg-kc-green transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </form>

            <p className="text-sm text-center text-gray-500">
              Don&apos;t have an account?{" "}
              <Link
                href={`/register${
                  searchParams.get("from")
                    ? `?from=${searchParams.get("from")}`
                    : ""
                }`}
                className="text-kc-orange font-medium hover:underline"
              >
                Sign up
              </Link>
            </p>

            <div className="relative text-center text-gray-400">
              <span className="absolute left-0 top-1/2 w-full border-t border-gray-200"></span>
              <span className="bg-kc-dark px-4 relative z-10 text-sm">or</span>
            </div>

            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="flex items-center justify-center w-full border border-gray-300 py-2 px-4 rounded-lg text-gray-300 hover:bg-gray-700 transition mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FcGoogle className="mr-2 text-xl" />
              Continue with Google
            </button>
          </motion.div>
        </div>
      </div>

      {/* Image Side */}
      <div className="relative w-full md:w-1/2 hidden md:flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image
            src="/images/login-image.jpg"
            alt="Login image"
            width={700}
            height={700}
            className="object-cover w-full h-full"
          />
        </motion.div>

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-50%" }}
          transition={{ duration: 2, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent via-yellow-200 to-transparent opacity-20"
        />
      </div>
    </div>
  );
}

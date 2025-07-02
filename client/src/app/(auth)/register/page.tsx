"use client";

import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { RegisterRequest } from "@/types";
import { useAuth } from '@/hooks/auth/use-auth';

export default function SignupForm() {
  const { register, isLoading } = useAuth();
  const [formData, setFormData] = useState<RegisterRequest>({
    email: "",
    password: "",
    confirmPassword: "",
    profile: {
      firstName: "",
      lastName: "",
      phone: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Handle nested profile fields
    if (name.startsWith("profile.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        profile: {
          ...prev.profile,
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    await register(formData);
  };

  const handleGoogleSignup = () => {
    toast.error("Google sign up not implemented yet");
  };

 return (
    <div className="flex flex-col md:flex-row w-full h-screen overflow-hidden bg-kc-dark">
      {/* Form Side */}
      <div className="flex flex-col w-full md:w-1/2 p-4 md:p-8 overflow-y-auto scrollbar-hide">
        <Link href="/" className="mb-8 shrink-0">
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
              Create your account
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="text-sm text-gray-600">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    name="profile.firstName"
                    value={formData.profile.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md hover:shadow-kc-green hover:shadow-md focus:ring-2 focus:ring-kc-orange"
                    required
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="text-sm text-gray-600">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    name="profile.lastName"
                    value={formData.profile.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md hover:shadow-kc-green hover:shadow-md focus:ring-2 focus:ring-kc-orange"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="text-sm text-gray-600">
                  Phone (Optional)
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="profile.phone"
                  value={formData.profile.phone}
                  onChange={handleChange}
                  placeholder="+1234567890"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md hover:shadow-kc-green hover:shadow-md focus:ring-2 focus:ring-kc-orange"
                  disabled={isLoading}
                />
              </div>

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
                  autoComplete="new-password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md hover:shadow-kc-green hover:shadow-md focus:ring-2 focus:ring-kc-orange"
                  required
                  disabled={isLoading}
                  minLength={8}
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="text-sm text-gray-600"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  autoComplete="new-password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md hover:shadow-kc-green hover:shadow-md focus:ring-2 focus:ring-kc-orange"
                  required
                  disabled={isLoading}
                  minLength={8}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-kc-orange text-white py-2 font-bold rounded-md hover:bg-kc-green transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Signing up..." : "Sign Up"}
              </button>
            </form>

            <p className="text-sm text-center text-gray-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-kc-orange font-medium hover:underline"
              >
                Login
              </Link>
            </p>

            <div className="relative text-center text-gray-400">
              <span className="absolute left-0 top-1/2 w-full border-t border-gray-200"></span>
              <span className="bg-kc-dark px-4 relative z-10 text-sm">or</span>
            </div>

            <button
              onClick={handleGoogleSignup}
              className="flex items-center justify-center w-full border border-gray-300 py-2 px-4 rounded-lg text-gray-300 hover:bg-gray-700 transition mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FcGoogle className="mr-2 text-xl" />
              Sign up with Google
            </button>
          </motion.div>
        </div>
      </div>

     {/* Image Side */}
<div className="hidden md:flex w-full md:w-1/2 h-screen items-center justify-center relative overflow-hidden">
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 2, ease: "easeOut" }}
    className="relative w-[500px] 2xl:w-[700px] aspect-[4/3]"
  >
    <Image
      src="/images/login-image.jpg"
      alt="Signup image"
      fill
      className="object-cover rounded-3xl"
    />
  </motion.div>
  <Toaster/>

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
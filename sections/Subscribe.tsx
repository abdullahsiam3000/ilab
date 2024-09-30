"use client";

import SectionHeading from "@/components/SectionHeading";
import TopHeading from "@/components/TopHeading";
import React, { useEffect, useState } from "react";
import warning from "@/assets/icons/warning.svg";
import Image from "next/image";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setError("Your mail is not correct");
      setSuccess("");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSuccess("Subscription successful! Thank you for subscribing.");
      setEmail("");
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="mt-36">
      <div className="wrapper">
        <div className="bg-[#FFF7EB] p-10 ">
          <div className="flex flex-col items-center mb-10">
            <TopHeading text="To get More Up to Date" both />

            <SectionHeading text="Subscribe Using Mail" />
            <p className="w-[720px] text-center text-sm font-normal">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="w-[720px] relative">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="outline-none py-3 px-6 rounded-full font-normal text-[16px] flex items-center gap-2 w-full"
                />
                <button
                  className={`border border-[#333333] py-1 px-6 rounded-full font-normal text-[16px] flex items-center gap-2 height-[40px] absolute top-[8px] right-[9px]
                  ${
                    loading
                      ? "bg-[#FBB03B] cursor-not-allowed text-white border-[#FBB03B]"
                      : "hover:bg-[#FBB03B] hover:text-white transition-all duration-300 hover:border-[#FBB03B]"
                  }`}
                  disabled={loading}
                >
                  <span>{loading ? "Submitting..." : "Subscribe"}</span>
                </button>
              </form>

              {error && (
                <div className="flex items-center justify-center gap-2">
                  <Image src={warning} alt="warning" className="mt-1" />
                  <p className="mt-2 text-rose-500 self-start w-[720px]">
                    {error}
                  </p>
                </div>
              )}
              {success && (
                <p className="mt-2 text-green-500 self-start w-[720px]">
                  {success}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

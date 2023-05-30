"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Home = () => {
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");

  const createFutureUser = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    console.log(email);

    try {
      const response = await fetch("api/user/new", {
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
      });
      if (response.ok) {
        alert(
          "Thanks for your patience. We are working hard to fix this issue. You'll be notified as soon as possible!"
        );
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="w-full h-full">
      <div className="-z-10 fixed w-full h-full">
        <Image
          src="/assets/images/bg.jpg"
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="h-[100vh] flex flex-col justify-center px-10 lg:pl-28 text-white">
        <h1 className="w-full md:w-1/2 pop_text text-5xl lg:text-7xl">
          Ciaoo is
          <br />
          over capacity
        </h1>
        <p className="w-full md:w-1/2 sm:text-xl mt-10 mb-5">
          We're doing everything we can to help you book your plane tickets at
          the best possible price.{" "}
          <span className="font-bold">We'll be back soon.</span>
        </p>
        <p className="w-full md:w-5/12 text-base sm:text-xl mb-10">
          Leave us your contact details and we'll let you know as soon as the
          site is up and running again.
        </p>
        <form onSubmit={createFutureUser} className="flex drop-shadow-lg">
          <input
            type="text"
            placeholder="Enter your email"
            className="p-5 text-ciaoo-black rounded-l-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            disabled={submitting}
            className="p-5 bg-ciaoo-medium-blue rounded-r-lg flex"
          >
            <span className="pr-2 hidden sm:block">Get notified</span>
            <Image
              src="/assets/icons/chevron-small-right-white.svg"
              width={24}
              height={24}
              alt="chevron-small-right-white"
            />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Home;

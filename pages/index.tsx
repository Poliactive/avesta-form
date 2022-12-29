import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Your University</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="bg-white font-Inter">
        <div className="container mx-auto flex h-[100vh] flex-col items-center justify-center px-4 py-4">
          <h1 className="mb-6 text-xl font-semibold text-[#eb9a64]">
            YourUniversity
          </h1>
          <p className="mx-auto mb-5 w-full bg-orange-50 py-4 text-center">
            Alumni Donation Form
          </p>
          <form>
            <div className="mb-4 grid grid-cols-2 gap-x-6">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="mb-2 text-xs">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="rounded-md border border-gray-400 py-2 px-4 outline-none placeholder:text-sm focus:border-amber-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName" className="mb-2 text-xs">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="rounded-md border border-gray-400 py-2 px-4 outline-none placeholder:text-sm focus:border-amber-500"
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col">
              <label htmlFor="email" className="mb-2 text-xs">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className="rounded-md border border-gray-400 py-2 px-4 outline-none placeholder:text-sm focus:border-amber-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phoneNumber" className="mb-2 text-xs">
                Phone Number
              </label>
              <input
                type="number"
                id="phoneNumber"
                placeholder="Phone Number"
                className="rounded-md border border-gray-400 py-2 px-4 outline-none placeholder:text-sm focus:border-amber-500"
              />
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Home;

import AccountCard from "../components/AccountCard";
import { useState } from "react";
import axios from "axios";
import AddAccount from "../components/AddAccount";
import Layout from "../components/Layout";
import { AdjustmentsHorizontalIcon, BellIcon } from "@heroicons/react/24/solid";

export default function Index({ the_accounts }) {
  console.log(the_accounts);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout>
      <section className="lg:grid grid-cols-6 border">
        <div className="bg-orange-50 col-span-4 px-6 py-8 border-r border-b border-black">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <div className="flex items-center gap-5">
              <button>
                <AdjustmentsHorizontalIcon width={20} />
              </button>
              <button>
                <BellIcon width={20} />
              </button>
            </div>
          </div>
          <div className="lg:grid grid-cols-6 gap-10 mt-10">
            <section className="col-span-2 flex gap-10 flex-col">
              <div>
                <p className="text-4xl font-bold">S/. 52,520.00</p>
                <p className="text-lg text-gray-500 font-medium mt-5">
                  Your money: S/. 10,52.0
                </p>
              </div>

              <div className="flex gap-5">
                <button className="font-semibold bg-black text-white font-base py-3 w-full">
                  Add account
                </button>
                <button
                  className="font-semibold border-2 text-base border-black py-3 w-full"
                  onClick={() => setIsOpen(true)}
                >
                  Add account
                </button>
              </div>
            </section>
            <section className="col-span-4">
              <div className="flex justify-end items-end flex-col gap-4">
                {the_accounts?.map((account, index) => (
                  <AccountCard
                    key={account.id}
                    account={account}
                    index={index}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
        <div className="col-span-2"></div>
      </section>
      <section className="">a</section>
      {isOpen ? <AddAccount isOpen={isOpen} setIsOpen={setIsOpen} /> : null}
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const { data } = await axios.get(
    "https://strapi-production-b003.up.railway.app/api/accounts?populate=*&pagination[start]=0&pagination[limit]=2"
  );
  console.log(data);
  return {
    props: {
      the_accounts: data.data,
    },
  };
};

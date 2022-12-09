import Head from "next/head";
import AccountCard from "../components/AccountCard";
import AddSpent from "../components/AddSpent";
import Modal from "../components/Modal";
import { useState, useEffect } from "react";
import axios from "axios";
import AddAcount from "../components/AddAccount/AddAccount";

export default function Index({ the_accounts }) {
  console.log(the_accounts);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:w-11/12 mx-auto w-full py-8">
      <Head>
        <title>Accounts - Tiendita</title>
      </Head>
      <main>
        <div>
          <button
            className="border border-black py-3 px-6"
            onClick={() => setIsOpenAccountModal(true)}
          >
            Add account
          </button>
        </div>
        <div className="mt-10">
          {the_accounts?.map((account) => (
            <AccountCard key={account.id} account={account} />
          ))}
        </div>
        {isOpen ? (
          <AddAcount
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        ) : null}
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const { data } = await axios.get(
    "https://strapi-production-b003.up.railway.app/api/accounts?populate=*"
  );
  console.log(data);
  return {
    props: {
      the_accounts: data.data,
    },
  };
};

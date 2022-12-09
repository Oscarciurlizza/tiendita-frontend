import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import AddSpent from "../../components/AddSpent";
import Spent from "../../components/Spent";

export default function Account({ id, account, spents, product }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(0);
  async function deleteAccount() {
    if (confirm("Do you really want to delete this account?")) {
      await axios.delete(
        `https://strapi-production-b003.up.railway.app/api/accounts/${id}`
      );
      router.push("/");
    }
  }

  useEffect(() => {
    function getTotal() {
      const sum = spents.map(spent => {
        return spent.attributes.quantity
      })
      const total = sum.reduce((acc, val) => acc + val, 0);
      setTotal(total);
    }
    getTotal();
  }, [total]);



  return (
    <section className="max-w-2xl mx-auto">
      <div className="w-2/6 flex flex-col bg-black text-white p-2">
        <p>name: {account?.attributes.name}</p>
        <p>customer: {account?.attributes.customer}</p>
        <button className="bg-blue-500" onClick={() => setIsOpen(true)}>
          Add spent
        </button>
        <button className="bg-red-500 mt-2" onClick={() => deleteAccount(id)}>
          Delete account
        </button>
      </div>
      <div className="mt-10">
        {isOpen ? (
          <AddSpent isOpen={isOpen} setIsOpen={setIsOpen} account={account} />
        ) : null}
      </div>
      <div className="mt-10">
        {!spents || spents?.length <= 0
          ? "No spents yet"
          : spents?.map((spent, i) => (
            <Spent key={spent.id} spent={spent} product={product} />
          ))}
          {
            total
          }
      </div>
    </section>
  );
}

export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  const account = await axios.get(
    `https://strapi-production-b003.up.railway.app/api/accounts/${id}?populate=*`
  );
  const product = await axios.get(
    "https://strapi-production-b003.up.railway.app/api/products"
  );
  const {
    data: {
      attributes: { spents },
    },
  } = account.data;
  console.log(spents);
  return {
    props: {
      id,
      account: account.data.data,
      spents: spents.data,
      product: product.data.data,
    },
  };
};

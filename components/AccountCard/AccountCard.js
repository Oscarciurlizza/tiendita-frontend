import Link from "next/link";
import { useState, useEffect } from "react";
import { formatMoney } from "../../utils";

const AccountCard = ({ account, index }) => {
  const [total, setTotal] = useState(0);
  console.log(account);
  const { id } = account;
  const { name, customer, spents } = account.attributes;

  useEffect(() => {
    function getTotal() {
      const sum = spents.data.map((spent) => {
        return spent.attributes.quantity;
      });
      const total = sum.reduce((acc, val) => acc + val, 0);
      setTotal(formatMoney(total));
    }
    getTotal();
  }, [total]);

  return (
    <div
      className={`${
        index === 1 ? "bg-yellow-50" : "bg-blue-100 "
      } border-2 border-b-8 border-r-8  rounded-md border-black text-black px-6 py-6 sm:w-3/5 w-full sm:mt-0 mt-10`}
    >
      <Link href={`accounts/${id}`} className="flex flex-col gap-3">
        <p className="text-4xl font-bold">{total}</p>
        <p className="text-xl font-bold">{customer}</p>
      </Link>
    </div>
  );
};

export default AccountCard;

import Link from "next/link";

const AccountCard = ({ account }) => {
  const { id } = account;
  const { name, customer, spents } = account.attributes;

  return (
    <div className="bg-black text-white p-4">
      <Link href={`accounts/${id}`}>
        <span className="block">{name}</span>
        <p>{customer}</p>
      </Link>
    </div>
  );
};

export default AccountCard;

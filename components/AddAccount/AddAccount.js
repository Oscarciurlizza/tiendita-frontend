import { useState, useEffect } from "react";
import Modal from "../Modal";
import axios from "axios";
import { Formik, Form, Field } from "formik";

export default function AddAccount({ isOpen, setIsOpen }) {
  const [customer, setCustomer] = useState(null);

  async function addAccount(values) {
    await axios.post(
      "https://strapi-production-b003.up.railway.app/api/accounts",
      {
        data: {
          name: values.name,
          customer: values.customer,
        },
      }
    );
  }

  return (
    <Modal title="Create an account 😎" isOpen={isOpen} setIsOpen={setIsOpen}>
      <Formik
        initialValues={initialValues()}
        onSubmit={async (values) => {
          setIsOpen(false);
          const res = await addAccount(values);
        }}
      >
        <Form>
          <div className="mt-4">
            <label className="text-sm block">Name of account</label>
            <Field
              type="text"
              name="name"
              className="border border-black mt-3 p-1"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm block">Customer</label>

            <Field
              type="text"
              name="customer"
              className="border border-black mt-3 p-1"
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Add account !
            </button>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
}

function initialValues() {
  return {
    name: "",
    customer: "",
  };
}

import axios from "axios";
import Modal from "../Modal";
import { Formik, Form, Field } from "formik";
import { data } from "autoprefixer";

export default function AddSpent({ isOpen, setIsOpen, account }) {

  async function addSpent(values) {
    await axios.post("https://strapi-production-b003.up.railway.app/api/spents?populate=*",
      {
        data: {
          name: values.name,
          quantity: values.quantity,
          article: values.article,
          account: account

        }
      }
    );
  }

  return (
    <Modal title="Add spent" isOpen={isOpen} setIsOpen={setIsOpen}>
      <Formik
        initialValues={initialValues()}
        onSubmit={async (values) => {
          setIsOpen(false);
          const res = await addSpent(values);
        }}
      >
        <Form>
          <div className="mt-4">
            <label className="text-sm block">Name of spent</label>
            <Field
              type="text"
              name="name"
              className="border border-black mt-3 p-1"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm block">Quantity </label>

            <Field
              type="number"
              name="quantity"
              className="border border-black mt-3 p-1"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm block">Article </label>

            <Field
              type="text"
              name="article"
              className="border border-black mt-3 p-1"
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Add spent !
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
    quantity: "",
    article: "",
  };
}

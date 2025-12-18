"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const schema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email().required("Required"),
});

export default function ContactForm() {
  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={schema}
      onSubmit={async (values, { resetForm }) => {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(values),
            }
          );

          if (!response.ok) {
            throw new Error("Something went wrong");
          }

          toast.success("Form submitted successfully!");
          resetForm();
        } catch (error) {
          toast.error("Submission failed!");
        }
      }}
    >
      <Form className="space-y-4 max-w-md">
        <div>
          <Field name="name" placeholder="Name" className="border p-2 w-full" />
          <ErrorMessage name="name" component="p" className="text-red-500" />
        </div>
        <div>
          <Field
            name="email"
            placeholder="Email"
            className="border p-2 w-full"
          />
          <ErrorMessage name="email" component="p" className="text-red-500" />
        </div>

        <button className="bg-black text-white px-4 py-2 rounded">
          Submit
        </button>
      </Form>
    </Formik>
  );
}

import Link from "next/link";
import React from "react";
import MainLayout from "../../components/layouts/MainLayout";

const Contact = () => {
  return (
    <>
      <MainLayout>
        <h1 className={"title"}>Contact</h1>
        <h1 className={"subTitle"}>
          Ir a <Link href="/">Home</Link>
        </h1>
        <p className={"description"}>
          Get started by editing <code className={"code"}>pages/contact/index.js</code>
        </p>
      </MainLayout>
    </>
  );
};

export default Contact;

import Link from "next/link";
import MainLayout from "../../components/layouts/MainLayout";

function PricingPage() {
  return (
    <>
      <MainLayout>
        <h1 className={"title"}>Pricing Page</h1>

        <h1 className={"subTitle"}>
          Ir a <Link href="/about">About</Link>
        </h1>

        <p className={"description"}>
          Get started by editing <code className={"code"}>pages/pricing/index.js</code>
        </p>
      </MainLayout>
    </>
  );
}

export default PricingPage;

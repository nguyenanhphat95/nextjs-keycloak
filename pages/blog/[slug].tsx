import Link from "next/link";
import React from "react";
import Layout from "../../components/layouts/layout";
import Sidebar from "../../components/layouts/sidebar";

export default function BlogDetail() {
  return (
    <section>
      <a>BlogDetail</a>
    </section>
  );
}

BlogDetail.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};

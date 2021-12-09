import Link from "next/link";
import React from "react";
import Layout from "../../components/layouts/layout";
import Sidebar from "../../components/layouts/sidebar";

export default function Blog() {
  return (
    <section>
      <h2>Blog</h2>
      <Link href="/blog/1">
        <a>Blog detail</a>
      </Link>
    </section>
  );
}

Blog.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};

import React from "react";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/system/createTheme";
import Layout from "components/layouts/layout";
import Sidebar from "components/layouts/sidebar";

createTheme();
const useStyles = makeStyles((theme: ThemeOptions) => ({
  root: {
    color: theme?.palette?.primary.main,
  },
  test: {
    color: theme?.palette?.secondary.main,
  },
}));

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      Home page
      <h2 className={classes.test}>test</h2>
    </section>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    "https://598d9b34923475001107c298.mockapi.io/cources"
  );
  const posts: any[] = await res.json();
  return {
    props: {
      posts,
    },
  };
};

Home.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/Layout";
import Header from "../components/home/Header";

export default function Home() {
  return (
    <Layout title='Home'>
      <Header />
      <section>
        <Link href='/notes'>
          <a>Notes</a>
        </Link>
      </section>
    </Layout>
  );
}

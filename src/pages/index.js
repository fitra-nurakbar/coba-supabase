import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { supabase } from "../utils/supabaseClient";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/Layout";
import Button from '@mui/material/Button';

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("smoothies").select();

      if (error) {
        setError("Error");
        setData(null);
      }
      if (data) {
        setData(data);
        setError(null);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout title="Home">
    <section>
      {error && <h1>Error | Doesnt exist</h1>}
      <h1>Hello World</h1>
      <ul>
        {data &&
          data.map((smoothie) => <li key={smoothie.id}>{smoothie.title} {smoothie.rating}</li>)}
      </ul>
      <Link href='post/20'>
        <Button className={styles.button} variant="contained">Post test</Button>
      </Link>
    </section>
    </Layout>
  );
}

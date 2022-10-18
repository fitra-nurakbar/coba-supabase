import React, { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "../../utils/supabaseClient";
import styles from "../../styles/Note.module.css";
import Link from "next/link";
import Layout from "../../components/Layout";
import Note from "../../components/home/Note";
import Header from "../../components/home/Header";

export default function Notes() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const { data, error } = await supabase.from("smoothies").select();

      if (error) {
        setError("Error");
        setData(null);
      }
      if (data) {
        setData(data);
        setError(null);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout title='Home'>
      <Header />
      <section>
        {loading && <h1>Looading Bosku...</h1>}
        {error && <h1>Error | Doesnt exist</h1>}
        {data &&
          data.map((smoothie) => <Note data={smoothie} key={smoothie.id} />)}
      </section>
    </Layout>
  );
}

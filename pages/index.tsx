import { MainLayout } from "layouts/mainLayout";
import Head from "next/head";

export default function Home() {
  console.log('hola');
  
  return (
    <MainLayout>
      <Head>
        <title>Hellooo! I&apos;m German</title>
      </Head>
      <div>germaaaaaa</div>
    </MainLayout>
  );
}

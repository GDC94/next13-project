
import { useWeb3 } from "context/web3Context/web3Context";
import { MainLayout } from "layouts/mainLayout";
import Head from "next/head";

export default function Home() {
  const {web3} = useWeb3();
  console.log(web3.defaultChain);
  
  return (
    <MainLayout>
      <Head>
        <title>Hello! I&apos;m German</title>
      </Head>
      <div>germaaaaaa</div>
    </MainLayout>
  );
}

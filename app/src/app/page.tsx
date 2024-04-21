import { Header } from "./components/header";

const Home = async () => {
  // const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL as string
  // const response = await fetch(baseUrl);
  // const getPageData = await response.json();
  // console.log(getPageData)
  return (
    <div>
      <p>root page</p>
      <link rel="icon" href="data:,"></link>
      <Header />
    </div>
  )
};

export default Home;

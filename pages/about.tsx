import Head from "next/head";
import { GetStaticProps } from "next";
import { motion } from "framer-motion";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css"; // 引入 aos.js 的樣式文件
import Marquee from "react-fast-marquee";
// import Inner from "../components/Inner/index.jsx";
// import ScrollCircleArticle from "../components/ScrollCircleArticle/index.jsx";
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);
  useEffect(() => {
    AOS.init({
      duration: 1000, // 動畫持續時間
      once: true, // 只執行一次
    });
  }, []);
  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Curious Byte NextJS ${CMS_NAME} Blog`}</title>
      </Head>
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="selection:bg-[#ffe637]">
            {/* <div className='h-[100vh] items-center flex justify-center bg-black'>
               
            </div> */}

            {/* <p>{ProductPost.description}</p>
            <p className="hidden">Date Published: {ProductPost.datePublished}</p>
           
            <img src={ProductPost.image} alt={ProductPost.title} /> */}

            {/* JSON-LD for Blog Post */}

            {/* 結構化資料 UH1 */}

            <section className="bg-[#333] h-[80vh]"></section>

            <div className="bg-[#f1f0ee] "></div>
          </div>

          {/* Your content here */}
          <section className="lg:w-full xl:w-[1300px] mt-[200px] flex justify-center items-center overflow-hidden md:px-[0px] px-[15px] sm:px-[50px] border-3 border-red-500 flex-col sm:flex-col xl:flex-row mx-auto">
            {/* Section content here */}
          </section>
        </motion.div>

        {/* Your additional JSX here */}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};

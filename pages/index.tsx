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
import ScrollCircleArticle from "../components/ScrollCircleArticle/index.jsx";
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
            <section className="lg:w-full xl:w-[1300px] mt-[200px] flex  overflow-hidden  border-3 border-red-500 flex-col sm:flex-col xl:flex-row   mx-auto">
              <div className="left  border  border-black w-full md:w-[3/4] xl:w-[30%]">
                <div className="bg-[#c9b1df] border border-black m-3 rounded-xl p-4">
                  <b className="text-[14px] py-[50px] font-bold text-black mt-[30px] text-center  ">
                    子どもの才能を伸ばす、話題の知育玩具を知っ
                  </b>
                  <div className="calendar flex justify-center items-center">
                    <span className="text-[12px]">今天是</span>
                    <div className="border border-black m-3 rounded-m bg-white p-4">
                      我是日期
                    </div>
                    <div className="text-[12px]">
                      もうすぐ何の日？ <br></br> <h4>春</h4>
                    </div>
                  </div>

                  <div className="line bg-black h-[2px] w-full "></div>
                  <div className="items-wrap w-1/2 grid grid-cols-2">
                    <div className="flex flex-row justify-center">
                      <img
                        src="https://hugmug.jp/themes/hugmug/common/images/ph_footer_visual.svg"
                        className="icon w-1/2"
                        alt=""
                      />
                    </div>
                    <div></div>
                  </div>
                  <div className="category grid grid-cols-2 pl-[20px] pr-[40px]">
                    <div className="flex  px-5 ">
                      <div className="img w-1/2">
                        <img
                          className="w-full"
                          src="https://hugmug.jp/themes/hugmug/common/images/icon_category_feature.png"
                          alt=""
                        />
                      </div>
                      <div className="txt flex flex-col w-1/2">
                        <b className="text-[12px]">特輯</b>
                        <p className="text-[12px]">FEATURE</p>
                      </div>
                    </div>
                    <div className="flex  px-5 ">
                      <div className="img w-1/2">
                        <img
                          className="w-full"
                          src="https://hugmug.jp/themes/hugmug/common/images/icon_category_feature.png"
                          alt=""
                        />
                      </div>
                      <div className="txt flex flex-col w-1/2">
                        <b className="text-[12px]">特輯</b>
                        <p className="text-[12px]">FEATURE</p>
                      </div>
                    </div>
                    <div className="flex  px-5 ">
                      <div className="img w-1/2">
                        <img
                          className="w-full"
                          src="https://hugmug.jp/themes/hugmug/common/images/icon_category_feature.png"
                          alt=""
                        />
                      </div>
                      <div className="txt flex flex-col w-1/2">
                        <b className="text-[12px]">特輯</b>
                        <p className="text-[12px]">FEATURE</p>
                      </div>
                    </div>
                    <div className="flex  px-5 ">
                      <div className="img w-1/2">
                        <img
                          className="w-full"
                          src="https://hugmug.jp/themes/hugmug/common/images/icon_category_feature.png"
                          alt=""
                        />
                      </div>
                      <div className="txt flex flex-col w-1/2">
                        <b className="text-[12px]">特輯</b>
                        <p className="text-[12px]">FEATURE</p>
                      </div>
                    </div>
                    <div className="flex  px-5 ">
                      <div className="img w-1/2">
                        <img
                          className="w-full"
                          src="https://hugmug.jp/themes/hugmug/common/images/icon_category_feature.png"
                          alt=""
                        />
                      </div>
                      <div className="txt flex flex-col w-1/2">
                        <b className="text-[12px]">特輯</b>
                        <p className="text-[12px]">FEATURE</p>
                      </div>
                    </div>
                    <div className="flex  px-5 ">
                      <div className="img w-1/2">
                        <img
                          className="w-full"
                          src="https://hugmug.jp/themes/hugmug/common/images/icon_category_feature.png"
                          alt=""
                        />
                      </div>
                      <div className="txt flex flex-col w-1/2">
                        <b className="text-[12px]">特輯</b>
                        <p className="text-[12px]">FEATURE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="middle  border-4 border-orange-500 overflow-scroll p-[0px] lg:p-[30px] w-full md:w-[3/4] xl:w-[45%]">
                <b className="text-[20px] font-bold flex justify-center text-center ">
                  FAMILY SNAP
                </b>
                <div className="py-[30px]">
                  <p className="text-[12px] text-center ">ファミリースナップ</p>
                  <img
                    className="w-full"
                    src="https://hugmug.jp/uploads/2023/10/%E3%82%B0%E3%83%AB%E3%83%BC%E3%83%97-616.jpg.webp"
                    alt=""
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cumque dolorum sequi rem, accusamus aliquid laudantium quos
                    quas, ipsa officiis asperiores earum ab soluta nobis dolorem
                    exercitationem magni, deleniti pariatur nihil.
                  </p>

                  <a
                    href=""
                    className="border p-2 w-[100px] text-[14px] mt-3 border-black mt-3 rounded-[30px] text-center inline-block mx-auto"
                  >
                    Buy now
                  </a>
                  <div className="w-full overflow-scroll " data-aos="fade-up">
                    {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                  </div>
                </div>

                <ScrollCircleArticle />

                <div className="bottom-div bg-[#c9b1df] p-[40px]">
                  <div className="img bg-white border border-black w-full rounded-[7px]">
                    <div className="txt p-10 relative">
                      <p className="text-[20px] txet-center font-bold">
                        LINEお友だち会員募集中！
                      </p>

                      <div className="py-6">
                        <img
                          src="https://hugmug.jp/themes/hugmug/common/images/ph_footer_visual.svg"
                          className="w-[280px]"
                          alt=""
                        />
                      </div>
                      <div className="login-button bg-black text-[#c9b1df] absolute bottom-[-20px] left-[26%] text-center  boder border-white font-extrabold px-4 rounded-[8px] py-1 w-[150px]">
                        LOG IN
                      </div>
                    </div>
                  </div>
                  <div className="list grid mt-[50px] grid-cols-2">
                    <div>
                      <p className="txet-[8px] text-black">
                        編集部からのお知らせ
                      </p>
                    </div>
                    <div className="p-2">
                      <p className="txet-[8px] text-black">
                        - 編集部からのお知らせ
                      </p>
                    </div>
                    <div className="p-2">
                      <p className="txet-[8px] text-black">
                        - 編集部からのお知らせ
                      </p>
                    </div>
                    <div className="p-2">
                      <p className="txet-[8px] text-black">
                        - 編集部からのお知らせ
                      </p>
                    </div>
                    <div className="p-2">
                      <p className="txet-[8px] text-black">
                        編集部からのお知らせ
                      </p>
                    </div>
                    <div className="p-2">
                      <p className="txet-[8px] text-black">
                        編集部からのお知らせ
                      </p>
                    </div>
                    <div className="p-2">
                      <p className="txet-[8px] text-black">
                        編集部からのお知らせ
                      </p>
                    </div>
                    <div className="p-2">
                      <p className="txet-[8px] text-white">
                        編集部からのお知らせ
                      </p>
                    </div>
                  </div>
                  <b className="text-[10px] inline  mx-auto  w-full text-center">
                    © 2022 CCG TO Co.Ltd All rights reserved.
                  </b>
                </div>
              </div>
              <div className="left p-8 border bg-[#c9b1df] border-black w-full md:w-[3/4] xl:w-[30%]">
                <b className="text-[14px] font-bold">title</b>
                {/* <ReactSlick/> */}
                <div>
                  <h3 className="text-[20px] text-white text-center font-bold mb-4">
                    TREND WORD
                  </h3>
                </div>
                <div className="flex justify-center items-center flex-wrap border-t-1 border-b-1 py-[40px] border-black">
                  <a
                    href=""
                    className="border text-black rounded-[30px] border-black text-[16px] bg-fuchsia-200 px-[20px] py-[.5px] mx-1 my-1 flex justify-center items-center"
                  >
                    選購資訊與蝦皮賣場
                  </a>
                  <a
                    href=""
                    className="border text-black rounded-[30px] border-black text-[16px] bg-fuchsia-200 px-[20px] py-[.5px] mx-1 my-1 flex justify-center items-center"
                  >
                    寵物飼養教學
                  </a>
                  <a
                    href=""
                    className="border text-black rounded-[30px] border-black text-[16px] bg-fuchsia-200 px-[20px] py-[.5px] mx-1 my-1 flex justify-center items-center"
                  >
                    居家整理
                  </a>
                  <a
                    href=""
                    className="border text-black rounded-[30px] border-black text-[16px] bg-fuchsia-200 px-[20px] py-[.5px] mx-1 my-1 flex justify-center items-center"
                  >
                    其他項目{" "}
                  </a>
                </div>
                <img
                  src="https://hugmug.jp/uploads/2024/06/LINE2407_present_side-banner.jpg.webp"
                  className="w-full"
                  alt=""
                />
              </div>
            </section>
            <section className="marquee_section mt-[60px] bg-gray-50 mt-[70px] lg">
              <div className="title">
                <h2 className="text-[32px]  mt-[30px] font-bold">
                  Marquee Scroll
                </h2>
              </div>
              <div className="flex flex-row justify-center w-full">
                <div className="w-[15%]">
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                </div>

                <div className="w-[60%] flex justify-center">
                  <div className="line-verticle rotate-[-90deg] h-[2px] mt-[40px]  w-[70px] bg-black "></div>
                </div>

                <div className="w-[15%] ">
                  <p>Lorem ipsum, dolor sit </p>
                </div>
              </div>

              <Marquee
                pauseOnHover
                className="wrap py-[50px] mt-6 w-[80%] overflow-hidden"
              >
                <div>
                  <div className="border flex justify-center items-center hover:bg-[#c9b1df] duration-100 border-black w-[400px] p-6 rounded-[65px] mx-3">
                    <img
                      src="https://www.nikoand.jp/wp-content/uploads/2024/07/bnr_town_guide_tokai_a_1080_1080.jpg"
                      className="border-3 rounded-full border-black w-[70px] h-[70px]"
                      alt=""
                    />
                    <a href="" className="text-[12px] hover:font-bold ml-4">
                      「niko and ...」発のフェミニン雑貨ブランド「tiny
                      tiny」の2号店が「ルミネ大宮」に8月8日(木)NEWオープン
                    </a>
                  </div>
                </div>
                <div>
                  <div className="border flex justify-center items-center hover:bg-[#c9b1df] duration-100 border-black w-[400px] p-6 rounded-[65px] mx-3">
                    <img
                      src="https://www.nikoand.jp/wp-content/uploads/2024/07/bnr_town_guide_tokai_a_1080_1080.jpg"
                      className="border-3 rounded-full border-black w-[70px] h-[70px]"
                      alt=""
                    />
                    <a href="" className="text-[12px] hover:font-bold ml-4">
                      「niko and ...」発のフェミニン雑貨ブランド「tiny
                      tiny」の2号店が「ルミネ大宮」に8月8日(木)NEWオープン
                    </a>
                  </div>
                </div>
                <div>
                  <div className="border flex justify-center items-center hover:bg-[#c9b1df] duration-100 border-black w-[400px] p-6 rounded-[65px] mx-3">
                    <img
                      src="https://www.nikoand.jp/wp-content/uploads/2024/07/bnr_town_guide_tokai_a_1080_1080.jpg"
                      className="border-3 rounded-full border-black w-[70px] h-[70px]"
                      alt=""
                    />
                    <a href="" className="text-[12px] hover:font-bold ml-4">
                      「niko and ...」発のフェミニン雑貨ブランド「tiny
                      tiny」の2号店が「ルミネ大宮」に8月8日(木)NEWオープン
                    </a>
                  </div>
                </div>
                <div>
                  <div className="border flex justify-center items-center hover:bg-[#c9b1df] duration-100 border-black w-[400px] p-6 rounded-[65px] mx-3">
                    <img
                      src="https://www.nikoand.jp/wp-content/uploads/2024/07/bnr_town_guide_tokai_a_1080_1080.jpg"
                      className="border-3 rounded-full border-black w-[70px] h-[70px]"
                      alt=""
                    />
                    <a href="" className="text-[12px] hover:font-bold ml-4">
                      「niko and ...」発のフェミニン雑貨ブランド「tiny
                      tiny」の2号店が「ルミネ大宮」に8月8日(木)NEWオープン
                    </a>
                  </div>
                </div>
                <div>
                  <div className="border flex justify-center items-center hover:bg-[#c9b1df] duration-100 border-black w-[400px] p-6 rounded-[65px] mx-3">
                    <img
                      src="https://www.nikoand.jp/wp-content/uploads/2024/07/bnr_town_guide_tokai_a_1080_1080.jpg"
                      className="border-3 rounded-full border-black w-[70px] h-[70px]"
                      alt=""
                    />
                    <a href="" className="text-[12px] hover:font-bold ml-4">
                      「niko and ...」発のフェミニン雑貨ブランド「tiny
                      tiny」の2号店が「ルミネ大宮」に8月8日(木)NEWオープン
                    </a>
                  </div>
                </div>
                <div>
                  <div className="border flex justify-center items-center hover:bg-[#c9b1df] duration-100 border-black w-[400px] p-6 rounded-[65px] mx-3">
                    <img
                      src="https://www.nikoand.jp/wp-content/uploads/2024/07/bnr_town_guide_tokai_a_1080_1080.jpg"
                      className="border-3 rounded-full border-black w-[70px] h-[70px]"
                      alt=""
                    />
                    <a href="" className="text-[12px] hover:font-bold ml-4">
                      「niko and ...」発のフェミニン雑貨ブランド「tiny
                      tiny」の2号店が「ルミネ大宮」に8月8日(木)NEWオープン
                    </a>
                  </div>
                </div>
              </Marquee>
            </section>

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

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import PostPreview from "./post-preview";

export default function MoreStories({ posts }) {
  return (
    <section className="w-[1200px] ">
      <h2 className="">More Stories</h2>
      <Swiper
        className="pr-[100px]"
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {posts.map(({ node }) => (
          <SwiperSlide key={node.slug}>
            <div className="">
              <PostPreview
                title={node.title}
                coverImage={node.featuredImage}
                date={node.date}
                author={node.author}
                slug={node.slug}
                excerpt={node.excerpt}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

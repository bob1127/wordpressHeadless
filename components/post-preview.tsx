import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  // 限制 excerpt 的长度为 20 个字符
  const limitedExcerpt =
    excerpt.length > 80 ? `${excerpt.substring(0, 80)}...` : excerpt;

  return (
    <div className="  p-4 ">
      <div className="relative">
        <div className="mb-5 w-[96%] mx-auto">
          {coverImage && (
            <CoverImage title={title} coverImage={coverImage} slug={slug} />
          )}
        </div>
        <div className="flex mt-[-70px] relative flex-col">
          <div className="text-[12px] w-[120px] inline-block p-2 mb-[-2.7px] z-[999999] bg-[#6ca8e8] border-black border-2 border-b-0 rounded-tl-[4px] rounded-tr-[4px]">
            <Date dateString={date} />
          </div>

          <div className="text-[12px] inline-block py-[40px] px-2 bg-[#6ca8e8]  border-black border-2 rounded-[4px] mb-4">
            <h3 className="text-xl mb-3 leading-snug">
              <Link
                href={`/posts/${slug}`}
                className="hover:underline"
                dangerouslySetInnerHTML={{ __html: title }}
              ></Link>
            </h3>
          </div>
        </div>
        <div
          className="text-[14px] leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: limitedExcerpt }}
        />
        {/* <Avatar author={author} /> */}
      </div>
    </div>
  );
}

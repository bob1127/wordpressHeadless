import Image from "next/image";
import React from "react";
export default function Avatar({ author }) {
  return (
    <div className="grid grid-cols-2">
      <div className="card">
        <div className="img">
          <img
            className="w-full"
            src="https://www.nikoand.jp/wp-content/uploads/2024/07/IMG_2039.jpeg"
            alt=""
          />
        </div>
        <div>
          <div className="top flex justify-between">
            <div className="border-black w-[80px] inline-block border-1 rounded-[20px]">
              連載
            </div>
            <div>2024.06.05</div>
          </div>
          <div className="article-p py-4">
            【ヨコハマのホリイの酒場日記】 第十一夜 post by ヨコハマのホリイ
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

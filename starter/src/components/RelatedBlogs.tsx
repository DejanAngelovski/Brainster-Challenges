import Link from "next/link";
import React from "react";

export interface RelatedBlogsType {
  title: string;
  img: string;
  id: string;
}
interface Props {
  data: RelatedBlogsType[];
}

const RelatedBlogs: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h4 className="mtext-112 cl2 mb-3">Related Blogs</h4>

      <ul>
        {data.map((i, idx) => (
          <li className="mb-4" key={`related-random-blog-${idx}`}>
            <Link href={`/blog/${i.id}`}>
              <a className="wrao-pic-w">
                <img src={i.img} alt="PRODUCT" className="img-fluid" />
                <div className="p-t-8 mt-1">
                  <div className="stext-116 cl8 hov-cl1 trans-04 mb-3">
                    {i.title}
                  </div>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedBlogs;
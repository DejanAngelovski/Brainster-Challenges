import React from "react";
type Det = {
  link: string;
  title: string;
};

export default function Details({ link, title }: Det) {
  return (
    <div className="details-banner">
      <div className="desc">
        <span>about</span>
        <h2>{title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          nobis voluptatem facere eum dolorem eius quae ut velit aliquid atque
          necessitatibus ipsa modi aliquam temporibus facilis. Laborum nesciunt
          accusamus voluptatibus dignissimos fuga perferendis. Corporis amet
          inventore, doloribus nulla qui deleniti libero est quia error velit
          exercitationem dolores iste deserunt totam fuga voluptatem! Culpa
          accusamus, tempora sit facere repellat debitis? Officia ad cum
          exercitationem magni libero provident magnam cumque autem eum? Est
          obcaeca
        </p>
      </div>
      <div className="desc-img">
        <img src={link} alt="" />
      </div>
    </div>
  );
}

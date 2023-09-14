import React from "react";

type Props = {
  fn: (e: React.MouseEvent<HTMLLIElement>) => void;
  text: string;
  active: (text: string) => void;
  activeFilter: string;
  amount?: [
    {
      brand: string;
      gender: string;
      image: string;
      name: string;
      price: number;
    }
  ];
};

export default function Filter({
  fn,
  text,
  active,
  activeFilter,
  amount,
}: Props) {
  const helper = (e: React.MouseEvent<HTMLLIElement>) => {
    fn(e);
    active(text);
  };

  let count;

  if (text == "Show all") {
    count = amount?.length;
  }
  if (text == "Male" || text == "Female") {
    count = amount?.filter((a) => a.gender == text.toLocaleUpperCase()).length;
  }
  if (
    text == "LE GRAND BIKES" ||
    text == "KROSS" ||
    text == "EXPLORER" ||
    text == "VISITOR" ||
    text == "PONY" ||
    text == "FORCE" ||
    text == "E-BIKES" ||
    text == "IDEAL"
  ) {
    count = amount?.filter((a) => a.brand == text.toLocaleUpperCase()).length;
  }

  return (
    <li className={activeFilter === text ? "active" : ""} onClick={helper}>
      <span>{text}</span>
      <span className="badge">{count}</span>
    </li>
  );
}

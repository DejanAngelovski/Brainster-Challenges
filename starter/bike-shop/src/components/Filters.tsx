import React, { useState } from "react";
import Filter from "./Filter";

type Props = {
  showAll: (e: React.MouseEvent<HTMLLIElement>) => void;
  showBrand: (e: React.MouseEvent<HTMLLIElement>) => void;
  showGender: (e: React.MouseEvent<HTMLLIElement>) => void;
  bikes: any;
};

export default function Filters({
  showAll,
  showBrand,
  showGender,
  bikes,
}: Props) {
  const [active, setActive] = useState("Show all");

  const activeFilter = (text: string) => {
    setActive(text);
  };
  return (
    <div className="col-md-3">
      <h3>Filter by:</h3>
      <ul className="sub-menu">
        <Filter
          fn={showAll}
          text={"Show all"}
          active={activeFilter}
          activeFilter={active}
          amount={bikes}
        />
      </ul>
      <hr />
      <h4>Gender</h4>
      <ul className="sub-menu">
        <Filter
          fn={showGender}
          text={"Male"}
          active={activeFilter}
          activeFilter={active}
          amount={bikes}

        />

        <Filter
          fn={showGender}
          text={"Female"}
          active={activeFilter}
          activeFilter={active}
          amount={bikes}

        />
      </ul>
      <hr />
      <h4>Brand</h4>
      <ul className="sub-menu">
        <Filter
          fn={showBrand}
          text={"LE GRAND BIKES"}
          active={activeFilter}
          activeFilter={active}
          amount={bikes}

        />
        <Filter
          fn={showBrand}
          text={"KROSS"}
          active={activeFilter}
          activeFilter={active}
          amount={bikes}

        />
        <Filter
          fn={showBrand}
          text={"EXPLORER"}
          active={activeFilter}
          activeFilter={active}
          amount={bikes}

        />
        <Filter
          fn={showBrand}
          text={"VISITOR"}
          active={activeFilter}
          activeFilter={active}
          amount={bikes}

        />
        <Filter
          fn={showBrand}
          text={"PONY"}
          active={activeFilter}
          activeFilter={active}
          amount={bikes}

        />
        <Filter
          fn={showBrand}
          text={"FORCE"}
          active={activeFilter}
          activeFilter={active}
          amount={bikes}

        />
        <Filter
          fn={showBrand}
          text={"E-BIKES"}
          active={activeFilter}
          activeFilter={active}
          amount={bikes}

        />
        <Filter
          fn={showBrand}
          text={"IDEAL"}
          active={activeFilter}
          activeFilter={active}
          amount={bikes}

        />
      </ul>
    </div>
  );
}

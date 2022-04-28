import React from "react";
import { Buy } from "./openSea";
import { Section } from "./sections";

function index() {
  return (
    <Section name="buy" mode="COMPRESSED" style={{ backgroundColor: "#000" }}>
      <div className="w-full flex flex-col items-center xl:flex-row justify-evenly">
        <section className="w-full xl:w-[48%] mb-8 xl:mb-0 max-w-xl">
          <img
            className="rounded-lg"
            src="/images/metapizzahero.gif"
            alt="PizzaHero"
            width={1200}
            height={1180}
          />
        </section>
        <section className="w-full xl:w-[48%] lg:mb-8 xl:mb-0 xl:py-10 max-h-lg max-w-xl">
          <Buy />
        </section>
      </div>
    </Section>
  );
}

export default index;

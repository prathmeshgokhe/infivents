"use client";

import Image from "next/image";
import { BsFillCaretDownFill } from "react-icons/bs";

import { getMainFeature } from "@/sanity/sanity-utils";
import { useEffect, useState } from "react";
import { mainFeaturesType } from "@/types/main-features-type";

function MainFearures() {
  const [mainFeatures, setmainFeatures] = useState<mainFeaturesType[]>([]);

  useEffect(() => {
    async function fetchmainFeatures() {
      const mainFeatures = await getMainFeature();
      setmainFeatures(mainFeatures);
    }

    fetchmainFeatures();
  }, []);

  return (
    <div id="main-features-container">
      <div className="heading">
        <h2>Our Main Features</h2>
        <BsFillCaretDownFill />
      </div>
      {mainFeatures.map((mainFeature) => (
        <div id={mainFeature._id} className="main-features">
          <div className="text-container">
            <h3 data-aos="flip-up">{mainFeature.title}</h3>
            <p data-aos="flip-up" data-aos-delay="100">
              {mainFeature.description}
            </p>
          </div>
          <div className="img-container">
            <Image
              sizes="100%"
              fill
              data-aos="flip-up"
              alt={mainFeature.title}
              src={mainFeature.image.url}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainFearures;

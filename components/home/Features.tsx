"use client";

import { getFeature } from "@/sanity/sanity-utils";
import { featuresType } from "@/types/features-type";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";

function Features() {
  const [features, setFeatures] = useState<featuresType[]>([]);

  useEffect(() => {
    async function fetchFeatures() {
      const features = await getFeature();
      setFeatures(features);
    }

    fetchFeatures();
  }, []);

  return (
    <div className="feature-section">
      <div className="fetaures-title">
        <h2>Powerful Features to Enhance Your Expo Experience</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="grid-container">
        {features.map((feature) => (
          <div key={feature._id} className="card">
            <div className="icon-container">
              <div className="img-container">
                <Image
                  sizes="100%"
                  fill
                  alt={feature.heading}
                  src={feature.image.url}
                />
              </div>
            </div>
            <h3>{feature.heading}</h3>
            <PortableText value={feature.description} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MouseParallax } from "react-just-parallax";
import AOS from "aos";
import "aos/dist/aos.css";

import { getHero } from "@/sanity/sanity-utils";
import { heroType } from "@/types/hero-type";

const Hero = () => {
  const router = useRouter();
  const [heros, setHeros] = useState<heroType[]>([]);

  useEffect(() => {
    async function fetchHeros() {
      const heros = await getHero();
      setHeros(heros);
    }

    fetchHeros();
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="hero-section">
      <MouseParallax enableOnTouchDevice isAbsolutelyPositioned strength={0.2}>
        <div className="bg-container" />
      </MouseParallax>

      {heros.map((hero) => (
        <div key={hero._id}>
          <div className="hero-text">
            <h1 data-aos="flip-up">{hero.heading}</h1>
            <p data-aos="flip-up" data-aos-delay="500">
              {hero.description}
            </p>
            <button
              data-aos="zoom-in"
              data-aos-delay="1000"
              type="button"
              onClick={() => router.push(hero.url)}
            >
              Get Started
            </button>
          </div>

          <div className="heroimg-cont">
            <div className="hero-img">
              <Image
                sizes="100%"
                fill
                alt=""
                src={hero.image.url}
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;

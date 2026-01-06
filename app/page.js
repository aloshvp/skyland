

import Banner from "@home/Banner";
import AtGlance from "@home/AtGlance";
import HomeGallery from "@home/HomeGallery";
import WhatWeDo from "@home/WhatWeDo";
import BestWork from "@home/BestWork";
import WhyChooseUs from "@home/WhyChooseUs";
import PostTension from "@home/PostTension";
import HomeForm from "@home/HomeForm";
import ClientReview from "@home/ClientReview";

export default function Home() {
  return (
    <>
      <Banner />
      <AtGlance />
      <WhatWeDo />
      <BestWork />
      <HomeGallery />
      <WhyChooseUs />
      <PostTension />
      <ClientReview />
      <HomeForm />
    </>
  );
}
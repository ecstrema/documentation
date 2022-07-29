import React from "react";
import Head from "@docusaurus/Head";
import baseSchema from "../info/organization";
import DecoratedLayout from "../theme/DecoratedLayout";
import {Features} from "../component/home/Features";
import {Technologies} from "../component/home/Technologies";
import {References} from "../component/home/References";
import {Pricing} from "../component/home/Pricing";
import {NotConvincedYet} from "../component/home/NotConvincedYet";
import {EmphasisPageHeader} from "../component/pageComponents/header/EmphasisPageHeader";
import {TwoColumnSection} from "../component/pageComponents/twoColumnSection/TwoColumnSection";
import {ImageColumn} from "../component/pageComponents/twoColumnSection/ImageColumn";
import {TextColumn, TextColumnText, TextColumnTitle} from "../component/pageComponents/twoColumnSection/TextColumn";
import {GradientText} from "../component/GradientText";

function Home() {
  return (
    <div className="home__container">
      <Head>
        <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
      </Head>
      <DecoratedLayout
        title={baseSchema.slogan}
        description={baseSchema.description}
      >
        <div className="text-home-text">
          <EmphasisPageHeader title="Perfect translation." title2="Users everywhere."/>
          <TwoColumnSection className="md:h-[750px]">
            <ImageColumn/>
            <TextColumn>
              <TextColumnTitle>Revolution is here.</TextColumnTitle>
              <TextColumnText>
                Integrate Tolgee into your App in minutes.
                Speed up your translation process by <GradientText>90%</GradientText> by using Tolgee <GradientText>revolutionary</GradientText> integrations.
                Let your <GradientText>mama</GradientText> translate your App with in-context localization feature.
              </TextColumnText>
            </TextColumn>
          </TwoColumnSection>
          <Features/>
          <Technologies/>
          <References/>
          <Pricing/>
          <NotConvincedYet/>
        </div>
      </DecoratedLayout>
    </div>
  );
}

export default Home;

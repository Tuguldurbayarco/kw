<script lang="ts">
  // NOTE: old red was: #de0036
  import { _ } from "svelte-i18n";
  import { locale } from "svelte-i18n";
  import timelineWeb from "$lib/svg/timeline_web.svg";
  import revInRealState from "$lib/svg/rev_in_real_state.svg";
  import revInRealStateMn from "$lib/svg/rev_in_real_state_mn.svg";
  import growthGraph from "$lib/svg/growth-share.svg";
  import kwRedLogo from "$lib/images/kw-red-logo.jpeg";

  let currentLang = "";
  locale.subscribe((value) => (currentLang = value ?? ""));

  // 7 15 -> 8 45
</script>

<section class="heroBanner">
  <div>
    <img
      style="width: 100% !important;"
      src="https://repcmsneu.blob.core.windows.net/cms/sites/kw-mongolia/pts_images/KWMongoliaBanner.webp"
      alt=""
    />
  </div>
  <div style="height:75px;" class="borderBottom"></div>
</section>

<div>
  <section class="author globalMB-30">
    <div class="Kwcontainer">
      <div class="authorGrid">
        <div class="authorImage" style="margin-top:68px">
          <img
            src="https://repcmsneu.blob.core.windows.net/cms/sites/kw-mongolia/pts_images/kwprofile.webp"
            alt=""
          />
          <!-- </div>
              <div class="authorTitle"> -->
          <div style="padding-left: 15px;" class="leftBorder">
            <h3 style="color: black;" class="leftBorder24 globalBold">
              {$_("aboutUs.garyName")}
            </h3>
          </div>
        </div>
        <div class="authorBody globalP">
          <p class="both-space">
            {@html $_("aboutUs.garyKeller")}
          </p>
        </div>
      </div>
    </div>
  </section>
</div>

<div class="i" style="position: relative;">
  <div style="width: 35%; height:100%" class="leftSide"></div>
  <div class="Kwcontainer">
    <div class="interBody interBodyMobile">
      <div class="interName">
        <h3 class="interNameBold" style="font-size: 24px; font-weight: bold;">
          KELLER WILLIAMS INTERNATIONAL
        </h3>
        <!-- <h3 class="interNameItalic" style="font-size: 24px;"> SHARED VISION </h3> -->
      </div>

      <div class="interTitleName globalP">
        <h5 style="font-size: 16px;">
          {$_("aboutUs.international.MISSION.title")}:
        </h5>
      </div>
      <div class="interTitleTitle globalP">
        <p style="font-size: 16px;">
          {$_("aboutUs.international.MISSION.text")}
        </p>
      </div>
      <div class="interTitleName globalP">
        <h5 style="font-size: 16px;">
          {$_("aboutUs.international.VISION.title")}:
        </h5>
      </div>
      <div class="interTitleTitle globalP">
        <p style="font-size: 16px;">
          {$_("aboutUs.international.VISION.text")}
        </p>
      </div>
      <div class="interTitleName globalP">
        <h5 style="font-size: 16px;">
          {$_("aboutUs.international.VALUES.title")}:
        </h5>
      </div>
      <div class="interTitleTitle globalP">
        <p style="font-size: 16px;">
          {$_("aboutUs.international.VALUES.text")}
        </p>
      </div>
      <div class="interTitleName globalP">
        <h5 style="font-size: 16px;">
          {$_("aboutUs.international.PERSPECTIVE.title")}:
        </h5>
      </div>
      <div class="interTitleTitle globalP">
        <p style="font-size: 16px;">
          {$_("aboutUs.international.PERSPECTIVE.text")}
        </p>
      </div>
    </div>
  </div>
</div>

<section class="beSystem">
  <div>
    <div class="Kwcontainer">
      <div class="beSystemHeaderh1">
        <h1>WI4C2TES</h1>
      </div>
      <div class="beSystemFullBorder">
        <h5 style="font-weight:400;" class="pr-[20px] md:pr-[52px]">
          {$_("aboutUs.beliefSystem.title")}
        </h5>
        <div class="beSystemGrid">
          <div class="beSystemName">
            <h6>{$_("aboutUs.beliefSystem.Win-Win.title")}:</h6>
          </div>
          <div class="beSystemTitle">
            <h6 style="font-weight:400;">
              {$_("aboutUs.beliefSystem.Win-Win.text")}
            </h6>
          </div>
        </div>
        <div class="beSystemGrid">
          <div class="beSystemName">
            <h6>{$_("aboutUs.beliefSystem.Integrity.title")}:</h6>
          </div>
          <div class="beSystemTitle">
            <h6 style="font-weight:400;">
              {$_("aboutUs.beliefSystem.Integrity.text")}
            </h6>
          </div>
        </div>
        <div class="beSystemGrid">
          <div class="beSystemName">
            <h6>{$_("aboutUs.beliefSystem.Customers.title")}:</h6>
          </div>
          <div class="beSystemTitle">
            <h6 style="font-weight:400;">
              {$_("aboutUs.beliefSystem.Customers.text")}
            </h6>
          </div>
        </div>
        <div class="beSystemGrid">
          <div class="beSystemName">
            <h6>{$_("aboutUs.beliefSystem.Commitment.title")}:</h6>
          </div>
          <div class="beSystemTitle">
            <h6 style="font-weight:400;">
              {$_("aboutUs.beliefSystem.Commitment.text")}
            </h6>
          </div>
        </div>
        <div class="beSystemGrid">
          <div class="beSystemName">
            <h6>{$_("aboutUs.beliefSystem.Communication.title")}:</h6>
          </div>
          <div class="beSystemTitle">
            <h6 style="font-weight:400;">
              {$_("aboutUs.beliefSystem.Communication.text")}
            </h6>
          </div>
        </div>
        <div class="beSystemGrid">
          <div class="beSystemName">
            <h6>{$_("aboutUs.beliefSystem.Creativity.title")}:</h6>
          </div>
          <div class="beSystemTitle">
            <h6 style="font-weight:400;">
              {$_("aboutUs.beliefSystem.Creativity.text")}
            </h6>
          </div>
        </div>
        <div class="beSystemGrid">
          <div class="beSystemName">
            <h6>{$_("aboutUs.beliefSystem.Teamwork.title")}:</h6>
          </div>
          <div class="beSystemTitle">
            <h6 style="font-weight:400;">
              {$_("aboutUs.beliefSystem.Teamwork.text")}
            </h6>
          </div>
        </div>
        <div class="beSystemGrid">
          <div class="beSystemName">
            <h6>{$_("aboutUs.beliefSystem.Trust.title")}:</h6>
          </div>
          <div class="beSystemTitle">
            <h6 style="font-weight:400;">
              {$_("aboutUs.beliefSystem.Trust.text")}
            </h6>
          </div>
        </div>
        <div class="beSystemGrid">
          <div class="beSystemName">
            <h6>{$_("aboutUs.beliefSystem.Equity.title")}:</h6>
          </div>
          <div class="beSystemTitle">
            <h6 style="font-weight:400;">
              {$_("aboutUs.beliefSystem.Equity.text")}
            </h6>
          </div>
        </div>
        <div class="beSystemGrid">
          <div class="beSystemName">
            <h6>{$_("aboutUs.beliefSystem.Success.title")}:</h6>
          </div>
          <div class="beSystemTitle">
            <h6 style="font-weight:400;">
              {$_("aboutUs.beliefSystem.Success.text")}
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div>
  <section class="history">
    <div class="Kwcontainer">
      <h1
        style="font-size: 24px; color: #bd152e; margin-bottom: 30px;"
        class="globalBold"
      >
        {$_("aboutUs.historical_development")}
      </h1>
      <!--   <div class="historyTimeLineBoder"> -->
    </div>
    <div class="Kwcontainer">
      <div style="overflow-x: scroll;" class="historyTimeLine">
        <img src={timelineWeb} alt="" />
      </div>
      <div class="historyTimeLinePhone">
        <img
          src="https://repcmsneu.blob.core.windows.net/cms/sites/kw-mongolia/pts_images/phoneTimeLine.svg"
          alt=""
        />
      </div>
    </div>
  </section>
</div>

<section class="world">
  <div>
    <div class="Kwcontainer">
      <h1
        class="globalBold"
        style="margin-bottom: 30px; max-width: 100%; padding-top:30px;"
      >
        {$_("aboutUs.global_awards")}
      </h1>
      <!-- <div class="wordBrandBorder"></div> -->
      <div class="wordBrand">
        <div class="wordBrandName">
          <div class="wordBrandNameLeft">
            <img
              style="place-self: center;"
              class="same-height-logo"
              src="https://repcmsneu.blob.core.windows.net/cms/sites/kw-mongolia/pts_images/kwtraining.webp"
              alt=""
            />
            <h5 class="globalP global-text">
              Full training system TOP 10<br />
              Hall of Fame
            </h5>
          </div>
        </div>
        <div class="wordBrandName">
          <div class="wordBrandNameRight">
            <img
              style="place-self: center;"
              class="same-height-logo"
              src="https://repcmsneu.blob.core.windows.net/cms/sites/kw-mongolia/pts_images/kwforbes.webp"
              alt=""
            />
            <h5 class="globalP global-text">
              TOP 10 companies in the world where woman can work comfortably
            </h5>
          </div>
        </div>
        <div class="wordBrandName">
          <div class="wordBrandNameLeft">
            <img
              style="place-self: center;"
              class="same-height-logo"
              src="https://repcmsneu.blob.core.windows.net/cms/sites/kw-mongolia/pts_images/kwindeed.webp"
              alt=""
            />
            <h5 class="globalP global-text">
              #1 Work-Life balanced <br />
              #1 Empathy for corporate culture company
            </h5>
          </div>
        </div>

        <div class="wordBrandName">
          <div class="wordBrandNameRight">
            <img
              style="place-self: center;"
              class="same-height-logo"
              src="https://repcmsneu.blob.core.windows.net/cms/sites/kw-mongolia/pts_images/kwinman.webp"
              alt=""
            />
            <h5 class="globalP global-text">
              The most innovative real estate technology company
            </h5>
          </div>
        </div>
      </div>
      <div class="wordBrandNameBot">
        <div class="wordBrandName">
          <div class="wordBrandNameLeft">
            <img
              style="place-self: center;"
              class="same-height-logo"
              src="https://repcmsneu.blob.core.windows.net/cms/sites/kw-mongolia/pts_images/kwfastcompany.webp"
              alt=""
            />
            <h5 class="globalP global-text">
              #1 Innovative real estate company
            </h5>
          </div>
        </div>
        <div class="wordBrandName">
          <div class="wordBrandNameRight">
            <img
              style="place-self: center;"
              class="same-height-logo"
              src="https://repcmsneu.blob.core.windows.net/cms/sites/kw-mongolia/pts_images/kwnewsweek.webp"
              alt=""
            />
            <h5 class="globalP global-text">#1 Customer Serviced company</h5>
          </div>
        </div>
        <div class="wordBrandName">
          <div class="wordBrandNameLeft">
            <img
              style="place-self: center;"
              class="same-height-logo"
              src="https://repcmsneu.blob.core.windows.net/cms/sites/kw-mongolia/pts_images/kwcareerbliss.webp"
              alt=""
            />
            <h5 class="globalP global-text">
              #1 The happiest company to work for
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="worldKW">
  <div class="Kwcontainer">
    <h1 class="globalBold" style="margin-bottom:30px;">
      {$_("aboutUs.kw_worldwide")}
    </h1>
    <!--   <div class="worldwkDahinBorder"></div> -->
  </div>
  <div class="Kwcontainer" style="padding: 0px; width:100%;">
    <img
      src="https://repcmsneu.blob.core.windows.net/cms/sites/kw-mongolia/pts_images/worldMap.svg"
      alt=""
    />
  </div>
  <div>
    <div class="Kwcontainer">
      <div class="worldwkDahin">
        <p
          style="font-size: 16px; display: flex; align-items: flex-end;"
          class="globalP front-space"
        >
          {$_("aboutUs.franchiseInfo")}
        </p>
        <div style="font-weight: 500;" class="worldwkDahinNumber">
          <div class="worldwkDahinNumberZ">
            <h1 style="font-weight: 900;">5</h1>
            <h4
              class={currentLang === "en-US" ? "worldKWDahinNumberSmall" : ""}
            >
              {$_("aboutUs.Continents")}
            </h4>
          </div>
          <div class="worldwkDahinNumberZ">
            <h1 style="font-weight: 900;">61</h1>
            <h4
              class={currentLang === "en-US" ? "worldKWDahinNumberSmall" : ""}
            >
              {$_("aboutUs.Countries")}
            </h4>
          </div>
          <div class="worldwkDahinNumberZ">
            <h1 style="font-weight: 900;">1000+</h1>
            <h4
              class={currentLang === "en-US" ? "worldKWDahinNumberSmall" : ""}
            >
              {$_("aboutUs.MarketCenters")}
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div class="Kwcontainer">
      <div class="worldwkCountry">
        ● Albania ● Argentina ● Aruba ● Bahamas ● Belgium ● Belize ● Bermuda ●
        Bolivia ● Bonaire ● Cambodia ● Canada ● Chile ● Colombia ● Costa Rica ●
        Curacao ● Cyprus ● Czech Republic ● Dominican Republic ● Dubai, UAE ●
        France ● Germany ● Greater Shanghai, China ● Greece ● Guatemala ● Guyana
        ● Honduras ● Indonesia ● Ireland ● Israel ● Italy ● Jamaica ● Japan ●
        Luxembourg ● Malaysia ● Mexico ● Monaco ● Mongolia ● Morocco ● Nicaragua
        ● Northern Cyprus ● Panama ● Paraguay ● Peru ● Philippines ● Poland ●
        Portugal ● Puerto Rico ● Romania ● Sao Paulo ● Serbia ● Slovenia ● Sint
        Maarten ● Southern Africa ● Spain ● Thailand ● Trinidad and Tobago ●
        Turkey ● Turks and Caicos ● United Kingdom ● Uruguay ● Vietnam
      </div>
    </div>
  </div>
</section>
<div>
  <section class="evo">
    <div class="Kwcontainer">
      <h1 class="globalBold" style="margin-bottom: 60px;">
        {$_("aboutUs.real_estate_revolution")}
      </h1>
      <!--     <div class="evoBorder"></div> -->
      <div
        class="w-[1060px] h-[600px] bg-[#d9d9d9] justify-self-center relative"
      >
        <div class="h-[25%] w-full absolute top-[-4%] flex justify-center z-10">
          <img class="z-10" src={kwRedLogo} alt="kwLogo" />
        </div>
        <div class="w-full h-full relative overflow-hidden">
          <div
            class="h-full pt-[154px] pb-[64px] flex justify-even gap-[36px] px-[36px] robotoCondensedFont"
          >
            <div class="w-1/3 flex flex-col gap-[22px]">
              <div class="font-bold text-center">
                {$_("aboutUs.real_estate_revolution_text.dependent")}
              </div>
              <div>
                <ul class="list-disc list-outside space-y-2 pl-6">
                  <li>
                    {$_("aboutUs.real_estate_revolution_text.dep_1")}
                  </li>
                  <li>{$_("aboutUs.real_estate_revolution_text.dep_2")}</li>
                  <li>{$_("aboutUs.real_estate_revolution_text.dep_3")}</li>
                  <li>{$_("aboutUs.real_estate_revolution_text.dep_4")}</li>
                  <li>{$_("aboutUs.real_estate_revolution_text.dep_5")}</li>
                  <li>{$_("aboutUs.real_estate_revolution_text.dep_6")}</li>
                  {#if currentLang === "en-US"}
                    <li>{$_("aboutUs.real_estate_revolution_text.dep_7")}</li>
                  {/if}
                </ul>
              </div>
              <div class="font-bold text-center">
                {$_("aboutUs.real_estate_revolution_text.low_risk_low_take")}
              </div>
            </div>
            <div class="w-1/3 flex flex-col gap-[22px]">
              <div class="font-bold text-center">
                {$_("aboutUs.real_estate_revolution_text.interdependent")}
              </div>
              <div>
                <ul class="list-disc list-outside space-y-2 pl-6">
                  <li>
                    {$_("aboutUs.real_estate_revolution_text.interdep_1")}
                  </li>
                </ul>
              </div>
              <div class="font-bold text-center">KELLER WILLIAMS</div>
              <ul class="list-disc list-outside pl-6">
                <li>{$_("aboutUs.real_estate_revolution_text.interdep_2")}</li>
                <li>{$_("aboutUs.real_estate_revolution_text.interdep_3")}</li>
                <li>{$_("aboutUs.real_estate_revolution_text.interdep_4")}</li>
                <li>{$_("aboutUs.real_estate_revolution_text.interdep_5")}</li>
              </ul>
              <div class="font-bold text-center">
                {$_("aboutUs.real_estate_revolution_text.low_risk_high_take")}
              </div>
            </div>
            <div class="w-1/3 flex flex-col gap-[22px]">
              <div class="font-bold text-center">
                {$_("aboutUs.real_estate_revolution_text.independent")}
              </div>
              <div>
                <ul class="list-disc list-outside space-y-2 pl-6">
                  <li>
                    {$_("aboutUs.real_estate_revolution_text.indep_1")}
                  </li>
                  <li>
                    {$_("aboutUs.real_estate_revolution_text.indep_2")}
                  </li>
                  <li>
                    {$_("aboutUs.real_estate_revolution_text.indep_3")}
                  </li>
                  <li>
                    {$_("aboutUs.real_estate_revolution_text.indep_4")}
                  </li>
                  <li>
                    {$_("aboutUs.real_estate_revolution_text.indep_5")}
                  </li>
                  <li>
                    {$_("aboutUs.real_estate_revolution_text.indep_6")}
                  </li>
                </ul>
              </div>
              <div class="font-bold text-center">
                {$_("aboutUs.real_estate_revolution_text.high_risk_high_take")}
              </div>
            </div>
          </div>
          <div
            class="bg-white w-[60%] h-[20%] absolute origin-top-left bottom-[-67px] rotate-[4.4deg]"
          ></div>
          <div
            class="bg-white w-[60%] h-[20%] absolute origin-top-right bottom-[-67px] right-0 rotate-[-4.4deg]"
          ></div>
          <div
            class="bg-white w-[60%] h-[20%] absolute origin-bottom-left top-[-67px] rotate-[-4.4deg]"
          ></div>
          <div
            class="bg-white w-[60%] h-[20%] absolute origin-bottom-right top-[-67px] right-0 rotate-[4.4deg]"
          ></div>
        </div>
      </div>
      <!-- {#if currentLang === "en-US"}
        <img
          style="width: 1060px; justify-self: center;"
          src={revInRealState}
          alt="revolution in real state"
        />
      {/if} -->
      <!-- {#if currentLang !== "en-US"}
        <img
          style="width: 1060px; justify-self: center;"
          class="evoDesktop"
          src={revInRealStateMn}
          alt=""
        />
        <img
          style="width: 100%;"
          class="evoTablet"
          src="https://repcmsneu.blob.core.windows.net/cms/sites/kw-mongolia/pts_images/financeTabletEvo.svg"
          alt=""
        />
        <img
          style="width: 100%;"
          class="evoMobile"
          src="https://repcmsneu.blob.core.windows.net/cms/sites/kw-mongolia/pts_images/financePhoneEvo.svg"
          alt=""
        />
      {/if} -->
    </div>
  </section>
</div>

<div>
  <section style="margin-top: 30px;" class="whyLevel">
    <div class="Kwcontainer">
      <div class="whyLevelSurgalt">
        <div class="whyLevelSurgaltFrame">
          <h2
            class="globalBold uppercase"
            style="color:white; margin-bottom: 18px; text-align:left"
          >
            {$_("aboutUs.WorldStandartTraining.title")}
          </h2>
          <p>
            {$_("aboutUs.WorldStandartTraining.text")}
          </p>
        </div>
        <img
          src="https://repcmsneu.blob.core.windows.net/cms/sites/kw-mongolia/pts_images/kwkwBook_1.webp"
          alt=""
        />

        <img
          src="https://repcmsneu.blob.core.windows.net/cms/sites/kw-mongolia/pts_images/kwqwer (1).webp"
          alt=""
        />

        <div class="whyLevelSurgaltFrame whyLevelSurgaltFrameThree">
          <h2
            style="color:white; font-weight: bold; margin-bottom: 18px;"
            class="uppercase"
          >
            {$_("aboutUs.BestTechnology.title")}
          </h2>
          <!-- <h4 style="font-weight: bold"> KW ТЕХНОЛОГИЙН КОМПАНИ БОЛОХ НЬ </h4> -->
          <p>
            {$_("aboutUs.BestTechnology.text")}
          </p>
        </div>
      </div>
    </div>
  </section>
</div>

<div>
  <section class="life">
    <div class="Kwcontainer">
      <h1 style="font-weight: bold;">
        {$_("aboutUs.passive_income_opportunity")}
      </h1>
      <!--  <div class="lifeBorder"></div> -->
      <div class="lifeBaylag">
        <img class="kwlifeGraphicsDesktop" src={growthGraph} alt="" />
        <div class="lifeBayGap">
          <div class="lifeBaylagP lifeBaylagP-top">
            <h3
              style="color: #bd152e; font-size: 18px; text-align: start; font-weight:bold;"
              class="uppercase"
            >
              {$_("aboutUs.PassiveIncome.CultureOfSharing.title")}
            </h3>
            <p>
              {$_("aboutUs.PassiveIncome.CultureOfSharing.text")}
            </p>
          </div>
          <img class="kwlifeGraphicsMobile" src={growthGraph} alt="" />
          <div class="lifeBaylagP lifeBaylagP-bottom">
            <h3
              style="font-weight: bold; font-size: 18px; text-align: start; color: black;"
            >
              <span style="color: #bd152e; font-size: 18px;" class="uppercase">
                {$_("aboutUs.PassiveIncome.OverBillionShared.title")}</span
              >
            </h3>
            <p>
              {$_("aboutUs.PassiveIncome.OverBillionShared.text")}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<div>
  <section class="kwCulture">
    <div class="Kwcontainer">
      <div class="kwCultureBody">
        <div class="kwCultureBodySection">
          <h3 style="font-weight: bold; font-size: 18px;" class="uppercase">
            {$_("aboutUs.CultureOfGiving.title")}
          </h3>
          <div>
            <p>
              {$_("aboutUs.CultureOfGiving.text")}
            </p>
          </div>
        </div>
        <div class="kwCultureBodySection-white">
          <h3 style="font-weight: bold; font-size: 18px;" class="uppercase">
            {$_("aboutUs.KWCare.title")}
          </h3>
          <div style="text-align: justify;">
            <p>
              {$_("aboutUs.KWCare.text")}
            </p>
          </div>
        </div>
        <img
          style="width: 100%;"
          src="https://repcmsneu.blob.core.windows.net/cms/sites/kw-mongolia/pts_images/kwKid.webp"
          alt=""
        />
        <div class="kwCultureBodySection min-[1100px]:content-center">
          <h3 style="font-weight: bold; font-size: 18px;" class="uppercase">
            {$_("aboutUs.RedDay.title")}
          </h3>
          <div class="mb-4.5">
            <p>
              {$_("aboutUs.RedDay.text")}
            </p>
          </div>
          <h3 style="font-weight: bold; font-size: 18px;" class="uppercase">
            {$_("aboutUs.KWKidsCan.title")}
          </h3>
          <div>
            <p>
              {$_("aboutUs.KWKidsCan.text")}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400&display=swap");

  .robotoCondensedFont ul {
    font-family: "Roboto Condensed", sans-serif;
  }
  .Kwcontainer {
    width: 90%;
    overflow: hidden;
    margin: 0 auto;
  }

  .KwcontainerOther {
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
  }

  /* .heroBanner img {
  width: 1140px;
  height: 570px;
  margin: 0 auto;
} */

  .borderBottom {
    height: 25px;
    background-color: #bd152e;
    padding: 40px;
    z-index: -1;
  }

  .globalJUS {
    text-align: justify;
    font-size: 16px;
    font-family: "Roboto Condensed", sans-serif;
    padding-right: 20px;
  }

  .globalMB-30 {
    margin-bottom: 30px;
  }

  .globalBold {
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    font-size: 30px;
  }

  .globalP {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

  .global-text {
    margin-block: 1.37em !important;
  }

  .authorGrid {
    display: grid;
    /* grid-template-columns: 0.4fr 0.6fr; */
    grid-column-gap: 5%;
  }

  .author {
    margin-top: -1%;
    /* background-color: aqua; */
  }

  .authorImage img {
    width: 433px;
    height: 289px;
    grid-column-start: 1;
  }

  .authorBody {
    margin-top: 68px;
    grid-column-start: 2;
    text-align: justify;
  }

  .leftBorder {
    margin-top: 10%;
    margin-left: 10%;
    border-left: #bd152e 5px solid;
  }

  .leftBorder h3 {
    text-align: center;
    margin-bottom: 15px;
  }

  .leftBorder24 {
    color: black;
    font-size: 24px;
    font-family: "Roboto Condensed", sans-serif;
  }

  .leftBorder20 {
    font-size: 20px;
    color: #4d4d4d;
    font-family: "Roboto Condensed", sans-serif;
  }

  .leftBorder {
    text-align: center;
    border-left: 4px solid #bd152e;
    margin-left: 25%;
    height: auto;
  }

  .leftBorder h3 {
    margin-left: -50%;
  }

  .leftSide {
    width: 40%;
    height: 550px;
    background-color: #bd152e;
    position: absolute;
    z-index: -5;
  }

  .interBody {
    grid-template-columns: 0.2fr 0.5fr;
    grid-row-gap: 15px;
    display: grid;
    z-index: 3;
    justify-content: center;
  }
  .interName {
    grid-column: 2;
  }

  .interBody,
  .interName h3 {
    text-align: start;
    padding: 5px;
    color: #bd152e;
  }

  .interNameBold {
    font-weight: bold;
  }

  .interNameItalic {
    font-style: italic;
  }

  .interTitleName .interTitleName,
  h5 {
    grid-column-start: 1;
    font-weight: bold;
    color: #f9f9ff;
  }

  .interTitleTitle {
    grid-column-start: 2;
    font-size: 18px;
    color: black;
  }

  .beSystem {
    background-color: #bd152e;
    padding: 1% 0 2% 0;
    margin-top: 60px;
  }

  .beSystemHeader h5 {
    font-size: 20px;
    font-family: "Roboto Condensed", sans-serif;
    color: white;
    text-align: center;
    font-weight: bold;
    margin: 0 auto;
  }

  .beSystem .beSystemHeaderh1 {
    background-color: #bd152e;
    width: 32%;
    text-align: center;
    margin: 0 auto;
    margin-bottom: -5%;
    isolation: isolate;
    z-index: 1;
  }

  .beSystemHeaderh1 h1 {
    font-family: "Roboto", sans-serif;
    font-size: 70px;
    color: white;
    font-weight: bold;
  }

  .beSystemFullBorder {
    border: white 2px solid;
    width: calc(100% / 2);
    margin: 0 auto;
    padding: 10px;
    padding-bottom: 50px;
  }

  .beSystemFullBorder h5 {
    font-size: 20px;
    font-family: "Roboto Condensed", sans-serif;
    color: white;
    text-align: center;
    font-weight: bold;
    margin: 0 auto;
    margin-top: 10%;
    margin-bottom: 3%;
  }

  .beSystemGrid {
    display: grid;
    grid-template-columns: 0.45fr 0.55fr;
    grid-column-gap: 10px;
    margin-bottom: 10px;
  }

  .beSystemName h6 {
    color: white;
    font-size: 16px;
    font-weight: bold;
    font-family: "Roboto Condensed", sans-serif;
    text-align: end;
    margin: 0 auto;
  }

  .beSystemTitle h6 {
    color: white;
    font-size: 16px;
    font-weight: 300;
    font-family: "Roboto Condensed", sans-serif;
    text-align: start;
    margin: 0 auto;
  }

  .history {
    margin-top: 30px;
  }

  .history h1 {
    text-align: center;
    font-size: 35px;
    margin-bottom: 5px;
  }

  .historyTimeLineBoder {
    width: 190px;
    margin: 0 auto;
    /* background-color: aqua; */
    border-bottom: 4px #bd152e solid;
    margin-bottom: 50px;
  }

  .historyTimeLine {
    overflow-x: scroll;
  }

  .historyTimeLine img {
    width: 1900px;
  }

  .historyTimeLinePhone {
    display: none;
  }

  .world {
    margin-top: 30px;
    background-color: #bd152e;
  }

  .world h1 {
    max-width: 300px;
    margin: 0 auto;
    margin-top: 30px;
    font-size: 24px;
    color: white;
    text-align: center;
  }

  .wordBrandBorder {
    margin: 0 auto;
    width: 250px;
    margin-top: 5px;
    border-bottom: 4px white solid;
    margin-bottom: 50px;
  }

  .wordBrand {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 60px;
    grid-row-gap: 50px;
    display: grid;
    margin-bottom: 50px;
    /* background-color: aqua; */
  }

  .wordBrandNameBot {
    display: grid;
    grid-column-gap: 70px;
    grid-row-gap: 50px;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 50px;
    padding-left: 120px;
    padding-right: 120px;
  }

  .wordBrandName img {
    width: 150px;

    margin-bottom: 10px;
  }

  .wordBrandName {
    margin-top: 20px;
    font-size: 20px;
    color: white;
    text-align: center;
  }

  .worldKW img {
    height: 500px;
    object-fit: cover;
    width: 100%;
  }

  .worldKW {
    margin-top: 30px;
  }

  .worldKW h1 {
    text-align: center;
    color: #bd152e;
    font-size: 24px;
  }

  .worldwkDahinBorder {
    border-bottom: 4px #bd152e solid;
    width: 250px;
    margin: 0 auto;
    margin-bottom: 30px;
  }

  .worldwkDahin {
    margin-top: 15px;
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
    margin-bottom: 30px;
    grid-column-gap: 10px;
    align-items: center;
  }

  .worldwkDahin p {
    grid-column-start: 1;
    font-size: 20px;
    text-align: justify;
  }

  .worldwkDahinNumber h1 {
    font-weight: 400;
  }

  .worldwkDahinNumber {
    display: flex;
    justify-content: space-evenly;
    column-gap: 10px;
  }

  .worldKWDahinNumberSmall {
    font-size: 16px !important;
  }

  .worldwkDahinNumberZ h1 {
    font-size: 90px;
    text-align: center;
    font-weight: 400;
    /* margin-block-end: 0.63em !important; */
  }

  .worldwkDahinNumberZ h4 {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: #bd152e;
    font-family: "Roboto", sans-serif;
  }

  .worldwkCountry {
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
  }

  .evo {
    margin-top: 40px;
  }

  .evo h1 {
    color: #bd152e;
    text-align: center;
    font-size: 24px;
  }

  .evoBorder {
    border-bottom: 4px solid #bd152e;
    width: 500px;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  .evoTablet {
    display: none;
  }

  .evoMobile {
    display: none;
  }

  .whyLevelSurgalt {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
  }

  .whyLevelSurgalt img {
    max-width: 70%;
    padding: 30px;
    margin: 0 auto;
  }

  .whyLevelSurgaltFrame {
    background-color: #bd152e;
    color: white;
    height: 100%;
    text-align: justify;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .whyLevelSurgaltFrame h2 {
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 30px;
    margin-bottom: 10px;
  }

  .whyLevelSurgaltFrame h4 {
    font-family: "Roboto", sans-serif;
    margin-top: 5px;
    padding-left: 30px;
    font-size: 16px;
    color: #ccd3d8;
  }

  .whyLevelSurgaltFrame p {
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 30px;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 16px;
  }

  .life {
    margin-top: 40px;
  }

  .life h1 {
    text-align: center;
    color: #bd152e;
    font-size: 24px;
    font-family: "Roboto", sans-serif;
  }

  .lifeBorder {
    border-bottom: 4px solid #bd152e;
    width: 300px;
    margin: 0 auto;
    margin-bottom: 30px;
  }

  .lifeBaylag {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
  }
  .lifeBayGap {
    padding-top: 80px;
  }

  .lifeBaylagP-top h3 {
    font-family: "Roboto Condensed", sans-serif;
  }

  .lifeBaylagP-bottom h3 {
    font-family: "Roboto Condensed", sans-serif;
  }

  .lifeBaylag img {
    width: 100%;
    margin: 0 auto;
  }

  .lifeBaylagP {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 30px;
  }

  .lifeBaylagP h1 {
    text-align: start;
  }

  .lifeBaylagP p {
    text-align: justify;
    font-size: 16px;
    font-family: "Roboto Condensed", sans-serif;
    padding-right: 20px;
  }

  .lifeBaylagP-bottom {
    grid-column-start: 2;
  }

  .kwlifeGraphicsMobile {
    display: none;
  }

  .kwCultureBody {
    grid-template-columns: repeat(2, 1fr);
    display: grid;
    padding: 10px;
    margin-top: 40px;
    align-items: stretch;
  }

  .kwCultureBody img {
    max-width: 100%;
    object-fit: cover;
  }

  .kwCultureBodySection {
    padding: 30px;
    background-color: #bd152e;
    color: white;
    text-align: start;
    text-align: justify;
  }

  .kwCultureBodySection p {
    font-size: 16px;
    font-family: "Roboto Condensed", sans-serif;
  }

  .kwCultureBodySection h3 {
    color: white;
    text-align: start;
    margin-bottom: 18px;
    font-family: "Roboto", sans-serif;
  }

  .kwCultureBodySection-white h3 {
    margin-bottom: 16px;
    color: #bd152e;
    font-family: "Roboto", sans-serif;
  }

  .kwCultureBodySection-white {
    align-content: center;
    padding: 30px;
    color: black;
    text-align: start;
  }

  .ajliinBair {
    margin-top: 60px;
    width: 100%;
    padding-bottom: 30px;
    padding-top: 30px;
    background-color: #bd152e;
  }

  .ajliinBair h1 {
    text-align: center;
    color: white;
    font-size: 24px;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
  }

  .agentSection {
    min-height: 820px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right center;
    position: relative;
    display: grid;
    grid-template-columns: 0.6fr 0.4fr;
    grid-template-rows: 0.7fr 0.3fr;
    margin-bottom: 60px;
    /* min-height: 820px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right center;
  position: relative;
  display: grid;
  grid-template-columns: 0.6fr 0.4fr;
  grid-template-rows: 0.65fr 0.35fr;
  margin-bottom: 60px; */
  }

  .agentImageSectionText h1 {
    font-size: 24px;
    font-family: "Roboto", sans-serif;
    color: white;
  }

  .agentImageSectionText {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    margin: 0px 0px 20px 200px;
    /* margin-left: 60px; */
  }

  .agentFlex {
    display: flex;
    align-items: flex-end;
    grid-column-start: 1;
    flex-direction: row;
    justify-content: flex-end;
    /* display: flex;
  justify-content: center;
  align-items: flex-end;
  grid-column-start: 1; */
  }

  .agentGrid {
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 110px;
  }

  .agentGridSectionBorder {
    border-bottom: 4px solid #bd152e;
    width: 75%;
  }

  .agentGridSection {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .agentGridSection h1 {
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    text-align: center;
    font-weight: bold;
  }

  .agentGridSectionShimtgel {
    grid-column: 1/4;
  }

  .agentGridSectionShimtgel h1 {
    font-size: 16px;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: bold;
    text-align: center;
  }

  .agentImageSectionTextMobile,
  .agentGridMobile {
    display: none;
  }

  .agentHuvi {
    margin-bottom: 30px;
  }

  .agentGraphicGrid {
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
    grid-column-gap: 60px;
    margin-bottom: 60px;
  }

  .agentGraphicImg {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .agentGraphicGrid img {
    max-width: 95%;
  }

  .agentGraphicText {
    flex-direction: column;
    display: flex;
    align-items: start;
  }

  .agentGraphicText h1 {
    font-family: "Roboto", sans-serif;
    font-size: 21px;
    color: #bd152e;
  }

  .agentGraphicText p {
    text-align: justify;
    font-size: 16px;
    font-family: "Roboto Condensed", sans-serif;
    color: black;
    font-weight: 500;
  }

  .agentGraphic {
    margin-bottom: 30px;
  }

  .agentWorldSurgaltGrid {
    display: grid;
    grid-template-columns: repeat(20, 1fr);
  }

  .agentWorldSurgaltImg {
    min-height: 600px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    grid-row: 1/1;
    grid-column: 3/21;
  }

  .agentWorldSurgaltText {
    background-color: #bd152e;
    padding: 60px 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    isolation: isolate;
    z-index: 5;
    grid-row: 2/2;
    grid-column: 1/8;
    margin-top: -26.5%;
  }

  .agentWorldSurgaltTextPara h1 {
    color: white;
    font-size: 21px;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
  }

  .agentBidenteiNegdehTextPara h1 {
    color: white;
    font-size: 21px;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
  }

  .agentWorldSurgaltTextPara p {
    font-size: 16px;
    color: white;
    font-family: "Roboto Condensed", sans-serif;
    text-align: justify;
    font-weight: 400;
  }

  /*  */

  .staffWorldSurgaltGrid {
    display: grid;
    grid-template-columns: repeat(20, 1fr);
  }

  .staffWorldSurgalt {
    margin-bottom: 30px;
  }

  .staffWorldSurgaltImg {
    min-height: 680px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    grid-row: 1/1;
    grid-column: 3/21;
  }

  .staffWorldSurgaltText {
    background-color: #bd152e;
    padding: 80px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    isolation: isolate;
    z-index: 5;
    grid-row: 2/2;
    grid-column: 1/8;
    margin-top: -23.5%;
  }

  .staffWorldSurgaltTextPara h1 {
    color: white;
    font-size: 21px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }

  .staffWorldSurgaltTextPara p {
    font-size: 16px;
    color: white;
    font-family: "Roboto Condensed", sans-serif;
    text-align: justify;
    font-weight: 400;
  }

  .agentBidenteiNegdehGrid {
    display: grid;
    grid-template-columns: repeat(20, 1fr);
  }

  .agentBidenteiNegdehText {
    background-color: #bd152e;
    padding: 50px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    isolation: isolate;
    z-index: 5;
    grid-column: 14/21;
    margin-bottom: -10%;
  }

  .agentBidenteiNegdehTextPara p {
    color: white;
    font-size: 16px;
    font-family: "Roboto Condensed", sans-serif;
    text-align: justify;
    font-weight: 400;
  }

  .agentBidenteiNegdehImage {
    grid-row: 2/2;
    grid-column: 1/19;
    max-width: 100%;
    min-height: 710px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
  }

  .agentBidenteiNegdehTextPara input[type="button"] {
    background-color: white;
    border: none;
    color: #bd152e;
    padding: 16px 32px;
    text-decoration: none;
    cursor: pointer;
    font-size: 16px;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: bold;
    margin-top: 30px;
  }

  .agentBidenteiNegdekh {
    margin-bottom: 60px;
    margin-top: 30px;
  }

  /*  */

  .staffBidenteiNegdehGrid {
    display: grid;
    grid-template-columns: repeat(20, 1fr);
  }

  .staffBidenteiNegdehText {
    background-color: #bd152e;
    padding: 60px 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    isolation: isolate;
    z-index: 5;
    grid-column: 14/21;
    margin-bottom: -20%;
  }

  .staffBidenteiNegdehTextPara p {
    color: white;
    font-size: 16px;
    font-family: "Roboto Condensed", sans-serif;
    text-align: justify;
    font-weight: 400;
  }

  .staffBidenteiNegdehImage {
    grid-row: 2/2;
    grid-column: 1/19;
    max-width: 100%;
    min-height: 720px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left center;
    position: relative;
  }

  .staffBidenteiNegdehTextPara input[type="button"] {
    background-color: white;
    border: none;
    color: #bd152e;
    padding: 16px 32px;
    text-decoration: none;
    cursor: pointer;
    font-size: 16px;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: bold;
    margin-top: 30px;
  }

  .ajil {
    margin-bottom: 60px;
  }

  .ajliinBairGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .ajliinBairLeft {
    padding: 20px 50px;
    background-color: #f1f1f2;
    /* background-color: aqua; */
  }

  .ajliinBairRight {
    padding: 20px 50px;
    background-color: #f1f1f2;
  }

  .ajliinBairLeft span {
    font-weight: bold;
    color: #bd152e;
  }

  .ajliinBairRight span {
    font-weight: bold;
    color: #bd152e;
  }

  .ajliinBairLeft,
  .ajliinBairRight,
  h3,
  p,
  span {
    font-size: 16px;
    font-family: "Roboto Condensed", sans-serif;
  }

  .ajliinBairLeftZar {
    display: grid;
    grid-template-columns: 0.04fr 0.9fr;
    align-items: baseline;
  }

  footer {
    margin-top: 30px;
    background-color: #f1f1f2;
  }

  .footerData li {
    list-style-type: none;
    margin: 0;
    font-size: 16px;
  }

  .footerData {
    padding-top: 4%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    line-height: 1.5;
    padding-bottom: 3%;
    justify-items: center;
  }

  .footerData a {
    text-decoration: none;
    color: black;
    font-size: 16px;
    font-family: "Roboto Condensed", sans-serif;
  }

  .footerOne {
    color: black;
    text-align: start;
    font-weight: 300;
    grid-row: 2/2;
    grid-column: 1/2;
  }

  .footerOne h2 {
    margin: 0 auto;
    color: black;
    font-size: 16px;
    font-family: "Roboto Condensed", sans-serif;
  }

  .footerOne a {
    font-size: 16px;
    color: black;
    font-family: "Roboto Condensed", sans-serif;
  }

  .footerContact {
    text-align: start;
    grid-column: 3/4;
    grid-row: 2/2;
  }

  .footerFollowMe {
    grid-column: 4/5;
    grid-row: 2/2;
  }

  .footerAbout,
  .footerContact,
  .footerFollowMeDis,
  h2 {
    margin: 0;
    font-size: 20px;
  }

  .footerAbout {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    text-align: start;
    grid-column: 2/3;
    grid-row: 2/2;
  }

  .footerFollowMeDis {
    display: flex;
    text-align: center;
    justify-content: center;
  }

  .footerData img {
    width: 108.75px;
    height: 30px;
    grid-row: 1/2;
    grid-column: 1/2;
    margin-left: -55px;
  }

  .footerFollowMeBorder {
    display: flex;
    width: 35px;
    height: 35px;
    text-align: center;
    border-radius: 100%;
    background-color: #bd152e;
    margin-right: 10px;
    justify-content: space-evenly;
  }

  .footerFollowMeBorder i {
    font-size: 24px;
    margin-top: 10px;
    color: white;
  }

  .blogHeader h1 {
    font-size: 16px;
    font-family: "Roboto Condensed", sans-serif;
    margin-bottom: 10px;
  }

  .blogText p {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 16px;
    text-align: justify;
    margin: 0;
  }

  .blogYear h1 {
    margin: 0px;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 16px;
    font-weight: bold;
  }

  .blogSection img {
    width: 100%;
  }

  .blogLink a {
    text-decoration: none;
    color: #bd152e;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 16px;
  }

  .blogLorem h1 {
    font-family: "Roboto Condensed", sans-serif;
    font-weight: bold;
    font-size: 16px;
  }

  .blogSectionMoreImages {
    width: 100%;
  }

  .blogSectionMoreImages img {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 30%;
  }

  .blogSectionImagesMore img {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .blogSectionMoreImages {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .blogSectionMoreImages > img {
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .blogSectionHighLight h1 {
    font-size: 18px;
    font-family: "Roboto Condensed", sans-serif;
    color: #bd152e;
    font-weight: bold;
    font-style: italic;
  }

  .blogMarginZero {
    margin: 0;
  }

  .blogSection img {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .content-page h2 {
    font-size: 18px;
    text-align: justify;
    line-height: 1.5;
  }

  .no-results > h2 {
    text-align: center;
  }

  .devCustomImage > a > img {
    width: 370px;
    height: 250px;
  }
  .same-height-logo {
    height: 49px;
    object-fit: contain;
  }

  @media (max-width: 1500px) {
    .agentGrid {
      grid-column-gap: 110px;
    }

    .agentSection {
      grid-template-columns: 0.6fr 0.4fr;
    }

    .agentWorldSurgaltText {
      padding: 60px 60px;
    }

    .agentWorldSurgaltImg {
      grid-column: 3/21;
    }

    .agentBidenteiNegdehImage {
      grid-column: 1/19;
    }

    .staffWorldSurgaltImg {
      grid-column: 3/21;
    }

    .staffBidenteiNegdehImage {
      grid-column: 1/19;
    }

    .agentWorldSurgaltText {
      padding: 60px 60px;
    }
  }

  @media (max-width: 1400px) {
    .agentSection {
      grid-template-columns: 0.6fr 0.4fr;
      /* grid-template-rows: 0.65fr 0.35fr; */
    }

    .agentWorldSurgaltText {
      grid-column: 1/8;
    }

    .staffWorldSurgaltText {
      grid-column: 1/8;
    }

    .agentBidenteiNegdehText {
      grid-column: 14/21;
    }

    .staffBidenteiNegdehText {
      grid-column: 14/21;
    }
  }

  @media (max-width: 1300px) {
    .agentImageSectionText {
      margin: 0;
    }

    .footerData img {
      margin-left: 0;
    }

    .footerData {
      grid-template-columns: repeat(2, 1fr);
      justify-items: start;
      padding-left: 10%;
      padding-right: 10%;
    }

    .footerOne-left {
      grid-row: 2/2;
    }

    .footerAbout-left {
      grid-column: 1/2;
      grid-row: 3/4;
    }

    .footerFollowMe-left {
      grid-column: 1/2;
      grid-row: 4/5;
    }

    .footerFollowMe,
    .footerAbout,
    .footerContact {
      margin-top: 20px;
    }

    .footerContact-right {
      grid-column: 2/3;
      grid-row: 3/4;
    }

    .ajliinBairGrid {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (max-width: 1296px) {
    .interName h3 {
      padding-left: 18px;
    }
    .interTitleTitle p {
      padding-left: 18px;
    }
    .Kwcontainer {
      width: 100%;
      overflow: hidden;
      margin: 0 auto;
    }
    .both-space {
      padding-inline: 20px;
    }
    .front-space {
      padding-left: 20px;
    }
  }

  @media (max-width: 1200px) {
    .worldwkDahin {
      grid-template-columns: 1fr 1fr;
    }

    .staffBidenteiNegdehText {
      grid-column: 12/21;
    }

    .staffWorldSurgaltText {
      grid-column: 1/10;
    }

    .agentBidenteiNegdehText {
      grid-column: 12/21;
    }

    .agentWorldSurgaltText {
      grid-column: 1/10;
    }

    .agentFlex {
      grid-column: 1/7;
      justify-content: center;
    }

    .agentGrid h1 {
      isolation: isolate;
      z-index: 5;
    }

    .agentGrid {
      /* opacity: 70%; */
      background-color: rgba(236, 236, 236, 0.7);
      position: relative;
    }

    .agentGridSection {
      isolation: isolate;
      z-index: 10;
    }
  }

  @media (max-width: 1199px) {
    .heroBanner img {
      width: 940px;
      height: 470px;
    }

    .authorImage img {
      width: 357.19px;
      height: 238.23px;
    }

    .beSystemFullBorder {
      width: calc(100% - 400px);
    }

    .beSystem .beSystemHeaderh1 {
      width: 40%;
    }

    .devCustomImage > a > img {
      width: 300px;
      height: 250px;
    }
  }

  @media (max-width: 1100px) {
    .whyLevelSurgaltFrame h2 {
      font-family: "Roboto", sans-serif;
      font-size: 18px;
      padding-left: 30px;
      padding-right: 30px;
      padding-top: 30px;
      margin-bottom: 10px;
    }

    .whyLevelSurgaltFrame p {
      padding-left: 30px;
      padding-right: 30px;
      padding-bottom: 30px;
      font-family: "Roboto Condensed", sans-serif;
      font-size: 16px;
    }

    .staffWorldSurgaltText {
      padding: 60px 60px;
    }

    .agentWorldSurgaltGrid,
    .agentBidenteiNegdehGrid {
      grid-template-columns: repeat(1, 1fr);
    }

    .agentWorldSurgaltImg {
      grid-column: 1/1;
      grid-row: 1/1;
    }

    .agentWorldSurgaltText {
      grid-column: 1/1;
      grid-row: 2/2;
      margin: 0;
    }

    .staffWorldSurgaltGrid,
    .staffBidenteiNegdehGrid {
      grid-template-columns: repeat(1, 1fr);
    }

    .staffWorldSurgaltImg {
      grid-column: 1/1;
      grid-row: 1/1;
    }

    .staffWorldSurgaltText {
      grid-column: 1/1;
      grid-row: 2/2;
      margin: 0;
    }

    .agentBidenteiNegdehText {
      grid-column: 1/1;
      grid-row: 2/2;
      margin: 0;
    }

    .agentBidenteiNegdehImage {
      grid-column: 1/1;
      grid-row: 1/1;
    }

    .staffBidenteiNegdehText {
      grid-column: 1/1;
      grid-row: 2/2;
      margin: 0;
    }

    .staffBidenteiNegdehImage {
      grid-column: 1/1;
      grid-row: 1/1;
    }

    .authorGrid {
      grid-template-columns: 1fr;
    }

    .authorImage {
      margin-bottom: -10%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    .authorImage img {
      width: 470px;
      height: 313.48px;
    }

    .leftBorder {
      margin-top: 25%;
      width: 100%;
      height: 38px;
    }

    .authorBody {
      margin-top: 15%;
      grid-column: 1;
      grid-row-start: 2;
    }

    .historyTimeLine {
      display: none;
    }

    .historyTimeLinePhone {
      display: block;
    }

    .wordBrand {
      grid-template-columns: 1fr;
      display: grid;
      padding: 30px;
    }

    .wordBrandNameBot {
      grid-template-columns: 1fr;
      padding: 30px;
    }

    .wordBrand img {
      width: 150px;
    }

    .wordBrandName {
      grid-template-columns: 0.5fr 0.5fr;
      display: grid;
    }

    .wordBrandNameLeft {
      grid-column-start: 1;
    }

    .wordBrandNameRight {
      grid-column-start: 2;
    }

    .worldwkDahin {
      grid-template-columns: 1fr;
      display: grid;
    }

    .worldwkDahin p {
      margin-top: 10px;
      grid-row-start: 2;
    }

    .lifeBaylagP-top {
      grid-row-start: 1;
    }

    .lifeBaylag {
      grid-template-columns: repeat(1, 1fr);
    }
    .lifeBayGap {
      padding-top: 0px;
    }

    /* lifeBaylagP */
    .lifeBaylagP {
      padding: 20px;
    }

    .kwlifeGraphicsDesktop {
      display: none;
    }

    .kwlifeGraphicsMobile {
      display: block;
    }

    .kwCultureBody {
      grid-template-columns: repeat(1, 1fr);
    }

    .globalJUS {
      text-align: justify;
      font-size: 16px;
      font-family: "Roboto Condensed", sans-serif;
      padding-right: 0px;
    }

    .evoDesktop {
      display: none;
    }

    .evoMobile {
      display: none;
    }

    .evoTablet {
      display: block;
    }
  }

  @media (max-width: 1000px) {
    .agentImageSectionText h1 {
      font-size: 24px;
    }

    .agentGraphicGrid {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (max-width: 991px) {
    .heroBanner {
      padding-top: 40px;
    }
    .Kwcontainer {
      width: 100%;
    }
    .both-space {
      padding-inline: 20px;
    }
    .front-space {
      padding-left: 20px;
    }

    .heroBanner img {
      width: 720px;
      height: 360px;
    }

    .authorImage img {
      width: 360px;
      height: 240.11px;
    }

    .agentImageSectionText {
      margin-left: 10px;
    }

    .beSystemFullBorder {
      width: calc(100% - 200px);
    }

    .beSystem .beSystemHeaderh1 {
      width: 50%;
      margin-bottom: -7%;
    }
  }

  @media (max-width: 880px) {
    .heroBanner {
      padding-top: 40px;
    }
    .agentImageSectionTextMobile,
    .agentGridMobile {
      display: block;
    }

    .agentImageSectionText,
    .agentFlex {
      display: none;
    }

    .agentImageSectionTextMobile {
      background-color: #bd152e;
      padding: 10px;
    }

    .agentImageSectionTextMobile h1 {
      font-size: 25px;
      font-family: "Roboto", sans-serif;
      color: white;
      text-align: center;
    }

    .agentGridMobile {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      background-color: #ececec;
    }

    .agentGridSectionMobile h1 {
      color: black;
      font-size: 20px;
      font-family: "Roboto Condensed", sans-serif;
      text-align: center;
    }

    .agentGridSectionBorderMobile {
      border-bottom: 4px solid #bd152e;
      width: 40%;
      margin: 0 auto;
    }

    .agentGridSectionShimtgelMobile h1 {
      color: black;
      font-size: 20px;
      font-family: "Roboto Condensed", sans-serif;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    .heroBanner {
      padding-top: 40px;
    }
    .author {
      margin-top: -8%;
      /* background-color: aqua; */
    }
    .worldKWDahinNumberSmall {
      font-size: 30px !important;
    }

    .heroBanner img {
      width: 100%;
      height: 100%;
    }

    .agentWorldSurgaltText,
    .agentBidenteiNegdehText {
      padding: 20px 20px;
    }

    .staffWorldSurgaltText,
    .staffBidenteiNegdehText {
      padding: 20px 20px;
    }

    .authorImage {
      grid-template-columns: 1fr;
      justify-items: center;
    }

    .authorImage img {
      margin-bottom: 10%;
    }

    .leftBorder {
      width: auto;
      height: 75%;
      margin: 0;
    }

    .leftBorder h3 {
      margin-left: 0 auto;
      text-align: center;
      padding-left: 70px;
    }

    .interName h3 {
      color: white;
    }

    .leftSide {
      display: none;
    }

    .interBodyMobile {
      background-color: black;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      color: white;
      text-align: center;
      padding: 30px;
    }
    .interName {
      grid-column: 1;
    }
    .interName h3 {
      text-align: center;
    }

    .interName,
    h3 {
      color: white;
    }

    .interTitleName,
    .interTitleTitle {
      grid-column-start: 1;
    }

    .interBodyMobile,
    .interTitleTitle p {
      text-align: center;
      color: white;
    }

    .i {
      margin: 0px;
    }

    .wkbox {
      border-bottom: 4px white solid;
      width: 90%;
      margin: 0 auto;
      padding: 50px;
    }

    .borderBottom h2 {
      display: none;
    }

    .worldwkDahin {
      grid-template-columns: 1fr;
      display: grid;
    }

    .worldwkDahinNumber {
      display: flex;
      row-gap: 20px;
      margin-bottom: 10px;
      flex-direction: column;
    }

    .worldwkDahinNumberZ {
      text-align: center;
    }

    .worldwkDahin p {
      margin-top: 10px;
      grid-row-start: 2;
      padding-right: 20px;
    }

    .evo h1 {
      color: #bd152e;
      text-align: center;
      font-size: 20px;
    }

    .evoBorder {
      width: 300px;
    }

    .evoDesktop {
      display: none;
    }

    .whyLevelSurgalt {
      grid-template-columns: repeat(1, 1fr);
    }

    .whyLevelSurgaltFrameThree {
      grid-row-start: 3;
    }

    .whyLevelSurgalt img {
      width: 365px;
      margin: 0 auto;
    }

    .beSystemFullBorder {
      margin-bottom: 10%;
    }

    .beSystem .beSystemHeaderh1 {
      width: 40%;
      margin-bottom: -5%;
    }
    .beSystem {
      background-color: #bd152e;
      padding: 1% 0 2% 0;
      margin-top: 30px;
    }

    .beSystemHeaderh1 h1 {
      font-size: 38px;
    }

    .footerData {
      padding-left: 15%;
      grid-template-columns: repeat(1, 1fr);
    }

    .footerAbout,
    .footerOne,
    .footerContact,
    .footerFollowMe {
      grid-column: 1/2;
    }

    .footerData {
      grid-row: 1/2;
    }

    .footerOne {
      grid-row: 2/3;
    }

    .footerContact {
      grid-row: 3/4;
    }

    .footerFollowMe {
      grid-row: 6/7;
    }

    .footerContact {
      grid-row: 4/5;
    }

    .ajliinBairLeft h3 {
      text-align: left;
      color: black;
    }

    .ajliinBairRight h3 {
      text-align: left;
      color: black;
    }

    .globalJUS {
      text-align: justify;
      font-size: 16px;
      font-family: "Roboto Condensed", sans-serif;
      padding-right: 0px;
    }
  }

  @media (max-width: 680px) {
    .blogSectionMoreImages {
      justify-content: center;
    }

    .blogSectionMoreImages img {
      width: 80%;
      font-weight: bold;
    }
  }

  @media (max-width: 670px) {
    .wordBrand {
      grid-template-columns: repeat(1, 1fr);
      grid-column-gap: 30px;
      grid-row-gap: 30px;
      display: grid;
      margin-bottom: 50px;
    }

    .globalJUS {
      text-align: justify;
      font-size: 16px;
      font-family: "Roboto Condensed", sans-serif;
      padding-right: 0px;
    }

    .evoDesktop {
      display: none;
    }

    .evoTablet {
      display: none;
    }

    .evoMobile {
      display: block;
    }
  }

  @media (max-width: 600px) {
    .beSystem .beSystemHeaderh1 {
      margin-bottom: -6%;
      width: 40%;
    }
  }

  @media (max-width: 560px) {
    .wkboxName {
      font-size: 20px;
    }

    .wkbox {
      padding-top: 30px;
      padding-left: 0px;
      padding-right: 0px;
    }

    .wordBrandName h4 {
      font-size: 12px;
      margin-top: 8px;
    }

    .wordBrandName img {
      width: 100px;
    }

    .lifeBaylag img {
      width: 375px;
    }

    .lifeBaylagP h3 {
      font-size: 15px;
    }

    .kwlifeGraphicsMobile {
      width: 375px;
    }

    .globalJUS {
      text-align: justify;
      font-size: 16px;
      font-family: "Roboto Condensed", sans-serif;
      padding-right: 0px;
    }
  }

  @media (max-width: 550px) {
    .beSystem .beSystemHeaderh1 {
      margin-bottom: -8%;
    }

    .beSystemFullBorder {
      width: 90%;
    }
  }

  @media (max-width: 450px) {
    .heroBanner {
      padding-top: 80px;
    }
    .beSystem .beSystemHeaderh1 {
      width: 70%;
      margin-bottom: -10%;
    }
  }
  .beSystem .beSystemHeaderh1 {
    margin-top: 40px;
  }

  .beSystemHeaderh1 h1 {
    margin-bottom: revert-layer;
  }
</style>

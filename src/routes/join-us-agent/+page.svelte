<script lang="ts">
  import { _ } from "svelte-i18n";
</script>

<section class="agentHuvi">
  <div>
    <div class="KwcontainerOther">
      <div
        style="background-image: url('https://repcmsneu.blob.core.windows.net/cms/sites/kw-mongolia/pts_images/agent_de0036_(1).webp');"
        class="agentSection"
      >
        <div class="agentImageSectionText">
          <h1
            class="max-[1500px]:pl-6 max-[1300px]:pl-[172px] max-[1200px]:pl-9 pb-0 min-[880px]:pb-[30px] min-[1300px]:pb-0 min-[1580px]:pb-[30px] min-[1580px]:pb-[20px] min-[1720px]:pb-0"
          >
            {$_("joinUsAgent.commision")}
          </h1>
        </div>
        <div
          class="agentFlex pb-5 min-[1580px]:pb-[130px] min-[1620px]:pb-[120px] min-[1720px]:pb-18 min-[1580px]:text-white"
        >
          <div class="agentGrid">
            <div class="agentGridSection">
              <h1>{$_("joinUsAgent.firstYear")}</h1>
              <div class="agentGridSectionBorder"></div>
              <h1>64,800,000₮</h1>
            </div>
            <div class="agentGridSection">
              <h1>{$_("joinUsAgent.secondYear")}</h1>
              <div class="agentGridSectionBorder"></div>
              <h1>108,000,000₮</h1>
            </div>
            <div class="agentGridSection">
              <h1>{$_("joinUsAgent.thirdYear")}</h1>
              <div class="agentGridSectionBorder"></div>
              <h1>151,200,000₮</h1>
            </div>
            <div class="agentGridSectionShimtgel">
              <h1>{$_("joinUsAgent.saleCommision")}</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="agentImageSectionTextMobile">
        <h1>{$_("joinUsAgent.commision")}</h1>
      </div>

      <div class="agentGridMobile">
        <div class="agentGridSectionMobile">
          <h1>{$_("joinUsAgent.firstYear")}</h1>
          <div class="agentGridSectionBorderMobile"></div>
          <h1>51,200,000₮</h1>
        </div>
        <div class="agentGridSectionMobile">
          <h1>{$_("joinUsAgent.secondYear")}</h1>
          <div class="agentGridSectionBorderMobile"></div>
          <h1>72,850,000₮</h1>
        </div>
        <div class="agentGridSectionMobile">
          <h1>{$_("joinUsAgent.thirdYear")}</h1>
          <div class="agentGridSectionBorderMobile"></div>
          <h1>105,770,000₮</h1>
        </div>
        <div class="agentGridSectionShimtgelMobile">
          <h1>{$_("joinUsAgent.saleCommision")}</h1>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="agentGraphic">
  <div>
    <div class="KwcontainerOther">
      <div class="agentGraphicGrid">
        <div class="agentGraphicImg">
          <img
            src="https://repcmsneu.blob.core.windows.net/cms/sites/kw-mongolia/pts_images/car_rate_mgl.webp"
            alt=""
          />
        </div>
        <div class="agentGraphicText" style="margin-inline:20px">
          <h1>{$_("joinUsAgent.capRateSystem.title")}</h1>
          <p>
            {$_("joinUsAgent.capRateSystem.text")}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="agentWorldSurgalt">
  <div>
    <div class="KwcontainerOther">
      <div class="agentWorldSurgaltGrid">
        <div class="agentWorldSurgaltText">
          <div class="agentWorldSurgaltTextPara">
            <h1 class="pb-4">{$_("joinUsAgent.worl-ClassTraining.title")}</h1>
            <p>
              {$_("joinUsAgent.worl-ClassTraining.text")}
            </p>
          </div>
        </div>
        <div class="agentBidenteiNegdehText">
          <div class="agentBidenteiNegdehTextPara">
            <h1 class="pb-4">{$_("joinUsAgent.joinUs.title")}</h1>
            <p>
              {$_("joinUsAgent.joinUs.text")}
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfbJNo3AO_8e6ZCw1xfG0OS0k8zFMbfNHLAU3uBoalEVk3nbg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="fill the anket"
            >
              <input type="button" value={$_("joinUsAgent.sendRequest")} />
            </a>
          </div>
        </div>
        <div
          style="background-image: url('https://repcmsneu.blob.core.windows.net/cms/sites/kw-mongolia/pts_images/KW_links_2_(2)_(1).webp');"
          class="agentWorldSurgaltImg"
        ></div>
      </div>
    </div>
  </div>
</section>

<section class="agentBidenteiNegdekh">
  <div>
    <div class="KwcontainerOther">
      <div class="agentBidenteiNegdehGrid">
        <div
          style="background-image: url('https://repcmsneu.blob.core.windows.net/cms/sites/kw-mongolia/pts_images/negdeh_Banner (1).webp');"
          class="agentBidenteiNegdehImage"
        ></div>
      </div>
    </div>
  </div>
</section>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400&display=swap");

  .agentGridSectionShimtgelMobile,
  .agentGridSectionMobile,
  h1 {
    font-weight: bold;
  }

  .agentGridSection,
  .agentGridSectionShimtgel {
    margin-bottom: 10px;
  }

  @media (max-width: 1200px) {
    .agentGridSection,
    .agentGridSectionShimtgel {
      margin-bottom: 0px;
    }
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

  .agentSection {
    min-height: 820px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right top;
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
    background-position: top;
    grid-row: 1/1;
    grid-column: 1/21;
    margin-bottom: 26px;
  }

  .agentWorldSurgaltText {
    background-color: #bd152e;
    padding: 60px 60px;
    display: flex;
    justify-content: center;
    isolation: isolate;
    z-index: 5;
    grid-row: 2/2;
    grid-column: 2/10;
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
    grid-column: 11/20;
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
    grid-column: 1/21;
    max-width: 100%;
    min-height: 710px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
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

  p,
  span {
    font-size: 16px;
    font-family: "Roboto Condensed", sans-serif;
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
      grid-column: 1/21;
    }

    .agentBidenteiNegdehImage {
      grid-column: 1/21;
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
      grid-column: 2/10;
    }

    .agentBidenteiNegdehText {
      grid-column: 11/20;
    }
  }

  @media (max-width: 1300px) {
    .agentImageSectionText {
      margin: 0;
    }
  }

  @media (max-width: 1200px) {
    .agentBidenteiNegdehText {
      grid-column: 11/20;
    }

    .agentWorldSurgaltText {
      grid-column: 2/11;
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
  }

  @media (max-width: 1100px) {
    .agentWorldSurgaltImg {
      margin-bottom: 0px;
    }
    .agentBidenteiNegdekh {
      margin-top: 0px;
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
      padding: 30px;
    }

    .agentBidenteiNegdehText {
      grid-column: 1/1;
      grid-row: 3/3;
      margin: 0;
      padding: 30px;
      justify-content: start;
    }

    .agentBidenteiNegdehImage {
      grid-column: 1/1;
      grid-row: 1/1;
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
    .agentImageSectionText {
      margin-left: 10px;
    }
  }

  @media (max-width: 880px) {
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
    .agentWorldSurgaltText,
    .agentBidenteiNegdehText {
      padding: 20px 20px;
    }
  }
</style>

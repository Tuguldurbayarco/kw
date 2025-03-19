<script lang="ts">
  import { _ } from "svelte-i18n";
</script>

<section class="staffWorldSurgalt">
  <div>
    <div class="KwcontainerOther">
      <div class="staffWorldSurgaltGrid">
        <div class="staffWorldSurgaltText">
          <div class="staffWorldSurgaltTextPara">
            <h1 style="font-weight: bold;" class="pb-4">
              {$_("joinUsAsATeamMember.happiestPlace.title")}
            </h1>
            <p>
              {$_("joinUsAsATeamMember.happiestPlace.text")}
            </p>
          </div>
        </div>
        <div class="staffBidenteiNegdehText">
          <div class="staffBidenteiNegdehTextPara">
            <p>
              {$_("joinUsAsATeamMember.joinUsText")}
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfS261E2XD8PjUKOf6FbDxXUX0o-JOVNWEviPYYf9bvlApvCw/viewform?fbclid=IwAR3PhokzW9X7X2qjr2E9m6heHPFutrNnWLipgcJxvsEmvdA-mR1hW5hlegs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="joinUsAsATeamMember"
            >
              <input
                type="button"
                value={$_("joinUsAsATeamMember.joinUsButton")}
              />
            </a>
          </div>
        </div>
        <div
          style="background-image: url('https://repcmsneu.blob.core.windows.net/cms/sites/kw-mongolia/pts_images/Oogii_and_Selenge(1).webp'); background-position: left; "
          class="staffWorldSurgaltImg"
        ></div>
      </div>
    </div>
  </div>
</section>

<section class="staffBidenteiNegdekh">
  <div>
    <div class="KwcontainerOther">
      <div class="staffBidenteiNegdehGrid">
        <div
          style="background-image: url('https://repcmsneu.blob.core.windows.net/cms/sites/kw-mongolia/pts_images/KW_links_5.webp');"
          class="staffBidenteiNegdehImage"
        ></div>
      </div>
    </div>
  </div>
</section>
<div>
  <section class="ajliinBair">
    <div class="KwcontainerOther">
      <h1>{$_("aboutUs.open_job_positions")}</h1>
    </div>
  </section>
</div>

<div>
  <section class="ajil">
    <div class="KwcontainerOther">
      <div class="ajliinBairGrid">
        <div class="ajliinBairLeft">
          <h3
            style="font-weight: bold; color: black; margin-top: 30px;
margin-bottom: 25px; "
          >
            {$_("joinUsAsATeamMember.jobName")}: <br />
            <span>
              <p style="margin-top: 5px;">
                {$_("joinUsAsATeamMember.jobExecutive.name")}
              </p></span
            >
          </h3>
          <h3 style="font-weight: bold; color: black;">
            {$_("joinUsAsATeamMember.jobResponsibilities")}
          </h3>
          <div class="ajliinBairLeftZar">
            {@html $_("joinUsAsATeamMember.jobExecutive.description")}
          </div>
        </div>
        <div class="ajliinBairRight">
          <h3
            style="font-weight: bold; text-align: left; color: black; margin-top: 30px;
margin-bottom: 25px;"
          >
            {$_("joinUsAsATeamMember.jobName")}: <br />
            <span>
              <p style="margin-top: 5px;">
                {$_("joinUsAsATeamMember.jobAdministrator.name")}
              </p>
            </span>
          </h3>
          <h3 style="font-weight: bold; color: black; text-align: left;">
            {$_("joinUsAsATeamMember.jobResponsibilities")}
          </h3>
          <div class="ajliinBairLeftZar">
            {@html $_("joinUsAsATeamMember.jobAdministrator.description")}
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400&display=swap");

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
    grid-column: 1/21;
    margin-bottom: 30px;
  }

  .staffWorldSurgaltText {
    background-color: #bd152e;
    padding: 80px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    isolation: isolate;
    z-index: 5;
    grid-row: 2/2;
    grid-column: 2/10;
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

  /*  */

  .staffBidenteiNegdehGrid {
    display: grid;
    grid-template-columns: repeat(20, 1fr);
  }

  .staffBidenteiNegdehText {
    background-color: #bd152e;
    padding: 60px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    isolation: isolate;
    z-index: 5;
    grid-column: 11/20;
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
    grid-column: 1/21;
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

  @media (max-width: 1500px) {
    .staffWorldSurgaltImg {
      grid-column: 1/21;
    }

    .staffBidenteiNegdehImage {
      grid-column: 1/21;
    }
  }

  @media (max-width: 1400px) {
    .staffWorldSurgaltText {
      grid-column: 2/10;
    }

    .staffBidenteiNegdehText {
      grid-column: 11/20;
    }
  }

  @media (max-width: 1300px) {
    .ajliinBairGrid {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (max-width: 1296px) {
  }

  @media (max-width: 1200px) {
    .staffBidenteiNegdehText {
      grid-column: 11/20;
    }

    .staffWorldSurgaltText {
      grid-column: 2/10;
    }
  }

  @media (max-width: 1199px) {
  }

  @media (max-width: 1100px) {
    .staffWorldSurgaltText {
      padding: 60px 60px;
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
      justify-content: start;
      padding: 30px;
    }

    .staffWorldSurgaltImg {
      margin-bottom: 0;
    }

    .staffWorldSurgalt {
      margin-bottom: 0;
    }

    .staffBidenteiNegdehText {
      grid-column: 1/1;
      grid-row: 3/3;
      margin: 0;
      padding: 30px;
      justify-content: start;
    }

    .staffBidenteiNegdehImage {
      grid-column: 1/1;
      grid-row: 1/1;
    }
  }

  @media (max-width: 1000px) {
  }

  @media (max-width: 991px) {
  }

  @media (max-width: 880px) {
  }

  @media (max-width: 768px) {
    .staffWorldSurgaltText,
    .staffBidenteiNegdehText {
      padding: 20px 20px;
    }

    .ajliinBairLeft h3 {
      text-align: left;
      color: black;
    }

    .ajliinBairRight h3 {
      text-align: left;
      color: black;
    }
  }

  @media (max-width: 680px) {
  }

  @media (max-width: 670px) {
  }

  @media (max-width: 600px) {
  }

  @media (max-width: 560px) {
  }

  @media (max-width: 550px) {
  }

  @media (max-width: 450px) {
  }
</style>

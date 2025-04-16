<script lang="ts">
  import "../app.css";
  import menuIcon from "$lib/svg/menu.svg";
  import closeIcon from "$lib/svg/bytesize--close.svg";
  import mnFlagIcon from "$lib/svg/flag_mn.svg";
  import usFlagIcon from "$lib/svg/flag_us.svg";
  import kwLogo from "$lib/images/kw-logo.jpeg";
  import youtubeLogo from "$lib/images/youtube-logo.png";
  import Select from "../components/Select.svelte";
  import { locale, _ } from "svelte-i18n";

  let currentLocale = $locale;
  let selectedValue: string | null = currentLocale || null;

  // You can use SVG icons or icon components
  const options = [
    {
      value: "mn",
      label: "Монгол",
      icon: mnFlagIcon,
    },
    {
      value: "en-US",
      label: "English",
      icon: usFlagIcon,
    },
  ];

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }
  }

  function hideMenu() {
    isOpen = false;
    document.body.style.overflow = ""; // Re-enable scrolling
  }
</script>

<nav>
  <div class="nav-container">
    <button class="header-menu-icon" on:click={toggleMenu}>
      <img
        src={isOpen ? closeIcon : menuIcon}
        class:w-[16px]={isOpen}
        alt="menu"
      />
    </button>
    <div
      class="burger-menu-container fixed top-0 left-0 h-full bg-white text-white transform transition-transform duration-300 mt-[87px] w-[408px] z-20"
      class:translate-x-[-100%]={!isOpen}
      class:translate-x-[0]={isOpen}
    >
      <ul class="burger-menu">
        <li style="border-top: 2px solid #2628361a;">
          <a class="whitespace-nowrap" href="/kw/" on:click={hideMenu}>
            {$_("layout.aboutUs")}
          </a>
        </li>
        <li>
          <a href="/kw/join-us-agent" on:click={hideMenu}>
            {$_("layout.joinUsAgent")}</a
          >
        </li>
        <li>
          <a href="/kw/join-us-staff" on:click={hideMenu}
            >{$_("layout.joinUsAsATeamMember")}</a
          >
        </li>
        <!-- <li>
        <a href="/kw/#">Блог</a>
      </li> -->
        <li>
          <a
            href="https://www.kw.com/mn/search"
            target="_blank"
            on:click={hideMenu}>{$_("layout.findProperty")}</a
          >
        </li>
      </ul>
    </div>

    <div
      class="bg-faded fixed top-0 left-0 h-full mt-[87px] w-full z-10"
      class:translate-x-[-100%]={!isOpen}
      class:translate-x-[0]={isOpen}
    ></div>

    <div class="logo-container">
      <a href="/kw/">
        <img class="logo-style" src={kwLogo} alt="" />
      </a>
    </div>
    <div class="flex items-center w-full justify-end max-[1281px]:mr-7">
      <ul class="header-menu-wide">
        <li class="whitespace-nowrap">
          <a href="/kw/"> {$_("layout.aboutUs")}</a>
        </li>
        <li class="whitespace-nowrap">
          <a href="/kw/join-us-agent"> {$_("layout.joinUsAgent")}</a>
        </li>
        <li class="whitespace-nowrap">
          <a href="/kw/join-us-staff">{$_("layout.joinUsAsATeamMember")}</a>
        </li>
        <!-- <li>
        <a href="/kw/#">Блог</a>
      </li> -->
        <li class="whitespace-nowrap">
          <a href="https://www.kw.com/mn/search" target="_blank"
            >{$_("layout.findProperty")}</a
          >
        </li>
      </ul>
      <div class="scale-90 md:scale-none xl:static xl:ml-4">
        <Select
          {options}
          bind:value={selectedValue}
          placeholder="Select an option"
        />
      </div>
    </div>
  </div>
</nav>

<main>
  <slot />
</main>

<section class="p-2.5">
  <div
    class="flex gap-[12px] justify-evenly mt-10 align-center max-[860px]:max-w-[480px] max-[860px]:justify-between max-[860px]:mx-auto"
  >
    <div class="min-w-[120px]">
      <img class="w-[120px] mb-[18px]" src={kwLogo} alt="KW Logo" />
      <div class="flex gap-[12px]">
        <a
          href="https://www.facebook.com/KWMongolia"
          aria-label="Our Facebook page"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 128 128"
            ><rect
              width="118.35"
              height="118.35"
              x="4.83"
              y="4.83"
              fill="#bd152e"
              rx="6.53"
              ry="6.53"
            /><path
              fill="#fff"
              d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A127 127 0 0 0 91 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"
            /></svg
          ></a
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 128 128"
          ><path
            fill="#bd152e"
            d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3"
          /><path
            fill="#fff"
            d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
          /></svg
        >
        <a
          href="https://www.youtube.com/@kellerwilliamsmongolia5364"
          aria-label="Our youtube page"
          target="_blank"
        >
          <img class="w-[32px]" src={youtubeLogo} alt="" /></a
        >
      </div>
    </div>
    <div class="max-[860px]:hidden">
      <div class="font-bold mb-2.5 text-[#636267]">Contact</div>
      <div class="flex align-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18px"
          height="18px"
          viewBox="0 0 1200 1200"
          ><path
            fill="#c90e0e"
            d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0M384.375 238.33c12.362-.729 23.536 6.66 32.007 19.775l82.031 155.566c8.637 18.434 3.729 38.172-9.155 51.343l-37.573 37.573c-2.319 3.178-3.845 6.757-3.882 10.693c14.409 55.775 58.117 107.223 96.681 142.603c38.562 35.38 80.009 83.281 133.812 94.629c6.65 1.855 14.797 2.52 19.556-1.903l43.652-44.458c15.068-11.421 36.866-16.956 52.954-7.617h.732l148.021 87.378c21.728 13.619 23.979 39.944 8.423 55.957L849.683 941.016c-15.056 15.44-35.058 20.631-54.491 20.654c-85.948-2.575-167.158-44.759-233.862-88.11c-109.49-79.653-209.923-178.446-272.975-297.803c-24.182-50.05-52.589-113.91-49.878-169.774c.242-21.016 5.928-41.605 20.728-55.151l101.953-101.953c7.942-6.758 15.799-10.111 23.217-10.549"
          /></svg
        >
        <div class="leading-none mb-2.5">Phone: (+976) 7777 0707</div>
      </div>
      <div class="flex align-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18px"
          height="18px"
          viewBox="0 0 16 16"
          ><path
            fill="#c90e0e"
            d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4 4h8q.216.001.409.088L8 9.231L3.591 4.088A1 1 0 0 1 4 4m-1 7V5l.002-.063l2.932 3.421l-2.9 2.9A1 1 0 0 1 3 11m9 1H4q-.133 0-.258-.034L6.588 9.12l1.413 1.648L9.414 9.12l2.846 2.846a1 1 0 0 1-.258.034zm1-1q0 .133-.034.258l-2.9-2.9l2.932-3.421L13 5z"
          /></svg
        >
        <div class="leading-none mb-2.5">Email: contact@kwmongolia.com</div>
      </div>
      <div class="flex align-center gap-1 max-w-[480px]">
        <div class="min-w-[18px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            height="18px"
            viewBox="0 0 24 24"
            ><path
              fill="#c90e0e"
              d="M10.115 21.811c.606.5 1.238.957 1.885 1.403a27 27 0 0 0 1.885-1.403a28 28 0 0 0 2.853-2.699C18.782 16.877 21 13.637 21 10a9 9 0 1 0-18 0c0 3.637 2.218 6.876 4.262 9.112a28 28 0 0 0 2.853 2.7M12 13.25a3.25 3.25 0 1 1 0-6.5a3.25 3.25 0 0 1 0 6.5"
            /></svg
          >
        </div>
        <div class="leading-none">
          Address: Peak Residences, Zaisan 11th horoo, Khan-Uul district,
          Ulaanbaatar, Mongolia
        </div>
      </div>
    </div>
    <div>
      <div class="font-bold mb-2.5 text-[#636267]">More about KW</div>
      <div class="mb-0.5">
        <a href="https://www.kw.com" target="_blank">www.kw.com</a>
      </div>
      <div class="mb-0.5">
        <a href="https://www.kwworldwide.com" target="_blank"
          >www.kwworldwide.com</a
        >
      </div>
      <div>
        <a href="https://outfront.kw.com" target="_blank">outfront.kw.com</a>
      </div>
    </div>
  </div>
  <div class="min-[860px]:hidden max-w-[480px] mx-auto mt-5">
    <div class="font-bold mb-2.5 text-[#636267]">Contact</div>
    <div class="flex align-center gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18px"
        height="18px"
        viewBox="0 0 1200 1200"
        ><path
          fill="#c90e0e"
          d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0M384.375 238.33c12.362-.729 23.536 6.66 32.007 19.775l82.031 155.566c8.637 18.434 3.729 38.172-9.155 51.343l-37.573 37.573c-2.319 3.178-3.845 6.757-3.882 10.693c14.409 55.775 58.117 107.223 96.681 142.603c38.562 35.38 80.009 83.281 133.812 94.629c6.65 1.855 14.797 2.52 19.556-1.903l43.652-44.458c15.068-11.421 36.866-16.956 52.954-7.617h.732l148.021 87.378c21.728 13.619 23.979 39.944 8.423 55.957L849.683 941.016c-15.056 15.44-35.058 20.631-54.491 20.654c-85.948-2.575-167.158-44.759-233.862-88.11c-109.49-79.653-209.923-178.446-272.975-297.803c-24.182-50.05-52.589-113.91-49.878-169.774c.242-21.016 5.928-41.605 20.728-55.151l101.953-101.953c7.942-6.758 15.799-10.111 23.217-10.549"
        /></svg
      >
      <div class="leading-none mb-2.5">Phone: (+976) 7777 0707</div>
    </div>
    <div class="flex align-center gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18px"
        height="18px"
        viewBox="0 0 16 16"
        ><path
          fill="#c90e0e"
          d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4 4h8q.216.001.409.088L8 9.231L3.591 4.088A1 1 0 0 1 4 4m-1 7V5l.002-.063l2.932 3.421l-2.9 2.9A1 1 0 0 1 3 11m9 1H4q-.133 0-.258-.034L6.588 9.12l1.413 1.648L9.414 9.12l2.846 2.846a1 1 0 0 1-.258.034zm1-1q0 .133-.034.258l-2.9-2.9l2.932-3.421L13 5z"
        /></svg
      >
      <div class="leading-none mb-2.5">Email: contact@kwmongolia.com</div>
    </div>
    <div class="flex align-center gap-1">
      <div class="min-w-[18px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18px"
          height="18px"
          viewBox="0 0 24 24"
          ><path
            fill="#c90e0e"
            d="M10.115 21.811c.606.5 1.238.957 1.885 1.403a27 27 0 0 0 1.885-1.403a28 28 0 0 0 2.853-2.699C18.782 16.877 21 13.637 21 10a9 9 0 1 0-18 0c0 3.637 2.218 6.876 4.262 9.112a28 28 0 0 0 2.853 2.7M12 13.25a3.25 3.25 0 1 1 0-6.5a3.25 3.25 0 0 1 0 6.5"
          /></svg
        >
      </div>
      <div class="leading-none">
        Address: Peak Residences, Zaisan 11th horoo, Khan-Uul district,
        Ulaanbaatar, Mongolia
      </div>
    </div>
  </div>
  <div class="text-center pt-15 pb-5 text-sm">
    KW Mongolia ©2025. All rights reserved. Terms of Use & Privacy Policy
  </div>
</section>

<style>
  .logo-container {
    display: flex;
    align-items: center;
  }

  .logo-style {
    max-width: 80px;
  }
  nav {
    z-index: 999;
    height: 104px;
    width: 100%;
    position: fixed;
    background-color: white;
    padding-inline: 1rem;
    display: flex;
    align-items: center;
    font-family: "Roboto", sans-serif;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);
  }

  .nav-container {
    position: relative;
    height: 100%;
    padding-left: 24px;
    padding-right: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 2rem;
  }

  li {
    padding: 0.5rem;
  }

  a {
    color: #262836;
    text-decoration: none;
    font-size: 1rem;
  }

  a:hover {
    color: #ddd;
  }

  main {
    margin: 0 auto;
  }

  .header-menu-wide {
    display: flex;
  }
  .burger-menu-container {
    display: none;
  }

  .header-menu-icon {
    display: none;
  }

  .burger-menu {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .burger-menu li {
    padding-block: 24px;
    padding-inline: 0px;
    border-bottom: 2px solid #2628361a;
  }

  .burger-menu li a {
    padding-inline: 16px !important;
    width: 100%;
    font-weight: 600;
    text-decoration: none;
    color: #262836;
  }

  .burger-menu li a:hover {
    text-decoration: none;
    color: #262836;
  }

  @media (max-width: 1280px) {
    .burger-menu-container {
      display: block;
    }
    nav {
      padding: 0;
      height: 88px;
    }
    .header-menu-wide {
      display: none;
    }
    .nav-container {
      justify-content: flex-start;
      padding: 0;
    }
    .header-menu-icon {
      cursor: pointer;
      border: none;
      background-color: white;
      display: flex;
      justify-content: center;
      width: 76px;
      min-width: 76px;
    }
  }

  @media (max-width: 768px) {
    .burger-menu-container {
      display: block;
    }
    .logo-style {
      max-width: 80px;
    }
    .bg-faded {
      background: rgba(0, 0, 0, 0.5);
    }
    nav {
      padding: 0;
      height: 88px;
    }
    .nav-container {
      justify-content: flex-start;
      padding: 0;
    }
    .header-menu-icon {
      cursor: pointer;
      border: none;
      background-color: white;
      display: flex;
      justify-content: center;
      width: 56px;
      min-width: 56px;
    }
  }
</style>

<script lang="ts">
  import "../app.css";
  import menuIcon from "$lib/svg/menu.svg";
  import closeIcon from "$lib/svg/bytesize--close.svg";
  import mnFlagIcon from "$lib/svg/flag_mn.svg";
  import usFlagIcon from "$lib/svg/flag_us.svg";
  import kwLogo from "$lib/images/kw-logo.jpeg";
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
    <div class="flex items-center">
      <ul class="header-menu-wide">
        <li class="whitespace-nowrap font-bold">
          <a href="/kw/"> {$_("layout.aboutUs")}</a>
        </li>
        <li class="whitespace-nowrap font-bold">
          <a href="/kw/join-us-agent"> {$_("layout.joinUsAgent")}</a>
        </li>
        <li class="whitespace-nowrap font-bold">
          <a href="/kw/join-us-staff">{$_("layout.joinUsAsATeamMember")}</a>
        </li>
        <!-- <li>
        <a href="/kw/#">Блог</a>
      </li> -->
        <li class="whitespace-nowrap font-bold">
          <a href="https://www.kw.com/mn/search" target="_blank"
            >{$_("layout.findProperty")}</a
          >
        </li>
      </ul>
      <div class="scale-90 absolute right-2.5 md:scale-none xl:static xl:ml-4">
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

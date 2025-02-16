<nav>
  <div class="nav-container">
    <div class="logo-container">
      <img
        class="logo-style"
        src="https://dims.web.production.kw-prod.brightspot.cloud/dims4/default/60ce1d0/2147483647/strip/true/crop/666x174+0+0/resize/400x105!/quality/90/?url=https%3A%2F%2Fstorage.googleapis.com%2Fattachment-prod-e2ad%2F840244%2Fcp3h76m758ks70gjgg80.png"
        alt=""
      />
      <div class="logo-divider"></div>
      <span class="kw-city-group">KW City Group</span>
    </div>
    <ul>
      <li>
        <a href="/">Бидний тухай</a>
      </li>
      <li>
        <a href="/kw/join-us-agent">Агентаар нэгдэх</a>
      </li>
      <li>
        <a href="/kw/join-us-staff">Ажилтнаар нэгдэх</a>
      </li>
    </ul>
  </div>
</nav>

<main>
  <slot />
</main>

<style>
  .kw-city-group {
    padding-inline: 12px;
    font-size: 24px;
  }
  .logo-container {
    display: flex;
    align-items: center;
  }
  .logo-divider {
    width: 1px;
    background-color: rgba(38, 40, 54, 0.1);
    margin-left: 28px;
    margin-right: 40px;
    height: 40px;
  }
  .logo-style {
    max-width: 213px;
  }
  nav {
    z-index: 999;
    height: 88px;
    width: 100%;
    position: fixed;
    background-color: white;
    padding: 1rem;
    display: flex;
    align-items: center;
    font-family: "Roboto Condensed", sans-serif;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);
  }

  .nav-container {
    height: 88px;
    padding-inline: 24px;
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
    font-size: 1.1rem;
  }

  a:hover {
    color: #ddd;
  }

  main {
    margin: 0 auto;
  }
</style>

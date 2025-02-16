<nav>
  <div class="nav-container">
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/join-us-agent">Агентаар нэгдэх</a>
      </li>
      <li>
        <a href="/join-us-staff">Ажилтнаар нэгдэх</a>
      </li>
    </ul>
  </div>
</nav>

<main>
  <slot />
</main>

<style>
  nav {
    background-color: #333;
    padding: 1rem;
    margin-bottom: 2rem;
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
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
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
  }

  a:hover {
    color: #ddd;
  }

  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
</style>

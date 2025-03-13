<!-- CustomSelect.svelte -->
<script lang="ts">
  import { clickOutside } from "../utils";
  import { locale } from "svelte-i18n";

  export let options: LanguageSelType[] = [];
  export let value: string | null = null;
  export let placeholder = "Select an option";

  let isOpen = false;

  function toggleDropdown() {
    isOpen = !isOpen;
  }

  function selectOption(option: LanguageSelType) {
    value = option.value;
    locale.set(value);
    isOpen = false;
  }

  function handleClickOutside() {
    isOpen = false;
  }
</script>

<div class="custom-select" use:clickOutside={handleClickOutside}>
  <button class="select-trigger" on:click={toggleDropdown}>
    {#if value}
      {#each options as option}
        {#if option.value === value}
          <div class="selected-option">
            <img
              class="opacity-65 pr-1 w-5"
              src={option.icon}
              alt={option.label}
            />
            <span>{option.label}</span>
          </div>
        {/if}
      {/each}
    {:else}
      <div class="placeholder">{placeholder}</div>
    {/if}
    <span class="arrow">▼</span>
  </button>

  {#if isOpen}
    <div class="options">
      {#each options as option}
        <button
          class="option"
          class:selected={option.value === value}
          on:click={() => selectOption(option)}
        >
          <img
            class="opacity-65 pr-1 w-6"
            src={option.icon}
            alt={option.label}
          />
          <span>{option.label}</span>
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .custom-select {
    position: relative;
    width: 92px;
    max-width: 92px;
    font-family: sans-serif;
    color: #262836;
  }

  .select-trigger {
    width: 100%;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    background: white;
  }

  .options {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    /* border: 1px solid #ccc; */
    /* border-top: none; */
    border-radius: 0 0 4px 4px;
    max-height: 200px;
    overflow-y: auto;
    z-index: 10;
  }

  .option {
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .option:hover {
    background: #f5f5f5;
  }

  .selected {
    background: #e0e0e0;
  }

  .selected-option {
    display: flex;
    align-items: center;
  }

  .arrow {
    display: inline-flex;
    align-items: center;
    opacity: 0.65;
    transform: scale(0.8);
  }
</style>

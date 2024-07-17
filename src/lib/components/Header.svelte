<script>
  import { base } from '$app/paths';

  let menuOpen = false;
  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<header class="bg-white shadow-md">
  <div class="container mx-auto px-4 py-4 flex justify-between items-center">
    <div class="flex items-center">
      <img src="/favicon.ico" alt="SC Logo" class="h-10 mr-4" />
      <span class="text-xl font-bold">Студентски Съвет при ТУ-София</span>
    </div>
    <nav class="hidden md:flex space-x-6">
      <a href="{base}/" class="text-gray-700 hover:text-blue-500">Начало</a>
      <a href="{base}/news" class="text-gray-700 hover:text-blue-500">Новини</a>
      <a href="{base}/about" class="text-gray-700 hover:text-blue-500">За нас</a>
    </nav>
    <button
      class="md:hidden text-gray-700 hover:text-blue-500 focus:outline-none"
      on:click={toggleMenu}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  </div>
  {#if menuOpen}
    <div class="md:hidden px-4 pt-4 pb-2 space-y-2">
      <a
        href="{base}/"
        class="block text-gray-700 hover:text-blue-500"
        on:click={() => (menuOpen = false)}>Начало</a
      >
      <a
        href="{base}/news"
        class="block text-gray-700 hover:text-blue-500"
        on:click={() => (menuOpen = false)}>Новини</a
      >
      <a
        href="{base}/about"
        class="block text-gray-700 hover:text-blue-500"
        on:click={() => (menuOpen = false)}>За нас</a
      >
    </div>
  {/if}
</header>

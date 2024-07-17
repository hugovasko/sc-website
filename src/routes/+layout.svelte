<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<div class="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
  <Header />
  <div class="container mx-auto px-4 py-8 flex-grow">
    <slot />
  </div>
  <Footer />
</div>

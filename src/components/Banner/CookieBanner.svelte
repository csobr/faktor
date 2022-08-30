<script lang="ts">
  import Button from '../Button.svelte';
  import { onMount } from 'svelte';

  import { BannerContainer, ButtonContainerClass, TextClass } from './BannerStyles';

  import { writable } from 'svelte/store';
  import { scroll } from '../../lib/store';

  const closeBanner = writable<boolean>(false);
  const accepted = writable<boolean>(false);

  async function closeCookieBanner() {
    await localStorage.setItem('hideCookieBanner', JSON.parse('true'));
    closeBanner.set(true);
  }

  function AcceptCookies() {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', import.meta.env.VITE_ANALYTICS_ID);

    closeCookieBanner();
    accepted.set(true);
    closeBanner.set(!$closeBanner);

    scroll.set(true);
  }

  function RejectCookies() {
    closeBanner.set(!closeBanner);
    closeCookieBanner();
    accepted.set(false);
    scroll.set(true);
  }

  onMount(() => {
    if ($accepted === true) return AcceptCookies();
    const hideCookieBanner = localStorage.getItem('hideCookieBanner');
    if (hideCookieBanner) {
      closeBanner.set(JSON.parse(hideCookieBanner));
      scroll.set($closeBanner);
    }
  });
</script>

<div
  class={BannerContainer}
  style="display:{`${$closeBanner ? 'none' : 'flex'}`}; 
  animation-name:{`${$closeBanner ? ' hideCookieBanner' : ' showCookieBanner'}`};"
>
  <p class={TextClass}>
    {"We use performance cookies to enhance your browsing experience, By clicking 'Accept', you consent to our use of cookies."}
  </p>
  <div class={ButtonContainerClass}>
    <Button
      text="Accept"
      background="#E3E8EC"
      color="#0E171F"
      border="none"
      on:click={() => AcceptCookies()}
    />
    <Button
      text="Reject"
      background="#0E171F"
      color="#E3E8EC"
      border="0.1rem solid #E3E8EC"
      on:click={() => RejectCookies()}
    />
  </div>
</div>

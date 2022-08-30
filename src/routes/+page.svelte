<script lang="ts">
  import Button from '../components/CTA_Button.svelte';
  import Steps from '../components/Steps.svelte';

  import Feature from '../components/Feature.svelte';
  import CookieBanner from '../components/Banner/CookieBanner.svelte';
  import { scroll } from '../lib/store';
  const date: Date = new Date();
</script>

<div class="wrapper" style="overflow-y: {`${$scroll ? 'scroll' : 'hidden'}`}">
  <main>
    <header>
      <div class="logo">
        <img src="logo.svg" alt="logo" class="logo-icon" />
        <img src="logo_word_mark.svg" alt="logo" class="word-mark" />
      </div>
      <div class="top-right">
        <Button background="transparent" color="#f9fafb" border="0.1rem solid #f9fafb" />
      </div>
    </header>
    <section>
      <div class="intro">
        <h1>Financial water risk assessment in real-time</h1>
        <h2>Intelligent water risk assessment.</h2>
        <br />
        <Button background="#f9fafb" color="#0e171f" />
      </div>
      <CookieBanner />
      <div class="product">
        <img class="symbol" src="depth.svg" alt="Background layer" />
        <img class="product-showcase" src="landing_product.png" alt="product view" />
      </div>
    </section>
    <section class="steps"><Steps /></section>
    <h3>Features</h3>
    <section class="product-detail">
      <div class="one">
        <Feature source="./icons/factory.svg" />
        <div class="description">
          <h4>Facilites</h4>
          <p>
            With the input of your operational data manage the water availability in your
            facilities.
          </p>
        </div>
      </div>
      <div class="two">
        <Feature source="./icons/recycle.svg" />
        <div class="description">
          <h4>Treatment</h4>
          <p>Manage your water treatment and measure how much water your reusing.</p>
        </div>
      </div>
      <div class="three">
        <Feature source="./icons/impact.svg" />
        <div class="description">
          <h4>Impact</h4>
          <p>
            Find out the physical, regulatory and reputational risks of the sites you operate in.
          </p>
        </div>
      </div>
    </section>
    <section>
      <h5>Get started</h5>
      <Button background="#f9fafb" color="#0e171f" />
      <p style="color: #6E7378 ; text-align:center; padding:1rem;">
        For general queries, please email info@faktor.world.
      </p>
    </section>
  </main>
  <footer>© {date.getFullYear()} Faktor All rights reserved</footer>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: relative;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
  }
  main {
    flex: 1;
    margin-bottom: 5rem;
  }
  section {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 15rem;
  }
  .logo {
    display: flex;
    justify-content: space-between;
    width: 14rem;
    left: 4rem;
    position: relative;
  }
  /* .top-right {
		right: 0;
		margin-right: 2rem;
	} */
  .intro {
    margin-top: 15rem;
    width: 100%;
    text-align: center;
    margin-bottom: 3rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  h1 {
    font-size: 6.4rem;
    max-width: 80rem;
    margin: 0 auto;
    line-height: 6rem;
  }
  h2 {
    font-weight: normal;
    font-size: 1.8rem;
    padding: 1rem;
  }
  .product {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100rem;
  }
  .product-showcase {
    width: 90rem;
    position: relative;
    padding-left: 10rem;
  }
  .symbol {
    min-width: 90rem;
    min-height: 90rem;
    position: absolute;
    z-index: 0;
  }
  .steps {
    width: 100%;
    margin: 0 auto;
  }
  .product-detail {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-evenly;
    min-width: 100%;
    width: 100%;
  }
  .one,
  .two,
  .three {
    display: flex;
    flex-direction: row;
  }
  h3,
  h5 {
    text-align: center;
    font-size: 3.4rem;
    margin: 3.5rem;
  }
  h4 {
    font-size: 2rem;
    margin: 0;
  }
  p {
    font-size: 1.6rem;
    line-height: 2.8rem;
    font-weight: normal;
  }
  .description {
    display: flex;
    max-width: 25rem;
    flex-direction: column;
    padding-left: 1.5rem;
  }
  footer {
    margin-bottom: 1rem;
    text-align: center;
  }
  @media (max-width: 991.98px) {
    .logo {
      width: 10rem;
      left: 2rem;
    }
    .logo-icon {
      width: 2rem;
    }
    .word-mark {
      width: 7rem;
    }
    .intro {
      margin-top: 5rem;
      margin-bottom: 0;
      text-align: center;
    }
    .top-right {
      display: none;
      visibility: hidden;
    }
    section {
      padding: 0;
    }
    h1 {
      font-size: 2.8rem;
      line-height: 2.8rem;
    }
    h2 {
      font-size: 1.6rem;
    }
    .product {
      height: 40rem;
    }
    .symbol {
      width: 35rem;
      height: 35rem;
      min-width: 35rem;
      min-height: 35rem;
    }
    .product-showcase {
      width: 35rem;
      padding-top: 6rem;
      padding-left: 0;
    }
    .description {
      width: 30rem;
      justify-content: center;
    }
    .steps {
      align-items: center;
      width: 100%;
    }
    .product-detail {
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 20rem;
    }
    .one,
    .two,
    .three {
      margin: 0;
    }
    h3,
    h5 {
      font-size: 3rem;
    }
    h4 {
      font-size: 1.4rem;
    }
    p {
      font-size: 1.2rem;
      line-height: 1.6rem;
    }
  }
</style>

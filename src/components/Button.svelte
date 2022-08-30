<script lang="ts">
  import { css } from '@emotion/css';

  export let background: string;
  export let color: string;
  export let border: string;
  export let text: string;

  const BtnClass = css`
    border: 0;
    z-index: 1;
    border-radius: 0.4rem;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 1.4rem 4rem;
    font-size: 1.4rem;
    font-weight: 700;
    cursor: pointer;
    margin: 0 auto;

    @media (max-width: 768px) {
      padding: 1rem 2.2rem;
      font-size: 1.6rem;
    }
  `;
</script>

<button
  class={BtnClass}
  on:click
  style={`background-color:${background};color:${color};border:${border};`}
>
  <slot>{text}</slot>
</button>

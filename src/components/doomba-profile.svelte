<script lang="ts">
    import "../app.css"

    /*function goToNewPage(){
        window.location.href = "./order/+page.svelte"
    }*/

</script>


<div class="flex justify-center text-4xl">
    <h1 class="doomba-title">
        Doomba v.1
    </h1>
    
</div>

<div class="flex justify-center text-xl">
    <h1 class="doomba">
        Hate your friends? Have an enemy? Wanna get petty revenge? Or are you just a silly goober? Well Doomba can help you achieve your goals in slightly inconveniencing that special someone.
    </h1>
</div>

<div class="container">
    <img class="doomba" src="doomba.png" alt="roomba(good)">
</div>

<div class="flex justify-center">
    <button class="btn-17">
        <span class="text-container">
          <span class="text">Order Now</span>
        </span>
    </button>
  </div>

<style lang="postcss">
    @reference "tailwindcss/theme";

    div:has(.doomba-title) {
        font-weight: bold;
    }
    :has(img){
        display: block;
        margin: auto;
        width: 100%;
        height: auto;
        padding-bottom: 10%;
        border-width: 4px;
        border-image: linear-gradient(to right, black, red) 1;
    }

.container {
  width: 500px;
  height: 240px;
}

.btn-17 {
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: button;
  background-color: #000;
  background-image: none;
  color: #fff;
  cursor: pointer;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 100%;
  font-weight: 900;
  line-height: 1.5;
  margin: 0;
  -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
  padding: 0;
  text-transform: uppercase;
}

.btn-17:-moz-focusring {
  outline: auto;
}

.btn-17 {
  border-radius: 99rem;
  border-width: 2px;
  padding: 0.8rem 3rem;
  z-index: 0;
}

.btn-17,
.btn-17 .text-container {
  overflow: hidden;
  position: relative;
}

.btn-17 .text-container {
  display: block;
  mix-blend-mode: difference;
}

.btn-17 .text {
  display: block;
  position: relative;
}

.btn-17:hover {
  animation: moveAway 0.5s forwards; /* The 'forwards' keeps the new position */
}

@keyframes moveAway {
  0% { transform: translate(0, 0); }
  25% { transform: translate(500px, -200px); }
  50% { transform: translate(-800px, 400px); }
  75% { transform: translate(300px, -500px); }
  100% { transform: translate(1000px, 500px); }
}
/*
.btn-17:hover .text {
  -webkit-animation: move-up-alternate 0.3s forwards;
  animation: move-up-alternate 0.3s forwards;
}

@-webkit-keyframes move-up-alternate {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(80%);
  }

  51% {
    transform: translateY(-80%);
  }

  to {
    transform: translateY(0);
  }
}

@keyframes move-up-alternate {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(80%);
  }

  51% {
    transform: translateY(-80%);
  }

  to {
    transform: translateY(0);
  }
}


.btn-17:after,
.btn-17:before {
  --skew: 0.2;  
  background: #a79696;
  content: "";
  display: block;
  height: 102%;
  left: calc(-50% - 50% * var(--skew));
  pointer-events: none;
  position: absolute;
  top: -104%;
  transform: skew(calc(150deg * var(--skew))) translateY(var(--progress, 0));
  transition: transform 0.2s ease;
  width: 100%;
}

.btn-17:after {
  --progress: 0%;
  left: calc(50% + 50% * var(--skew));
  top: 102%;
  z-index: -1;
}

.btn-17:hover:before {
  --progress: 100%;
}

.btn-17:hover:after {
  --progress: -102%;
}
*/
</style>
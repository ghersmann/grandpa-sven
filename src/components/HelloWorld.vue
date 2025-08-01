<template>
  <main class="blue-main">
    <svg viewBox="0 0 480 480" class="circle-path-text">
      <defs>
        <!-- Top Arc (clockwise) -->
        <path
          id="topTextPath"
          d="M240,240 m -200,0 a 200,200 0 0,1 400,0"
        />

        <!-- Bottom Arc (reversed direction for upright text) -->
        <path
          id="bottomTextPath"
          d="M40,240 a 200,200 0 0,0 400,0"
        />
      </defs>

      <text dy="10">
        <textPath
          href="#topTextPath"
          startOffset="50%"
          text-anchor="middle"
        >
          Empfohlen
        </textPath>
      </text>

      <text dy="15">
        <textPath
          href="#bottomTextPath"
          startOffset="50%"
          text-anchor="middle"
        >
          von Opa Sven
        </textPath>
      </text>
    </svg>

    <article class="text-article">
      <p>Du findest nicht uns – wir finden dich.</p> 
      <p>Wir sind nicht an Kooperationen interessiert.</p>
      <p>Wenn du etwas machst und empfohlen werden möchtest, kontaktiere uns auf keinen Fall.</p>
    </article>
  </main>
</template>



<style scoped>
.text-article {
  width: 20rem;
}

.blue-main {
  margin: auto;
  background-color: rgb(15 44 112);
  border-radius: 50%;
  height: 32rem;
  width: 32rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  overflow: hidden;
}

.circle-path-text {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.circle-path-text text {
  fill: rgb(234 231 223);
  font-family: shrikhand;
  font-size: 3rem;
  letter-spacing: 2px;
}

</style>
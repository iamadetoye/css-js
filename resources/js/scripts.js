const lande1 = document.querySelector(".lande-1");
const centerPush1 = document.querySelector(".live");
const lande2 = document.querySelector(".lande-2");
const centerPush2 = document.querySelector(".exp");
const his = document.querySelector(".his");
const codeAbt = document.querySelector(".surpl");

// toggle l and e
const focusIn = () => {
  centerPush1.style.animation = "moveInLeft .7s";
  centerPush1.style.display = "inline-block";
};
lande1.addEventListener("focusin", focusIn);

lande1.addEventListener("focusout", function () {
  centerPush1.style.animation = "";
  centerPush1.style.display = "none";
});

lande2.addEventListener("focusin", function () {
  centerPush2.style.animation = "moveInLeft .7s";
  centerPush2.style.display = "inline-block";
});

lande2.addEventListener("focusout", function () {
  centerPush2.style.animation = "";
  // centerPush2.style.display = "none";
});

his.addEventListener("focusin", function () {
  centerPush2.style.display = "block";

  codeAbt.style.animation = "moveInLeft .7s";
  codeAbt.style.display = "block";
});
his.addEventListener("focusout", function () {
  centerPush2.addEventListener('focusout', function () {
    if (his.style.display = 'none') {
      alert('You just closed History, why😭😭😭');
      centerPush2.style.animation = "moveInLeft .7s";
  centerPush2.style.display = "none";
    }
  });

  codeAbt.style.animation = "";
  codeAbt.style.display = "none";
});

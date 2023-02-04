let buttonGroup = document.querySelector(".button-group");
let buttonContainer = document.querySelector(".buttons");
let buttonsHiddenContainer = document.querySelector(".buttons-hidden");
let expandButton = document.querySelector(".button-round");

let options = {
  root: buttonGroup,
  rootMargin: "0px",
  threshold: 1.0
};

let expandBtncallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio < 1 && entry.target === expandButton) {
      //console.log("expand btn intersecting");

      let visibleButtons = Array.from(
        buttonContainer.querySelectorAll("button")
      );

      buttonsHiddenContainer.prepend(visibleButtons.pop());
    }
  });
};

let expandBtnObserver = new IntersectionObserver(expandBtncallback, options);
expandBtnObserver.observe(expandButton);

let callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio === 1) {
      console.log(entry);

      let hiddenButtons = Array.from(
        buttonsHiddenContainer.querySelectorAll("button")
      );

      if (hiddenButtons.length > 0) {
        let removedButton = hiddenButtons.shift();
        //removedButton.remove();

        //console.log(removedButton);
        buttonContainer.appendChild(removedButton);
      }
    }
  });
};

let buttons = document.querySelectorAll(".button");
let observer = new IntersectionObserver(callback, options);

buttons.forEach((button) => {
  observer.observe(button);
});

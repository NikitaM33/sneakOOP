class Start {
  constructor() {
    this.btn = document.createElement("button");
  }

  addStartBtn(btnValue = "Start", nodeElem) {
    // if exist elem
    this.btn.classList.add("again");
    this.btn.innerHTML = btnValue;
    this.btn.addEventListener("click", () => {
      score.scoreCount = 0;
      score.score.innerHTML = 0;
      document.body.removeChild(nodeElem);
      isAnimate = true;
    });

    return this.btn;
  }
}

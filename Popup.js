class Popup {
  constructor() {
    this.popup = document.createElement('div');
  }

  draw(str = '', btnValue) {
    this.popup.classList.add('popup');
    this.popup.innerHTML = str;
    const btn = start.addStartBtn(btnValue, this.popup);

    document.body.appendChild(this.popup);
    this.popup.appendChild(btn);
  }
}

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "link", "form" ]

  connect() {
    this.formTarget.style.display = 'none';
  }

  toggleForm(event) {
    event.preventDefault();
    if (this.formTarget.style.display === 'none') {
      this.formTarget.style.display = 'block';
    } else {
      this.formTarget.style.display = 'none';
    }
  }
}

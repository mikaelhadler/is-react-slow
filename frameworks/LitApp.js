import {LitElement, html} from 'lit';

export default class MyHeader extends LitElement {
  render() {
    return html`
      <div>
        <h1 style=" color: #325cff;font-size: 3.2em; line-height: 1.1;">Hello, Lit!</h1>
      </div>
    `;
  }
}
customElements.define('lit-app', MyHeader);
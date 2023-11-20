import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';


export class MyElement extends LitElement {
  @property()
  version = 'STARTING';

  render() {
    return html`
    <p>Welcome to the Lit tutorial!</p>
    <p>This is the ${this.version} code.</p>
    `;
  }
}
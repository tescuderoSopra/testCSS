import { LitElement, html, css } from 'lit-element';

import { initRouter } from './router';

class AppShell extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <header>
        <nav>
          <ul>
            <li><a href="/login">login</a></li>
          </ul>
        </nav>
      </header>

      <main></main>
    `;
  }

  updated(changedProps) {
    initRouter(this.shadowRoot.querySelector('main'));
  }
}

window.customElements.define('app-shell', AppShell);
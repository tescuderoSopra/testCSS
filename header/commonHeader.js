import { html, LitElement } from 'lit-element';
import css_common_header from './commonHeader.scss';

class CommonHeader extends LitElement {
  static get styles() {
    return css_common_header;
  }
  render() {
    return html`
      <div class="common-header">
        <p>App Header</p>
      </div>
    `;
  }
}

customElements.define('common-heaer', CommonHeader);

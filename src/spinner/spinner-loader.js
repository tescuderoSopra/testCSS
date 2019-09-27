// import { LitElement, html, property } from '@polymer/lit-element'
import { html, LitElement } from 'lit-element';
import loader_css from './loader.scss';

class SpinnerLoader extends LitElement {
  static get styles() {
    return loader_css;
  }

  render() {
    return html`
        <div class="lds-ripple"><div></div><div></div></div>
        `;
  }
}

customElements.define('spinner-loader', SpinnerLoader);

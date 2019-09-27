// import { LitElement, html, property } from '@polymer/lit-element'
import { html, LitElement, css } from 'lit-element';
import css_detail from './detail.scss';
import css_new from './newcard.scss';

import '@fooloomanzoo/datetime-picker/datetime-picker';

class NewCard extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return [css_detail, css_new];
  }

  render() {
    return html`
          <div class="containerDetail">
            <p class="greyLetter">Título</p>
            <input type="text" class="description" />
            <p class="orangeLine"></p>
            <p class="greyLetter">Descripción</p>
            <textarea class="description"></textarea>
            <p class="orangeLine"></p>
            <div class="containerFlex">
              <div>
                <p class="greyLetter">Fecha de inicio</p>
                <datetime-picker default="2005-02-01" name="lastjob" class="calendar"></datetime-picker>
              </div>
              <div>
                <p class="greyLetter">Fecha de fin</p>
                <datetime-picker class="calendar" default="2005-02-01"></datetime-picker>
              </div>
            </div>
          </div>
        `
  }
}

customElements.define('new-card', NewCard);

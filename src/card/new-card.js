// import { LitElement, html, property } from '@polymer/lit-element'
import { html, LitElement, css } from 'lit-element';
import css_detail from './detail.scss';
import css_new from './newcard.scss';

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
            <div class="containerFlex">
                <div>
                    <p class="greyLetter">Título</p>
                    <input type="text" class="description" />
                </div>
                <div class="containerImg">
                    <img src="/src/imgs/task.png" alt="tipo de tarea" />
                </div>
            </div>
            <p class="orangeLine"></p>
            <p class="greyLetter">Descripción</p>
            <textarea class="description"></textarea>
            <p class="orangeLine"></p>
            <p class="greyLetter">Hora</p>
            <p class="hour">3:30 <span>PM</span></p>
          </div>
        `
    }
}

customElements.define('new-card', NewCard);

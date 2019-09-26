// import { LitElement, html, property } from '@polymer/lit-element'
import { html, LitElement, css } from 'lit-element';

class CalendarItem extends LitElement {
    static get properties() {
        return {
            day: Object,
            // {
            // number: Number número de día
            // month: String nombre del mes 
            // year: Number año
            // nameOfDay: String día de la semana (lunes, martes...)
            // current: Boolean si es hoy
            //}

            active: Boolean, // booleano de si está activo
        }
    }
    static get styles() {
        return css`
            .item {
                margin: 0;
                padding: 0 10px;
                color: white;
                text-align: center;
                text-decoration: none;
                color: #333;
            }

            .item p {
                font-size: 14px;
                margin: 0;
                padding: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .item p span.small {
                font-size: 12px;
            }
            .item .current {
                border-radius: 50%;
                width: 60px;
                height: 60px;
                font-size: 16px;
                color: white;
                background: linear-gradient(to right top, #00ffed, #00ede1, #00dbd5, #00c9c8, #00b8ba);
            }

            .item p .current span.small {
                font-size: 15px;
            }
        `;
    }
    constructor() {
        super();
        this.day = this.day || {};
    }

    _selectItem() {
        const width = this.shadowRoot.querySelector('.item').clientWidth;
        const positionY = this.shadowRoot.querySelector('.item').offsetLeft;
        this.dispatchEvent(new CustomEvent('selectItem',
            { detail: { day: this.day.number, width, positionY } }
        ));
    }

    render() {
        let classNumber = '';
        const { number, nameOfDay, current } = this.day;
        if (current) classNumber = "current";
        else if (this.active) classNumber = "active";
        return html`
          <div class="item" @click=${this._selectItem}>
                <p class=${classNumber}>
                    ${number}
                    <span class="small">${nameOfDay}</span>
                </p>
          </div>
        `
    }
}

customElements.define('calendar-item', CalendarItem);

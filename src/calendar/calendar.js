// import { LitElement, html, property } from '@polymer/lit-element'
import { html, LitElement, css } from 'lit-element';
import { getDaysOfMonth } from './aux';
import './calendar-item';

class ComponentCalendar extends LitElement {
    constructor() {
        super();
        this.days = getDaysOfMonth();
        this.today = new Date();
        
    }

    static get styles() {
        return css`
            .container {
                margin: 0%;
                overflow-x: auto;
                display: flex;
                align-items: center;
                white-space: nowrap;
                height: 80px;
            }
        `;
    }

    _selectItem({ detail }) {
        // console.log('detaaaiiil', detail, detail.event, this.shadowRoot.querySelector('.container').scrollLeft, detail.width);
        console.log('detail', detail);
        const scrollLeft = this.shadowRoot.querySelector('.container').scrollLeft;
        const widthContainer =  this.shadowRoot.querySelector('.container').clientWidth;
        const widthItem = detail.width;
        const middleContainer = widthContainer / 2;
        const positionYItem = detail.positionY;
        const offset = positionYItem - ((widthContainer - widthItem) / 2);
      
        console.log({ scrollLeft, middleContainer, offset, width: detail.width, positionYItem, scroll });
        this.shadowRoot.querySelector('.container').scrollLeft = offset;
    }

    _renderItems() {
        return html`${this.days.map(day =>
            html`<calendar-item @selectItem=${this._selectItem} .day=${day}></calendar-item>`)}`;
    }

    render() {
        return html`
          <div class="container">
            ${this._renderItems()}
          </div>
        `
    }
}

customElements.define('component-calendar', ComponentCalendar);

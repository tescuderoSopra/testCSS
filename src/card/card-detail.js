// import { LitElement, html, property } from '@polymer/lit-element'
import { html, LitElement, css } from 'lit-element';
import css_detail from './detail.scss';

class CardDetail extends LitElement {
    constructor() {
        super();
    }

    static get styles() {
        return css_detail;
    }

    render() {
        return html`
          <div class="containerDetail">
            <div class="containerFlex">
                <div>
                    <p class="greyLetter">Título</p>
                    <p class="description">Lorem Ipsum es simplemente.</p>
                </div>
                <div class="containerImg">
                    <img src="/src/imgs/task.png" alt="tipo de tarea" />
                </div>
            </div>
            <p class="orangeLine"></p>
            <p class="greyLetter">Descripción</p>
            <p class="description">Lorem Ipsum es simplemente el texto de relleno de las imprentas y
                    archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
                    de las industrias desde el año 1500, cuando un impresor (N. del T.
                    persona que se dedica a la imprenta) desconocido usó una galería
                    de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
                    No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en
                    documentos electrónicos, quedando esencialmente igual al original. Fue popularizado
                    en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de
                    Lorem Ipsum, y más recientemente con software de autoedición,
                    como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
            </p>
            <p class="orangeLine"></p>
            <p class="greyLetter">Hora</p>
            <p class="hour">3:30 <span>PM</span></p>
          </div>
        `
    }
}

customElements.define('card-detail', CardDetail);

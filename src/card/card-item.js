// import { LitElement, html, property } from '@polymer/lit-element'
import { html, LitElement, css } from 'lit-element';

class CardItem extends LitElement {
    constructor() {
        super();
    }

    static get styles() {
        return css`
            .containerCard {
                background: white;
                border-radius: 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                text-align: justify;
                overflow: hidden;
                padding: 0 10px;
            }
            .hourLeft {
                height: 70px;
                min-width: 70px;
                line-height: 70px;
                text-align: center;
                border-radius: 10px;
                color: white;
                background: linear-gradient(to right top, #00ffed, #00ede1, #00dbd5, #00c9c8, #00b8ba);
            }
            .content {
                margin-left: 20px;
                font-size: 12px;
            }

            .content .description {
                text-overflow: ellipsis;
                max-height: 32px;
                line-height: 16px;
                font-size: 10px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }

        `;
    }

    render() {
        return html`
          <div class="containerCard">
            <p class="hourLeft">3:00 PM</p>
            <div class="content">
                <p class="title">Work lunk</p>
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
            </div>
          </div>
        `
    }
}

customElements.define('card-item', CardItem);

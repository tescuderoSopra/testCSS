// import { LitElement, html, property } from '@polymer/lit-element'
import { html, LitElement } from 'lit-element';
import css_chat from './chat.scss';

class ChatElement extends LitElement {
  static get styles() {
    return css_chat;
  }
  render() {
    return html`
          <div class="container">
            <p>Chat</p>
          </div>
        `;
  }
}

customElements.define('chat-element', ChatElement);

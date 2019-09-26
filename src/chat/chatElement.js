// import { LitElement, html, property, css } from '@polymer/lit-element'
import { html, LitElement, css } from 'lit-element';
import css_chat from './chat.scss';
import msgList from './chatData';

class ChatElement extends LitElement {
  static get styles() {
    return [
      css_chat,
      css`
        :host {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
      `
    ];
  }

  render() {
    return html`
          <div class="container">
            <div class="date-info">
              <p>Hoy</p>
            </div>
            <div class="messages-container">
              <div class="messages-lines">
                ${this.printMessages()}
              </div>
              <div></div>
            </div>
            <div class="message-sender">
              <input type="text" placeholder="Escribe el mensaje...">
              <div class="chat-buttons">
                <button>
                  <img src="/src/svgs/microphone.svg" alt="Microphone">
                </button>
                <button>
                  <img src="/src/svgs/send.svg" alt="Microphone">
                </button>
              </div>
            </div>
          </div>
        `;
  }

  firstUpdated() {
    // console.log(msgList.messages);
  }

  printMessages() {
    return msgList.messages.map(msg => html`<p class="${msg.userId === 1 ? 'me' : 'away'}">${msg.text}</p>`);
  }
}

customElements.define('chat-element', ChatElement);
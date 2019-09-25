// import { LitElement, html, property } from '@polymer/lit-element'
import { html, LitElement } from 'lit-element';
import css_login from './login.scss';

class IndexLogin extends LitElement {
  static get styles() {
    return css_login;
  }
  render() {
    return html`
          <div class="container">
            <div class="stars"></div>
            <div class="stars2"></div>
            <div class="stars3"></div>
            <div class="center">
                <div class="first_container">
                  <img src="/src/imgs/security.png" alt="Security person">
                </div>
                <div class="second_container">
                    <label for="username">Usuario</label>
                    <input type="email" name="username" />
                    <label for="password">Contraseña</label>
                    <input type="password" name="password" />
                    <button type="submit">Entrar</button>
                </div>
            </div>
          </div>
        `
  }
}

customElements.define('index-login', IndexLogin);

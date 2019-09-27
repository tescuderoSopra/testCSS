// import { LitElement, html, property } from '@polymer/lit-element'
import { html, LitElement } from 'lit-element';
import css_login from './login.scss';

class IndexLogin extends LitElement {
  static get styles() {
    return css_login;
  }
  render() {
    return html`
      <div class="login-container">
        <div class="app-logo">
          <img src="/src/imgs/TeAgile.png" width="140px" alt="TeAgile Logo">
          <img src="/src/svgs/people-running.svg" width="300px" alt="People running">
        </div>
        <div class="inputs-box">
          <h1>Login</h1>
          <div class="username-container">
            <label for="username">Usuario</label>
            <input type="email" name="username" />
          </div>
          <div class="password-container">
            <label for="password">Contraseña</label>
            <input type="password" name="password" />
          </div>
          <p class="forgotten-pass">Olvidaste tu contraseña?</p>
          <div class="send-login">
            <div class="remeber-user">
              <input type="checkbox" id="checkbox" />
              <label for="checkbox"></label>
              <p>Recuérdame</p>
            </div>
            <button type="submit">ENTRAR</button>
          </div>
        </div>
        <div class="social-login">
          <p>Social Login</p>
          <div class="social-links">
            <img src="/src/svgs/fb.svg" alt="Facebook">
            <img src="/src/svgs/ggl.svg" alt="Google">
            <img src="/src/svgs/twtr.svg" alt="Twitter">
            <img src="/src/svgs/lnkin.svg" alt="LinkedIn">
          </div>
          <p>Nuevo usuario? <span>Signup</span></p>
        </div>
        <img class="bottom-background" src="/src/svgs/city.svg" alt="City">
      </div>
        `;
  }
}

customElements.define('index-login', IndexLogin);

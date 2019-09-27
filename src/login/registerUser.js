// import { LitElement, html, property } from '@polymer/lit-element'
import { html, LitElement } from 'lit-element';
import css_login from './login.scss';
import register_css from './register.scss';
import '../spinner/spinner-loader';

class RegisterUser extends LitElement {

  static get properties() {
    return {
      loading: Boolean,
    }
  }

  static get styles() {
    return [css_login, register_css];
  }

  constructor() {
    super();
    this.loading = false;
  }

  register() {
    this.loading = true;
    const email = this.shadowRoot.querySelector('input[name=email]').value;
    const username = this.shadowRoot.querySelector('input[name=username]').value;
    const surname = this.shadowRoot.querySelector('input[name=surname]').value;
    const password = this.shadowRoot.querySelector('input[name=password]').value;
    const base64Password = btoa(password);
    // sessionStorage.setItem('user', `Basic ${btoa(`${email}:${password}`)}`);
    // fetch('url', (result) => {
    //   if(result.status === 200) {
    //     sessionStorage.setItem('user', `Basic ${base64.encode(`${email}:${password}`)}`);
    //     window.location.href = '/';
    //   }
    //  TODO: SHOW ERROR
    // })
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
            <label for="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div class="username-container">
            <label for="username">Username</label>
            <input type="text" name="username" />
          </div>
          <div class="username-container">
            <label for="surname">Surname</label>
            <input type="text" name="surname" />
          </div>
          <div class="password-container">
            <label for="password">Contraseña</label>
            <input type="password" name="password" />
          </div>
          <div class="password-container">
            <label for="passwordRepeat">Repita su contraseña</label>
            <input type="password" name="passwordRepeat" />
          </div>
          ${this.loading ?
          html`<spinner-loader></spinner-loader>` :
          html`<div class="send-login">
                <button @click=${this.register} class="register-button">Registrar</button>
              </div>`
      }
         
          
        </div>
        <div class="social-login">
          <p>Social Login</p>
            <div class="social-links">
              <img src="/src/svgs/fb.svg" alt="Facebook">
              <img src="/src/svgs/ggl.svg" alt="Google">
              <img src="/src/svgs/twtr.svg" alt="Twitter">
              <img src="/src/svgs/lnkin.svg" alt="LinkedIn">
            </div>
          </div>
        <img class="bottom-background" src="/src/svgs/city.svg" alt="City">
      </div>
        `;
  }
}

customElements.define('register-user', RegisterUser);

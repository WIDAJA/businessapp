import { Component } from "preact";
import confetti from "canvas-confetti";
import Notification from "./Notification";

export default class ProspectForm extends Component {

  state = { email: '', message: '', success: false, show: false };

  setEmail = e => this.setState({ email: e.currentTarget.value });

  saveEmail = () => {

    const { email } = this.state;

    const init = {
      body: JSON.stringify({ email }),
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch('http://localhost:3001/api/createProspect.json', init)
      .then(response => response.json())
      .then(({ success, message }) => {

        this.setState({ message });
        this.setState({ success });
        this.setState({ show: true });

        if (success) {
          this.showConfetti();
        }
      })
      .catch(err => {
        this.setState({ show: true });
      });
  };

  showConfetti = () => {

    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  render({ }, { email, message, success, show }) {
    return (
      <>
        <form
          action="javascript:void(0);"
          onSubmit={this.saveEmail}
          class="flex flex-col gap-5 justify-center p-6" >

          <div class="flex flex-col border-2 border-white/50 p-2">
            <label for="txtEmail">Correo electrónico</label>
            <div class="flex gap-4 mt-2">
              <img
                src="/assets/icons/email.svg"
                alt="Icono de arroba" />
              <input
                id="txtEmail"
                name="txtEmail"
                type="email"
                placeholder="Ingresa tu correo electrónico"
                class="w-full h-10 bg-transparent focus:outline-none"
                value={email}
                onInput={this.setEmail}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            class="relative inline-flex items-center justify-center p-0.5 rounded-md overflow-hidden text-xl font-medium group bg-gradient-to-br from-accent to-violet-600">
            <span
              class="relative w-full px-5 py-2.5 transition-all rounded-md ease-in duration-75 bg-primary group-hover:bg-opacity-0">
              Notificarme
            </span>
          </button>

        </form>
        <Notification message={message} success={success} show={show} />
      </>
    )
  };
}
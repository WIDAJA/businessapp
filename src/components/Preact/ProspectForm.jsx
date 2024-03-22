import { Component } from "preact";
import confetti from "canvas-confetti";

export default class ProspectForm extends Component {

  constructor(props) {
    super(props)

    this.state = { email: '' }
  }

  setEmail = e => this.setState({ email: e.currentTarget.value })

  saveEmail = () => {

    const { email } = this.state;

    const init = {
      body: JSON.stringify({ email }),
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch('http://localhost:4321/api/createProspect.json', init)
      .then(response => response.json())
      .then(data => {
        this.props.onShowNotify(data)

        if (data.success)
          this.showConfetti()
      })
      .catch(() => {
        const message = 'Se está presentado un problema para inscribir el correo. Por favor prueba de nuevo más tarde.';
        this.props.onShowNotify({ message, success: false })
      })
      .finally(() => {
        this.setState({ email: '' })

        setTimeout(() => {
          this.props.onCloseNotify()
        }, 1000 * 5)
      });
  }

  showConfetti = () => {
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  render({ }, { email }) {
    return (
      <>
        <div
          class="flex flex-col gap-5 justify-center sm:border-r-2 sm:dark:border-white/80 border-primary/80 p-5"
        >
          <h2
            class="text-xl sm:text-2xl text-center font-bold text-primary dark:text-white"
          >
            ¿Quieres recibir más información sobre este proyecto?
          </h2>
          <p class="text-center text-sm sm:text-lg text-primary dark:text-white">
            Te mantendremos informado acerca de nuevas funcionalidades y servicios
            que tenemos para ti.
          </p>
        </div>
        <form
          action="javascript:void(0);"
          onSubmit={this.saveEmail}
          class="flex flex-col gap-5 justify-center p-6">

          <div class="flex flex-col border-2 border-primary/50 dark:border-white/50 p-2">
            <label for="txtEmail" class="text-primary dark:text-white">
              Correo electrónico
            </label>
            <div class="flex gap-4 mt-2">
              <img
                src="/assets/icons/email.svg"
                alt="Icono de arroba" />
              <input
                id="txtEmail"
                name="txtEmail"
                type="email"
                placeholder="Ingresa tu correo electrónico"
                class="w-full h-10 bg-transparent focus:outline-none text-primary dark:text-white"
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
              class="relative w-full px-5 py-2.5 transition-all rounded-md ease-in duration-75 text-primary dark:text-white bg-white dark:bg-primary group-hover:bg-opacity-0">
              Notificarme
            </span>
          </button>

        </form>
      </>
    )
  }
}
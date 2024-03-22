import { Component } from "preact"
import EmailIcon from "./icons/Email"
import confetti from "canvas-confetti"

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
          class="grid grid-cols-1 sm:grid-cols-2 bg-white/30 dark:bg-black/30 rounded-3xl mt-10 sm:p-5 shadow-2xl animate-slide-in-right">
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

            <div class="flex flex-col border-2 border-primary/50 dark:border-white/50 px-4 py-2 rounded-md">
              <label for="txtEmail" class="text-primary font-semibold dark:text-white">
                Correo electrónico
              </label>
              <div class="flex gap-4 mt-2 items-center">
                <EmailIcon width={24} height={24} />
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
              class="inline-flex items-center justify-center p-0.5 rounded-md overflow-hidden text-xl font-medium group bg-gradient-to-br from-accent to-orange-600">
              <span
                class="relative w-full mx-[2px] my-[2px] py-2.5 transition-all rounded-md ease-in-out duration-300 text-primary dark:text-white bg-[#edeffd] dark:bg-primary group-hover:bg-transparent group-hover:text-white">
                Notificarme
              </span>
            </button>

          </form>
        </div>
      </>
    )
  }
}
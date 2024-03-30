import { Component } from "preact"

export default class ServiceSmall extends Component {

  constructor(props) {
    super(props)

    this.state = {
      service: null
    }
  }

  openModal = (service) => {

    document
      .getElementById('modal-service')
      .classList
      .remove('hidden')

    this.setState({ service })
  }

  closeModal = () => {

    document
      .getElementById('modal-service')
      .classList
      .add('hidden')

    this.setState({ service: null })
  }

  render({ menu }, { service }) {

    return (
      <>
        <h1 class="text-4xl text-center text-primary dark:text-white">- Servicios -</h1>
        <h2 class="text-center  text-primary dark:text-white">
          Estos son algunos de los servicios que tenemos para ayudar a impulsar tu
          negocio
        </h2>
        {
          menu?.map((x, i) => {

            const className = `dark:bg-[url('assets/icons/bg1-dark.svg')] bg-[url('assets/icons/bg1-light.svg')] mt-10 border-2 pt-7 px-4 pb-20 rounded-xl ${!(i % 2) ? 'border-accent' : 'border-green-400'} shadow-2xl dark:shadow-white/5`

            return (
              <section className={className}>
                <header class="text-center text-2xl font-bold text-primary dark:text-white">{x.name}</header>
                <p class="mt-4 text-primary dark:text-white">{x.text}</p>
                <button
                  type="button"
                  class="text-primary dark:text-white font-semibold bg-gray-300 dark:bg-secondary px-5 py-2 rounded-full float-right mt-4"
                  onClick={() => this.openModal(x)}>
                  Conocer más
                </button>
              </section>
            )
          })
        }
        <div id="modal-service"
          tabindex="-1"
          aria-hidden="true"
          class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full hidden bg-black/75">
          <div class="relative p-4 w-full max-w-2xl max-h-full animate-slide-in-top">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-800">
              <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  ¿Qué te ofrecemos?
                </h3>
                <button
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={this.closeModal}>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span
                    class="sr-only">
                    Close modal
                  </span>
                </button>
              </div>
              <div class="p-4 md:p-5 space-y-4">
                {
                  service?.beneficios.map(x => (
                    <section class="flex-1 border-2 border-accent dark:border-white/40 p-5 rounded-lg shadow-2xl cursor-pointer transition-all hover:dark:border-accent hover:border-primary hover:scale-105 dark:bg-[url('/assets/icons/bg1-dark.svg')] bg-[url('/assets/icons/bg1-light.svg')]">
                      <p class="text-primary dark:text-white text-center font-semibold">
                        {x.text}
                      </p>
                    </section>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
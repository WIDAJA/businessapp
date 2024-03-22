import { Component } from "preact";
import ProspectForm from "./ProspectForm";
import Notification from "./Notification";
import "../../styles/home.css";
import "@fontsource-variable/podkova";
import "@fontsource/permanent-marker";

export default class Home extends Component {

  constructor(props) {
    super(props)

    this.businessTypes = ["BARBERÍA", "PELUQUERÍA", "SALÓN DE BELLEZA", "SPA"]
    this.timer = null
    this.index = 0

    this.state = {
      business: this.businessTypes[this.index++],
      showNotify: false,
      messageNotify: '',
      successNotify: false
    }
  }

  componentWillUnmount() {
    if (this.timer)
      clearInterval(this.timer)
  }

  componentDidMount() {
    this.timer = setInterval(this.changeBusiness, 1000 * 5);
  }

  changeBusiness = () => {
    this.setState({
      business: this.businessTypes[this.index++]
    })

    if (this.index === this.businessTypes.length)
      this.index = 0
  }

  closeNotify = () => {
    this.setState({ showNotify: false })
  }

  showNotify = ({ message, success }) => {
    this.setState({ messageNotify: message });
    this.setState({ successNotify: success });
    this.setState({ showNotify: true });
  }

  render({ }, { business, showNotify, messageNotify, successNotify }) {

    return (
      <>
        <article
          class="grid grid-cols-1 lg:grid-cols-3 mb-20 gap-5 px-5 sm:px-20 sm:size">

          <section
            class="items-baseline justify-center mt-10 gap-2 animate-slide-in-left hidden sm:flex md:hidden lg:flex xl:flex">
            <img
              class="size"
              src="/assets/img/phone-menu.svg"
              alt="Pantallazo del dashboard de la aplicación"
            />
          </section>

          <section class="col-1 sm:col-span-2 mt-20">
            <h1
              class="text-3xl sm:text-5xl text-center sm:text-left px-2 relative animate-slide-in-top text-primary dark:text-white">
              <span
                class="absolute left-0 top-[-60px] -rotate-6 text-2xl sm:text-4xl soon bg-secondary py-2 px-6 text-accent shadow-md shadow-white/5 transition-all hover:bg-accent hover:text-secondary">
                Proximamente
              </span>
              <p class="sm:text-nowrap z-10">
                Impulsa el éxito de tu <br class="lg:hidden" />
                <span class="px-8 bg-accent text-secondary">
                  {business}
                </span>
              </p>
              con un espacio único que permita a tus clientes reservar citas, consultar servicios,
              estar al tanto de noticias y mucho más.
            </h1>
            <ProspectForm onShowNotify={this.showNotify} onCloseNotify={this.closeNotify} />
          </section>
        </article >
        <Notification
          onCloseNotify={this.closeNotify}
          show={showNotify}
          message={messageNotify}
          success={successNotify} />
      </>
    )
  }
}
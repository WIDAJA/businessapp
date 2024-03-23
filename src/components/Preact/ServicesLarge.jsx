import { Component } from "preact"

export default class ServiceLarge extends Component {

  constructor(props) {
    super(props)
    this.state = {
      services: [],
      serviceSelected: null
    }
  }

  componentWillReceiveProps({ menu }) {
    menu[0].selected = true

    this.setState({ serviceSelected: menu[0] })
    this.setState({ services: menu })
  }

  selectService = (item) => {
    const { services } = this.state

    services.forEach(x => x.selected = false)
    item.selected = true
    this.setState({ serviceSelected: item })

    const newServices = [...services]
    this.setState({ services: newServices })
  }

  render({ }, { services, serviceSelected }) {

    return (
      <>
        <nav className="bg-accent rounded-full flex flex-row gap-20 items-center justify-center">
          {
            services?.map(x => {

              return (
                <a
                  id={x.id}
                  onClick={() => this.selectService(x)}
                  href="javascript: void(0)"
                  className={`py-2 px-5 rounded-full text-primary font-semibold gap-2 items-center transition-all hover:bg-white flex animate-slide-in-top ${x.selected ? 'bg-white' : ''}`}>
                  <img
                    src={x.icon}
                    alt={`Icono representativo de ${x.name}`} />
                  {x.name}
                </a>
              )
            })
          }
        </nav>
        {
          serviceSelected &&
          <section class="flex gap-10 mt-10 size-services">
            {
              serviceSelected
                .images
                .map(x => {
                  return (
                    <img
                      class="max-w-full max-h-full h-auto object-fit-cover hidden sm:block animate-slide-in-left"
                      src={x.name}
                      alt={x.alt}
                    />
                  );
                })
            }
            <div class="flex flex-col gap-5">
              <p class="text-2xl text-primary dark:text-white font-semibold">
                {serviceSelected.text}
              </p>
              <footer>
                <h2 class="text-primary font-light dark:text-accent text-4xl mt-4">
                  ¿Qué te ofrecemos?
                </h2>
                <div class="flex gap-5 mt-10">
                  {
                    serviceSelected
                      .beneficios
                      ?.map(x => (
                        <section class="flex-1 border-2 border-accent dark:border-white/40 p-5 rounded-lg shadow-2xl cursor-pointer transition-all hover:dark:border-accent hover:border-primary hover:scale-105 dark:bg-[url('assets/icons/bg1-dark.svg')] bg-[url('assets/icons/bg1-light.svg')]">
                          <p class="text-primary dark:text-white text-center font-semibold">
                            {x.text}
                          </p>
                        </section>
                      ))
                  }
                </div>
              </footer>
            </div >

          </section >
        }
      </>
    )
  }
}
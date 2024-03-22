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
          <section class="flex justify-center items-center gap-10 mt-10 size-services">
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
            <div class="flex justify-center flex-col">
              <header>
                <h1 class="text-4xl font-bold text-primary dark:text-white">
                  {serviceSelected.name}
                </h1>
              </header>
              <p class="text-3xl mt-5  text-primary dark:text-white">
                {serviceSelected.text}
              </p>
            </div>
          </section>
        }
      </>
    )
  }
}
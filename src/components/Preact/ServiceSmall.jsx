import { Component } from "preact"

export default class ServiceSmall extends Component {

  render({ menu }) {

    return (
      <>
        <h1 class="text-4xl text-center text-primary dark:text-white">- Servicios -</h1>
        <h2 class="text-center  text-primary dark:text-white">
          Estos son algunos de los servicios que tenemos para ayudar a impulsar tu
          negocio
        </h2>
        {
          menu?.map((x, i) => {

            const className = `dark:bg-[url('assets/icons/bg1-dark.svg')] bg-[url('assets/icons/bg1-light.svg')] mt-10 border-2 py-7 px-4 rounded-xl ${!(i % 2) ? 'border-accent' : 'border-green-400'} shadow-2xl dark:shadow-white/5`

            return (
              <section className={className}>
                <header class="text-center text-2xl font-bold text-primary dark:text-white">{x.name}</header>
                <p class="mt-4  text-primary dark:text-white">{x.text}</p>
              </section>
            )
          })
        }
      </>
    )
  }
}
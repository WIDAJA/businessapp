import { Component } from "preact"

export default class ServiceSmall extends Component {

  render({ menu }) {

    return (
      <>
        <h1 class="text-4xl text-center">- Servicios -</h1>
        <h2 class="text-center">
          Estos son algunos de los servicios que tenemos para ayudar a impulsar tu
          negocio
        </h2>
        {
          menu?.map((x, i) => {

            const className = `mt-10 border-2 py-7 px-4 rounded-xl ${!(i % 2) ? 'border-accent' : 'border-green-400'} shadow-lg shadow-secondary`

            return (
              <section className={className}>
                <header class="text-center text-2xl font-bold">{x.name}</header>
                <p class="mt-4">{x.text}</p>
              </section>
            )
          })
        }
      </>
    )
  }
}
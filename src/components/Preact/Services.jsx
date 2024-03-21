import { Component } from "preact";
import ServiceSmall from "./ServiceSmall";
import ServiceLarge from "./ServicesLarge";

export default class Service extends Component {

  state = { menu: [] }

  componentWillMount() {
    this.loadServices();
  }

  loadServices = async () => {

    const result = await fetch(
      `http://localhost:4321/assets/json/services.json`,
    );

    this.setState({ menu: (await result.json()) });
  }

  render({ }, { menu }) {

    return (
      <>
        <article class="px-5 sm:px-20 sm:h-article" id="services">
          <div class="sm:hidden">
            <ServiceSmall menu={menu} />
          </div>
          <div class="hidden sm:block">
            <ServiceLarge menu={menu} />
          </div>
        </article>
      </>
    );
  }
}
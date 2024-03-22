import { Component } from "preact"
import "../../styles/header.css"

export default class Header extends Component {

  constructor(props) {
    super(props)

    this.state = {
      menu: [
        {
          id: "btnHome",
          text: "Inicio",
          href: "/#top",
          icon: "/assets/icons/home.svg",
          alt: "Icono de inicio",
          selected: true,
          event: this.selectMenu
        },
        {
          id: "btnServices",
          text: "Servicios",
          href: "/#services",
          icon: "/assets/icons/service.svg",
          alt: "Icono de Servicios",
          selected: false,
          event: this.selectMenu
        },
        {
          id: "btnTheme",
          text: "",
          href: "javascript:void(0)",
          icon: "/assets/icons/light.svg",
          alt: "Tema claro",
          selected: false,
          event: this.changeTheme
        }
      ]
    }
  }

  selectMenu = (href) => {
    const { menu } = this.state;

    const menuCopy = [...menu];
    menuCopy.forEach(x => x.selected = false);

    const element = menuCopy.find(x => x.href === href);
    element.selected = true;

    this.setState({ menu: menuCopy });
  }

  changeTheme = () => {

    const currentTheme = document.documentElement.classList[0];

    document.documentElement.classList.remove(currentTheme);
    document.documentElement.classList.add(currentTheme === 'dark' ? 'light' : 'dark');
  }

  render({ }, { menu }) {

    return (
      <header
        class="flex flex-row justify-center sm:justify-between w-full items-center sticky top-0 py-2 px-10 z-10">
        <img
          class="animate-slide-in-left"
          src="/assets/img/logo.svg"
          alt="Logo de businessapp" />
        <nav class="gap-7 animate-slide-in-top hidden sm:flex">
          {
            menu?.map(x => (
              <a
                id={x.id}
                href={x.href}
                class={`flex gap-2 items-center text-[17px] text-primary dark:text-white border-b-[3px] border-transparent pb-1 cursor-pointer transition-all hover:border-b-accent ${x.selected ? 'border-b-accent' : ''}`}
                onClick={() => x.event(x)}>
                <img src={x.icon} alt={x.alt} />
                {x.text}
              </a>
            ))
          }
        </nav>
      </header>
    )
  }
}
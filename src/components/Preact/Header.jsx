import { Component } from "preact"
import HomeIcon from "./icons/Home"
import ServiceIcon from "./icons/Service"
import LightIcon from "./icons/Light"
import DarkIcon from "./icons/Dark"
import Logo from "./icons/Logo"
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
          icon: <HomeIcon width={24} height={24} />,
          alt: "Icono de inicio",
          selected: true,
          event: this.selectMenu
        },
        {
          id: "btnServices",
          text: "Servicios",
          href: "/#services",
          icon: <ServiceIcon width={24} height={24} />,
          alt: "Icono de Servicios",
          selected: false,
          event: this.selectMenu
        },
        {
          id: "btnTheme",
          text: "",
          href: "javascript:void(0)",
          icon: <LightIcon width={24} height={24} />,
          alt: "Tema claro",
          selected: false,
          event: this.changeTheme
        }
      ]
    }
  }

  componentDidMount() {
    this.changeIconTheme();
  }

  selectMenu = ({ href }) => {

    const { menu } = this.state;

    const menuCopy = [...menu];
    menuCopy.forEach(x => x.selected = false);

    const element = menuCopy.find(x => x.href === href);
    element.selected = true;

    this.setState({ menu: menuCopy });
  }

  changeTheme = () => {

    const currentTheme = document.documentElement.classList[0]
    const newTheme = currentTheme === 'dark'
      ? 'light'
      : 'dark'

    document.documentElement.classList.remove(currentTheme)
    document.documentElement.classList.add(newTheme)

    localStorage.setItem('theme', newTheme)

    this.changeIconTheme()
  }

  changeIconTheme = () => {

    const theme = localStorage.getItem('theme')

    const { menu } = this.state
    const menuCopy = [...menu]

    const index = menuCopy.findIndex(x => x.id === 'btnTheme')
    if (index === -1)
      return

    menuCopy[index].icon = !theme || theme === 'dark'
      ? <LightIcon width={24} height={24} />
      : <DarkIcon width={24} height={24} />

    this.setState({ menu: menuCopy })
  }

  render({ }, { menu }) {

    return (
      <header
        class="flex flex-col gap-2 md:flex-row justify-center sm:justify-between w-full items-center sticky top-0 py-2 px-14 z-10 main-header">
        <Logo width={212} height={50} />
        <nav class="gap-7 animate-slide-in-top flex">
          {
            menu?.map(x => (
              <a
                id={x.id}
                href={x.href}
                class={`flex gap-2 font-semibold items-center text-[17px] text-primary dark:text-white border-b-[3px] border-transparent pb-1 cursor-pointer transition-all hover:border-b-accent ${x.selected ? 'border-b-accent' : ''}`}
                onClick={() => x.event(x)}>
                {x.icon}
                {x.text}
              </a>
            ))
          }
        </nav>
      </header>
    )
  }
}
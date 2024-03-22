import { Component } from "preact";

export default class ServiceIcon extends Component {

  render({ width, height }) {

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-primary dark:stroke-white"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        stroke-width="1.5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M4 8h4v4h-4z"></path>
        <path d="M6 4l0 4"></path>
        <path d="M6 12l0 8"></path>
        <path d="M10 14h4v4h-4z"></path>
        <path d="M12 4l0 10"></path>
        <path d="M12 18l0 2"></path>
        <path d="M16 5h4v4h-4z"></path>
        <path d="M18 4l0 1"></path>
        <path d="M18 9l0 11"></path>
      </svg>
    )
  }
}
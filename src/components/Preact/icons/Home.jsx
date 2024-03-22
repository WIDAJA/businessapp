import { Component } from "preact";

export default class HomeIcon extends Component {

  render({ width, height }) {

    return (
      <svg
        slot="before"
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
        <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
        <path d="M10 12h4v4h-4z"></path>
      </svg>
    )
  }
}
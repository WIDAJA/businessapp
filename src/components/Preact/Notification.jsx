import { Component } from "preact";
import CheckIcon from "./CheckIcon";
import ErrorIcon from "./ErrorIcon";

export default class Notification extends Component {

  render({ message, success, show }, { }) {

    return (
      <section
        className={show ? 'bg-green-400 text-black fixed bottom-5 h-14 p-5 rounded-xl shadow-2xl flex items-center gap-4' : 'hidden'}>
        {
          success
            ? <ErrorIcon stroke="red" />
            : <CheckIcon stroke="green" />
        }
        <h1 class="font-semibold">
          {message}
        </h1>
        <button
          type="button"
          class="text-black cursor-pointer"
          onClick={this.setState({ show: false })}>
          ✖
        </button>
      </section>
    )
  }
}
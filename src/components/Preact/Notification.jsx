import { Component } from "preact";
import CheckIcon from "./CheckIcon";
import ErrorIcon from "./ErrorIcon";

export default class Notification extends Component {

  constructor(props) {
    super(props)
  }

  render({ message, success, show, onClose }) {

    let color = success ? 'bg-green-400' : 'bg-red-400';
    let className = '';

    if (show) {
      className = `text-black fixed bottom-5 py-3 px-5 rounded-xl shadow-2xl flex items-center gap-4 ${color} animate-fade-in-up`;
    } else {
      className = 'hidden';
    }

    return (
      <section
        className={className}>
        <div className="hidden sm:block">
          {
            success
              ? <CheckIcon stroke="green" />
              : <ErrorIcon stroke="#912623" />
          }
        </div>
        <span class="font-semibold">
          {message}
        </span>
        <button
          type="button"
          class="text-black cursor-pointer"
          onClick={onClose}>
          ✖
        </button>
      </section>
    )
  }
}
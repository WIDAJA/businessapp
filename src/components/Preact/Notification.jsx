import { Component } from "preact";
import CheckIcon from "./CheckIcon";
import ErrorIcon from "./ErrorIcon";

export default class Notification extends Component {

  render({ message, success, show, onClose }) {

    let color = success ? 'bg-green-400' : 'bg-red-400';
    let className = '';

    if (show) {
      className = `text-black fixed bottom-5 h-14 p-5 rounded-xl shadow-2xl flex items-center gap-4 ${color} animate-fade-in-up`;
    } else {
      className = 'hidden';
    }

    return (
      <section
        className={className}>
        {
          success
            ? <CheckIcon stroke="green" />
            : <ErrorIcon stroke="#912623" />
        }
        <pre class="font-semibold">
          {message}
        </pre>
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
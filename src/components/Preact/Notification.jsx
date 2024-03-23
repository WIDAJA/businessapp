import { Component } from "preact";
import CheckIcon from "./icons/Check";
import ErrorIcon from "./icons/Error";

export default class Notification extends Component {

  constructor(props) {
    super(props)
  }

  render({ message, success, show, onCloseNotify }) {

    let color = success ? 'bg-green-400' : 'bg-red-400';
    let className = '';

    if (show) {
      className = `text-black py-3 px-5 rounded-xl shadow-2xl flex items-center gap-4 ${color}`;
    } else {
      className = 'hidden';
    }

    return (
      <div className="fixed flex justify-center bottom-5 w-screen animate-fade-in-up px-5 z-10">
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
            onClick={onCloseNotify}>
            ✖
          </button>
        </section>
      </div>
    )
  }
}
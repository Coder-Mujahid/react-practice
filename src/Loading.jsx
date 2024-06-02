
import './Loading.css';

const Loading = () => {
  return (
    <div id="loader-container">
      <svg
        id="loader"
        width="285"
        height="59"
        viewBox="0 0 285 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
  <path d="M10 50 L10 10 L30 30 L50 10 L50 50" />
  <path d="M60 10 L60 40 C60 50, 80 50, 80 40 L80 10" />
  <path d="M90 10 L90 30 C90 50, 110 50, 110 30" />
  <path d="M130 50 L120 10 L140 10 L150 50 L140 30 L130 30 Z" />
  <path d="M160 10 L160 50 M160 30 L180 30 M180 10 L180 50" />
  <path d="M190 10 L190 50 M190 30 L220 30 M220 10 L220 50" />
  <path d="M230 10 L230 50 C230 10, 260 10, 260 50" />
</svg>
    </div>
  );
};

export default Loading;

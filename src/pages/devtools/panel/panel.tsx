import logo from "@assets/img/logo.svg";

const Panel = () => {
  return (
    <div class="text-center">
      <header class="bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-white text-[calc(10px + 2vmin)]">
        <img
          src={logo}
          class="animate-slow-spin h-[40vmin] pointer-events-none"
          alt="logo"
        />
        <p class="font-bold">
          Edit <code>src/pages/devtools/panel/panel.tsx</code> and save to
          reload.
        </p>
        <a
          class="text-[#b318f0]"
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default Panel;

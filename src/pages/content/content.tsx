import logo from "@src/assets/img/logo.svg";

const Content = () => {
  return (
    <div class="fixed right-5 top-20 z-[2000] w-96 rounded-xl bg-white">
      <div class="text-center">
        <header class="bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-white text-[calc(10px + 1vmin)]">
          <img
            src={logo}
            class="animate-slow-spin h-[20vmin] pointer-events-none"
            alt="logo"
          />
          <p class="font-bold">
            Edit{" "}
            <code class="text-[length:inherit]">
              src/pages/content/content.tsx
            </code>{" "}
            and save to reload.
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
    </div>
  );
};

export default Content;

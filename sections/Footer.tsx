import Logo from "@/assets/icons/logo";

export default function Footer() {
  return (
    <footer className="mt-12 text-primary body-font bg-secondary">
      <div className="max-w-[1200px] mx-auto container px-5 py-8 flex items-center sm:flex-row flex-col">
        <a className="flex items-center justify-center font-medium title-font md:justify-start text-primary">
          <Logo className="text-6xl rounded-full shadow-lg" />
          <span className="ml-3 text-xl">Julian E. Kominovic</span>
        </a>
        <p className="mt-4 text-sm text-primary sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">
          <a
            href="https://github.com/JulianKominovic"
            className="ml-1 text-gray-600"
            rel="noopener noreferrer"
            target="_blank"
          >
            @jkominovic
          </a>
        </p>
      </div>
    </footer>
  );
}

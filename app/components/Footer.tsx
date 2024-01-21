export default function Footer() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center sm:flex-col lg:flex-row gap-5 h-16">
        <a href="https://portfolio-revisit.vercel.app/" target="_blank" className="hover:text-blue-500">
          Portfolio
        </a>
        <a href="https://twitter.com/kitish002" target="_blank" className="hover:text-blue-500">
          Twitter
        </a>
        <a href="https://github.com/charandeep7" target="_blank" className="hover:text-blue-500">
          Github
        </a>
      </div>
    </div>
  );
}

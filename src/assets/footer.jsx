export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900 text-gray-400">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://github.com" target="_blank" className="hover:text-white">GitHub</a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-white">LinkedIn</a>
          <a href="mailto:example@email.com" className="hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  );
}

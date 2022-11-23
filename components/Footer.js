export default function Footer() {
  return (
    <footer className="border-t-2 border-gray-200">
      <div className="flex flex-wrap justify-between items-center max-w-5xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-auto mr-auto text-left">
            <span className="block mb-3">
              &copy; {new Date().getFullYear()} Login Project
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

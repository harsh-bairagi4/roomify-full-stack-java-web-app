import { Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-slate-200 bg-white">
      <div className="border-2 border-yellow-500 max-w-7xl  mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left: Brand */}
        <div className="border-2 border-pink-700 text-xl font-bold text-slate-900 cursor-pointer">
          Roomify
        </div>

        {/* Center: Search */}
        <div className="border-2 border-pink-700 hidden md:flex items-center w-full max-w-md mx-8">
          <div className="relative w-full">
            <Search className="border-2 border-purple-500 absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search rooms, mess, libraries..."
              className="w-full rounded-md border border-slate-300 pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Right: User Icon */}
        <div className="border-2 border-purple-400 h-9 w-9 rounded-full bg-slate-900 flex items-center justify-center cursor-pointer">
          <User className="h-5 w-5 text-white" />
        </div>
      </div>
    </nav>
  );
}

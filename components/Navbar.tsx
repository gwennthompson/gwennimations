import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
        <div className="flex px-12 py-5 items-center justify-between text-[#E5D8C0] bg-[#43475A]"> 
          
        <Link href="/library" className="transition-colors duration-600 hover:text-[#D8A15D]">Library</Link>
        <Link href="/studio" className="transition-colors duration-600 hover:text-[#D8A15D]">Studio</Link>
        <Link href="/workshop" className="transition-colors duration-600 hover:text-[#D8A15D]">Workshop</Link>
          
        <div className="font-cormorant text-3xl text-[#F2E8D5] text-center">
            <Link href="/" className="transition-colors duration-600 hover:text-[#E8C98B]">Gwennimations</Link> 
        </div>
          
        <Link href="/fireside" className="transition-colors duration-600 hover:text-[#D8A15D]">The Fireside</Link> 
        <Link href="/about" className="transition-colors duration-600 hover:text-[#D8A15D]">About</Link>
        <Link href="/contact" className="transition-colors duration-600 hover:text-[#D8A15D]">Contact</Link>
        
        </div>
    </nav>
  );
}
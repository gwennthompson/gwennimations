import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
        <div className="flex px-12 py-5 items-center justify-between text-[#E5D8C0] bg-[#43475A]"> 
          
        <Link href="/library">Library</Link>
        <Link href="/studio">Studio</Link>
          
        <div className="font-cormorant text-3xl text-[#F2E8D5] text-center">
            <Link href="/">Gwennimations</Link> 
        </div>
          
        <Link href="/workshop">Workshop</Link>
        <Link href="/fireside">The Fireside</Link> 
        <Link href="/about">About</Link>
        
        </div>
    </nav>
  );
}
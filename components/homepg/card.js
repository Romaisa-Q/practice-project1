// components/HostelCard.js
import Link from 'next/link'

const HostelCard = ({ id, image, title, price, rating }) => {
  return (
    <Link href={`/hostels/${id}`}>
      <div
        className="relative h-70 sm:h-75 bg-cover bg-center rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
        style={{ backgroundImage: `url('${image}')` }}
      >
        {/* Rating badge */}
        <div className="absolute top-2 left-2 bg-white text-black px-2 py-1 text-xs font-bold rounded-md">
          {rating} Star ⭐
        </div>

        {/* Price and info */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white px-3 py-4 text-xs">
          <h1 className="font-semibold text-sm">{price} / Head</h1>
          <p>{title}</p>
        </div>
      </div>
    </Link>
  )
}

export default HostelCard

import Image from 'next/image'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'
import { baseThumnailUrl } from '../constants/movie'
import { Movie } from '../typings'

interface Props {
  movie: Movie
}
function Thumbnail({ movie }: Props) {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition 
      duration-200 ease-in-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      onClick={() => {
        setCurrentMovie(movie)
        setShowModal(true)
      }}
    >
      <Image
        src={`${baseThumnailUrl}${movie.backdrop_path || movie.poster_path}`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
        alt="poster"
      />
    </div>
  )
}

export default Thumbnail

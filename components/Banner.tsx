import Image from 'next/image'
import { useEffect, useState } from 'react'
import { baseUrl } from '../constants/movie'
import { Movie } from '../typings'
import { InformationCircleIcon, PlayIcon } from '@heroicons/react/outline'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'

interface Props {
  netflixOriginals: Movie[]
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null)
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    )

    return () => {}
  }, [netflixOriginals])

  // console.log(movie)

  return (
    <div className="flex flex-col space-y-2 py-20 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt=""
          layout="fill"
          objectFit="cover"
          // priority={true}
        />
      </div>

      <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold pt-10">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>

      <div className="flex space-x-2">
        <button className="bannerButton bg-white text-black">
          <PlayIcon className="h-4 w-4 md:h-8 md:w-8 text-black" /> Play
        </button>
        <button
          className="bannerButton bg-[gray]/50"
          onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true)
          }}
        >
          <InformationCircleIcon className="h-4 w-4 md:h-8 md:w-8 text-black" />{' '}
          More Info
        </button>
      </div>
    </div>
  )
}

export default Banner

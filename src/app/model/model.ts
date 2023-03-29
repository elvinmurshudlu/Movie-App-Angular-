export interface IMovieDto{
    page: number
    results: IMovie[]
    // dates: Dates
    total_pages: number
    total_results: number

}

export interface IMovie{
    poster_path: string
    adult: boolean
    overview: string
    release_date: string
    genre_ids: number[]
    id: number
    original_title: string
    original_language: string
    title: string
    backdrop_path: string
    popularity: number
    vote_count: number
    video: boolean
    vote_average: number
}

export interface Dates {
    maximum: string
    minimum: string
  }


export interface ITvShowDto{
    page: number
    results: ITvShow[]
    // dates: Dates
    total_pages: number
    total_results: number

}

export interface ITvShow {
  backdrop_path: string
  first_air_date: string
  genre_ids: number[]
  id: number
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
}
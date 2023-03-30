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

export interface IMovieDetail{
  adult: boolean
  backdrop_path: string
  belongs_to_collection: IBelongsToCollection
  budget: number
  genres: IGenre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: IProductionCompany[]
  production_countries: IProductionCountry[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: ISpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface IBelongsToCollection{
  id: number
  name: string
  poster_path: string
  backdrop_path: string
}

export interface IGenreDto{
  genres : IGenre[]
}


export interface IGenre{
  id:number,
  name:string
}

export interface IProductionCompany{
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export interface IProductionCountry{
  iso_3166_1: string
  name: string
}

export interface ISpokenLanguage{
  english_name: string
  iso_639_1: string
  name: string
}

export interface IImages{
  backdrops: IBackdrop[],
  id:number, 
  logo:any[],
  poster: IBackdrop[]
}

export interface IBackdrop{
  aspect_ratio: number
  file_path: string
  height: number
  iso_639_1: any
  vote_average: number
  vote_count: number
  width: number
}

export interface IVideoDto{
  id:number,
  results: IVideo[]
}

export interface IVideo{
  iso_639_1: string
  iso_3166_1: string
  name: string
  key: string
  site: string
  size: number
  type: string
  official: boolean
  published_at: string
  id: string
}
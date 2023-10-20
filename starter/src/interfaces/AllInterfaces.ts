export interface AllRestaurantsType  {
    businessname: string | undefined;
    reviews: string;
    id: string | undefined;
    image:string | undefined;
    restauranttype: string | undefined;
    rating?:number;
    reviewsList: ReviewsType[];
    favs: boolean |undefined;
  }
  
  export interface AllRestaurantsTypeFull extends AllRestaurantsType {
    parkinglot?: boolean,
    phone?: number,
    address?: string,
    website?: string,
    email?: string,
}

export interface ReviewsType{
        id: number | undefined,
        author: string,
        comment: string,
        stars: number
}

export interface ContextData{
    alldata : AllRestaurantsTypeFull[],
    filtereddata : AllRestaurantsType[],
  setfiltereddata: (value: React.SetStateAction<AllRestaurantsType[]>) => void;
  handleFavoritesToggle: (id:string | undefined) => void,
  favorite:  AllRestaurantsType[],
  median: (numbers: number[]) => number
  setname: (value: React.SetStateAction<string>) => void
  setcomment: (value: React.SetStateAction<string>) => void
  setstar: (value: React.SetStateAction<number>)=> void
  star: number,
  name: string,
  comment: string

}

export interface MovieImages{
  preview: string;
  logo?:string;
}

export interface MovieTags{
  rate: number;
  year?: number;
  genre?: string;
  country?: string;
  ageRating?: string;
}

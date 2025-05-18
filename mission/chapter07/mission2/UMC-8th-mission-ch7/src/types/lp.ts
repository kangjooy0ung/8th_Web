import { CommonResponse, CursorBasedResponse } from "./common";

export type Tag = {
  id: number;
  name: string;
};

export type Likes = {
  id: number;
  userId: number;
  lpId: number;
};

export type Lp = {
    id: number;
    title: string;
    content: string;
    thumbnail: string;
    published: boolean;
    authorId: number;
    createdAt: Date;
    updatedAt: Date;
    author?: { name: string };
    tags: Tag[];
    likes: Likes[];
  };

  export type LpDetailDto = Lp & {
    author: {
        id: number;
        name: string;
        email: string;
        bio: string | null;
        avatar: string | null;
        createdAt: string;
        updatedAt: string;
    };
};

  export type RequestLpDto = {
    lpId: number
  } 

  export type ResponseLpDto = CommonResponse<LpDetailDto>
  
  export type ResponseLpListDto = CursorBasedResponse<Lp[]>;

  export type ResponseLikeLpDto = CommonResponse<{
    id: number;
    userId:number;
    lpId:number;
  }>
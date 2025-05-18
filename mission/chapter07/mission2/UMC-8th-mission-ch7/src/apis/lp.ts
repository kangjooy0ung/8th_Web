import { PaginationDto } from "../types/common";
import { LpDetailDto, RequestLpDto, ResponseLikeLpDto, ResponseLpDto, ResponseLpListDto } from "../types/lp";
import { axiosInstance } from "./axios";

export const getLpList = async (paginationDto: PaginationDto): Promise<ResponseLpListDto> => {
    const { data } = await axiosInstance.get("/v1/lps", {
        params: paginationDto
    });

    console.log(data)

    return data;
};

export const getLpDetail = async ({
  lpId,
}: RequestLpDto): Promise<LpDetailDto> => {
  const { data } = await axiosInstance.get<ResponseLpDto>(`v1/lps/${lpId}`);

  return data.data; // 실제 LP 데이터는 여기 있음
};

export const postLike = async ({lpId}: RequestLpDto):Promise<ResponseLikeLpDto> => {
  const {data} = await axiosInstance.post(`/v1/lps/${lpId}/likes`)

  return data
}

export const deleteLike = async ({lpId}: RequestLpDto):Promise<ResponseLikeLpDto> => {
  const {data} = await axiosInstance.delete(`/v1/lps/${lpId}/likes`)

  return data
}
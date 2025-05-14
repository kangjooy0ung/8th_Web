import { PaginationDto } from "../types/common";
import { RequestLpDto, ResponseLpDto, ResponseLpListDto } from "../types/lp";
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
}: RequestLpDto): Promise<ResponseLpDto> => {
  const {data} = await axiosInstance.get(`v1/lps/${lpId}`)

return data
}
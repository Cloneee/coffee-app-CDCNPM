import {
  ILoginPayload,
  ILoginRespone,
  IRegisterPayload,
  IProduct,
  IUserInfo,
  IPassword,
  IOrderRequest,
  IOrderRespone
} from "../models";
import axiosClient from "../app/axios-client";

export const authAPI = {
  login(data: ILoginPayload): Promise<ILoginRespone> {
    const url = "/customer/login";
    return axiosClient.post(url, data);
  },
  register(data: IRegisterPayload): Promise<ILoginRespone> {
    const url = "/customer/register";
    return axiosClient.post(url, data);
  },
};

export const userAPI = {
  getInfo(id: string): Promise<IUserInfo>{
    const url = `/customer/${id}`
    return axiosClient.get(url);
  },
  changeInfo(userInfo: IUserInfo): Promise<IUserInfo>{
    const url = `/customer`
    return axiosClient.put(url, userInfo);
  },
  changePassword(password: IPassword): Promise<string>{
    const url = `/customer/change-password`
    return axiosClient.put(url, password);
  } 
}

export const productAPI = {
  getAll(): Promise<IProduct[]> {
    const url = "/product";
    return axiosClient.get(url);
  },
  getById(id: string): Promise<IProduct>{
    const url = `/product/${id}`;
    return axiosClient.get(url);
  },
  createOrder(data: IOrderRequest): Promise<IOrderRespone>{
    const url = `/order`;
    return axiosClient.post(url, data);
  }
};

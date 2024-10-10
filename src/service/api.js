import request from "@/service/request";
export const getAccessToken = (data) => request.post(`/oauth/token`, data);

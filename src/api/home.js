import request from '@/utils/request';

//定义好借口
export const newImg = params => request({
    url: '/home/swiper',
    // params:params
    params
})
export const newHome = params => request({
    url: 'home/groups?area=AREA%7C88cff55c-aaa4-e2e0',
    // params:params
    params
})
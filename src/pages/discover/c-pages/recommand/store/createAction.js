
import * as actionTypes from './constant'

import { getTopBanners } from '../../../../../services/recommend'


const changeTopBannerAction = (res)=>({
    type:actionTypes.CHANGETOPBANNERS,
    topBanners:res.banners
}) 

export const getTopBannersAction = ()=> {
    return (dispatch)=>{
        getTopBanners().then(res=>{
            dispatch(changeTopBannerAction(res))
        })
    }
}

import React, { memo, useEffect} from 'react'

import { shallowEqual,useDispatch,useSelector } from 'react-redux'

import { getTopBannersAction } from './store/createAction'

// 这个页面是发送的页面
const XWRecommend = memo((props) => {

  // const { getBanners,topBanners } = props

  // 组件和redux关联:获取数据和进行操作
  const { topBanners } = useSelector(state=>({//这是获取数据,这里默认useSelector 是深层比较
    topBanners:state.recommend.topBanners
  }),shallowEqual)

  const dispatch = useDispatch()


  useEffect(()=>{
    // getBanners()
    dispatch(getTopBannersAction())

  },[dispatch])

  return (
    <div>
          这是Recommend 界面
        <h2>{topBanners.length}</h2>
    </div>
  )
})

// const mapStateToProps = state =>({
//   topBanners:state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners:()=>{
//     dispatch(getTopBannersAction())
//   }
// })

// export default connect(mapStateToProps,mapDispatchToProps)(XWRecommend)

export default XWRecommend;
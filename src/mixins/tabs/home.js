import wepy from 'wepy'
import '../../baseAPI'
export default class extends wepy.mixin {
  data = {
    // 轮播图数据
    swiperList: [],
    // 获取首页分类数据
    cateItems: [],
    // 获取楼层信息
    floorData: []
  }

  onLoad() {
    this.getSwiperData()
    this.getCateItems()
    this.getFloorData()
  }
  methods = {
    goGoodsList (url) {
      wepy.navigateTo({ url })
    }
  }

  // 获取轮播图数据的函数
  async getSwiperData() {
    const { data: res } = await wepy.get('/home/swiperdata')
    // console.log(res)
    if (res.meta.status !== 200) {
      return wepy.baseToast()
    }
    this.swiperList = res.message
    // console.log(this.swiperList)
    // 异步操作 所以要调用一下
    this.$apply()
  }
  // 获取分类数据
  async getCateItems() {
    // console.log('ok')
    const { data: res } = await wepy.get('/home/catitems')
    if (res.meta.status !== 200) {
      return wepy.baseToast()
    }
    // console.log(res)
    this.cateItems = res.message
    this.$apply()
  }
  // 获取楼层
  async getFloorData () {
    const {data: res} = await wepy.get('/home/floordata')
    if (res.meta.status !== 200) {
      return wepy.baseToast()
    }
    this.floorData = res.message
    this.$apply()
    // console.log(this.floorData)
  }
}

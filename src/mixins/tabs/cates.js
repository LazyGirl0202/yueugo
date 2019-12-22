import wepy from 'wepy'

export default class extends wepy.mixin {
  data = {
    // 侧边一级导航
    cateList: [],
    // 默认侧边第一个被选中
    activeKey: 0,
    // 侧边的剩余高度
    catHeight: 0,
    // 第二级导航
    secondCate: []
  }
  methods = {
    onChange(event) {
      // console.log(event.detail)
      this.secondCate = this.cateList[event.detail].children
      console.log(this.secondCate)
    }
  }
  onLoad() {
    this.getCateList()
    this.getSystemInfo()
  }
  async getCateList() {
    const { data: res } = await wepy.get('/categories')
    // console.log(res)
    if (res.meta.status !== 200) {
      return wepy.baseToast()
    }
    this.cateList = res.message
    this.secondCate = res.message[0].children
    this.$apply()
  }
  async getSystemInfo () {
    const res = await wepy.getSystemInfo()
    // console.log(res)
    if (res.errMsg === 'getSystemInfo:ok') {
      this.catHeight = res.windowHeight
      this.$apply()
    }
  }
}

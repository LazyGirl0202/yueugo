import wepy from 'wepy'

export default class extends wepy.mixin {
  data = {
    // 输入框的值
    value: '',
    // 搜索内容
    suggestList: []
  }
  methods = {
    // 触发搜索
    onSearch(e) {
      // e.detail是回车时的最新的关键词
      console.log(e.detail)
      if (e.detail.trim().length <= 0) {
        this.suggestList = []
        return
      }
      this.getSuggestList(e.detail)
    },
    // 触发了取消按钮
    onCancel() {
      this.suggestList = []
    }
  }

  onLoad() {
  }
  // 获取搜索内容
  async getSuggestList(searchStr) {
    const {data: res} = await wepy.get('/goods/qsearch', {
      query: searchStr
    })
    if (res.meta.status !== 200) {
      return wepy.baseToast()
    }
    // console.log(res)
    this.suggestList = res.message
    console.log(this.suggestList)
    this.$apply()
  }
}

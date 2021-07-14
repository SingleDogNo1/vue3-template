import { mount } from '@vue/test-utils'

import About from '@/views/About/index.vue'

describe('about页', async () => {
  it('内容应当包含 about 字符串', async () => {
    const wrapper = mount(About)
    const a = wrapper.get('.about')

    // TODO 不是 toContain 而是 contain，why??????
    expect(a.text()).contain('password')
  })
})

import '../../css/components.less'
import Banner from './banner'
import BannerSmall from './banner-small'
import Bread from './bread'
import Dialog from './dialog'
import StepFlow from './step-flow'
import Tab from './tab'
import TipsMenu from './tips-menu'

import outputCfg from 'output.cfg'

const moduleName = 'rf-vue-ui'
let components = {Banner, BannerSmall, Bread, Dialog, StepFlow, Tab, TipsMenu}

if (outputCfg.isCdn === true) {
  window[moduleName] = components
}

export { Banner, BannerSmall, Bread, Dialog, StepFlow, Tab, TipsMenu }
export default components

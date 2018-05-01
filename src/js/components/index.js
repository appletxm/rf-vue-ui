import '../../css/components.less'
import Banner from './banner'
import BannerSmall from './banner-small'
import Bread from './bread'
import Dialog from './dialog'
import StepFlow from './step-flow'
import Tab from './tab'
import TipsMenu from './tips-menu'

// const isCmdEnv = !!module
// const isAmdEnv = define
// const moduleName = 'rf-vue-ui'

// let components = {Banner, BannerSmall, Bread, Dialog, StepFlow, Tab, TipsMenu}

// if(isAmdEnv) {
//     define(moduleName, [], () =>{
//         return components
//     })
//     return false
// } else {
//     window.Banner = Banner
//     window.BannerSmall = BannerSmall
//     window.Bread = Bread
//     window.Dialog = Dialog
//     window.StepFlow = StepFlow
//     window.Tab = Tab
//     window.TipsMenu = TipsMenu
//     window[moduleName] = components
//     return false
// }


export { Banner, BannerSmall, Bread, Dialog, StepFlow, Tab, TipsMenu }
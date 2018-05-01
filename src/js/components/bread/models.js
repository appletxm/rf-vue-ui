export default {
  getPath(menuData, selectedMenuInfo) {
    let {menuId, title} = leftMenuModels.getCurrentMenuInfo(selectedMenuInfo)

    let breadList = []
    let matchedItem = []

    if (!menuId) {
      breadList.push({menuId, title})
    } else {
      if (matchedItem && matchedItem.length > 0) {
        breadList = breadList.reverse()
        breadList.concat(breadList)
      }
    }

    return breadList
  }

}

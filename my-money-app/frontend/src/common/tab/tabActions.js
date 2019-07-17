export function selectTab(tabId) {
    //console.log(tabId)
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export function showTabs(... tabIds){//...tabIds operador rest (contrario do spread) Conjunto de ids
    const tabsToShow = {}
    tabIds.forEach(e =>tabsToShow[e] = true) //cria os objetos (nâo é um array [])
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}
export function themeColor(value) {
    var domArr = [];
    if (document.getElementsByClassName('groupList')) {
        var groupDom = document.getElementsByClassName('groupList');
        var articleDom = document.getElementsByClassName('articleList-container')
        for (let i = 0; i < groupDom.length; i++) {
            domArr.push(groupDom[i])
        }
        for (let j = 0; j < articleDom.length; j++) {
            domArr.push(articleDom[j])
        }

    }
    // domArr.push(document.getElementsByTagName("body")[0])
    domArr.push(document.getElementsByClassName('ltr')[0])
    if (value) {
        //黑夜模式
        document.body.className = "bodybg"
        for (const dom in domArr) {
            domArr[dom].style.backgroundColor = "rgba(48,48,48,0.5)";
            domArr[dom].style.color = "#fff"
        }
    } else {
        //白天模式
        document.body.className = ""
        for (const dom in domArr) {
            domArr[dom].style.backgroundColor = "rgba(255,255,255,0.5)";
            domArr[dom].style.color = "#000"
        }

    }
}
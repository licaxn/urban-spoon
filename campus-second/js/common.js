// 公共头部导航
function loadHeader(){
    const headerHtml = `
    <nav class="navbar navbar-expand-lg bg-white">
        <div class="container">
            <a class="navbar-brand logo" href="index.html">校园淘</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="nav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item"><a class="nav-link active" href="index.html">首页</a></li>
                    <li class="nav-item"><a class="nav-link" href="goods_list.html">全部商品</a></li>
                    <li class="nav-item"><a class="nav-link" href="publish.html">发布闲置</a></li>
                    <li class="nav-item"><a class="nav-link" href="user_center.html">个人中心</a></li>
                </ul>
                <div id="user-status">
                    <a href="login.html" class="btn btn-outline-primary me-2">登录</a>
                    <a href="register.html" class="btn btn-main">注册</a>
                </div>
            </div>
        </div>
    </nav>`;
    $("header").html(headerHtml);
    checkLogin();
}

// 公共底部
function loadFooter(){
    const footerHtml = `
    <footer>
        <div class="container">
            <p>校园二手交易平台 ©2026 Web前端课程设计 | 南京工程学院</p>
        </div>
    </footer>`;
    $("footer").html(footerHtml);
}

// 登录状态校验
function checkLogin(){
    let user = localStorage.getItem("loginUser");
    if(user){
        let u = JSON.parse(user);
        $("#user-status").html(`
            <span class="me-3 text-main">欢迎，${u.name}</span>
            <button class="btn btn-sm btn-danger" onclick="logout()">退出登录</button>
        `)
    }
}

// 退出登录
function logout(){
    localStorage.removeItem("loginUser");
    location.href = "index.html";
}

// 获取所有商品
function getGoodsList(){
    let goods = localStorage.getItem("goods");
    return goods ? JSON.parse(goods) : [];
}

// 保存商品数组
function saveGoodsList(arr){
    localStorage.setItem("goods",JSON.stringify(arr));
}

// 获取收藏
function getCollect(){
    let collect = localStorage.getItem("collect");
    return collect ? JSON.parse(collect) : [];
}

// 保存收藏
function saveCollect(arr){
    localStorage.setItem("collect",JSON.stringify(arr));
}

// 页面加载自动加载头尾
$(function(){
    loadHeader();
    loadFooter();
})
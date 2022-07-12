window.onload = function() {
    //商品信息，可以使用ajax请求后台数据
    let data = [
        {
            shopName:"古风衣装",
            imgUrl:"./img/items1.jpg",
            itemTxt:"扇子男生霸气中国风古装复古大号折叠扇随身汉服配饰古风折扇",
            type:"颜色分类",
            typeChoice:"10存且试天下+流苏10存且试天下+流苏10存且试天下+流苏",
            priceOld:"49.00",
            priceNew:"25.60"
        },
        {
            shopName:"旁氏旗舰店",
            imgUrl:"./img/items2.jpg",
            itemTxt:"旁氏氨基酸系洗面奶米粹竹炭樱粉洁面乳深层清洁毛孔洁面乳正品女",
            type:"颜色分类",
            typeChoice:"米粹洁面150g*2",
            priceOld:"73.20",
            priceNew:"64.90"
        },
        {
            shopName:"海澜之家",
            imgUrl:"./img/items3.jpg",
            itemTxt:"高级感巴洛克衬衫男设计感小众情侣冰丝长袖衬衣夏季薄款外套潮牌",
            type:"颜色分类",
            typeChoice:"白色长袖2XL",
            priceOld:"90.00",
            priceNew:"68.87"
        },
        {
            shopName:"阿里大药房",
            imgUrl:"./img/items4.jpg",
            itemTxt:"明康欣阿达帕林凝胶祛痘膏30g*1支/盒正品痤疮正品保证丘疹粉刺",
            type:"套餐类型",
            typeChoice:"标准装",
            priceOld:"53.20",
            priceNew:"39.20"
        },
        {
            shopName:"阿里大药房",
            imgUrl:"./img/items4.jpg",
            itemTxt:"明康欣阿达帕林凝胶祛痘膏30g*1支/盒正品痤疮正品保证丘疹粉刺",
            type:"套餐类型",
            typeChoice:"标准装",
            priceOld:"53.20",
            priceNew:"39.20"
        }
    ];
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
    let main_con = document.querySelector('main .tb_main_content');
    let add_btn = document.querySelector('.add_btn .btn-default');
    let title_num = document.querySelector('main .tb_main_title span')
    add_btn.addEventListener('click',()=>{
        let i = getRndInteger(0,data.length);
        let div_item = document.createElement('div');
        div_item.setAttribute('class', 'tb_main_content_items');
        //将div内容以模板字符串形式赋给div_item
        div_item.innerHTML = `
            <div class="items_title">
                <input type="checkbox" id="shop_select">
                <label for="shop_select"></label>
                <span id="shop">店铺：</span>
                <span id="shop_name">${data[i].shopName}</span>
            </div>
            <div class="items_content">
                <ul class="items_inner">
                    <li class="items_checkbox">
                        <input type="checkbox" id="items_check_box">
                        <label for="items_check_box"></label>
                    </li>
                    <li id="items_info">
                        <div id="items_information">
                            <img src="${data[i].imgUrl}" alt="商品首图">
                            <div class="items_information_right">
                                <p><a href="#">${data[i].itemTxt}</a></p>
                                <div class="placeholder"></div>
                                <div class="icons">
                                    <img src="img/icon1.png" alt="">
                                    <img src="img/icon2.jpg" alt="">
                                    <img src="img/icon3.png" alt="">
                                </div>
                            </div>
                        </div>
                    </li>
                    <li id="items_classify">
                        <div class="classify-content">
                            <span id="classify-name">${data[i].type}：</span>
                            <p id="classify-description">${data[i].typeChoice}</p>
                        </div>
                    </li>
                    <li id="items_prices">
                        <div class="prices-content">
                            <div class="prices-old">
                                <span>￥</span>
                                <em>${data[i].priceOld}</em>
                            </div>
                            <div class="prices-new">
                                <span>￥</span>
                                <em>${data[i].priceNew}</em>
                            </div>
                        </div>
                    </li>
                    <li id="items_amounts">
                        <div class="amounts-content">
                            <div class="amounts-inner">
                                <a href="#" class="Minus">-</a>
                                <input type="text" value="1" class="text-amount" data-max="99999999" data-now="1" autocomplete="off">
                                <a href="#" class="Plus">+</a>
                            </div>
                        </div>
                    </li>
                    <li id="items_sum-number">
                        <div class="sum-number-content">
                            <span>￥</span>
                            <span id="prices">${data[i].priceNew}</span>
                        </div>
                    </li>
                    <li id="items_handle">
                        <a href="#"><div class="handle_fav">移入收藏夹</div></a>
                        <a href="#"><div class="handle_del">删除</div></a>
                    </li>
                </ul>
            </div>
        `;
        //将单个商品信息的div_item追加给父元素main_con
        main_con.insertBefore(div_item,main_con.children[0]);
        //获取
        let priceNew = document.querySelector('.tb_main_content .tb_main_content_items .items_content .items_inner #items_prices .prices-content .prices-new em');
        let Minus = document.querySelector('.tb_main_content .tb_main_content_items .items_content .items_inner #items_amounts a.Minus');
        let input = document.querySelector('.tb_main_content .tb_main_content_items .items_content .items_inner #items_amounts input');
        let Plus = document.querySelector('.tb_main_content .tb_main_content_items .items_content .items_inner #items_amounts a.Plus');
        let prices = document.querySelector('.tb_main_content .tb_main_content_items .items_content .items_inner #items_sum-number span');
        let del = document.querySelector('.tb_main_content .tb_main_content_items .items_content .items_inner #items_handle  a .handle_del');
        Minus.addEventListener('click', ()=>{
            if(input.value <= 1){   //<=具有隐式转换
                Minus.disabled = true;
            }else{
                input.value--;
            }
            // prices.innerHTML = (+priceNew.priceNew * +input.value).toFixed(2).toString();
            // console.log(input.value,typeof input.value);
        });
        Plus.addEventListener('click', ()=>{
            input.value++;
            Minus.disabled = false;
            // prices.innerHTML = (+priceNew.priceNew * +input.value).toFixed(2).toString();
            // console.log(input.value,typeof input.value);
        });
        del.addEventListener('click', ()=>{
            let msg = '确认要删除该商品吗？';
            if(confirm(msg) === true){
                main_con.removeChild(div_item);
                title_num.innerHTML = `购物车（全部${main_con.children.length-1}）`;
            }else{
                return false;
            }
        });
        title_num.innerHTML = `购物车（全部${main_con.children.length-1}）`;
        // console.log(main_con.children.length-1);
    });
}
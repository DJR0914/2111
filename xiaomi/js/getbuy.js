async function render() {
	let href = location.href;
	// console.log(href);
	let arr = href.split('?')[1];
	let id = arr.split('=')[1];
	// console.log(id);
	//拿到专属于这个商品的id
	let data = await axios.get({
		url: '../js/goodsList.json'
	})
	console.log(data)
	let content = document.querySelector('#content')
	//console.log(content)
	let html = '';
	data.forEach(goodsList => {
		if (goodsList.id == id) {
			html += `<div class="e8">
			<div class="fl e9">
				<div>
					<div id="xiyiji">
						<ul class="xiyiji1">
							<li>
								<img width="560px" src="${goodsList.src}"
									alt="">
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="fr f1">
				<h2 class="f2">${goodsList.name}</h2>
				<p class="f3"><a href="" class="f4">${goodsList.desc}</p>
				<p class="f4 mt30">小米自营</p>
				<p class="f4 mt30 font18">${goodsList.price}</p>
				<hr>
				<div class="f6 mt20"><img src="" alt="">北京 北京市 海淀区 清河街道 <a href="" class="orange">修改 <br>有现货</a></div>
				<p class="mt10">选择颜色</p>
				<p class="f7 font16 tc mt10">白色</p>
				<p class="f7 font16 tc mt10">粉色</p>
				<p class="f7 font16 tc mt10">蓝色</p>
				<div class="f6 f8 mt20 mb30">
					<p class="fl">${goodsList.name}</p>
					<p class="fr">${goodsList.price}</p>
					<br>
					<p class="orange font22 mt30">总计:${goodsList.price}</p>
				</div>
				<div>
					<button class="f9" id="${goodsList.id}" onclick="addCart(${goodsList.id},1)">加入购物车</button>
					<button class="l1">喜欢</button>
				</div>
				<div>
					<p class="mt20">小米自营 小米发货 支持7天无理由退货（安装后不支持） 运费说明</p>
					<p class="mt20">企业信息 售后服务政策 30天价格保护</p>
				</div>
			</div>
		</div>`
		}
	});
	content.innerHTML = html;
}
render();


/** 加入购物车**/
function addCart(id, num) {
    //console.log(111,id,num);
    //先获取local里的数据，查看购物车是否已有数据
    let cartGoods = localStorage.getItem('cart')
    //判断有没有
    if (cartGoods) { //如有
        //解析当前数据
        cartGoods = JSON.parse(cartGoods);
        //遍历数据
        for (let attr in cartGoods) {
            //存在则修改数量
            attr == id && (num = num + cartGoods[attr]);
        }
        //修改数量，不存则添加
      cartGoods[id] = num;
      localStorage.setItem('cart', JSON.stringify(cartGoods))
    } else {
        //如果没有数据
      cartGoods = { [id]: num };
      localStorage.setItem('cart', JSON.stringify(cartGoods))
    }
    location.href = './cart.html';
}

Page({
  data: {
		hidden:false,
		curNav:1,
		curIndex:0,
		cart:[],
		cartTotal:0,
		totalPrice:0,

		imgUrls: [
     	 'https://pixabay.com/static/uploads/photo/2016/10/16/20/10/sunset-1746167_960_720.jpg',
     	 'https://pixabay.com/static/uploads/photo/2016/10/16/20/10/sunset-1746167_960_720.jpg',
     	 'https://pixabay.com/static/uploads/photo/2016/10/16/20/10/sunset-1746167_960_720.jpg'
  	  ],
    		navList:[
			{
				id:1,
				name:'青年川味香辣套餐'
			},
			{
				id:2,
				name:'青年逼格饭'
			},
			{
				id:3,
				name:'辣些逼格饭'
			},
			{
				id:4,
				name:'青春正浓青饮正夏'
			},
			{
				id:5,
				name:'青年卤力饭'
			},
			{
				id:6,
				name:'青春时光小吃'
			},
			{
				id:7,
				name:'测试测试1'
			},
			{
				id:8,
				name:'测试测试2'
			},
			{
				id:9,
				name:'测试测试3'
			},
			{
				id:10,
				name:'测试测试4'
			},
			{
				id:11,
				name:'测试测试5'
			}
		],

		dishesList:[
			[
				{
					name:"长大才吃蒜泥白肉",
					price:20,
					num:0,
					id:10,
					img:'icon.jpeg'
				},
				{
					name:"青年不羁川湘卤鸭",
					price:18,
					num:0,
					id:11,
					img:'icon.jpeg'
				},
				{
					name:"时而想念口水鸡",
					price:23,
					num:0,
					id:12,
					img:'icon.jpeg'
				}
			],
			[
				{
					name:"沙茶肥牛逼格饭",
					price:24,
					num:0,
					id:20,
					img:'icon.jpeg'
				},
				{
					name:"咖喱肥牛逼隔饭",
					price:25,
					num:0,
					id:21,
					img:'icon.jpeg'
				},
				{
					name:"黑椒肥牛逼隔饭",
					price:26,
					num:0,
					id:22,
					img:'icon.jpeg'
				}
			],
			[
				{
					name:"红油辣椒肥牛饭",
					price:24,
					num:0,
					id:30,
					img:'icon.jpeg'
				},
				{
					name:"青红双椒肥牛饭",
					price:26,
					num:0,
					id:31,
					img:'icon.jpeg'
				}
			],
			[
				{
					name:"年华正好(薄荷柠檬苏打水)",
					price:12,
					num:0,
					id:40,
					img:'icon.jpeg'
				},
				{
					name:"很久以前(百香果水果茶)",
					price:13,
					num:0,
					id:41,
					img:'icon.jpeg'
				},
				{
					name:"那年夏天(薄荷咸柠檬七)",
					price:13,
					num:0,
					id:42,
					img:'icon.jpeg'
				}
			],
			[
				{
					name:"卤个翅膀飞往梦想",
					price:20,
					num:0,
					id:50,
					img:'icon.jpeg'
				},
				{
					name:"花言巧语香卤猪舌",
					price:21,
					num:0,
					id:51,
					img:'icon.jpeg'
				},
				{
					name:"肥而不腻香醇卤肉",
					price:18,
					num:0,
					id:52,
					img:'icon.jpeg'
				},
				{
					name:"青春不朽香醇卤鸭",
					price:17,
					num:0,
					id:53,
					img:'icon.jpeg'
				},
				{
					name:"我想和你比翼双飞",
					price:22,
					num:0,
					id:54,
					img:'icon.jpeg'
				}
			],
			[
				{
					name:"放学门外土豆花",
					price:7,
					num:0,
					id:60,
					img:'icon.jpeg'
				},
				{
					name:"青春盎然裙带菜",
					price:8,
					num:0,
					id:61,
					img:'icon.jpeg'
				}
			],
			[
				{
					name:"卤个翅膀飞往梦想",
					price:20,
					num:0,
					id:70,
					img:'icon.jpeg'
				},
				{
					name:"花言巧语香卤猪舌",
					price:21,
					num:0,
					id:71,
					img:'icon.jpeg'
				},
				{
					name:"肥而不腻香醇卤肉",
					price:18,
					num:0,
					id:72,
					img:'icon.jpeg'
				},
				{
					name:"青春不朽香醇卤鸭",
					price:17,
					num:0,
					id:73,
					img:'icon.jpeg'
				},
				{
					name:"我想和你比翼双飞",
					price:22,
					num:0,
					id:74,
					img:'icon.jpeg'
				},
				{
					name:"花言巧语香卤猪舌",
					price:21,
					num:0,
					id:75,
					img:'icon.jpeg'
				},
				{
					name:"肥而不腻香醇卤肉",
					price:18,
					num:0,
					id:76,
					img:'icon.jpeg'
				},
				{
					name:"青春不朽香醇卤鸭",
					price:17,
					num:0,
					id:77,
					img:'icon.jpeg'
				},
				{
					name:"我想和你比翼双飞",
					price:22,
					num:0,
					id:78,
					img:'icon.jpeg'
				}
			]
		],
    
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  selectDish : function(e)
  {
	  wx.navigateTo({url:'/pages/detail/detail'}); 
  },

  swipeChange : function(e){
    console.log(e.detail.current)
  },

	selectNav (event) {
	let id = event.target.dataset.id,
		index = parseInt(event.target.dataset.index);
		self = this;
	this.setData({
		curNav:id,
		curIndex:index
	})
	},
	// 单机添加物品
	addClick :function(e){	
	// 获取id
		var id = e.target.dataset.nameid;
		var item = this.data.dishesList
		// 添加数量
		for (var i = 0 ;i < item.length; i++){
			var array = item[i];
			for(var j = 0; j < array.length; j++){
				var dict = array[j];
				if(dict.id == id){
					console.log(dict.name);
					dict.num++;
					this.setData({dishesList:item});
					break;
				}
			}
		}
		var price = this.data.totalPrice;
		price = parseFloat(e.target.dataset.price) + parseFloat(price);
		this.setData({totalPrice : price});

	},

	deleteClick :function(e){

						// 获取id
		var id = e.target.dataset.nameid;
		var item = this.data.dishesList
		// 添加数量
		for (var i = 0 ;i < item.length; i++){
			var array = item[i];
			for(var j = 0; j < array.length; j++){
				var dict = array[j];
				if(dict.id == id){
					dict.num--;
					if (dict.num < 0){
						dict.num = 0;
						return;
					}
					this.setData({dishesList:item});
					break;
				}
			}
		}

		var price = this.data.totalPrice;
		price = parseFloat(price) - parseFloat(e.target.dataset.price);
		if(price <0){
			price = 0;
		}
		this.setData({totalPrice : price});
		

	}
})

window.findColor=window.findColor||{};
(function(){
	/*
	 * info   字面量形式     background. opration. row. cotainerWidth
	 */
//	    try{控制形参的方法   在可能出现错误的地方添加try catch
//			console.log(info.background)
//		}catch(error){
//			console.log(error)
//		}//保证不会报错崩溃
	function ColorView(info){
		var _info=info||{};//确保参数存在
		var row=_info.row//行数
		var spaceNum=row+1;//间距个数
		var space=_info.containerWidth/row/18//间距
		var width=(_info.containerWidth-space*spaceNum)/row//每个色块的宽度
		this.view=document.createElement("div")
	    this.view.style.cssText="background-color:"+_info.background+";opacity:"+_info.opacity+";float:left;width:"+width+"px;height:"+width+"px;margin:"+space+"px 0 0 "+space+"px;"
	}
	
	
	
	
	
	
	findColor.ColorView=ColorView;
})()

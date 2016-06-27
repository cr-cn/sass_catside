// RequireJS
// 为什么使用RequireJS?
// 1、有效的防止命名冲突
// 2、声明不同js文件之间的依赖
// 3、可以让我们的代码以模块化的方式组织
// 4、官网：http://requirejs.org
// 
// requireJS常用的方法
// 1、requirejs.config
// 2、requirejs
// 3、define

requirejs.config({
	paths:{
		jquery:'jquery-1.11.3.min'
	}
});

requirejs(['jquery','validate'],function($,validate){
	// $('body').css('background','red');
	//创建模块，方便管理，完成表单验证validate.js
	console.log(validate.isEqual(1,3))
})
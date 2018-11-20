$(function(){

new Vue({
	el:"#console",
	data:{
		msg:"hello world",

		bglist:[57200,4800],
		dataBits:[8,7,6,5,4,3,2,1,]
	}


})














});

layui.use('form',function(){
  var form = layui.form;
  
  //监听提交
  form.on('submit(formDemo)', function(data){
    layer.msg(JSON.stringify(data.field));
    return false;
  });
});


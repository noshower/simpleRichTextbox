//获取元素
function $(str) {
	return document.querySelector(str);
}
// 使用document.execCommand()方法
function exec(aCommandName, aShowDefaultUI, aValueArgument) {
	return document.execCommand(aCommandName, aShowDefaultUI, aValueArgument);
}
//撤销动作
$('#undo').addEventListener('click', function() {
	exec('undo');
});
//选择字体
$('#fontName').addEventListener('change', function() {
	var val = this.value;
	exec('fontName', false, val);
});
//选择字体大小
$('#fontSize').addEventListener('change', function() {
	var val = this.value;
	exec('fontSize', false, val);
});
//加粗
$('#bold').addEventListener('click', function() {
	exec('bold');
});
//斜体
$('#italic').addEventListener('click', function() {
	exec('italic');
});
//加下划线
$('#underline').addEventListener('click', function() {
	exec('underline');
});
//左对齐
$('#justifyLeft').addEventListener('click', function() {
	exec('justifyLeft');
});
//居中对齐
$('#justifyCenter').addEventListener('click', function() {
	exec('justifyCenter');
});
//右对齐
$('#justifyRight').addEventListener('click', function() {
	exec('justifyRight');
});
//插入图片
$('#insertImage').addEventListener('change', function() {
	var that = this.files[0];
	var reader = new FileReader();
	reader.readAsDataURL(that);
	reader.onload = function(e) {
		exec('insertImage', false, this.result);
	}

});
//插入视频
$('#insertVideo').addEventListener('click',function(){
     var str = prompt('请输入视频地址');
		 if(str){
		 	var s = '<video src='+str+' width="500" controls="constrols"></vidoe>'
		 }

		 exec('insertHTML', false, s);
});

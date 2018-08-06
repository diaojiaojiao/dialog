window.onload = function() {
    dialog();
};
function dialog() {
    //获取DOM元素
    var cancelBtn = document.getElementsByClassName('cancelBtn')[0];
    var confirmBtn = document.getElementsByClassName('confirmBtn')[0];
    var deleteBtn = document.getElementsByClassName('deleteBtn')[0];
    var dialogMain = document.getElementsByClassName('dialogMain')[0];
    var dialogOpen = document.getElementsByClassName('dialogOpen')[0];
    var inputName = document.getElementsByClassName('inputName')[0];
    var inputAge = document.getElementsByClassName('inputAge')[0];
    var show = document.getElementsByClassName('show')[0];
    //打开对话框
    dialogOpen.addEventListener('click',() => {
        dialogMain.style.display = 'block';
        inputName.value = '';
        inputAge.value = '';
    },false)
     //取消
     cancelBtn.addEventListener('click',() => {
        dialogMain.style.display = 'none';
     },false)
     //确认
     confirmBtn.addEventListener('click',() => {
         var inputNameText = inputName.value;
         var inputAgeText = inputAge.value;
         show.innerText = "您的姓名为" + inputNameText + "，您的年龄为" + inputAgeText;
         show.style.display = 'block';
     },false)
     //删除
     deleteBtn.addEventListener('click',() => {
         show.style.display = 'none';
         inputName.value = '';
         inputAge.value = '';
     },false)
}


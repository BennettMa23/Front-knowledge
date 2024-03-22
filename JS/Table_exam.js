// 新增数据函数
function addData() {
    var table = document.getElementById('Table');
    // console.log(table);
    // 获取插入位置
    var length = table.rows.length;
    // console.log(length);
    // 插入行结点
    var newrow = table.insertRow(length);
    // console.log(newrow);
    // 插入列结点对象
    var namecell = newrow.insertCell(0);
    var phonecell = newrow.insertCell(1);
    var actioncell = newrow.insertCell(2);
    // 设置列结点文本内容
    namecell.innerHTML = "未命名";
    phonecell.innerHTML = "无联系方式";
    // 设置列结点按钮
    actioncell.innerHTML = '<button onclick="editData(this)">编辑</button><button onclick="deleteData(this)">删除</button>';
}

// 删除数据函数
function deleteData(button) {
    // console.log(button);
    var row = button.parentNode.parentNode;
    console.log(row);
    row.parentNode.removeChild(row);
}

// 编辑数据函数
function editData(button) {
    console.log(button);
    var row = button.parentNode.parentNode;
    var namecell = row.cells[0];
    var phonecell = row.cells[1];
    // 弹出输入框
    var inputName = prompt("请输入姓名：");
    if (inputName != ""){
        var inputPhone = prompt("请输入联系方式：");
    }

    // 更新单元格内容
    namecell.innerHTML = inputName;
    if (inputName != "") {
        phonecell.innerHTML = inputPhone;
    }
}

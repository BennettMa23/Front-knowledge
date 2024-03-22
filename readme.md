# <center>Markdown 常用</center>

|表格对齐方式|对齐方式2|
|:----|:----:|
|左对齐|居中|
*Markdown 官方*  https://markdown.com.cn/basic-syntax/emphasis.html

# HTML+CSS+JavaScript学习笔记
## 一、HTML
### 1.基本语法
1.1 <br>、<hr>。<br>、<br/>表示换行，<hr>、<hr/>表示水平分隔线。
1.2 注释：以左尖括号和感叹号组合开始（<!--），以右尖括号（-->）结束。快捷键：ctrl+/
1.3 标签
1.3.1 “h标签”：标题标签 <h1>标题内容</h1>
1.3.2 “p标签”：段落标签 <p>段落内容</p>
<p>
        段落标签
        <b>加粗</b>、<i>斜体</i>、<u>下划线</u>、<s>删除线</s>
</p>

 
1.3.3 “无序列表标签”
<ul>
        <li>无序列表元素 1</li>
        <li>无序列表元素 2</li>
        <li>无序列表元素 3</li>
</ul>

 
1.3.4 “有序列表标签”
<ol>
        <li>有序列表元素 1</li>
        <li>有序列表元素 2</li>
        <li>有序列表元素 3</li>
</ol>

 
1.3.5 “表格标签”
<table border="1">
        <tr>
            <th>列标题 1</th>
            <th>列标题 2</th>
            <th>列标题 3</th>
        </tr>
        <tr>
            <td>元素 11</td>
            <td>元素 12</td>
            <td>元素 13</td>
        </tr>
        <tr>
            <td>元素 21</td>
            <td>元素 22</td>
            <td>元素 23</td>
        </tr>
        <tr>
            <td>元素 31</td>
            <td>元素 32</td>
            <td>元素 33</td>
        </tr>
</table>
1.3.6 “a标签”：超链接标签
<a href="https://www.bilibili.com/" target="_blank">1哔哩哔哩bilibili</a>
<a href="https://www.bilibili.com/" target="_parent">2哔哩哔哩bilibili</a>
 
target属性：target="_blank" 在新的页面显示								  target="_parent" 在当前页面显示

1.3.7 “img标签”：图片标签
<!-- src属性可为相对路径和绝对路径 -->
<img src=".\photo\素材.jpg" alt="">
<br>
<!-- alt属性可留白，错误路径alt有值则不显示图片 -->
<img src=".\photo\素材2.jpg" alt="图片无法显示">
<br>
<!-- width height 属性可设置图片宽度和高度 -->
<img src=".\photo\素材.jpg" alt="" width="300" height="200">
 

1.3.8 “div标签”：块标签
1.3.8 “span标签”：行标签


### 2.	表单
2.1 “form”
<!-- form表单 -->
<form action="">
<!-- 提示 -->
<input type="text" placeholder="请输入内容："> <br>
<!-- 赋值 -->
<input type="text" value="请输入内容："> <br><br>

<label for="">用户名：</label>
<input type="text" placeholder="请输入用户名："> <br><br>
<label for="">密码：</label>
<input type="password" placeholder="请输入密码："> <br><br>

<!-- 选项 -->
<!-- 单选radio -->
<label for="">性别：</label>
<input type="radio" name="gender"> 男
<input type="radio" name="gender"> 女
<input type="radio" name="gender"> 其他
<br><br>

<!-- 多选checkbox -->
<label for="">爱好：</label>
<input type="checkbox" name="hobby"> 唱
<input type="checkbox" name="hobby"> 跳
<input type="checkbox" name="hobby"> rap
<input type="checkbox" name="hobby"> 篮球
<br><br>

<!-- 提交submit (action赋值确定提交服务器位置) -->
<input type="submit" name="提交" id="">
 




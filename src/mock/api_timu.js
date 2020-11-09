import Mock from 'mockjs'
const Random =Mock.Random

const data = {
    'list': [
        {
            'answer_id': '1',
            'answer_title': 'HTML语言中的换行标记是?',
            'answer_daan':'B',
            'options_list': [
                { 'answer_id': '1', 'options_id': 'A', 'options_title': 'html' },
                { 'answer_id': '1', 'options_id': 'B', 'options_title': 'br' },
                { 'answer_id': '1', 'options_id': 'C', 'options_title': 'title' },
                { 'answer_id': '1', 'options_id': 'D', 'options_title': 'p' },
            ]
        },
        {
            'answer_id': '2',
            'answer_title': '<img>标记符中连接图片位置的参数是?',
            'answer_daan':'B',
            'options_list': [
                { 'answer_id': '2', 'options_id': 'A', 'options_title': 'href' },
                { 'answer_id': '2', 'options_id': 'B', 'options_title': 'src' },
                { 'answer_id': '2', 'options_id': 'C', 'options_title': 'type' },
                { 'answer_id': '2', 'options_id': 'D', 'options_title': 'align' },
            ]
        },
        {
            'answer_id': '3',
            'answer_title': '标记符title是放在以下哪个标记符之间的？',
            'answer_daan':'B',
            'options_list': [
                { 'answer_id': '3', 'options_id': 'A', 'options_title': 'html与html' },
                { 'answer_id': '3', 'options_id': 'B', 'options_title': 'head与head' },
                { 'answer_id': '3', 'options_id': 'C', 'options_title': 'body与body' },
                { 'answer_id': '3', 'options_id': 'D', 'options_title': 'head与body' },
            ]
        },
        {
            'answer_id': '4',
            'answer_title': '以下哪种语句是实现表单提交的动作?',
            'answer_daan':'A',
            'options_list': [
                { 'answer_id': '4', 'options_id': 'A', 'options_title': '<input type=submit name=** />' },
                { 'answer_id': '4', 'options_id': 'B', 'options_title': '<input type=reset name=** />' },
                { 'answer_id': '4', 'options_id': 'C', 'options_title': '<input type=text name=** />' },
                { 'answer_id': '4', 'options_id': 'D', 'options_title': '<input type=password name=** />' },
            ]
        },
        {
            'answer_id': '5',
            'answer_title': '以下表单的属性中哪种提交方式是隐藏提交?',
            'answer_daan':'A',
            'options_list': [
                { 'answer_id': '5', 'options_id': 'A', 'options_title': 'type = hidden' },
                { 'answer_id': '5', 'options_id': 'B', 'options_title': 'type = text' },
                { 'answer_id': '5', 'options_id': 'C', 'options_title': 'type = password' },
                { 'answer_id': '5', 'options_id': 'D', 'options_title': 'type = checkbox' },
            ]
        },
        {
            'answer_id': '6',
            'answer_title': '在HTML的元素上应用CSS类选择器样式，需要添加（）HTML代码?',
            'answer_daan':'C',
            'options_list': [
                { 'answer_id': '6', 'options_id': 'A', 'options_title': 'css=' },
                { 'answer_id': '6', 'options_id': 'B', 'options_title': 'class=' },
                { 'answer_id': '6', 'options_id': 'C', 'options_title': 'style=' },
                { 'answer_id': '6', 'options_id': 'D', 'options_title': 'effect=' },
            ]
        },
        {
            'answer_id': '7',
            'answer_title': '要想在网页中输出“<”正确的方法是?',
            'answer_daan':'B',
            'options_list': [
                { 'answer_id': '7', 'options_id': 'A', 'options_title': '&amp' },
                { 'answer_id': '7', 'options_id': 'B', 'options_title': '&lt' },
                { 'answer_id': '7', 'options_id': 'C', 'options_title': '&gt' },
                { 'answer_id': '7', 'options_id': 'D', 'options_title': '&quot' },
            ]
        },
        {
            'answer_id': '8',
            'answer_title': '创建一个下拉菜单的HTML代码是？',
            'answer_daan':'D',
            'options_list': [
                { 'answer_id': '8', 'options_id': 'A', 'options_title': '<form></form>' },
                { 'answer_id': '8', 'options_id': 'B', 'options_title': '<select multiple name="NAME" size=?></select>' },
                { 'answer_id': '8', 'options_id': 'C', 'options_title': '<option></option>' },
                { 'answer_id': '8', 'options_id': 'D', 'options_title': '<select name="NAME"></select>' },
            ]
        },
        {
            'answer_id': '9',
            'answer_title': '在用浏览器查看网页时出现404错误可能的原因是 ',
            'answer_daan':'B',
            'options_list': [
                { 'answer_id': '9', 'options_id': 'A', 'options_title': '页面源代码错误' },
                { 'answer_id': '9', 'options_id': 'B', 'options_title': '文件不存在' },
                { 'answer_id': '9', 'options_id': 'C', 'options_title': '与数据库连接错误' },
                { 'answer_id': '9', 'options_id': 'D', 'options_title': '权限不足' },
            ]
        },
        {
            'answer_id': '10',
            'answer_title': '在用浏览器查看网页时出现505错误可能的原因是?',
            'answer_daan':'C',
            'options_list': [
                { 'answer_id': '10', 'options_id': 'A', 'options_title': '页面源代码错误' },
                { 'answer_id': '10', 'options_id': 'B', 'options_title': '文件不存在' },
                { 'answer_id': '10', 'options_id': 'C', 'options_title': '系统错误' },
                { 'answer_id': '10', 'options_id': 'D', 'options_title': '权限不足' },
            ]
        },
        {
            'answer_id': '11',
            'answer_title': '在HTML中嵌入JavaScript，应该使用的标记是?',
            'answer_daan':'A',
            'options_list': [
                { 'answer_id': '11', 'options_id': 'A', 'options_title': '<script></script>' },
                { 'answer_id': '11', 'options_id': 'B', 'options_title': '<head></head>' },
                { 'answer_id': '11', 'options_id': 'C', 'options_title': '<body></body>' },
                { 'answer_id': '11', 'options_id': 'D', 'options_title': '<!--、、、//-->' },
            ]
        },
        {
            'answer_id': '12',
            'answer_title': 'HTML中的框架标签是?',
            'answer_daan':'C',
            'options_list': [
                { 'answer_id': '12', 'options_id': 'A', 'options_title': 'frame' },
                { 'answer_id': '12', 'options_id': 'B', 'options_title': 'fram' },
                { 'answer_id': '12', 'options_id': 'C', 'options_title': 'iframes' },
                { 'answer_id': '12', 'options_id': 'D', 'options_title': 'frameset' },
            ]
        },
        {
            'answer_id': '13',
            'answer_title': '提交上显示的文字是由按钮的哪个属性决定的？',
            'answer_daan':'C',
            'options_list': [
                { 'answer_id': '13', 'options_id': 'A', 'options_title': 'type' },
                { 'answer_id': '13', 'options_id': 'B', 'options_title': 'size' },
                { 'answer_id': '13', 'options_id': 'C', 'options_title': 'value' },
                { 'answer_id': '13', 'options_id': 'D', 'options_title': '都错误' },
            ]
        },
        {
            'answer_id': '14',
            'answer_title': '在text文本框中限制输入最大长度的属性是?',
            'answer_daan':'A',
            'options_list': [
                { 'answer_id': '14', 'options_id': 'A', 'options_title': 'maxlength' },
                { 'answer_id': '14', 'options_id': 'B', 'options_title': 'max' },
                { 'answer_id': '14', 'options_id': 'C', 'options_title': 'length' },
                { 'answer_id': '14', 'options_id': 'D', 'options_title': 'lognmax' },
            ]
        },
        {
            'answer_id': '15',
            'answer_title': '级联样式表文件的扩展名是?',
            'answer_daan':'B',
            'options_list': [
                { 'answer_id': '15', 'options_id': 'A', 'options_title': 'html' },
                { 'answer_id': '15', 'options_id': 'B', 'options_title': 'css' },
                { 'answer_id': '15', 'options_id': 'C', 'options_title': 'xml' },
                { 'answer_id': '15', 'options_id': 'D', 'options_title': 'dib' },
            ]
        },
        {
            'answer_id': '16',
            'answer_title': '以下对HTML中使用CSS说法不正确的是?',
            'answer_daan':'A',
            'options_list': [
                { 'answer_id': '16', 'options_id': 'A', 'options_title': 'CSS必须在HTML中使用' },
                { 'answer_id': '16', 'options_id': 'B', 'options_title': 'HTML中必须使用CSS' },
                { 'answer_id': '16', 'options_id': 'C', 'options_title': '在HTML中可以使用CSS，也可以不使用' },
                { 'answer_id': '16', 'options_id': 'D', 'options_title': '在HTML元素中通过属性完成的设置，部分也可以通过CSS来设置' },
            ]
        },
        {
            'answer_id': '17',
            'answer_title': '以下几种在HTML文档中通过CSS的方式将文档颜色设置为红色背景错误的是?',
            'answer_daan':'D',
            'options_list': [
                { 'answer_id': '17', 'options_id': 'A', 'options_title': '内联样式表：<body style=”background-Color:red”></body>' },
                { 'answer_id': '17', 'options_id': 'B', 'options_title': '嵌入样式表：<style> body { background-Color:red } </style>' },
                { 'answer_id': '17', 'options_id': 'C', 'options_title': '外部样式表：在当前目录下创 建一个test.css文件，在文件中声明一条<style> body { background-Color:red } </style>代码，并在HTML文档中通过<link style=”text/css” rel=”stylesheet” href=”test.css”>将其链接到本文档中使用' },
                { 'answer_id': '17', 'options_id': 'D', 'options_title': '输入样式表：在当前目录下创建一个test.css文件，在文件中声明一条body { background-Color:red } 代码，并在HTML文档中通过<style>@import url(test.css);</style>输入到本文档中使用' },
            ]
        },
        {
            'answer_id': '18',
            'answer_title': '以下几种样式规则的选择器中， 只能修饰唯一一个HTML元素的是那个?',
            'answer_daan':'D',
            'options_list': [
                { 'answer_id': '18', 'options_id': 'A', 'options_title': '类选择器' },
                { 'answer_id': '18', 'options_id': 'B', 'options_title': 'ID选择器' },
                { 'answer_id': '18', 'options_id': 'C', 'options_title': '关联选择器' },
                { 'answer_id': '18', 'options_id': 'D', 'options_title': '伪元素选择器' },
            ]
        },
        {
            'answer_id': '19',
            'answer_title': '要将一种HTML标签所创建的各处网页元素分成几类，需要将这个HTML标签的class属性设置为不同的值，以下在HTML中的<div>元素上对类选择器使用不正确的是?',
            'answer_daan':'A',
            'options_list': [
                { 'answer_id': '19', 'options_id': 'A', 'options_title': '<div class=”.classname”>内容</div>' },
                { 'answer_id': '19', 'options_id': 'B', 'options_title': '<div class=”classname1 classname2”>内容</div>' },
                { 'answer_id': '19', 'options_id': 'C', 'options_title': '<div class=”classname”>内容</div>' },
                { 'answer_id': '19', 'options_id': 'D', 'options_title': '<div id=”index” class=”classname”>内容</div>' },
            ]
        },
        {
            'answer_id': '20',
            'answer_title': '使用CSS声明一个关联样式选择器<style> div span { color:red } </style>，以下几种HTML元素中的内容可以为红色字体的是?',
            'answer_daan':'B',
            'options_list': [
                { 'answer_id': '20', 'options_id': 'A', 'options_title': '<div>内容</div>' },
                { 'answer_id': '20', 'options_id': 'B', 'options_title': '<div><em><span>内容</span><em></div>' },
                { 'answer_id': '20', 'options_id': 'C', 'options_title': '<span></div>内容</div></span>' },
                { 'answer_id': '20', 'options_id': 'D', 'options_title': '以上都可以' },
            ]
        },
        
    ]
}

Mock.mock('/mock/api/timu/getList', 'get', data)
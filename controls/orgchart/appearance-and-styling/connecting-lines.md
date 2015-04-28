---
title: Connecting Lines
page_title: Connecting Lines | RadOrgChart for ASP.NET AJAX Documentation
description: Connecting Lines
slug: orgchart/appearance-and-styling/connecting-lines
tags: connecting,lines
published: True
position: 3
---

# Connecting Lines



## How to change the style of the connecting lines?

In case you would like to change the length of the connecting lines you can add styles as in the following code:

````ASPNET
  html .RadOrgChart .rocLineUp
{
	height:10px ;
	top: -10px;
}

html .RadOrgChart .rocLineDown
{
	height:10px;

}
html .RadOrgChart .rocLineHorizontal
{
	top: -10px;
}

html .RadOrgChart .rocNodeList
{
	margin: 20px auto 0;
}

.rocItem
{
	width:150px!important;
	height:70px!important;
}

.rocItemContent
{
	height:50px!important;
	font-size: 10px;
}
````

![radorgchart-connecting-lines 1](images/radorgchart-connecting-lines1.png)![radorgchart-connecting-lines 2](images/radorgchart-connecting-lines2.png)

If you want to make the lines **invisible** you can use the code below:

````ASPNET
 .rocLineHorizontal, .rocLineUp, .rocLineDown
{
    visibility:hidden;
}
````

![radorgchart-connecting-lines 3](images/radorgchart-connecting-lines3.png)

If you want to add arrows to the ends of the connecting lines you can add the following css styles:

````ASPNET
.rocLineUp:after 
{
    content: "";
    width: 9px;
    height: 5px;
    background: url("rocDownArrow.gif") no-repeat center center;
    position: absolute;
    bottom: 0;
    left: -4px;
}
	  
````



Such implementation is not supported in IE6 and IE7 browsers because they do not implement the **":after"** css selector.
![radorgchart-connecting-lines](images/radorgchart-connecting-lines.png)

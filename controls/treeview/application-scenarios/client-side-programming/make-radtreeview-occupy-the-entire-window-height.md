---
title: Make RadTreeView Occupy the Entire Window Height
page_title: Make RadTreeView Occupy the Entire Window Height | RadTreeView for ASP.NET AJAX Documentation
description: Make RadTreeView Occupy the Entire Window Height
slug: treeview/application-scenarios/client-side-programming/make-radtreeview-occupy-the-entire-window-height
tags: make,radtreeview,occupy,the,entire,window,height
published: True
position: 12
---

# Make RadTreeView Occupy the Entire Window Height



## 

You can use the following JavaScript code to achieve the desired effect:

````ASPNET
	
	    <script type="text/javascript">
	        function resizeTree() {
	            var treeDiv = document.getElementById("RadTreeView1");
	            var intCompensate = 6;
	            var documentObj = document.documentElement;
	            if ((window.opera) || (document.all && (!(document.compatMode && document.compatMode == "CSS1Compat")))) 
	            {
	                documentObj = document.body;
	            }
	
	            treeDiv.style.height = (parseInt(documentObj.clientHeight) - intCompensate) + "px";
	        }
	    </script>
	
````



Add the following attributes to the **<body>** tag of the page:

````ASPNET
	    <body ms_positioning="GridLayout" onload="resizeTree()" onresize="resizeTree()" topmargin="0"
	        leftmargin="0" bottommargin="0">
````



>note Please take into account that you should use the correct client-side ID of the TreeView control. In this case it is RadTreeView1. The best way to get the client-side ID of the treeview is to get it from the HTML output of the page where the TreeView resides.
>


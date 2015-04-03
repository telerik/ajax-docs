---
title: Change Mouse Cursor on AJAX Update
page_title: Change Mouse Cursor on AJAX Update | UI for ASP.NET AJAX Documentation
description: Change Mouse Cursor on AJAX Update
slug: ajax/client-side-programming/how-to/change-mouse-cursor-on-ajax-update
tags: change,mouse,cursor,on,ajax,update
published: True
position: 5
---

# Change Mouse Cursor on AJAX Update



## 

Changing the mouse cursor on Ajax update could be achieved using the client-side event of Telerik RadAjax controls. The easiest way is to use the following events script:

````JavaScript
	    <script type="text/javascript">
	        function OnRequestStart(sender, args) {
	            document.body.style.cursor = "wait";
	        }
	        function OnResponseEnd(sender, args) {
	            document.body.style.cursor = "default";
	        }
	    </script>
````



Here is another solution using additional CSS classes:

````JavaScript
	    <script type="text/javascript">
	        function RequestStart(sender, args) {
	            document.body.className = document.body.className.replace("Normal", "Wait");
	        }
	        function ResponseEnd(sender, args) {
	            document.body.className = document.body.className.replace("Wait", "Normal");
	        }
	    </script>
````



````XML
	    <style type="text/css">
	        .Wait
	        {
	        }
	        .Normal
	        {
	        }
	        /* override input cursors with a more specific CSS selector */.Wait INPUT
	        {
	            cursor: wait;
	        }
	        .Normal INPUT
	        {
	            cursor: default;
	        }
	        /* override grid cursors with a more specific CSS selector */.Wait TABLE
	        {
	            cursor: wait;
	        }
	        .Normal TABLE
	        {
	            cursor: default;
	        }
	    </style>
````



---
title: Referencing the External Content of a Pane
page_title: Referencing the External Content of a Pane | RadSplitter for ASP.NET AJAX Documentation
description: Referencing the External Content of a Pane
slug: splitter/how-to/referencing-the-external-content-of-a-pane
tags: referencing,the,external,content,of,a,pane
published: True
position: 1
---

# Referencing the External Content of a Pane



Because **RadPane** controls can [load their content from an external source]({%slug splitter/panes/displaying-external-content%}), you can find yourself needing to reference the controls in the externally loaded Web page from the page that contains the splitter, or to reference the controls in the page that contains the splitter from inside the externally loaded Web page.

Let the page that contains the splitter be called the **parent page**. Let the externally loaded page, which appears inside one of the panes of the splitter, be called the **content page**. The following examples show how to reference controls in the parent page from the content page, and to reference the content page from the parent page.

>caution You can apply these techniques only when both the parent page and the content page are in the **same security domain** .
>


## Referencing the parent page from the content page

To get a reference to the page that contains the **RadSplitter** control (the parent page), use the **parent** keyword in your JavaScript function. You can use this reference to the parent page to obtain a reference to the **RadSplitter** object (or any other object on the page).

1. Inside the parent page, define JavaScript functions that return a reference to any controls in the parent page that the content page needs to access:

````JavaScript
	    <script>
	        function GetRadSplitter()
	        {
	            return $find("<%= RadSplitter1.ClientID %>");
	        }
	    </script>
````



1. Inside the content page, use the **parent** keyword to reference the parent page, and then call the functions you defined previously to access the controls on the parent page:

````JavaScript
	    <script>
	        //obtain reference to the parent page
	        var splitterPageWnd = window.parent;
	        //call a method from the parent page
	        var splitterObject = splitterPageWnd.GetRadSplitter();
	        //...
	    </script>
````

**Referencing the content page from the parent page**When you set the **ContentUrl** property of a **RadPane** control, it inserts an **IFrame** element into the pane. To get a reference to the content page, you need to get a reference to the **IFrame** window. The following example shows how this can be done:

````JavaScript
	    <script>
	        // ...
	        var splitter = $find("<%= RadSplitter1.ClientID %>");
	        var pane = splitter.getPaneById("<%= RadPane1.ClientID %>");
	        var iframe = pane.getExtContentElement();
	        var contentWindow = iframe.contentWindow;
	        // ...
	    </script>
````



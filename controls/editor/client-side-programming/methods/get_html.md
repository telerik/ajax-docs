---
title: get_html
page_title: get_html | RadEditor for ASP.NET AJAX Documentation
description: get_html
slug: editor/client-side-programming/methods/get_html
tags: get_html
published: True
position: 6
---

# get_html



## 



Returns the editor content as HTML.


>caption  

|  **function**  **get_html(isFiltered)**  |  |  |
| ------ | ------ | ------ |
| **isFiltered** | **bool** |if set to **true** , the returned HTML content will be modified by the RadEditor client filters|



The example below demonstrates how to limit the content length in the editor:

````ASPNET
	<script type="text/javascript">
	    var limitNum = 10;
	    var message = 'You are not able to type more than ' + limitNum + ' symbols!';
	    function OnClientLoad(editor, args)
	    {
	        var oFun = function ()
	        {
	            var oValue = editor.get_html(true); //get the HTML content
	            if (oValue.length > limitNum)
	            {
	                editor.set_html(oValue.substring(0, limitNum));
	                alert(message);
	            }
	        };
	        editor.attachEventHandler("onkeyup", oFun);
	        editor.attachEventHandler("onkeydown", oFun);
	
	    }
	</script>
	<telerik:radeditor runat="server" OnClientLoad="OnClientLoad" ID="RadEditor1"></telerik:radeditor> 
````





# See Also

 * [attachEventHandler]({%slug editor/client-side-programming/methods/attacheventhandler%})

 * [set_html]({%slug editor/client-side-programming/methods/set_html%})

---
title: Open Link in a New Window on Double Click
page_title: Open Link in a New Window on Double Click | RadEditor for ASP.NET AJAX Documentation
description: Open Link in a New Window on Double Click
slug: editor/how-to/open-link-in-a-new-window-on-double-click
tags: open,link,in,a,new,window,on,double,click
published: True
position: 6
---

# Open Link in a New Window on Double Click

The example demonstrates how to attach an ondblclick (on double click) event handler to the editor content area, check whether the selection is an A tag and if it is to open it in a new window:

````ASP.NET
<script type="text/javascript">
	function OnClientLoad(editor, args)
	{
		editor.attachEventHandler("ondblclick", function (e)
		{
			var sel = editor.getSelection().getParentElement(); //get the currently selected element
			var href = null;
			if (sel.tagName == "A")
			{
				href = sel.href; //get the href value of the selected link
				window.open(href, null, "height=500,width=500,status=no,toolbar=no,menubar=no,location=no");
				return false;
			}
		}
 );
	}
</script>
<asp:ScriptManager id="ScriptManager1" runat="server"/>
<telerik:radeditor runat="server" ID="RadEditor2"
OnClientLoad="OnClientLoad" >
   <Content>
	   Sample Content <a href="http://www.telerik.com">Open Telerik.com</a> Sample Content  
   </Content>
</telerik:radeditor> 
````

We can further enhance the example by programmatically setting a title attribute with "Doubleclick to open the link in a new window" value to all links in the content area. You can do that with the following code:

````JavaScript
var link = editor.get_document().getElementsByTagName("A"); //get a reference to the links in the content area of RadEditor
for (var i = 0; i < link.length; i++)
{
	link[i].setAttribute("title", "Double click to open the link in a new window");
}	  
````

Here is the complete solution:

````ASP.NET
<script type="text/javascript">
	function OnClientLoad(editor, args)
	{
		var link = editor.get_document().getElementsByTagName("A"); //get a reference to the links in the content area of RadEditor
		for (var i = 0; i < link.length; i++)
		{
			link[i].setAttribute("title", "Double click to open the link in a new window");
		}
		editor.attachEventHandler("ondblclick", function (e)
		{
			var sel = editor.getSelection().getParentElement(); //get the currently selected element
			var href = null;
			if (sel.tagName == "A")
			{
				href = sel.href; //get the href value of the selected link
				window.open(href, null, "height=500,width=500,status=no,toolbar=no,menubar=no,location=no");
				return false;
			}
		}
);
	}
</script>
<asp:ScriptManager id="ScriptManager" runat="server"/>
<telerik:radeditor runat="server" ID="RadEditor1"
OnClientLoad="OnClientLoad" >
  <Content>
	   Sample Content <a href="http://www.telerik.com">Open Telerik.com</a> Sample Content  
  </Content>
</telerik:radeditor> 
````



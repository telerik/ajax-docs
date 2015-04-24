---
title: Resize the Dropdown Header and Pop-up Size
page_title: Resize the Dropdown Header and Pop-up Size | RadEditor for ASP.NET AJAX Documentation
description: Resize the Dropdown Header and Pop-up Size
slug: editor/functionality/toolbars/dropdowns/examples/resize-the-dropdown-header-and-pop-up-size
tags: resize,the,dropdown,header,and,pop-up,size
published: True
position: 1
---

# Resize the Dropdown Header and Pop-up Size



## 



You can set the header and pop up width and height of a specified dropdown tool of RadEditor for ASP.NET AJAX:



* **inline in the RadEditor's declaration:**

````ASPNET
	    <telerik:RadEditor runat="server" OnClientLoad="OnClientLoad" ID="RadEditor1">
	        <Tools>
	            <telerik:EditorToolGroup>
	                <telerik:EditorTool Name="FontName" popupwidth="300px" popupheight="300px" width="300px" />
	            </telerik:EditorToolGroup>
	        </Tools>
	    </telerik:RadEditor>
````





* **through the ToolsFile.xml file:**

````XML
	    <tools>    
	        <tool name="FormatBlock" popupheight="250px"/>    
	        <tool name="FontName" popupwidth="300px" />    
	        <tool name="RealFontSize" width="200px"   />
	    </tools>
````



* **or through the codebehind:**



````C#
	
	        //get a reference to the desired dropdown tool
	        Telerik.Web.UI.EditorTool tool = RadEditor1.Tools[5].FindTool("FontName");
	        //set the desired pop up width and height
	        tool.Attributes["popupwidth"] = "300px";
	        tool.Attributes["popupheight"] = "300px";
	        //set the desired dropdown header width
	        tool.Attributes["width"] = "300px";
	
````
````VB
	
	        'get a reference to the desired dropdown tool
	        Dim tool As Telerik.Web.UI.EditorTool = RadEditor1.Tools(5).FindTool("FontName")
	        'set the desired pop up width and height
	        tool.Attributes("popupwidth") = "300px"
	        tool.Attributes("popupheight") = "300px"
	        'set the desired dropdown header width
	        tool.Attributes("width") = "300px"
	
````


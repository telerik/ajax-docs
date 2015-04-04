---
title: External CSS Files
page_title: External CSS Files | UI for ASP.NET AJAX Documentation
description: External CSS Files
slug: editor/functionality/toolbars/dropdowns/external-css-files
tags: external,css,files
published: True
position: 7
---

# External CSS Files



## 

By default RadEditor for ASP.NET AJAX uses the CSS classes available in the current page. However, it can be configured to load external CSS files instead. This scenario is very common for editors integrated in back-end administration areas which have one set of CSS classes, while other content is being saved in a database and displayed in the public area which has a different set of CSS classes.Thanks to the CssFiles property, you can specify a string array as the list of CSS files, which you need the editor to use. e.g.

````ASPNET
	    <telerik:RadEditor runat="server" ID="RadEditor1">
	        <CssFiles>
	            <telerik:EditorCssFile Value="~/ExternalCssFiles/Styles1.css" />
	            <telerik:EditorCssFile Value="~/ExternalCssFiles/Styles2.css" />
	        </CssFiles>
	    </telerik:RadEditor>
````



>tabbedCode

````C#
				RadEditor1.CssFiles.Add("~/ExternalCssFiles/Styles1.css");
	            RadEditor1.CssFiles.Add("~/ExternalCssFiles/Styles2.css");
````
````VB
	        RadEditor1.CssFiles.Add("~/ExternalCssFiles/Styles1.css")
	        RadEditor1.CssFiles.Add("~/ExternalCssFiles/Styles2.css")
````
>end

````XML
	    <root>
	        ....
	        <cssFiles>    
	            <item name="~/ExternalCssFiles/Styles1.css" />    
	            <item name="~/ExternalCssFiles/Styles2.css" /> 
	        </cssFiles>
	        ...
	    </root>
````



````XML
	    a.link
	    {
	        color: #0000ff;
	        font-weight: normal;
	        font-style: italic;
	    }
	    .img
	    {
	        border: none;
	    }
	    .text
	    {
	        background-color: Red;
	        font-size: 10px;
	    }
````





>note If you are to set external css files in dynamically loaded editors, make sure to load the Toolsfile before you add any external css files, e.g.
>RadEditor1.ToolsFile = "~/RadEditorTools-Simple.xml";
>RadEditor1.CssFiles.Add(new EditorCssFile("~/Css/RadEditor.css"));
>


The css classes available in the external css files will populate the "Apply Css Class" dropdown. If you would like you you can easily modify this set of external classes in the dropdown and display only a few classes using the *__Add__* method of CssClasses Collection:

>tabbedCode

````C#
	            RadEditor1.CssClasses.Add("Links class ", "a.link"); 
	            RadEditor1.CssClasses.Add("Images class ", ".img");
````
````VB
	        RadEditor1.CssClasses.Add("Links class ", "a.link")
	        RadEditor1.CssClasses.Add("Images class ", ".img")
````
>end

You can also populate the CSS class dropdown using the __ToolsFile__, as shown in the example below:

````XML
	    <classes>
	       <class name="Links class" value="a.link" />
	       <class name="Images class" value=".img" />
	    </classes>
````



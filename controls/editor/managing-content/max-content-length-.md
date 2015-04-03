---
title: Max Content Length 
page_title: Max Content Length  | UI for ASP.NET AJAX Documentation
description: Max Content Length 
slug: editor/managing-content/max-content-length-
tags: max,content,length,
published: True
position: 6
---

# Max Content Length 



## Max Content Length

RadEditor offers the ability to specify the max characters length that will be submitted to the server by setting the __MaxTextLength__ and __MaxHtmlLength__ properties. This is very useful in database scenarios when the max content length of RadEditor should be set to not exceed the specified characters length of the database field.



````XML
	    <telerik:RadEditor runat="server" MaxTextLength="150" ID="RadEditor1">
	        <Modules>
	            <telerik:EditorModule Name="RadEditorStatistics" Visible="true" />
	        </Modules>
	    </telerik:RadEditor>
````



__MaxTextLength__ property restricts only the text length of the content without checking the HTML markup, while the __MaxHtmlLength__ property restricts the content along with the HTML markup.

Note: In order to not decrease typing, editing and pasting performance both properties check the characters length only when submitting the content.

# See Also

 * [Max Content Length](http://demos.telerik.com/aspnet-ajax-beta/Editor/Examples/maxcontentlength/defaultcs.aspx)

---
title: Using CSS Styles
page_title: Using CSS Styles | RadEditor for ASP.NET AJAX Documentation
description: Using CSS Styles
slug: editor/functionality/toolbars/dropdowns/using-css-styles
tags: using,css,styles
published: True
position: 8
---

# Using CSS Styles

By default the CSS class dropdown will display all global CSS styles and CSS styles that are directly related to the object - e.g. **a.class** for the Hyperlink Manager. The same holds true for the Table Properties dialog and any other RadEditor dialogs where CSS classes can be applied. The example style markup shown below includes six styles:

````XML
<pre xmlns="http://ddue.schemas.microsoft.com/authoring/2003/5">
	<head>
	   <style>
		  TABLE.TABLEgreen {background-color: green;}
		  td.TDyellow {background-color:yellow;}
		  a.APink {background-color: pink;}
		  p.ParaTagRed {background-color: red;}
		  img.IMGREDred {background-color:red;}
		 .DotOrange{background-color: orange;}
	   </style>
	</head>
</pre>          
````

>tip The styles can also be set via an external stylesheet. For more information see [External CSS Files]({%slug editor/functionality/toolbars/dropdowns/external-css-files%}).

The screenshots below show that no HTML elements are selected and the CSS class dropdown displays all six styles.

![](images/editor-dropdowns023.png)

When an image is selected, the styles related to that image and any global styles are shown in the dropdown.

![ CSS 2](images/editor-usingcss2.gif)

![CSS 3](images/editor-usingcss3.gif)

![CSS 4](images/editor-usingcss4.gif)

![CSS 5](images/editor-usingcss5.gif)

More information about CSS styles - global and specific for an element, can be found in various internet sites. For example - [www.w3c.org](http://www.w3c.org/).

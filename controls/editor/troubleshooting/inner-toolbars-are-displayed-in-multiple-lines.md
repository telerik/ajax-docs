---
title: Inner Toolbars are Displayed in Multiple Lines
page_title: Inner Toolbars are Displayed in Multiple Lines | RadEditor for ASP.NET AJAX Documentation
description: Inner Toolbars are Displayed in Multiple Lines
slug: editor/troubleshooting/inner-toolbars-are-displayed-in-multiple-lines
tags: inner,toolbars,are,displayed,in,multiple,lines
published: True
position: 2
---

# Inner Toolbars are Displayed in Multiple Lines



## 

__PROBLEM__

RadEditor's content inherits the styles present on the page and therefore when CSS styles are applied through global selectors (tag names)the elements in the RadEditor may not have the expected rendering. For instance, if there are styles set to every unordered list on the page it would	affect the RadEditor toolbars in a similar way:

````XML
		ul { 
			float: none !important;
		} 
````


>caption 

![editor-innert-toolbars-issue](images/editor-innert-toolbars-issue.png)

__SOLUTION__

You could avoid this behavior by setting the default settings of the RadEditor's elements explicitly after the global selector. The example above will be fixed with the following styles:

````XML
		ul { 
			float: none !important;
		} 
		ul.reToolbar { 
			float: left !important; 
		}
````



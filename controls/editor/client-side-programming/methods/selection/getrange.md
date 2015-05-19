---
title: getRange
page_title: getRange | RadEditor for ASP.NET AJAX Documentation
description: getRange
slug: editor/client-side-programming/methods/selection/getrange
tags: getrange
published: True
position: 4
---

# getRange

You can store and restore the exact position of the cursor in the content area using the editor.**getSelection().getRange()** and editor.**getSelection().selectRange(rangeObject)** methods. These methods are useful in scenarios when pasting content in the editor from location outside of the control.

Since **2013 Q3** the **getRange()** method can be used with an additional `true` argument that returns the [W3C standard Document Object Model Range](http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html)	where supported. In IE8 and less (where the W3C range is not supported), the returned object will be the default for IE, the	[TextRange object](http://msdn.microsoft.com/en-us/library/ie/ms535872%28v=vs.85%29.aspx) or the[ControlRange object](http://msdn.microsoft.com/en-us/library/ie/hh826021%28v=vs.85%29.aspx), according to the selected HTML element.

````JavaScript 
var range = editor.getSelection().getRange(true); //returns an object that represents a restore point.
editor.getSelection().selectRange(range); //Selects the restore point in case you need to restore the cursor to its original location.		
````



More information about these methods could be found in the following forum thread: "[How to maintain the insertion point when I am loading a picture from a script fired from a custom control on the toolbar?](http://www.telerik.com/community/forums/aspnet-ajax/editor/how-to-maintain-the-insertion-point-when-i-am-loading-a-picture-from-a-script-fired-from-a-custom-control-on-the-toolbar.aspx)".

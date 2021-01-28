---
title: What is New
page_title: What is New - RadTreeView
description: Check our Web Forms article about What is New.
slug: treeview/what-is-new
tags: what,is,new
published: False
position: 2
---

# What is New



## Q2 2010 release

Since Q2 2010 all new functionalities are listed in the control's Release Notes posted [here](https://www.telerik.com/products/aspnet-ajax/whats-new/release-history.aspx).

## What's New in RadTreeView for ASP.NET AJAX Q1 SP1 2010 (Version Number: 2010.1.415)

* VS 2010/.NET 4 RTM support

* Added [OnClientNodeAnimationEnd]({%slug treeview/client-side-programming/events/onclientnodeanimationend%}) event

* [Bug-fixes](https://www.telerik.com/products/aspnet-ajax/whats-new/release-history/q1-2010-sp1-version-2010-1-415.aspx)

## What's New in RadTreeView for ASP.NET AJAX Q1 2010 (Version Number: 2010.1.309)

* Replaced the **RadTreeView** loading icons

## What's New in RadTreeView for ASP.NET AJAX Q3 SP2 2009 (Version Number 2009.3.1314)

* No new features or bug-fixes.

## What's New in RadTreeView for ASP.NET AJAX Q3 SP1 2009 (Version Number 2009.3.1208)

* New Skin - Windows7

## What's New in RadTreeView for ASP.NET AJAX Q3 2009 (Version Number 2009.3.1103)

* New Skin - Sitefinity

* [Performance optimizations on the server](https://blogs.telerik.com/tsvetomirtsonev/posts/09-10-15/radcontrols_for_asp_net_ajax_-_now_with_more_speed.aspx)

## What's New in RadTreeView for ASP.NET AJAX Q2 2009 SP1 (Version Number 2009.2.826)

* [Bug-fixes](https://www.telerik.com/products/aspnet-ajax/whats-new/release-history/q2-2009-sp1-version-2009-2-826.aspx)

## What's New in RadTreeView for ASP.NET AJAX Q2 2009 (Version Number 2009.2.701)

* No new features or bug-fixes.

## What's New in RadTreeView for ASP.NET AJAX Q1 SP2 2009 (Version Number 2009.1.527)

* Full support for Google Chrome v.2

* Compatibility with Visual Studio 2010 Beta 1

* New common skin - Simple

* Added support to render properly in callback / MVC / Web Service scenarios

* [Bug-fixes](https://www.telerik.com/products/aspnet-ajax/whats-new/release-history/q1-2009-sp2-version-2009-1-527.aspx)

## What's New in RadTreeView for ASP.NET AJAX Q1 SP1 2009 (Version Number 2009.1.402)

* Full Support for Internet Explorer 8

* [Bug-fixes](https://www.telerik.com/products/aspnet-ajax/whats-new/release-history/q1-2009-sp1-version-2009-1-402.aspx)

## What's New in RadTreeView for ASP.NET AJAX Q1 2009 (Version Number 2009.1.311):

* Added **get_sourceNodes()** method to the event arguments of the [OnClientNodeDragStart]({%slug treeview/client-side-programming/events/onclientnodedragstart%}) and [OnClientNodeDragging]({%slug treeview/client-side-programming/events/onclientnodedragging%}) event handlers.

* Added new property **UseHttpGet** to the [WebServiceSettings]({%slug treeview/load-on-demand/web-service-binding%}) properties. By default its value is *False*.

## What's New in RadTreeView for ASP.NET AJAX Q3 SP2 2008 (Version Number 2008.3.1314):

* New client-side event added: [OnClientNodeEditStart]({%slug treeview/client-side-programming/events/onclientnodeeditstart%}) which is called as the edit begins

## What's New in RadTreeView for ASP.NET AJAX Q3 SP1 2008 (Version Number 2008.3.1125):

* Improved performance when **CheckChildNodes** is set to true (no more timeouts in Internet Explorer)

* Improved performance and memory usage of **GetAllNodes** /**FindNodeByText** /**FindNodeByValue** server-side methods



## What's New in RadTreeView for ASP.NET AJAX Q3 2008 (Version Number 2008.3.1105):

* [Integrated validation]({%slug treeview/accessibility-and-internationalization/validation%}) for **RadTreeView** selection.

* Improved client-side initialization time.

* Improved WebService load on demand performance.

* Added **ContentCssClass** property which is applied at the DIV tag of a **RadTreeNode**.

* Added new server side methods **FindNodeByText**, **FindNodeByValue** which have a second argument *ignoreCase* which indicates whether the comparison is case-sensitive (**true**) or case-insensitive (**false**).

* Added a new server side method **FindNode** which has one argument *match* of type [Predicate Generic Delegate](https://msdn.microsoft.com/en-us/library/bfcke1bz(VS.80).aspx). This method can be used to find a Node by some custom criteria.

* Added protected virtual methods for server-side events – **OnNodeDataBound**, **OnNodeClick**, etc.

* Support for server-side expressions (<%= %>) in the **NodeTemplate**.

* Added new client-side event: [OnClientNodeDataBound]({%slug treeview/client-side-programming/events/onclientnodedatabound%})

* Animations are using the **jQuery** library now

## What's New in RadTreeView for ASP.NET AJAX Q2SP1 2008 (Version Number 2008.2.826):

* [Hierarchical databinding to IEnumerable via the DataFieldID/DataFieldParentID properties]({%slug treeview/data-binding/binding-to-array-and-arraylist%})

* [findNodeByUrl and findNodeByAbsoluteUrl client side methods of RadTreeView]({%slug treeview/client-side-programming/objects/radtreeview%})

* Initialization time improvement

## What's New in RadTreeView for ASP.NET AJAX Q2 (Version Number 2008.2.723):

* Added [ClientChanges]({%slug treeview/client-side-programming/accessing-client-changes-on-the-server-side%}) property to the **RadTreeView** class. Now client-side changes are available on the server side after postback.

* Added [findControl]({%slug treeview/client-side-programming/objects/radtreenode%}) client-side method of **RadTreeNode** class.

## What's New in RadTreeView for ASP.NET AJAX Q2 Futures (Version Number 2008.1.707):

* [Tri-State CheckBoxes]({%slug treeview/checkboxes/tri-state/tri-state-checkboxes-overview%}) - allows for **CheckBoxes** of **RadTreeView** to have three states: **Checked, Unchecked**and **Indeterminate**. The Tri-State behavior of **RadTreeView** can be controlled by the two new properties:

* **TriStateCheckBoxes** - enables the "Tri-State" **CheckBoxes** (the **CheckBoxes** property must be also enabled for this functionality to work)

* **CheckChildNodes** - when enabled all child Nodes of a Node are automatically: Checked if their parent has been Checked and Unchecked if their parent has been Unchecked

# See Also

 * [Changes and Backward Compatibility]({%slug treeview/changes-and-backward-compatibility%})

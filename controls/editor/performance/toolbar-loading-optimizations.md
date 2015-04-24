---
title: Toolbar Loading Optimizations
page_title: Toolbar Loading Optimizations | RadEditor for ASP.NET AJAX Documentation
description: Toolbar Loading Optimizations
slug: editor/performance/toolbar-loading-optimizations
tags: toolbar,loading,optimizations
published: True
position: 1
---

# Toolbar Loading Optimizations



## 



Since version 2008.1.619 of ASP.NET AJAX, RadEditor introduces improvements in the **toolbar rendering** and **control loading**. These improvements introduce a change when dealing with a combination of **ToolsFile** and using the RadEditor **API**.Firstly, it is important to point out - the change that was introduced

* does not change the existing API of the editor

* does not reduce the editor flexibility - all scenarios that worked prior to the change will continue to work (albeit it might be possible to add a line or two of code or to reorder the code)

The reason for the change is related to a much requested size and speed optimization when multiple RadEditor instances are on the same page (especially when all use the same **ToolsFile**). Telerik did several improvements to speed up editor loading, and the result is a significant optimization - the loading time could be cut by as much as 80%, that is - 10 fully-functional editors on the page would load in under 2 seconds.Here are the optimizations introduced:

* **ToolProviderID**property. The **ToolProviderID** property helps to significantly reduce the **HTML markup** and **JSON**(Javascript Object Notation) sent from server to the client when multiple RadEditor objects with the same tools are used on the same page. You can see the following live example for more information: [Using ToolProviderID](http://demos.telerik.com/aspnet-ajax/Editor/Examples/ToolProvider/DefaultCS.aspx). Note that the ToolProviderID property does not support the RibbonBar, RibbonBarFloating, RibbonBarPageTop and RibbonBarShowOnFocus toolbar modes.

* Lazy initialization of the editor toolbars when the **ToolbarMode** is other than **Default.**In that case the editor tools are initialized not at page load, but when an editor is to be used for the first time

* Invisible editors are not initialized until they become visible (very common optimization request from people using **RadTabStrip** and **RadPanelbar** to do their page layout)

**What is the nature of the change and how does it affect more advanced scenarios such as yours?**

To answer this question, it is important to understand how the editor functions internally - how the **ToolsFile**relates to the editor **API**. The **ToolsFile**is used as the default, the base for editor initialization. Not only the tools, but all of the editor's collections can be set from the tools file - e.g. **modules, colors, cssclasses, css files, symbols, context menus, etc**. This is why, when a ToolsFile is **explicitly** set, all of these collections are cleared and reset to what is specified in the tools file. Thus -scenarios that do both - set a tools file, and then modify some of these collections should do it in the right sequence.Then comes the API - all the editor collections are also accessible and configurable from the codebehind, as well as declarativelyon the page by using markup and specifying items directly between the editor's opening and closing tags.Up until now the defaulteditor's **ToolsFile**(which is built into the editor's Telerik.Web.UI.dll) would be loaded early in thecontrol's lifecycle, and all subsequent changes through the API would be reflected. However, with the changed logic, theeditor's **ToosFile**now loads in its **OnPreRender**method - late in the controllifecycle. This is to ensure that no needless processing is done and no CPU lifecycles are wasted on the intensive operation ofparsing a tools file, filling in collections and constructing object trees - that would then be cleared, for example, because ofthe use of external **ToolProvider**. After trying several options - each of which with its side effects, wepicked up what seemed the best option:

* Provide the ability for the developer to force the **ToolsFile** to be parsed and loaded at any given time by setting the **EnsureToolsFileLoaded()** editor's method.

* If developers use the editor **API**, then we assume they will want/need/can configure all the tools, collections, etc from the API - and the editor's default **ToolsFile** will not be loaded

* Setting a **ToolsFile** explicitly will reset all collections that are configurable from the ToolsFile.

Having in mind these three rules, the developers will be able to configure the editor in any way they did up until now.

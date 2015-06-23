---
title: Ajaxifying RadGrid
page_title: Ajaxifying RadGrid | RadGrid for ASP.NET AJAX Documentation
description: Ajaxifying RadGrid
slug: grid/performance/ajaxifying-radgrid
tags: ajaxifying,radgrid
published: True
position: 1
---

# Ajaxifying RadGrid



## 

Telerik RadGrid takes full advantage of the AJAX technology (Asynchronous JavaScript with XMLHttpRequests) to deliver an unsurpassed responsiveness and user experience for an ASP.NET grid control.

The main idea of the AJAX framework is the elimination of full-page postbacks. In contrast, only the relevant parts of the page are updated, without a disturbing refresh. Moreover, the markup that is transferred between the client machine and the server is reduced dramatically, which results in a significant performance improvement.

Telerik RadGrid interoperate with the AJAX technology completely behind the scenes eliminating the need for further intervention of the developer. All you have to do is connect the grid to a **RadAjaxManager** or wrap it inside **RadAjaxPanel/MS UpdatePanel**. This will make all elements of the grid, which typically make a postback (e.g. **Buttons**, **ImageButtons**, **LinkButtons**) to perform a silent AJAXcallback instead.

Furthermore, there is a mechanism for making any control integrated in the grid to perform AJAX callbacks instead of postbacks. For example, the drag-and-drop for grouping and column reordering uses that mechanism to facilitate no-postback experience.

The AJAX technology preserves the page lifecycle completely. The developer can continue to set properties of the grid itself or of other controls inside the grid (including third party controls).

>caution Telerik RadGrid gives you the advantage of having your pages indexed by search engines even when working in AJAX mode.
>


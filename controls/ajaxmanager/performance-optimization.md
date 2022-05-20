---
title: Performance Optimization 
page_title: AjaxManager Performance Optimization 
description: "learn tips and tricks to optimize the performance when using the Telerik UI for ASP.NET AjaxManager."
slug: ajaxmanager/performance/optimizing-performance-using-radajaxmanager
previous_url: ajax/performance/optimizing-performance-using-radajaxmanager, controls/ajaxmanager/performance/optimizing-performance-using-radajaxmanager
tags: telerik, aspnet, ajax, ajaxmanager, optimizing, the, performance
published: True
position: 5
---

# Performance Optimization

Using an AjaxManager control allows you to easily create settings that update many controls on the page. 

Having a large number of AJAX-enabled controls to update can help both with a performance problem by rendering smaller portions of the page and worsen the situation by triggering unnecessary DOM layout updates. 

Dealing with the DOM performance problem will require specific actions for the current scenario.

## Optimizing DOM Updates

Most of the slowdown happens when updating multiple controls in a table element. Every DOM update triggers a set of layout recalculations that take up unneeded time. 

Consider the HTML in the following example which shows a simple table with labels. Having two `AjaxSettings` for both labels will cause two DOM element to update: the spans rendered by `lblStatus` and `lblMessage`, respectively. This will make the browser re-calculate the table size twice. 

You can optimize the process by updating the `table` or the outer `div` element. Updating the `Header` control will update both labels and will trigger one DOM update only.

````ASP.NET
 <div id="Header" style="width: 100%;" runat="server">
	 <table id="Table3" cellspacing="0" cellpadding="0" border="0" width="100%">
	     <tr>
	         <td>
	             <asp:Label ID="lblStatus" runat="server" />
	         </td>
	         <td>
	             &nbsp;
	         </td>
	         <td style="height: 25px">
	             <asp:Label ID="lblMessage" runat="server" />
	         </td>
	     </tr>
	 </table>
 </div>
````

Prohibitively bad performance is usually the result of updating controls that are placed deeply inside nested tables. In addition, most browsers are slow when rendering elements with percentage dimensions (typically width or height of 100%), so another way to optimize this is to switch to sizes in pixels. 

You can also use a fixed table layout by setting the `table-layout` CSS style property of the HTML table to `fixed`. Note that you will need to define the width and the `<colgroup>` and `<col>` elements for your table when using the fixed table layout.

````CSS
<style type="text/css">
	#Header table
	{
	    table-layout: fixed;
	}
</style>
````

## Other Performance Boosters

If your page has too many CSS stylesheet inclusions, or the CSS style blocks in your `<head>` tag are too large, these can slow updates too. You can try switching AjaxManager `head` update feature off if you do not load CSS-rich controls in AJAX requests. To do that, set the `EnablePageHeadUpdate` property to `false`.

Most browsers render documents a lot slower when operating in quirks mode. Try switching to strict mode by specifying a doctype for your document:

````XML
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
````

## See Also

* [AjaxManager Overview]({%slug ajaxmanager/overview%})


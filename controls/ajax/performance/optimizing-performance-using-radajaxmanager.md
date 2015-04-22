---
title: Optimizing Performance Using RadAjaxManager
page_title: Optimizing Performance Using RadAjaxManager | RadAjax for ASP.NET AJAX Documentation
description: Optimizing Performance Using RadAjaxManager
slug: ajax/performance/optimizing-performance-using-radajaxmanager
tags: optimizing,performance,using,radajaxmanager
published: True
position: 0
---

# Optimizing Performance Using RadAjaxManager



This help article offers a few performance tips with code examples on pages where you have used **RadAjaxManager** toAJAX-enable many controls.

Using a **RadAjaxManager** control allows you to easily create settings that update many controls on the page.Having a large number of AJAX-enabled controls to update, can both help with a performance problem by rendering smaller portions of the page(which is why most developers use AJAX) and worsen the situation by triggering unnecessary DOM layout updates. Dealing with the DOM performanceproblem will require actions specific for the current scenario.

## Optimizing DOM Updates

Most of the slowdown happens when updating multiple controls in a table element. Every DOM update triggers a set of layout recalculationsthat take up unneeded time. Consider the HTML in **Example 1**:

Example 1: A simple table with labels.

````ASPNET
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



Having two **AjaxSettings** for both labels will cause two DOM element updates: the spans rendered by**lblStatus** and **lblMessage**, respectively. This will make the browser recalculate the table size twice.You can optimize the process by updating the TABLE or the outer DIV element. Updating the Header control will update both labels and will trigger oneDOM update only.

Prohibitively bad performance is usually the result of updating controls that are placed deeply inside nested tables. In addition, most browsersare slow when rendering elements with percentage dimensions (typically width or height of 100%), so another way to optimize this is to switch tosizes in pixels. You could also use a fixed table layout by setting an HTML table's CSS style property **table-layout** to fixed:

````XML
	    <style type="text/css">
	        #Header table
	        {
	            table-layout: fixed;
	        }
	    </style>
````



Note that you will need to define width and <colgroup> and <col> elements for your table when using fixed table layout.

## Other Performance Boosters

If your page has too many CSS stylesheet inclusions or the CSS style blocks in your <head> tag are too large, these can slow updates too.You can try switching Telerik **RadAjax's** head update feature off if you do not load CSS-rich controls in AJAX requests.You can do that by setting the **EnablePageHeadUpdate** property to **false**.

Most browsers render documents a lot slower when operating in quirks mode. Try switching to strict mode by specifying a doctype for your document:

````XML
	    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	         "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
````



# See Also

 * [Overview]({%slug ajax/radajaxmanager/overview%})

 * [Overview]({%slug ajax/radajaxpanel/overview%})

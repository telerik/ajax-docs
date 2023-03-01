---
title: How to Set Alternate Row Background Color for RadRadioButtonList
description: RadRadioButtonList is a popular control used in ASP.Net WebForms for displaying options in a list format. However, users may face difficulty in customizing the control to set alternate row background colors. This article provides a step-by-step guide to help users set alternate row background color for RadRadioButtonList control using CSS styles.
type: how-to
page_title: Set an alternate row background color for RadRadioButtonList
slug: radiobuttonlist-set-alternative-row-background-color
position: 
tags: 
ticketid: 1598793
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
RadRadioButtonList is a popular control used in ASP.Net WebForms for displaying options in a list format. However, users may face difficulty in customizing the control to set alternate row background colors. This article provides a step-by-step guide to help users set alternate row background color for RadRadioButtonList control using CSS styles.

## Solution
To set alternate row background color for RadRadioButtonList control, follow these steps:

Set the RenderMode property of the RadRadioButtonList control to Lightweight. This will allow you to use CSS styles to customize the control.

````ASPX
<telerik:RadRadioButtonList ID="RadRadioButtonList1" runat="server" RenderMode="Lightweight">
    <Items>
        <telerik:ButtonListItem Text="Option 1" Value="1" />
        <telerik:ButtonListItem Text="Option 2" Value="2" />
        <telerik:ButtonListItem Text="Option 3" Value="3" />
        <telerik:ButtonListItem Text="Option 4" Value="4" />
    </Items>
</telerik:RadRadioButtonList>
````

Define CSS styles for the RadRadioButtonList control. Use the nth-child CSS pseudo-class to select alternate elements of the control and apply different background colors to them.


````CSS
<style>
    .RadRadioButton:nth-child(odd) {
        background-color: #f5f5f5 !important;
    }

    .RadRadioButton:nth-child(even) {
        background-color: #ffffff !important;
    }
</style>
````

In the above example, the odd-numbered items of the RadRadioButtonList control will have a light gray background color, while the even-numbered items will have a white background color.

By following these simple steps, users can easily customize the RadRadioButtonList control and set alternate row background colors.
  

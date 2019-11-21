---
title: Change the background color of a RadGrid column
description: 
type: how-to
page_title: 
slug: grid-change-column-background-color
position: 
tags: 
ticketid: 1443120
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadGrid for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Solution

You can use the following approach to achieve this requirement:
````ASP.NET
<telerik:GridClientSelectColumn UniqueName="SelectColumnName">
    <ItemStyle BackColor="LightCyan" />
</telerik:GridClientSelectColumn>
````
                    
And if you want to accomplish that for every grid cell, you can set this property on a more global scale:
````ASP.NET
<telerik:RadGrid ... >
            <ItemStyle BackColor="LightCyan" />
            <AlternatingItemStyle BackColor="LightCyan" />
````

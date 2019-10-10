---
title: RadLightBox ItemTemplate FindControl ?
description: 
type: how-to
page_title: How to Access Controls in RadLightBox Template?
slug: lightbox-access-controls-in-template
position: 
tags: RadLightBox, Template, Access
ticketid: 1432139
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadLightBox for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
How can I access controls placed within the ItemTemplate of RadLightBox?
```ASP
   <telerik:RadLightBox ID="LightBox1" runat="server">
        <Items>
            <telerik:RadLightBoxItem>
                <ItemTemplate>
                    <telerik:RadTextBox ID="RadTextBox2" runat="server" />
                </ItemTemplate>
            </telerik:RadLightBoxItem>
        </Items>
    </telerik:RadLightBox>
```

## Solution
There are several ways of achieving this requirement:
```C#
    protected void RadTextBox2_Load(object sender, EventArgs e)
    {
        RadTextBox textBox = sender as RadTextBox;
        textBox.Text = "Success";
    }
```

Alternatively, you can also use this approach:
```C#
    protected void Page_PreRender(object sender, EventArgs e)
    {
        RadTextBox textBox = LightBox1.FindControl("RadTextBox2") as RadTextBox;
        textBox.Text = "Success 2";
    }
```

For accessing the controls or elements on client-side you can check the findControl and findElement methods provided here:
[Access Telerik Controls on Client-Side](https://www.telerik.com/support/kb/aspnet-ajax/details/access-telerik-controls-on-client-side)

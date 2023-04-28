---
title: Effortlessly Select Multiple Items Beyond Visible Area with Mouse
description: How to Select and Scroll Items in RadListBox Using Mouse. Learn how to effortlessly select and scroll through items in RadListBox using the mouse. Simply click and hold the left mouse button to expand the selection, and the control will automatically scroll to reveal and highlight invisible items as needed.
type: how-to
page_title: How to select and scroll multiple items in RadListBox using mouse
slug: listbox-select-and-scroll-multiple-items-with-mouse
position: 
tags: 
ticketid: 1606846
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadListBox for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
The solution provided below shows how to select and scroll RadListBox items with the mouse. It will allow you to simply click and hold the left mouse button to expand the selection in the desired top or bottom location, and the control will automatically scroll to reveal and highlight invisible items as needed.

## Solution
The code below demonstrates a solution for achieving the desired behavior in the RadListBox control leveraging the mousedown, mouseup and mousemove client events:

````ASPX
        <telerik:RadCodeBlock ID="radCodeBlock2" runat="server">
            <script language="javascript" type="text/javascript">
                var $ = $telerik.$;

                function pageLoad(sender, args) {
                    var listboxE = $find('<%= lbE.ClientID %>');
                    var listboxElement = $(listboxE.get_element()).find(".rlbGroup")[0];

                    $(listboxE.get_element()).find(".rlbList").on({
                        mousedown: function () {
                            listboxE.set_autoPostBack(false);
                        },
                        mouseup: function () {
                            listboxE.set_autoPostBack(true);
                            listboxE.postback({
                                type: Telerik.Web.UI.ListBoxCommand.SelectedIndexChanged
                            });
                        },
                        mousemove: function (e) {
                            if (e.buttons > 0) { // Check to see if mouse button is clicked
                                var offsetY = e.clientY - listboxElement.getBoundingClientRect().top;
                                var scrollThreshold = 35; // Adjust this value as needed

                                if (offsetY < scrollThreshold) {
                                    listboxElement.scrollTop -= scrollThreshold - offsetY;
                                } else if (offsetY > listboxElement.clientHeight - scrollThreshold) {
                                    listboxElement.scrollTop += offsetY - (listboxElement.clientHeight - scrollThreshold);
                                }
                            }
                        }
                    });
                }
            </script>
        </telerik:RadCodeBlock>
        <telerik:RadListBox  runat="server" ID="lbE" width="665px" Height="170px" SelectionMode="Multiple" AutoPostBack="True">
                  <items>
                      <telerik:RadListBoxItem Text="Item1" />
                      <telerik:RadListBoxItem Text="Item2" />
                      <telerik:RadListBoxItem Text="Item3" />
                      <telerik:RadListBoxItem Text="Item4" />
                      <telerik:RadListBoxItem Text="Item5" />
                      <telerik:RadListBoxItem Text="Item6" />
                      <telerik:RadListBoxItem Text="Item7" />
                      <telerik:RadListBoxItem Text="Item8" />
                      <telerik:RadListBoxItem Text="Item9" />
                      <telerik:RadListBoxItem Text="Item10" />
                      <telerik:RadListBoxItem Text="Item11" />
                  </items>
        </telerik:RadListBox>
````

    

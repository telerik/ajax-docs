---
title: Retrieve DataKeyValue of RadListView on RadDataPager change
description: See how to retrieve the DataKeyValue on the RadDataPager change in RadListView/.
type: troubleshooting
page_title: How to get the RadListView DataKeyValue when DataPager Command event fires
slug: radlistview-retrieve-datakeyvalue-on-data-pager-change
position: 
tags: 
ticketid: 260368
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>2009.3 1103</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>RadListView for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
Question: Can you please post an example on how to retrieve datakeyvalue on the raddatapager change? I have RadListView with RadDataPager. One item per page. On clicking on the next button of the raddatapager I want to grab the value (datakeyvalue).

## Steps to Reproduce
You can attach to the OnCommand server event of the RadDataPager to check for the PageCommandName and extract the value of the ListBoxDataItem like this:

var dataKeyValue = (RadListView1.Items[0] as RadListViewDataItem).GetDataKeyValue("CustomerID").ToString();

Here is an example based on the [RadListView overview demo](https://demos.telerik.com/aspnet-ajax/listview/examples/overview/defaultcs.aspx):

ASPX
````ASP.NET
<telerik:RadDataPager RenderMode="Lightweight" ID="RadDataPager1" runat="server" PagedControlID="RadListView1" OnCommand="RadDataPager1_Command"
    PageSize="2" CssClass="pagerStyle">
    <Fields>
        <telerik:RadDataPagerButtonField FieldType="FirstPrev"></telerik:RadDataPagerButtonField>
        <telerik:RadDataPagerButtonField FieldType="Numeric" PageButtonCount="4"></telerik:RadDataPagerButtonField>
        <telerik:RadDataPagerButtonField FieldType="NextLast"></telerik:RadDataPagerButtonField>
        <telerik:RadDataPagerPageSizeField PageSizeComboWidth="60" PageSizeText="Page size: "></telerik:RadDataPagerPageSizeField>
        <telerik:RadDataPagerGoToPageField CurrentPageText="Page: " TotalPageText="of" SubmitButtonText="Go"></telerik:RadDataPagerGoToPageField>
    </Fields>
</telerik:RadDataPager>
````

````C#

        protected void RadDataPager1_Command(object sender, RadDataPagerCommandEventArgs e)
        {
            if (e.CommandName == RadDataPager.PageCommandName) {
                var dataKeyValue = (RadListView1.Items[0] as RadListViewDataItem).GetDataKeyValue("CustomerID").ToString();
            }
        }
````


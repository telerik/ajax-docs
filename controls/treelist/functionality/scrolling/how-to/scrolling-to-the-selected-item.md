---
title: Scrolling to the Selected Item
page_title: Scrolling to the Selected Item | UI for ASP.NET AJAX Documentation
description: Scrolling to the Selected Item
slug: treelist/functionality/scrolling/how-to/scrolling-to-the-selected-item
tags: scrolling,to,the,selected,item
published: True
position: 1
---

# Scrolling to the Selected Item



## 

If you have an initially selected item (row) in a scrollable treelist, you may want to bring the focus to this itemwhen the page first loads. The following steps describe how to accomplish this:

1. Set one of the items in the control as selected.

1. Provide a handler for the client-side __TreeListCreated__ event.

1. In the event handler, locate the selected row using the__get_selectedItems()__ method.

1. Use the treelist's dataDiv to access the DOM element for the scrollable region of the treelist.

1. Use the DOM element for the row to check if it is visible in the scrollable region. If it is not, set the __scrollTop__ property of the scrollable region to scroll the treelist so that the selected rowis showing.

The following example demonstrates this technique:

````JavaScript
	    <script type="text/javascript">
	        function TreeListCreated(sender, eventArgs) {
	            //gets the main table scrollArea HTLM element  
	            var scrollArea = document.getElementById(sender.get_element().id + "_rtlData");
	            var row = sender.get_selectedItems()[0];
	
	            //if the position of the selected row is below the viewable treelist area  
	            if (row) {
	                if ((row.get_element().offsetTop - scrollArea.scrollTop) + row.get_element().offsetHeight + 20 > scrollArea.offsetHeight) {
	                    //scroll down to selected row  
	                    scrollArea.scrollTop = scrollArea.scrollTop + ((row.get_element().offsetTop - scrollArea.scrollTop) +
	                                  row.get_element().offsetHeight - scrollArea.offsetHeight) + row.get_element().offsetHeight;
	                }
	                //if the position of the the selected row is above the viewable treelist area  
	                else if ((row.get_element().offsetTop - scrollArea.scrollTop) < 0) {
	                    //scroll the selected row to the top  
	                    scrollArea.scrollTop = row.get_element().offsetTop;
	                }
	            }
	        }
	    </script>
````



>tabbedCode

````ASPNET
	  <telerik:RadTreeList ID="RadTreeList1" runat="server" DataSourceID="SqlDataSource1"
	            AutoGenerateColumns="true" AllowPaging="true" DataKeyNames="EmployeeID" ParentDataKeyNames="ReportsTo">
	            <ClientSettings>
	                <Scrolling AllowScroll="true" UseStaticHeaders="true" SaveScrollPosition="true" ScrollHeight="150px" />
	                <ClientEvents OnTreeListCreated="TreeListCreated" />
	                <Selecting AllowItemSelection="true" />
	            </ClientSettings>
	        </telerik:RadTreeList>
	    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	        SelectCommand="SELECT EmployeeID, FirstName, LastName, ReportsTo FROM [Employees]" />
````



````C#
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        if (!IsPostBack)
	        {
	            RadTreeList1.ExpandToLevel(2);
	            RadTreeList1.Items[0].ChildItems[4].Selected = true;
	        }
	    }
````



````VB.NET
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	        If Not IsPostBack Then
	            RadTreeList1.ExpandToLevel(2)
	            RadTreeList1.Items(0).ChildItems(4).Selected = True
	        End If
	    End Sub
````


>end

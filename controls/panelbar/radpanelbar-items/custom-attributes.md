---
title: Custom Attributes
page_title: Custom Attributes | UI for ASP.NET AJAX Documentation
description: Custom Attributes
slug: panelbar/radpanelbar-items/custom-attributes
tags: custom,attributes
published: True
position: 6
---

# Custom Attributes



__RadPanelItem__ objects provide a special collection called __Attributes__. You can use this collection to expand the information stored with the items. The __Attributes__ collection lets you store any number of attributes as name/value pairs. You can specify custom attributes declaratively in the __RadPanelItem__ tag or programmatically using the __Attributes__ collection of the RadPanelItem. You can also access custom attributes client-side, using the __get_attributes__ collection of the __RadPanelItem__ client-side object.

## Setting Attributes Declaratively

In the ASP.NET declaration of your __RadPanelBar__ object, you can add custom attributes to panel items by simply adding Name="value" to the __RadPanelItem__ declaration. For example, the following RadPanelBar definition adds a "State" custom attribute to its non-root panel items:

````ASPNET
	<telerik:RadPanelBar ID="RadPanelBar1" runat="server" Skin="Office2007" Width="54px">
	<Items >
	   <telerik:RadPanelItem Text="Format">
	      <Items>
	         <telerik:RadPanelItem State="unchecked" Text="Bold">
	         </telerik:RadPanelItem>
	         <telerik:RadPanelItem State="unchecked" Text="Italic">
	         </telerik:RadPanelItem>
	         <telerik:RadPanelItem State="unchecked" Text="Underlined">
	         </telerik:RadPanelItem>
	      </Items>
	  </telerik:RadPanelItem>
	</Items >
	</telerik:RadPanelBar> 
````



## Using Attributes in Server-Side Code

You can access custom attributes from code behind via the __Attributes__ collection exposed by the __RadPanelItem__ class.

>tabbedCode

````C#
	     
		Paragraph.Font.Bold = RadPanelBar1.Items[0].Items[0].Attributes["State"] == "checked";
	    Paragraph.Font.Italic = RadPanelBar1.Items[0].Items[1].Attributes["State"] == "checked";
	    Paragraph.Font.Underline = RadPanelBar1.Items[0].Items[2].Attributes["State"] == "checked";
				
````
````VB.NET
	
	Paragraph.Font.Bold = RadPanelBar1.Items(0).Items(0).Attributes("State") = "checked"
	Paragraph.Font.Italic = RadPanelBar1.Items(0).Items(1).Attributes("State") = "checked"
	Paragraph.Font.Underline = RadPanelBar1.Items(0).Items(2).Attributes("State") = "checked"
	
	
````
>end

## Using Attributes in Client-Side Code

You can work with custom attributes from client-side code using the attributes collection returned by the __get_attributes__ method of the client-side __RadPanelItem__ object. The attributes collection has a __getAttribute__ method that lets you get attribute values, and a __setAttribute__ method that lets you set them:

````JavaScript
	
	        function GetAndSetCustomAttributes() {
	            var panelBar = $find("<%=RadPanelBar1.ClientID %>");
	            var item = panelBar.findItemByText("Bold");
	
	            var state = item.get_attributes().getAttribute("State");
	
	            panelBar.trackChanges();
	            if (state == "unchecked") {
	                item.get_attributes().setAttribute("State", "checked");
	            }
	            else {
	                item.get_attributes().setAttribute("State", "unchecked");
	            }
	            panelBar.commitChanges();
	        }     
	
	
````



## Data Binding with Custom Attributes

When binding the __RadPanelBar__ to data, custom attributes can be set in the __ItemDataBound__ event. The following code binds the panel bar to a __DataTable__ when the page Loads. The __DataTable__ contains a "__Roles"__ column which is not mapped to a property of the panel items:

>tabbedCode

````C#
	     
	
	protected void Page_Load(object sender, EventArgs e)
	{
	 if (!Page.IsPostBack)
	 {
	    //dynamically crate a table to populate the panelbar
	    DataTable table1 = new DataTable();
	
	    table1.Columns.Add("ID");
	    table1.Columns.Add("ParentID");
	    table1.Columns.Add("Roles"); // for the custom attributes
	    table1.Columns.Add("Text");
	    table1.Rows.Add(new string[] { "1", null, "A", "Politics" });
	    table1.Rows.Add(new string[] { "2", null, "B", "Sports" });
	    table1.Rows.Add(new string[] { "3", null, "C", "Events" });
	    table1.Rows.Add(new string[] { "4", "1", "D", "CNN" });
	    table1.Rows.Add(new string[] { "5", "1", "E", "NBC" });
	    table1.Rows.Add(new string[] { "6", "1", "F", "ABC" });
	    table1.Rows.Add(new string[] { "7", "2", "G", "US Sports" });
	    table1.Rows.Add(new string[] { "8", "2", "B", "European Sports" });
	    table1.Rows.Add(new string[] { "9", "7", "D", "Baseball" });
	    table1.Rows.Add(new string[] { "10", "7", "C", "Football" });
	    table1.Rows.Add(new string[] { "11", "7", "B", "Basketball" });
	    table1.Rows.Add(new string[] { "12", "8", "D", "Soccer" });
	    table1.Rows.Add(new string[] { "14", "3", "E", "Oscar Awards" });
	    table1.Rows.Add(new string[] { "15", "3", "B", "MTV Movie Awards" });
	    RadPanelBar1.DataSource = table1;
	    RadPanelBar1.DataFieldID = "ID";
	    RadPanelBar1.DataFieldParentID = "ParentID";
	    RadPanelBar1.DataTextField = "Text";
	    RadPanelBar1.DataBind();
	   }
	} 			
````
````VB.NET
	
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	        If Not Page.IsPostBack Then
	            'dynamically crate a table to populate the panelbar
	            Dim table1 As New DataTable()
	            table1.Columns.Add("ID")
	            table1.Columns.Add("ParentID")
	            table1.Columns.Add("Roles") ' the column for the custom attributes
	            table1.Columns.Add("Text")
	            table1.Rows.Add(New String() {"1", Nothing, "A", "Politics"})
	            table1.Rows.Add(New String() {"2", Nothing, "B", "Sports"})
	            table1.Rows.Add(New String() {"3", Nothing, "C", "Events"})
	            table1.Rows.Add(New String() {"4", "1", "D", "CNN"})
	            table1.Rows.Add(New String() {"5", "1", "E", "NBC"})
	            table1.Rows.Add(New String() {"6", "1", "F", "ABC"})
	            table1.Rows.Add(New String() {"7", "2", "G", "US Sports"})
	            table1.Rows.Add(New String() {"8", "2", "B", "European Sports"})
	            table1.Rows.Add(New String() {"9", "7", "D", "Baseball"})
	            table1.Rows.Add(New String() {"10", "7", "C", "Football"})
	            table1.Rows.Add(New String() {"11", "7", "B", "Basketball"})
	            table1.Rows.Add(New String() {"12", "8", "D", "Soccer"})
	            table1.Rows.Add(New String() {"14", "3", "E", "Oscar Awards"})
	            table1.Rows.Add(New String() {"15", "3", "B", "MTV Movie Awards"})
	            RadPanelBar1.DataSource = table1
	            RadPanelBar1.DataFieldID = "ID"
	            RadPanelBar1.DataFieldParentID = "ParentID"
	            RadPanelBar1.DataTextField = "Text"
	            RadPanelBar1.DataBind()
	        End If
	    End Sub
	
````
>end

The __"Roles"__ column is mapped to a custom attribute in the [ItemDataBound event handler]({%slug panelbar/server-side-programming/itemdatabound%}). The event handler also sets the __ToolTip__ property of the item to the value of its custom attribute to allow for testing of the custom attribute:

>tabbedCode

````C#
	     
	protected void RadPanelBar1_ItemDataBound( object sender, Telerik.Web.UI.RadPanelBarEventArgs e)
	{  
	    DataRowView dataRow = (DataRowView)e.Item.DataItem;  
	    e.Item.Attributes["Roles"] = dataRow["Roles"].ToString(); 
	    e.Item.ToolTip = e.Item.Attributes["Roles"];
	}
				
````
````VB.NET
	
	    Protected Sub RadPanelBar1_ItemDataBound(ByVal sender As Object,
	                                            ByVal e As Telerik.Web.UI.RadPanelBarEventArgs)
	                                            Handles RadPanelBar1.ItemDataBound
	        Dim dataRow As DataRowView = DirectCast(e.Item.DataItem, DataRowView)
	        e.Item.Attributes("Roles") = dataRow("Roles").ToString()
	        e.Item.ToolTip = e.Item.Attributes("Roles")
	    End Sub
	
	
````
>end

# See Also

 * [Declaring Items Statically at Designtime]({%slug panelbar/radpanelbar-items/declaring-items-statically-at-designtime%})

 * [Overview]({%slug panelbar/data-binding/overview%})

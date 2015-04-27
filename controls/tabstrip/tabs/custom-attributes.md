---
title: Custom Attributes
page_title: Custom Attributes | RadTabStrip for ASP.NET AJAX Documentation
description: Custom Attributes
slug: tabstrip/tabs/custom-attributes
tags: custom,attributes
published: True
position: 3
---

# Custom Attributes



**RadTab** objects provide a special collection called **Attributes**. You can use this collection to expand the information stored with the tabs. The **Attributes** collection lets you store any number of attributes as name/value pairs. You can specify custom attributes declaratively in the **RadTab** tag or programmatically using the **Attributes** collection of the **RadTab**. You can also access custom attributes client-side, using the **get_attributes** collection of the **RadTab** client-side object.

## Setting attributes declaratively

In the ASP.NET declaration of your **RadTabStrip** object, you can add custom attributes to tabs by simply adding Name="value" to the **RadTab** declaration. For example, the following **RadTabStrip** definition adds two custom attributes named "state" and "labelName" to its tabs:

````ASPNET
	     
	
	    <telerik:RadTabStrip
	      ID="RadTabStrip1" runat="server"
	      MultiPageID="RadMultiPage1"
	      OnTabClick="RadTabStrip1_TabClick1"
	      OnClientTabSelected="VisitTab" >
	      <Tabs>
	        <telerik:RadTab
	             runat="server"
	             Text="Tab1"
	             state="unvisited"
	             labelName="Label1"
	    >
	        </telerik:RadTab>
	        <telerik:RadTab
	           runat="server"
	           Text="Tab2"
	           state="unvisited"
	           labelName="Label2" />
	        <telerik:RadTab
	           runat="server"
	           Text="Tab3"
	           state="unvisited"
	           labelName="Label3" />
	      </Tabs>
	    </telerik:RadTabStrip>
				
````



## Using attributes in server-side code

You can access custom attributes from code behind via the **Attributes** collection exposed by the **RadTab** class.





````C#
	     
							protected void
	    RadTabStrip1_TabClick1(object sender, Telerik.Web.UI.RadTabStripEventArgs
	    e)
	    {
	      if (e.Tab.Attributes["state"] == "visited")
	      {
	        Label label =
	    e.Tab.PageView.FindControl(e.Tab.Attributes["labelName"]) as Label;
	        label.Text = "Welcome Back";
	      }
	      else e.Tab.Attributes["state"] = "visited";
	    }
				
````
````VB.NET
	
	
	        Protected Sub RadTabStrip1_TabClick1(ByVal sender As Object, _
	                 ByVal e As
	        Telerik.Web.UI.RadTabStripEventArgs) _
	                 Handles
	        RadTabStrip1.TabClick()
	        If e.Tab.Attributes("state") = "visited" Then
	            Dim label As Label =
	         TryCast(e.Tab.PageView.FindControl(e.Tab.Attributes("labelName")), 
	         Label)
	            label.Text = "Welcome Back"
	        Else
	            e.Tab.Attributes("state") = "visited"
	        End If
	    End Sub
	
	
````


## Using attributes in client-side code

You can work with custom attributes from client-side code using the attributes collection returned by the **get_attributes** method of the client-side **RadTab** object. The attributes collection has a **getAttribute** method that lets you get attribute values, and a **setAttribute** method that lets you set them:

````JavaScript
	     
	
	        function VisitTab(sender, args)
	        {
	          var tab = args.get_tab();
	          var attributes = tab.get_attributes();
	          if (attributes.getAttribute("state") == "unvisited")
	          {
	            sender.trackChanges();
	            attributes.setAttribute("state", "visiting");
	            tab.set_text("*" + tab.get_text());
	            sender.commitChanges();
	          }
	        }   
	
				
````



## Data Binding with Custom Attributes

When binding the **RadTabStrip** to data, custom attributes can be set in the **TabDataBound** event. The following code binds the tab strip to a **DataTable** when the page loads. The **DataTable** contains a "**Roles"** column that does not map to a property of the tabs:





````C#
	     
	
	        protected void Page_Load(object sender, EventArgs e)
	        {
	          if (!Page.IsPostBack)
	          {
	             //dynamically crate a table to populate
	        the tab strip
	             DataTable table1 = new DataTable(); 
	             table1.Columns.Add("ID");
	             table1.Columns.Add("ParentID");
	             table1.Columns.Add("Roles"); // for the custom
	        attribute
	             table1.Columns.Add("Text");
	             table1.Rows.Add(new string[] { "1", null,
	        "A", "Politics" });
	             table1.Rows.Add(new string[] { "2", null, "B",
	        "Sports" });
	             table1.Rows.Add(new string[] { "3", null, "C",
	        "Events" });
	             table1.Rows.Add(new string[] { "4", "1", "D",
	        "CNN" });
	             table1.Rows.Add(new string[] { "5", "1", "E",
	        "NBC" });
	             table1.Rows.Add(new string[] { "6", "1", "F",
	        "ABC" });
	             table1.Rows.Add(new string[] { "7", "2", "G",
	        "US Sports" });
	             table1.Rows.Add(new string[] { "8", "2", "B",
	        "European Sports" });
	             table1.Rows.Add(new string[] { "9", "7", "D",
	        "Baseball" });
	             table1.Rows.Add(new string[] { "10", "7", "C",
	        "Football" });
	             table1.Rows.Add(new string[] { "11", "7", "B",
	        "Basketball" });
	             table1.Rows.Add(new string[] { "12", "8", "D",
	        "Soccer" });
	             table1.Rows.Add(new string[] { "14", "3", "E",
	        "Oscar Awards" });
	             table1.Rows.Add(new string[] { "15", "3", "B",
	        "MTV Movie Awards" });
	             RadTabStrip1.DataSource = table1;
	             RadTabStrip1.DataFieldID = "ID";
	             RadTabStrip1.DataFieldParentID =
	        "ParentID";
	             RadTabStrip1.DataTextField = "Text";
	             RadTabStrip1.DataBind();
	           }
	        }
	
				
````
````VB.NET
	
							Protected Sub
	    Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	        If Not Page.IsPostBack Then
	            'dynamically crate a table to populate the menu
	            Dim table1 As New DataTable()
	            table1.Columns.Add("ID")
	            table1.Columns.Add("ParentID")
	            table1.Columns.Add("Roles") ' the column for the custom
	            attributes()
	            table1.Columns.Add("Text")
	            table1.Rows.Add(New String() {"1", Nothing, "A",
	        "Politics"})
	            table1.Rows.Add(New String() {"2", Nothing, "B",
	        "Sports"})
	            table1.Rows.Add(New String() {"3", Nothing, "C",
	        "Events"})
	            table1.Rows.Add(New String() {"4", "1", "D", "CNN"})
	            table1.Rows.Add(New String() {"5", "1", "E", "NBC"})
	            table1.Rows.Add(New String() {"6", "1", "F", "ABC"})
	        table1.Rows.Add(New String() {"7", "2", "G", "US
	            Sports("})")
	        table1.Rows.Add(New String() {"8", "2", "B", "European
	            Sports("})")
	            table1.Rows.Add(New String() {"9", "7", "D",
	        "Baseball"})
	            table1.Rows.Add(New String() {"10", "7", "C",
	        "Football"})
	            table1.Rows.Add(New String() {"11", "7", "B",
	        "Basketball"})
	            table1.Rows.Add(New String() {"12", "8", "D",
	        "Soccer"})
	        table1.Rows.Add(New String() {"14", "3", "E", "Oscar
	            Awards("})")
	        table1.Rows.Add(New String() {"15", "3", "B", "MTV Movie
	            Awards("})")
	            RadTabStrip1.DataSource = table1
	            RadTabStrip1.DataFieldID = "ID"
	            RadTabStrip1.DataFieldParentID = "ParentID"
	            RadTabStrip1.DataTextField = "Text"
	            RadTabStrip1.DataBind()
	        End If
	    End Sub
	
````


The **"Roles"** column is mapped to a custom attribute in the **TabDataBound** event handler. The event handler also sets the **ToolTip** property of the tab to the value of its custom attribute to allow for testing of the custom attribute:





````C#
	     
	
	        protected void RadTabStrip1_TabDataBound(object sender,
	        Telerik.Web.UI.RadTabStripEventArgs e)
	        {
	          DataRowView dataRow = (DataRowView)e.Tab.DataItem;
	          e.Tab.Attributes["Roles"] = dataRow["Roles"].ToString();
	          e.Tab.ToolTip = e.Tab.Attributes["Roles"];
	        }
	
				
````
````VB.NET
	     
	
	        Protected Sub RadTabStrip1_TabDataBound(ByVal sender As Object,
	        _
	
	        ByVal e As Telerik.Web.UI.RadTabStripEventArgs) _
	                       Handles
	        RadTabStrip1.TabDataBound
	         Dim dataRow As DataRowView = DirectCast(e.Tab.DataItem,
	        DataRowView)
	         e.Tab.Attributes("Roles") = dataRow("Roles").ToString()
	         e.Tab.ToolTip = e.Tab.Attributes("Roles")
	        End Sub
	
				
````


# See Also

 * [Declaring Tabs Statically in Design Time]({%slug tabstrip/tabs/declaring-tabs-statically-in-design-time%})

 * [Overview]({%slug tabstrip/data-binding/overview%})

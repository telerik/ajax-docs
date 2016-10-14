---
title: Decorated GridView Is Not Bound to SqlDataSource with ControlParameter 
page_title: Decorated GridView Is Not Bound to SqlDataSource with ControlParameter  | RadFormDecorator for ASP.NET AJAX Documentation
description: Decorated GridView Is Not Bound to SqlDataSource with ControlParameter 
slug: formdecorator/troubleshooting/decorated-gridview-is-not-bound-to-sqldatasource-with-controlparameter
tags: decorated,gridview,is,not,bound,to,sqldatasource,with,controlparameter 
published: True
position: 2
---

# Decorated GridView Is Not Bound to SqlDataSource with ControlParameter 

This help article offers a solution to an issue where a decorated asp:GridView by RadFormDecorator cannot be bound to the SqlDataSource with a ControlParameter on initial page load.

**Problem:**

The asp:GridView cannot be bound on initial page load when it is decorated by RadFormDecorator and the GridView is bound to the SqlDataSource with a ControlParameter. **Example 1** shows how to reproduce the issue.

>caption **Example 1**: Decorated asp:GridView is not visible on initial page load when it is bound to the SqlDataSource with ControlParameter.

**ASP.NET**

	<telerik:RadFormDecorator ID="RadFormDecorator1" runat="server" DecoratedControls="All" />

	<asp:DropDownList ID="Dropdownlist1" runat="server" DataSourceID="DropDownListDataSource" AutoPostBack="true" DataTextField="CompanyName" DataValueField="CustomerID">
	</asp:DropDownList>
	<asp:SqlDataSource runat="server" ID="DropDownListDataSource" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
		ProviderName="System.Data.SqlClient" SelectCommand="Select [CustomerID], [CompanyName], [Address], [City], [PostalCode], [Country] From [Customers]"
		OldValuesParameterFormatString="original_{0}" ConflictDetection="CompareAllValues" />


	<asp:GridView ID="GridView1" runat="server" AllowPaging="True" DataKeyNames="OrderID" DefaultMode="ReadOnly"
		DataSourceID="GridViewDataSource" Width="300" Style="float: left;">
	</asp:GridView>
	<asp:SqlDataSource runat="server" ID="GridViewDataSource" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
		ProviderName="System.Data.SqlClient" SelectCommand="SELECT [OrderID], [CustomerID], [EmployeeID],[OrderDate] FROM [Orders] WHERE ([CustomerID] = @CustomerID)"
		OldValuesParameterFormatString="original_{0}" ConflictDetection="CompareAllValues">
		<SelectParameters>
			<asp:ControlParameter ControlID="Dropdownlist1" Name="CustomerID" PropertyName="SelectedValue"
				Type="String"></asp:ControlParameter>
		</SelectParameters>
	</asp:SqlDataSource>


**Cause:**

In order to decorate all of the controls on the page, the RadFormDecorator decorates the children controls of the complex controls as well (i.e., the RadFormDecorator iterates through the controls' collections). 

There is, however, a binding issue with the GridView when the SqlDataSource is used with a ControlParameter and at the same time, the GridView's collection is accessed from the code behind. This issue can be easily reproduced on a page with no Telerik UI for ASP.NET AJAX controls and is shown in **Example 2**. The problem also affects the scenario with the RadFormDecorator from **Example 1**.

>caption **Example 2**: asp:GridView cannot be bound to the SqlDataSource with a ControlParameter when the GridView's collection is accessed from the code behind.

**ASP.NET**

	<asp:DropDownList ID="Dropdownlist1" runat="server" DataSourceID="DropDownListDataSource" AutoPostBack="true" DataTextField="CompanyName" DataValueField="CustomerID">
	</asp:DropDownList>
	<asp:SqlDataSource runat="server" ID="DropDownListDataSource" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
		ProviderName="System.Data.SqlClient" SelectCommand="Select [CustomerID], [CompanyName], [Address], [City], [PostalCode], [Country] From [Customers]"
		OldValuesParameterFormatString="original_{0}" ConflictDetection="CompareAllValues" />


	<asp:GridView ID="GridView1" runat="server" AllowPaging="True" DataKeyNames="OrderID" DefaultMode="ReadOnly"
		DataSourceID="GridViewDataSource" Width="300" Style="float: left;">
	</asp:GridView>
	<asp:SqlDataSource runat="server" ID="GridViewDataSource" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
		ProviderName="System.Data.SqlClient" SelectCommand="SELECT [OrderID], [CustomerID], [EmployeeID],[OrderDate] FROM [Orders] WHERE ([CustomerID] = @CustomerID)"
		OldValuesParameterFormatString="original_{0}" ConflictDetection="CompareAllValues">
		<SelectParameters>
			<asp:ControlParameter ControlID="Dropdownlist1" Name="CustomerID" PropertyName="SelectedValue"
				Type="String"></asp:ControlParameter>
		</SelectParameters>
	</asp:SqlDataSource>

**C#**

	protected void Page_PreRender(object sender, EventArgs e)
	{
		var c = GridView1.Controls;
	}

**VB**

	Protected Sub Page_PreRender(sender As Object, e As EventArgs)
		Dim c = GridView1.Controls
	End Sub


**Solution:**

There are a few options you can choose from in order to handle the scenario described above.

* Bind the DropDownList's data from the code behind instead of declaring the DataSourceID property of the DropDownList.

	>caption **Example 3**: Binding DropDownList's data from the code behind instead of declaring its DataSourceID property.

	**ASP.NET**

		<telerik:RadFormDecorator ID="RadFormDecorator1" runat="server" DecoratedControls="All" />

		<asp:DropDownList ID="Dropdownlist1" runat="server" AutoPostBack="true" DataTextField="CompanyName" DataValueField="CustomerID">
		</asp:DropDownList>
		<asp:SqlDataSource runat="server" ID="DropDownListDataSource" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
			ProviderName="System.Data.SqlClient" SelectCommand="Select [CustomerID], [CompanyName], [Address], [City], [PostalCode], [Country] From [Customers]"
			OldValuesParameterFormatString="original_{0}" ConflictDetection="CompareAllValues" />


		<asp:GridView ID="GridView1" runat="server" AllowPaging="True" DataKeyNames="OrderID" DefaultMode="ReadOnly"
			DataSourceID="GridViewDataSource" Width="300" Style="float: left;">
		</asp:GridView>
		<asp:SqlDataSource runat="server" ID="GridViewDataSource" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
			ProviderName="System.Data.SqlClient" SelectCommand="SELECT [OrderID], [CustomerID], [EmployeeID],[OrderDate] FROM [Orders] WHERE ([CustomerID] = @CustomerID)"
			OldValuesParameterFormatString="original_{0}" ConflictDetection="CompareAllValues">
			<SelectParameters>
				<asp:ControlParameter ControlID="Dropdownlist1" Name="CustomerID" PropertyName="SelectedValue"
					Type="String"></asp:ControlParameter>
			</SelectParameters>
		</asp:SqlDataSource>

	**C#**

		protected void Page_Init(object sender, EventArgs e)
		{
			DataSourceSelectArguments args = new DataSourceSelectArguments();
			DataView view = (DataView)DropDownListDataSource.Select(args);
			DataTable dt = view.ToTable();

			Dropdownlist1.DataSource = dt;
			Dropdownlist1.DataBind();
		}

	**VB**

		Protected Sub Page_Init(sender As Object, e As EventArgs)
			Dim args As New DataSourceSelectArguments()
			Dim view As DataView = DirectCast(DropDownListDataSource.[Select](args), DataView)
			Dim dt As DataTable = view.ToTable()

			Dropdownlist1.DataSource = dt
			Dropdownlist1.DataBind()
		End Sub

* Skip the following controls form decoration - GridFormDetailsViews, LoginControls, Textbox and ValidationSummary:

	>caption **Example 4**: Skip the GridFormDetailsViews, LoginControls, Textbox and ValidationSummary controls from decoration.

	**ASP.NET**

		<telerik:RadFormDecorator ID="RadFormDecorator1" runat="server" ControlsToSkip="GridFormDetailsViews,LoginControls,Textbox,ValidationSummary" />

* Set the DataSourceID property of the DropDownList in the Page_Init event. This approach, however, will force the DropDownList to rebind itself, which may lead to performance issues for large data sources.

	**C#**

		protected void Page_Init(object sender, EventArgs e)
		{
			Dropdownlist1.DataSourceID = "DropDownListDataSource";
			Dropdownlist1.DataBind();
		}

	**VB**

		Protected Sub Page_Init(sender As Object, e As EventArgs)
			Dropdownlist1.DataSourceID = "DropDownListDataSource"
			Dropdownlist1.DataBind()
		End Sub


# See Also

 * [RadFormDecorator Input Appearance Is Not Updated When Disabled In Internet Explorer]({%slug formdecorator/troubleshooting/input-appearance-is-not-updated-when-disabled-in-internet-explorer%})

 * [RadFormDecorator Integration With RadControls]({%slug formdecorator/integration-with-radcontrols%})

 * [RadFormDecorator Integration With Standard Controls]({%slug formdecorator/integration-with-standard-controls%})

 * [RadFormDecorator Overview]({%slug formdecorator/overview%})

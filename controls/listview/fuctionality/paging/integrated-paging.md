---
title: Integrated Paging
page_title: Integrated Paging | RadListView for ASP.NET AJAX Documentation
description: Integrated Paging
slug: listview/fuctionality/paging/integrated-paging
tags: integrated,paging
published: True
position: 0
---

# Integrated Paging



## 

RadListView natively supports paging, which lets users view large sets of data in small chunks for faster loading and easier navigation. You should set the AllowPaging property to True to have RadListView handle paging. By default, the AllowPaging property is False.

In order to use integrated paging in RadListView you have to assign **CommandName**="**Page**" (or **RadListView.PageCommandName**) and appropriate **CommandArgument**values for the corresponding LinkButton/Button/ImageButton controls.Thus the listview instance will fetch the corresponding set of data from its data source and display the results.

The command names are listed bellow:

* **PageCommandName**represents the Page command name and fires the **RadListView.PageIndexChanged** event. It can be raised by link/push/image buttons residing in the RadListView body when its **AllowPaging**property is set to true. Their **CommandName** should be set to **'Page'** and **CommandArgument** must match one of the values from the table below:


>caption  

| Paging command arguments |  |
| ------ | ------ |
| **First** |Indicates that the end user chose to navigate to the first page in the grid|
| **Next** |Indicates that the end user chose to navigate to the next page in the grid|
| **Prev** |Indicates that the end user chose to navigate to the previous page in the grid|
| **Last** |Indicates that the end user chose to navigate to the last page in the grid|
| **<NumericValue>** |<NumericValue> should be replaced with number that points to the page to which the control should navigate to|

* **ChangePageSizeCommandName**represents the ChangePageSize command name fires **RadListView.PageSizeChanged** event. It can be raised by link/push/image buttons residing in the RadListView body when its **AllowPaging**property is set to true. Their **CommandName** should be set to **'ChangePageSize'** and **CommandArgument** must be the actual number representing the new page size that will be set.

Keep in mind that you need to specify ItemPlaceholderID property value for RadListView which matches the id of an ASP.NET server control and will be used as a holder of the actual listview data content. The RadListView instance in [this example](http://demos.telerik.com/aspnet-ajax/ListView/examples/Paging/IntegratedPaging/DefaultCS.aspx) has asp PlaceHolder defined inside its LayoutTemplates for this purpose.

The following declaration demonstrates how to use the internal event bubbling mechanism of RadListView for ASP.NET AJAX to execute paging operations using buttons residing inside the listview's body.

````C#
	    <telerik:RadListView ID="RadListView1" DataSourceID="SqlDataSource1" runat="server"
	        ItemPlaceholderID="EmployeesContainer" DataKeyNames="CustomerID" AllowPaging="true"
	        PageSize="6">
	        <LayoutTemplate>
	            <!-- Set the id of the wrapping container to match the CLIENT ID of the RadListView control to display the ajax loading panel           In case the listview is embedded in another server control, you will need to append the id of that server control -->
	            <fieldset id="RadListView1">
	                <legend>Employees</legend>
	                <asp:PlaceHolder ID="EmployeesContainer" runat="server" />
	                <div>
	                    <div style="float: left; margin-left: 30%;">
	                        <asp:Button runat="server" ID="btnFirst" CommandName="Page" CommandArgument="First"
	                            Text="First" Enabled="<%#Container.CurrentPageIndex > 0 %>" />
	                        <asp:Button runat="server" ID="btnPrev" CommandName="Page" CommandArgument="Prev"
	                            Text="Prev" Enabled="<%#Container.CurrentPageIndex > 0 %>" />
	                        <span style="vertical-align: top; position: relative; top: 4px">Page
	                            <%#Container.CurrentPageIndex + 1 %>
	                            of
	                            <%#Container.PageCount %></span>
	                        <asp:Button runat="server" ID="btnNext" CommandName="Page" CommandArgument="Next"
	                            Text="Next" Enabled="<%#Container.CurrentPageIndex + 1 < Container.PageCount %>" />
	                        <asp:Button runat="server" ID="btnLast" CommandName="Page" CommandArgument="Last"
	                            Text="Last" Enabled="<%#Container.CurrentPageIndex + 1 < Container.PageCount %>" />
	                    </div>
	                    <div>
	                        <span style="vertical-align: middle; font-weight: bold; padding-left: 5px;">Page Size:</span>
	                        <telerik:RadComboBox runat="server" ID="cmbPageSize" OnSelectedIndexChanged="cmbPageSize_SelectedIndexChanged"
	                            AutoPostBack="true" Width="40px" SelectedValue="<%#Container.PageSize %>">
	                            <Items>
	                                <telerik:RadComboBoxItem Text="3" Value="3" />
	                                <telerik:RadComboBoxItem Text="6" Value="6" />
	                                <telerik:RadComboBoxItem Text="9" Value="9" />
	                                <telerik:RadComboBoxItem Text="12" Value="12" />
	                            </Items>
	                        </telerik:RadComboBox>
	                    </div>
	                </div>
	            </fieldset>
	        </LayoutTemplate>
	        <ItemTemplate>
	            <fieldset style="float: left; width: 280px; height: 155px">
	                <legend>Company:
	                    <%#Eval("CompanyName")%>
	                </legend>
	                <table cellpadding="0" cellspacing="0" width="95%">
	                    <tr>
	                        <td style="width: 75%;">
	                            <table cellpadding="6" cellspacing="0">
	                                <tr>
	                                    <td style="width: 25%;">
	                                        Name:
	                                    </td>
	                                    <td style="width: 75%">
	                                        <%#Eval("ContactName")%>
	                                    </td>
	                                </tr>
	                                <tr>
	                                    <td>
	                                        Title:
	                                    </td>
	                                    <td>
	                                        <%#Eval("ContactTitle")%>
	                                    </td>
	                                </tr>
	                                <tr>
	                                    <td>
	                                        City:
	                                    </td>
	                                    <td>
	                                        <%# Eval("City")%>
	                                    </td>
	                                </tr>
	                                <tr>
	                                    <td>
	                                        Country:
	                                    </td>
	                                    <td>
	                                        <%# Eval("Country")%>
	                                    </td>
	                                </tr>
	                                <tr>
	                                    <td>
	                                        Phone:
	                                    </td>
	                                    <td>
	                                        <%#Eval("Phone")%>
	                                    </td>
	                                </tr>
	                            </table>
	                        </td>
	                        <td style="vertical-align: bottom; text-align: right; width: 25%;">
	                            <telerik:RadBinaryImage runat="server" ID="RadBinaryImage1" DataValue='<%#Eval("Photo") %>'
	                                AutoAdjustImageControlSize="false" Width="90px" Height="110px" ToolTip='<%#Eval("ContactName", "Photo of {0}") %>'
	                                AlternateText='<%#Eval("ContactName", "Photo of {0}") %>' />
	                        </td>
	                    </tr>
	                </table>
	            </fieldset>
	        </ItemTemplate>
	        <AlternatingItemTemplate>
	            <fieldset style="float: left; width: 280px; height: 155px">
	                <legend>Company:
	                    <%#Eval("CompanyName")%>
	                </legend>
	                <table cellpadding="0" cellspacing="0" width="95%">
	                    <tr>
	                        <td style="width: 75%">
	                            <table cellpadding="6" cellspacing="0">
	                                <tr>
	                                    <td style="width: 25%">
	                                        Name:
	                                    </td>
	                                    <td style="width: 75%;">
	                                        <%#Eval("ContactName")%>
	                                    </td>
	                                </tr>
	                                <tr>
	                                    <td>
	                                        Title:
	                                    </td>
	                                    <td>
	                                        <%#Eval("ContactTitle")%>
	                                    </td>
	                                </tr>
	                                <tr>
	                                    <td>
	                                        City:
	                                    </td>
	                                    <td>
	                                        <%# Eval("City")%>
	                                    </td>
	                                </tr>
	                                <tr>
	                                    <td>
	                                        Country:
	                                    </td>
	                                    <td>
	                                        <%# Eval("Country")%>
	                                    </td>
	                                </tr>
	                                <tr>
	                                    <td>
	                                        Phone:
	                                    </td>
	                                    <td>
	                                        <%#Eval("Phone")%>
	                                    </td>
	                                </tr>
	                            </table>
	                        </td>
	                        <td style="vertical-align: bottom; text-align: right; width: 25%;">
	                            <telerik:RadBinaryImage runat="server" ID="RadBinaryImage1" DataValue='<%#Eval("Photo") %>'
	                                AutoAdjustImageControlSize="false" Width="90px" Height="110px" ToolTip='<%#Eval("ContactName", "Photo of {0}") %>'
	                                AlternateText='<%#Eval("ContactName", "Photo of {0}") %>' />
	                        </td>
	                    </tr>
	                </table>
	            </fieldset>
	        </AlternatingItemTemplate>
	    </telerik:RadListView>
````



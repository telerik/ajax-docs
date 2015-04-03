---
title: Declarative Data Source
page_title: Declarative Data Source | UI for ASP.NET AJAX Documentation
description: Declarative Data Source
slug: dataform/data-binding/declarative-data-source
tags: declarative,data,source
published: True
position: 0
---

# Declarative Data Source



The __RadDataForm__ can be easily bound to various declarative data source controls. In order to successfully bind the control you need to follow the steps below:

1. Create and configure a __DataSource__ control. __RadDataForm__ can use any ASP.NET data source control, including __SqlDataSource__, __AccessDataSource__, __ObjectDataSource__, __XmlDataSource__, __EntityDataSource__, __OpenAccessDataSource,____LinqDataSource__ and __ObjectContainerDataSource__.

1. Assign the __DataSourceID__ property of __RadDataForm__ to the previously created __DataSource__ control.

1. Define the templates for the __RadDataForm__ that will be used to preview, edit, insert or delete data (__LayoutTemplate__, __ItemTemplate__, __EditItemTemplate__, __InsertItemTemplate__). You can do this manually in the markup or use the __Configuration Wizard__ to generate the layouts manually.

## Create and Configure DataSource Control

Before you can bind the __RadDataForm__, you need to add a __DataSource__ control to the page and configure it. The code below shows a sample markup for a __SqlDataSource__ control.

````ASPNET
	        <asp:SqlDataSource runat="server" ID="SqlDataSource1" ConnectionString='<%$ ConnectionStrings:NorthwindConnectionString %>' 
	            SelectCommand="SELECT [CustomerID], [CompanyName], [ContactName], [ContactTitle] FROM [Customers]" />
````



## Set the DataSourceID property of RadDataForm

After you set the __DataSourceID__ property to point to the __DataSource__ created in the previous step, the markup will look like below.

````ASPNET
	        <telerik:RadDataForm runat="server" ID="RadDataForm1" DataSourceID="SqlDataSource1" DataKeyNames="CustomerID">
	        </telerik:RadDataForm>
````



## Define templates for RadDataForm

In order to define how the data will look, you need to configure the templates of the control. You can do this manually or via the __Configuration Wizard__. The complete markup for __RadDataForm__ with the templates will look similar to the one below.

````ASPNET
	        <telerik:RadDataForm runat="server" ID="RadDataForm2" DataSourceID="SqlDataSource1" DataKeyNames="CustomerID">
	            <LayoutTemplate>
	                <div class="RadDataForm RadDataForm_<%# Container.Skin %> rdfLeftAligned rdfNoFieldHint rdfNoFieldHint">
	                    <div runat="server" id="itemPlaceholder"></div>
	                    <div class="rdfPager">
	                        <span>
	                            <asp:Button runat="server" ID="btnFirst" CssClass="rdfFirst" CommandName="Page" CommandArgument="First" ToolTip="First" Text=" " />
	                            <asp:Button runat="server" ID="btnPrev" CssClass="rdfPrev" CommandName="Page" CommandArgument="Prev" ToolTip="Previous" Text=" " />
	                        </span><span>
	                            <asp:Button runat="server" ID="btnNext" CssClass="rdfNext" CommandName="Page" CommandArgument="Next" ToolTip="Next" Text=" " />
	                            <asp:Button runat="server" ID="btnLast" CssClass="rdfLast" CommandName="Page" CommandArgument="Last" ToolTip="Last" Text=" " />
	                        </span>
	                    </div>
	                </div>
	            </LayoutTemplate>
	            <ItemTemplate>
	                <fieldset class="rdfFieldset rdfBorders">
	                    <legend class="rdfLegend">View</legend>
	                    <div class="rdfRow">
	                        <asp:Label runat="server" ID="CustomerIDLabel2" CssClass="rdfLabel" Text="CustomerID"></asp:Label><asp:Label CssClass="rdfFieldValue" Text='<%# Eval("CustomerID") %>' runat="server" ID="CustomerIDLabel1" />
	                    </div>
	                    <div class="rdfRow">
	                        <asp:Label runat="server" ID="CompanyNameLabel2" CssClass="rdfLabel" Text="CompanyName"></asp:Label><asp:Label CssClass="rdfFieldValue" Text='<%# Eval("CompanyName") %>' runat="server" ID="CompanyNameLabel1" />
	                    </div>
	                    <div class="rdfRow">
	                        <asp:Label runat="server" ID="ContactNameLabel2" CssClass="rdfLabel" Text="ContactName"></asp:Label><asp:Label CssClass="rdfFieldValue" Text='<%# Eval("ContactName") %>' runat="server" ID="ContactNameLabel1" />
	                    </div>
	                    <div class="rdfRow">
	                        <asp:Label runat="server" ID="ContactTitleLabel2" CssClass="rdfLabel" Text="ContactTitle"></asp:Label><asp:Label CssClass="rdfFieldValue" Text='<%# Eval("ContactTitle") %>' runat="server" ID="ContactTitleLabel1" />
	                    </div>
	                    <div class="rdfCommandButtons">
	                        <hr class="rdfHr" />
	                        <telerik:RadButton runat="server" ButtonType="SkinnedButton" CommandName="InitInsert" Text="Insert" ID="InitInsertButton" ToolTip="Insert" CausesValidation="False" />
	                        <telerik:RadButton runat="server" ButtonType="SkinnedButton" CommandName="Edit" Text="Edit" ID="EditButton" ToolTip="Edit" CausesValidation="False" />
	                        <telerik:RadButton runat="server" ButtonType="SkinnedButton" CommandName="Delete" Text="Delete" ID="DeleteButton" ToolTip="Delete" CausesValidation="False" />
	                    </div>
	                </fieldset>
	            </ItemTemplate>
	            <EditItemTemplate>
	                <fieldset class="rdfFieldset rdfBorders">
	                    <legend class="rdfLegend">Edit</legend>
	                    <div class="rdfRow">
	                        <asp:Label runat="server" ID="Label1" CssClass="rdfLabel" Text="CustomerID"></asp:Label><asp:Label CssClass="rdfFieldValue" Text='<%# Eval("CustomerID") %>' runat="server" ID="Label2" />
	                    </div>
	                    <div class="rdfRow">
	                        <asp:Label runat="server" ID="Label3" CssClass="rdfLabel" Text="CompanyName" AssociatedControlID="CompanyNameTextBox"></asp:Label><telerik:RadTextBox WrapperCssClass="rdfInput" Text='<%# Bind("CompanyName") %>' runat="server" ID="CompanyNameTextBox" />
	                    </div>
	                    <div class="rdfRow">
	                        <asp:Label runat="server" ID="Label4" CssClass="rdfLabel" Text="ContactName" AssociatedControlID="ContactNameTextBox"></asp:Label><telerik:RadTextBox WrapperCssClass="rdfInput" Text='<%# Bind("ContactName") %>' runat="server" ID="ContactNameTextBox" />
	                    </div>
	                    <div class="rdfRow">
	                        <asp:Label runat="server" ID="Label5" CssClass="rdfLabel" Text="ContactTitle" AssociatedControlID="ContactTitleTextBox"></asp:Label><telerik:RadTextBox WrapperCssClass="rdfInput" Text='<%# Bind("ContactTitle") %>' runat="server" ID="ContactTitleTextBox" />
	                    </div>
	                    <div class="rdfCommandButtons">
	                        <hr class="rdfHr" />
	                        <telerik:RadButton runat="server" ButtonType="SkinnedButton" CommandName="Update" Text="Update" ID="UpdateButton" ToolTip="Update" />
	                        <telerik:RadButton runat="server" ButtonType="SkinnedButton" CommandName="Cancel" Text="Cancel" ID="CancelButton" ToolTip="Cancel" CausesValidation="False" />
	
	                    </div>
	                </fieldset>
	            </EditItemTemplate>
	            <InsertItemTemplate>
	                <fieldset class="rdfFieldset rdfBorders">
	                    <legend class="rdfLegend">Insert</legend>
	                    <div class="rdfRow">
	                        <asp:Label runat="server" ID="Label6" CssClass="rdfLabel" Text="CustomerID"></asp:Label><telerik:RadTextBox WrapperCssClass="rdfInput" Text='<%# Bind("CustomerID") %>' runat="server" ID="CustomerIDTextBox" />
	                    </div>
	                    <div class="rdfRow">
	                        <asp:Label runat="server" ID="Label7" CssClass="rdfLabel" Text="CompanyName" AssociatedControlID="CompanyNameTextBox"></asp:Label><telerik:RadTextBox WrapperCssClass="rdfInput" Text='<%# Bind("CompanyName") %>' runat="server" ID="RadTextBox1" />
	                    </div>
	                    <div class="rdfRow">
	                        <asp:Label runat="server" ID="Label8" CssClass="rdfLabel" Text="ContactName" AssociatedControlID="ContactNameTextBox"></asp:Label><telerik:RadTextBox WrapperCssClass="rdfInput" Text='<%# Bind("ContactName") %>' runat="server" ID="RadTextBox2" />
	                    </div>
	                    <div class="rdfRow">
	                        <asp:Label runat="server" ID="Label9" CssClass="rdfLabel" Text="ContactTitle" AssociatedControlID="ContactTitleTextBox"></asp:Label><telerik:RadTextBox WrapperCssClass="rdfInput" Text='<%# Bind("ContactTitle") %>' runat="server" ID="RadTextBox3" />
	                    </div>
	                    <div class="rdfCommandButtons">
	                        <hr class="rdfHr" />
	                        <telerik:RadButton runat="server" ButtonType="SkinnedButton" CommandName="PerformInsert" Text="Insert" ID="PerformInsertButton" ToolTip="Insert" />
	                        <telerik:RadButton runat="server" ButtonType="SkinnedButton" CommandName="Cancel" Text="Cancel" ID="RadButton1" ToolTip="Cancel" CausesValidation="False" />
	
	                    </div>
	                </fieldset>
	            </InsertItemTemplate>
	        </telerik:RadDataForm>
````



# See Also

 * [Overview]({%slug dataform/overview%})

 * [Advanced via NeedDataSource]({%slug dataform/data-binding/advanced-via-needdatasource%})

 * [Live Demo](http://demos.telerik.com/aspnet-ajax/dataform/overview/defaultcs.aspx)

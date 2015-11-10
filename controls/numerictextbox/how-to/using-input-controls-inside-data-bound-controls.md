---
title: Using Input Controls Inside Data-Bound Controls
page_title: Using Input Controls Inside Data-Bound Controls | RadNumericTextBox for ASP.NET AJAX Documentation
description: Using Input Controls Inside Data-Bound Controls
slug: numerictextbox/how-to/using-input-controls-inside-data-bound-controls
tags: using,input,controls,inside,data-bound,controls
published: True
position: 0
---

# Using Input Controls Inside Data-Bound Controls



You can embed **RadInput** controls in a data-bound control and use it for editing. When the data-bound controlcreates the **RadTextBox**, **RadNumericTextBox**, **RadDateInput**, or **RadMaskedTextBox** control as part of its own rendering, it can extract the input values.

When embedding **RadInput** controls inside a data-bound control, you must use a data-binding expression to bind the value of the input control to the data source of the parent control. Data-binding expressions are contained within <%# and %> delimiters and use the **Eval** and **Bind** functions. The **Eval** function is used to define one-way (read-only) binding. The **Bind** function is used for two-way (updatable) binding.

>note In addition to calling **Eval** and **Bind** methods to perform data binding in a data-binding expression, you can call any publicly scoped code within the <%# and %> delimiters to execute that code and return a value during page processing.
>


The following table shows the properties of the various **RadInput** controls to bind when using them within a data-bound control:


>caption  

| RadInput control | Bindable property |
| ------ | ------ |
|RadTextBox|Text|
|RadNumericTextBox|DbValue|
|RadMaskedTextBox|Text|
|RadDateInput|DbSelectedDate|

>caution With **RadNumericTextbox** and **RadDateInput** , use the **DbValue** and **DbSelectedDate** properties rather than the **Value** and **SelectedDate** properties. The "Db" properties differ from the counterparts you usually use in that they do not throw an exception if the new value is null, string, or DBNull. Setting a DbNull value will internally revert the DbNull to an empty value.
>


The following example shows how to use the different **RadInput** controls inside a databound control (in this case, **RadGrid**):

````ASPNET
	    <telerik:RadGrid ID="RadGrid1" runat="server" DataSourceID="SqlDataSource1" GridLines="None">
	        <MasterTableView AutoGenerateColumns="False" DataKeyNames="id" AllowAutomaticDeletes="true"
	            AllowAutomaticInserts="true" AllowAutomaticUpdates="true" DataSourceID="SqlDataSource1">
	            <RowIndicatorColumn CurrentFilterFunction="NoFilter" FilterListOptions="VaryByDataType"
	                Visible="False">
	            </RowIndicatorColumn>
	            <Columns>
	                <telerik:GridEditCommandColumn CurrentFilterFunction="NoFilter" FilterListOptions="VaryByDataType">
	                </telerik:GridEditCommandColumn>
	                <telerik:GridTemplateColumn HeaderText="TextData" UniqueName="TextData">
	                    <ItemTemplate>
	                        <telerik:RadTextBox Text='<%# Eval("TextData") %>' ID="DisplayTextBox" runat="server"
	                            ReadOnly="true">
	                        </telerik:RadTextBox>
	                    </ItemTemplate>
	                    <EditItemTemplate>
	                        <telerik:RadTextBox Text='<%# Bind("TextData") %>' ID="EditTextBox" runat="server">
	                        </telerik:RadTextBox>
	                    </EditItemTemplate>
	                </telerik:GridTemplateColumn>
	                <telerik:GridTemplateColumn HeaderText="NumericData" UniqueName="NumericData">
	                    <ItemTemplate>
	                        <telerik:RadNumericTextBox DbValue='<%# Eval("NumericData") %>' ID="DisplayNumericTextBox"
	                            runat="server" ReadOnly="true">
	                        </telerik:RadNumericTextBox>
	                    </ItemTemplate>
	                    <EditItemTemplate>
	                        <telerik:RadNumericTextBox DbValue='<%# Bind("NumericData") %>' ID="EditNumericTextBox"
	                            runat="server">
	                        </telerik:RadNumericTextBox>
	                    </EditItemTemplate>
	                </telerik:GridTemplateColumn>
	                <telerik:GridTemplateColumn HeaderText="MaskedData" UniqueName="MaskedData">
	                    <ItemTemplate>
	                        <telerik:RadMaskedTextBox Text='<%# Eval("MaskedData") %>' ID="DisplayMaskedTextBox"
	                            runat="server" Mask="###-####" ReadOnly="true">
	                        </telerik:RadMaskedTextBox>
	                    </ItemTemplate>
	                    <EditItemTemplate>
	                        <telerik:RadMaskedTextBox Text='<%# Bind("MaskedData") %>' Mask="###-####" ID="EditMaskedTextBox"
	                            runat="server">
	                        </telerik:RadMaskedTextBox>
	                    </EditItemTemplate>
	                </telerik:GridTemplateColumn>
	                <telerik:GridTemplateColumn HeaderText="DateData" UniqueName="DateData">
	                    <ItemTemplate>
	                        <telerik:RadDateInput DbSelectedDate='<%# Eval("DateData") %>' ID="DisplayDateInput"
	                            runat="server" ReadOnly="true">
	                        </telerik:RadDateInput>
	                    </ItemTemplate>
	                    <EditItemTemplate>
	                        <telerik:RadDateInput DbSelectedDate='<%# Bind("DateData") %>' ID="EditDateInput"
	                            runat="server">
	                        </telerik:RadDateInput>
	                    </EditItemTemplate>
	                </telerik:GridTemplateColumn>
	            </Columns>
	        </MasterTableView></telerik:RadGrid>
````



# See Also

 * [Getting and Setting Values]({%slug numerictextbox/features/getting-and-setting-values%})

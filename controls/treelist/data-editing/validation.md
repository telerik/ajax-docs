---
title: Validation
page_title: Validation | UI for ASP.NET AJAX Documentation
description: Validation
slug: treelist/data-editing/validation
tags: validation
published: True
position: 7
---

# Validation



## 

The validation for the RadTreeList control follows the general logic for validating the input of any other server control.The main logic is to relate the validators to the field(s) of the edit or insert fields. In terms of settings, there are three properties, which are part of the ValidationSettings tag of the control. These are:

* __EnableValidation__ – a Boolean field, which is enabled by default and specifies whether the validation will be enabled for the control.

* __CommandsToValidate__- the names of the commands to validate. CommandsToValidate is an array which triggers validation for Insert and Update commands by default. If you set for example "Edit" as the only command name which should be validated, default commands (Insert and Update ) will be overriden.

* __ValidationGroup__ – the name of the validation group to which the TreeList control belongs.

## Adding a validator to an edit field in RadTreeList

In order to prevent the update operation if the user enters data in an edit field which is not in the correct format, you can wire the ItemCreated event of the treelist to add a validator of your choice. There are four stages which need to be passed:

1. Check whether the current item is in edit mode;

1. Obtain reference to the respective TreeListColumnEditor instance and the editing control inside it;

1. Create the validator and set its ControlToValidate property to point to the editing control;

1. Add the validator to the Controls collection of the editing control Parent.

Below are the code snippets of an example in which we add a RequiredFieldValidator to the TextBox editor of a TreeListBoundColumn:

>tabbedCode

````C#
	    protected void RadTreeList1_ItemCreated(object sender, Telerik.Web.UI.TreeListItemCreatedEventArgs e)
	    {
	        if (e.Item is TreeListEditFormItem)
	        {
	            TreeListEditFormItem editForm = e.Item as TreeListEditFormItem;
	
	            TreeListTextBoxColumnEditor editorID = editForm.GetColumnEditor("ID") as TreeListTextBoxColumnEditor;
	            RequiredFieldValidator requiredFieldValidator1 = new RequiredFieldValidator();
	            requiredFieldValidator1.ID = "RequiredFieldValidator1";
	            requiredFieldValidator1.ControlToValidate = editorID.TextBoxControl.ID;
	            requiredFieldValidator1.ErrorMessage = "Required field!";
	            editorID.TextBoxControl.Parent.Controls.Add(requiredFieldValidator1);
	        }
	    }
````



````VB.NET
	    Protected Sub RadTreeList1_ItemCreated(ByVal sender As Object, ByVal e As Telerik.Web.UI.TreeListItemCreatedEventArgs)
	        If TypeOf e.Item Is TreeListEditFormItem Then
	            Dim editForm As TreeListEditFormItem = TryCast(e.Item, TreeListEditFormItem)
	
	            Dim editorID As TreeListTextBoxColumnEditor = TryCast(editForm.GetColumnEditor("ID"), TreeListTextBoxColumnEditor)
	            Dim requiredFieldValidator1 As New RequiredFieldValidator()
	            requiredFieldValidator1.ID = "RequiredFieldValidator1"
	            requiredFieldValidator1.ControlToValidate = editorID.TextBoxControl.ID
	            requiredFieldValidator1.ErrorMessage = "Required field!"
	            editorID.TextBoxControl.Parent.Controls.Add(requiredFieldValidator1)
	        End If
	    End Sub
````


>end

## Adding a validator to EditItemTemplate of TreeListTemplateColumn

The approach is the same as with any other server control. You can place the respective validator in the EditItemTemplate of your TreeListTemplateColumn and relate its ControlToValidate property with the ID of the control you would like to validate:

````ASPNET
	<asp:TextBox ID="TextBox1" Text='<%# Bind("ProductName")%>' runat="server"></asp:TextBox>
	<asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="TextBox1" ErrorMessage="Required Field!"></asp:RequiredFieldValidator>                    
````



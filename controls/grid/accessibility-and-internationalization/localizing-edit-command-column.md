---
title: Localizing Edit Command Column
page_title: Localizing Edit Command Column | UI for ASP.NET AJAX Documentation
description: Localizing Edit Command Column
slug: grid/accessibility-and-internationalization/localizing-edit-command-column
tags: localizing,edit,command,column
published: True
position: 2
---

# Localizing Edit Command Column



In order to localize the Edit/Update/Cancel buttons text you need to use the same-named properties as described below.

## In-place edit (EditMode="InPlace")

In case of in-place editing, you need to set the following properties for GridEditCommandColumn:

* __EditText__

* __UpdateText__

* __InsertText__

* __CancelText__

````ASPNET
	    <MasterTableView EditMode="InPlace">
	      ...
	      <Columns>
	        ...
	        <telerik:GridEditCommandColumn UniqueName="EditCommandColumn" CancelText="Cancel"
	          UpdateText="Update" InsertText="Insert" EditText="Edit">
	        </telerik:GridEditCommandColumn>
	      </Columns>
	    </MasterTableView>
````



## Edit in forms (EditMode="EditForms" or EditMode="PopUp")

In case of editing in forms, you need to set the following properties for __EditColumn__ under __MasterTableView__.__EditFormSettings:__

* __UpdateText__

* __InsertText__

* __CancelText__

````ASPNET
	    <MasterTableView>
	      <Columns>
	        ...
	        <telerik:GridEditCommandColumn UniqueName="EditCommandColumn" EditText="Edit">
	        </telerik:GridEditCommandColumn>
	      </Columns>
	      ...
	      <EditFormSettings>
	        <EditColumn UniqueName="EditCommandColumn" CancelText="Cancel" UpdateText="Update"
	          InsertText="Insert">
	        </EditColumn>
	      </EditFormSettings>
	    </MasterTableView>
````



>note When edit in forms ____ is applied, __MasterTableView__ . __EditFormSettings__ can not be used for localizing the __EditText__ property. Since the edit control is outside of the edit form you should set the __GridEditCommandColumn.EditText__ property as demonstrated above.
>


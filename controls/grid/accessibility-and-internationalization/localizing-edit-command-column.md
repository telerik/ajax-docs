---
title: Localizing Edit Command Column
page_title: Localizing Edit Command Column | RadGrid for ASP.NET AJAX Documentation
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

* **EditText**

* **UpdateText**

* **InsertText**

* **CancelText**

````ASP.NET
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

In case of editing in forms, you need to set the following properties for **EditColumn** under **MasterTableView**.**EditFormSettings:**

* **UpdateText**

* **InsertText**

* **CancelText**

````ASP.NET
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



>tip When edit in forms is applied, **MasterTableView** . **EditFormSettings** can not be used for localizing the **EditText** property. Since the edit control is outside of the edit form you should set the **GridEditCommandColumn.EditText** property as demonstrated above.
>


---
title: Localizing Edit Command Column
page_title: Localizing Edit Command Column - RadGrid
description: Learn how to localize RadGrid edit, update, insert, and cancel button text for in-place and form-based editing scenarios.
slug: grid/accessibility-and-internationalization/localizing-edit-command-column
tags: localizing,edit,command,column
published: True
position: 2
---

# Localizing Edit Command Column



To localize the Edit, Update, Insert, and Cancel button text, set the corresponding properties described below.

## Localizing in-place edit buttons

For `EditMode="InPlace"` editing, set these properties on `GridEditCommandColumn`:

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



## Localizing edit form buttons

For `EditMode="EditForms"` editing, set these properties on **EditColumn** under **MasterTableView**.**EditFormSettings**:

* **UpdateText**

* **InsertText**

* **CancelText**

````ASP.NET
<MasterTableView EditMode="EditForms">
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



>note When form-based editing is enabled, **MasterTableView**.**EditFormSettings** cannot localize the **EditText** property. Because the edit control is outside the edit form, set **GridEditCommandColumn.EditText** as shown above.
>

## See Also

- [Localizing the Grid Messages]({%slug grid/accessibility-and-internationalization/localizing-the-grid-messages%})
- [Localizing the Command Item]({%slug grid/accessibility-and-internationalization/localizing-the-command-item%})


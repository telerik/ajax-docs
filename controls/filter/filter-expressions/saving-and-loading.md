---
title: Saving and Loading
page_title: Saving and Loading - RadFilter
description: Learn how to save and load RadFilter expressions and troubleshoot saved state that does not appear to load.
slug: filter/filter-expressions/saving-and-loading
components: ["filter"]
tags: saving,and,loading
published: True
position: 2
---

# Saving and Loading



## 

The RadFilter server-side API offers two methods for saving and loading **RadFilter** expressions by user:

* **SaveSettings** - serializes the control expressions to *Base64 encoded* string;

* **LoadSettings** - Loads the provided state in the control. The parameter for this method must be * Base64 encoded * string representing saved control expressions.

You see how they work in the [Save/Load RadFilter expressions](https://demos.telerik.com/aspnet-ajax/filter/examples/saveloadexpressions/defaultcs.aspx) live demo.

>caution All versions of RadFilter prior to Q3 2010 use the **ObjectStateFormatter** by default. Due to the nature of this formatter, it is not possible to deserialize settings, saved with different version of the assembly. From Q3 2010 on, the **BinaryFormatter** is set as default.
>


You could get or change the default formatter using the **SettingsFormatter** property (introduced in Q3 2010).

* **RadFilter.SettingsFormatter.BinaryFormatter** - this is the default formatter for UI versions Q3 2010 and later. The advantage of this formatter is that it will work even if you save the state with one version of the assembly and then restore it with another. The drawback is that the BinaryFormatter does not work in medium trust.

* **RadFilter.SettingsFormatter.ObjectStateFormatter**- the default formatter in UI versions prior to Q3 2010. This formatter works flawlessly in medium trust but it won't deserialize settings, saved with another version of the assembly.

It is possible to use your own formatter by overriding the **GetSettingsFormatter** method. For more information about the formatters, please visit the following link: [IFormatter Interface (MSDN)](https://msdn.microsoft.com/en-us/library/system.runtime.serialization.iformatter%28v=VS.90%29.aspx)

## Troubleshooting Saved State

When a saved state does not appear to load, first identify which persistence API created the state. **SaveSettings** and **LoadSettings** save and restore RadFilter expressions as a Base64-encoded string. The [Persistence Framework]({%slug persistenceframework/getting-started/supported-controls%}) uses **SaveState** and **LoadState** instead, and exposes the RadFilter `FilterExpression` as a persisted property. Do not use the troubleshooting steps for one persistence API with state produced by the other.

Check the following conditions:

* If you create [field editors programmatically]({%slug filter/field-editors/programmatic-creation%}), recreate them on every request in `Page_Init` before loading the saved settings. The field names and data types must be available when RadFilter restores the expressions.

* Treat `FieldName` as the stable identifier used to match an expression to an editor. Recreate the editor with the same `FieldName` and `DataType` before calling `LoadSettings`. Spaces in `FieldName` are not defined as an error or as a supported special case in this article; if a state fails with a null field-name lookup, compare the saved field names with the recreated editors and test a stable identifier without spaces. Use `DisplayName` for the human-readable label.

* If RadFilter filters a RadGrid, verify that the `FilterContainerID` points to the grid and that the grid is configured for filtering. See [RadGrid Filtering with RadFilter]({%slug filter/how-to/radgrid-filtering-with-radfilter%}) for the required integration settings.

* If you restore the state through the Persistence Framework, call the grid's `Rebind()` method after `LoadState()` so the restored settings take effect. This step applies to the Persistence Framework workflow; it is not a replacement for `LoadSettings` when the state was saved directly by RadFilter.

* If the state was created after an upgrade, do not assume that a legacy-state conversion is required. Confirm whether the application uses `LoadSettings`/`SaveSettings` or `LoadState`/`SaveState`, and verify that the saved string is loaded after the RadFilter configuration and any dynamic field editors have been recreated.

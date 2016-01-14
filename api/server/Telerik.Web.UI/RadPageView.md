---
title: Telerik.Web.UI.RadPageView
page_title: Telerik.Web.UI.RadPageView
description: Telerik.Web.UI.RadPageView
---

# Telerik.Web.UI.RadPageView

The RadPageViewclass represents a single page in the
                Telerik.Web.UI.RadMultiPage RadMultiPagecontrol.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadPageView

## Properties

###  ContentUrl `String`

Specifies the URL that will originally be loaded in the
            RadPageView (can be changed on the client).

###  DefaultButton `String`

Gets or sets the identifier for the default button that is contained in the RadPageView control.

#### Remarks
Use the DefaultButton property to indicate which button gets clicked when the RadPageView control has focus and the user presses the ENTER key.

###  Index `Int32`

Gets the zero-based index of the current RadPageView object.

###  MultiPage `RadMultiPage`

Gets the RadMultiPage control which contains the current RadPageView

###  Selected `Boolean`

Gets or sets a value indicating whether the current RadPageView is selected.

#### Remarks
Use the Selected property to select a RadPageView object. There can be only one selected
            	RadPageView at a time within a RadMultiPage control.


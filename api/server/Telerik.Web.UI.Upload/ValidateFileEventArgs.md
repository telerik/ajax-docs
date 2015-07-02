---
title: Telerik.Web.UI.Upload.ValidateFileEventArgs
page_title: Telerik.Web.UI.Upload.ValidateFileEventArgs
description: Telerik.Web.UI.Upload.ValidateFileEventArgs
---

# Telerik.Web.UI.Upload.ValidateFileEventArgs

Provides data for the E:Telerik.Web.UI.RadUpload.ValidatingFile ValidatingFile
                eventof the Telerik.Web.UI.RadUpload RadUploadcontrol.

#### Remarks
A ValidatingFileEventArgs is passed to the
                    E:Telerik.Web.UI.RadUpload.ValidatingFile ValidatingFile eventhandler to
                    provide event data to the handler. The
                    E:Telerik.Web.UI.RadUpload.ValidatingFile ValidatingFile eventevent is raised
                    when validation is performed on the server. This allows you to perform a custom
                    server-side validation routine on a file of a
                    Telerik.Web.UI.RadUpload RadUploadcontrol.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* Telerik.Web.UI.Upload.UploadedFileEventArgs
* Telerik.Web.UI.Upload.ValidateFileEventArgs

## Properties

###  IsValid `Boolean`

Gets or sets whether the value specified by
                UploadedFile property passed
                validation.

#### Remarks
Once your validation routine finishes, use the IsValid
                    property to indicate whether the value specified by the
                    UploadedFile property
                    passed validation. This value determines whether the file from the
                    RadUpload control passed validation.

###  SkipInternalValidation `Boolean`

Gets or sets whether the internal validation should continue validating the file
            specified by the UploadedFile property.

#### Remarks
Once your validation routine finishes, use the SkipInternalValidation
            property to skip the internal validation provided by the RadUpload
            control.

###  UploadedFile `UploadedFile`

Gets the currently processed UploadedFile.


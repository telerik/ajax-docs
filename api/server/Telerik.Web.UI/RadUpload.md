---
title: Telerik.Web.UI.RadUpload
page_title: Telerik.Web.UI.RadUpload
description: Telerik.Web.UI.RadUpload
---

# Telerik.Web.UI.RadUpload

Telerik RadUpload

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadUpload

## Properties

###  Localization `UploadStrings`

Gets the localization.

###  LocalizationPath `UploadStrings`

Gets or sets a value indicating where  will look for its .resx localization files.

###  InputSize `Int32`

Gets or sets the size of the file input field

###  AllowedFileExtensions `String[]`

Gets or sets the allowed file extensions for uploading.

#### Remarks
Set this property to empty array of strings in order to prevent the file
                extension checking.Note that the file extensions must include the dot before the actual
                extension. See the example below.

###  AllowedMimeTypes `String[]`

Gets or sets the allowed MIME types for uploading.

#### Remarks
Set this property to string.Empty in order to prevent the
                mime type checking.

###  ControlObjectsVisibility `ControlObjectsVisibility`

Gets or sets the value indicating which control objects will be displayed.

#### Remarks
ControlObjectVisibility enum members 
                MemberDescriptionNoneOnly the file inputs will be visible.CheckBoxesDisplay checkboxes for selecting a file input.RemoveButtonsDisplay buttons for removing a file input.ClearButtonsDisplay buttons for clearing a file input.AddButtonDisplay button for adding a file input.DeleteSelectedButtonDisplay button for removing the file inputs with checked
                        checkboxes.DefaultCheckBoxes | RemoveButtons | AddButton |
                        DeleteSelectedButtonAllCheckBoxes | RemoveButtons | ClearButtons | AddButton |
                        DeleteSelectedButton

###  EnableFileInputSkinning `Boolean`

Gets or sets the value indicating whether the file input fields skinning will be enabled.

#### Remarks
The <input type=file> DHTML elements are not skinnable by default. If the
            EnableFileInputSkinning is true some browsers can have strange behavior.

###  InitialFileInputsCount `Int32`

Gets or sets the initial count of file input fields, which will appear in RadUpload.

###  InvalidFiles `UploadedFileCollection`

Provides access to the invalid files uploaded by the RadUpload
            instance. This is populated only if a validation was set.

###  Language `String`

Gets or sets the localization language of the RadUpload user interface.

###  Culture `CultureInfo`

Gets or sets the selected culture. Localization strings will be loaded based on this value.

###  MaxFileInputsCount `Int32`

Gets or sets the maximum file input fields that can be added to the control.

#### Remarks
Using this property you can limit the maximum number of file inputs which can be
            added to a RadUpload instance.

###  MaxFileSize `Int32`

Gets or sets the maximum file size allowed for uploading in bytes.

#### Remarks
Set this property to 0 in order to prevent the file size checking.

###  OnClientAdding `String`

Gets or sets the name of the client-side function which will be executed before 
            a new file input is added to a RadUpload instance.

###  OnClientAdded `String`

Gets or sets the name of the client-side function which will be executed after 
            a new file input is added to a RadUpload instance.

###  OnClientDeleting `String`

Gets or sets the name of the client-side function which will be executed before a file input is deleted
            from a RadUpload instance.

#### Remarks
If you want to cancel the deleting of the file input return
            false in the javascript handler.

###  OnClientClearing `String`

Gets or sets the name of the client-side function which will be executed before a file input field is
            cleared in a RadUpload instance using the Clear button.

###  OnClientFileSelected `String`

Gets or sets the name of the client-side function which will be executed when a file input value changed.

###  OnClientDeletingSelected `String`

Gets or sets the name of the client-side function which will be executed before the selected file inputs are removed.

#### Remarks
You can cancel the removing of the file input items by returning
            false in the javascript function.

###  OverwriteExistingFiles `Boolean`

Gets or sets the value indicating whether RadUpload should overwrite existing files having same name in the TargetFolder.

#### Remarks
When set to true, the existing files are overwritten, else no
            action is taken.

###  ReadOnlyFileInputs `Boolean`

Gets or sets a value indicating if the file input fields should be read-only
            (e.g. no typing allowed).

#### Remarks
When users type into the box and the filename is not valid, the form submission
            in Internet Explorer could not proceed or even display a javascript error. This
            behavior can be avoided by setting the ReadOnlyFileInputs property to true.

###  TargetFolder `String`

Gets or sets the virtual path of the folder, where RadUpload will automatically save the valid files after the upload completes.

#### Remarks
When set to string.Empty, the files must be saved manually to the desired location.If both TargetPhysicalFolder property and this property are set, the 
            	TargetPhysicalFolder will override the virtual path provided by TargetFolder.

###  TargetPhysicalFolder `String`

Gets or sets the physical path of the folder, where RadUpload will automatically save the valid files after the upload completes.

#### Remarks
When set to string.Empty, the files must be saved manually to the desired location.If both TargetFolder property and this property are set, the 
            	TargetPhysicalFolder will override the virtual path provided by TargetFolder.

###  UploadedFiles `UploadedFileCollection`

Provides access to the valid files uploaded by the RadUpload
            instance.

#### Remarks
The collection contains only the files uploaded with the particular instance of
            the RadUpload control. If the RadUploadHttpModule is used, the
            uploaded files are removed from the Request.Files collection in order
            to conserve the server's memory. Else the Request.Files contains all uploaded files as
            a HttpPostedFile collection and each RadUpload instance has its own
            uploaded files as UploadedFileCollection.

###  FocusOnLoad `Boolean`

Gets or sets the value indicating whether the first file input field of RadUpload should get
            the focus on itself on load.

###  IsUploadModuleRegistered `Boolean`

Gets a value indicating whether the RadUpload HttpModule is registered in the current web.application

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  IsSkinSet `String`

For internal use.

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render script references to the embedded scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed Scripts files by hand.

###  EnableEmbeddedSkins `String`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.

#### Remarks
If EnableEmbeddedBaseStylesheet is set to false you will have to register the needed control base CSS file by hand.

###  RuntimeSkin `String`

Gets the real skin name for the control user interface. If Skin is not set, returns
            "Default", otherwise returns Skin.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  ClientStateFieldID `String`

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ScriptManager `ScriptManager`

###  RadScriptManager `ScriptManager`

## Methods

###  DescribeClientProperties

#### Returns

`System.Void` 

###  DescribeClientEvents

#### Returns

`System.Void` 

###  OnValidatingFile

Fires the ValidatingFile event.

#### Returns

`System.Boolean` 

###  OnFileExists

Fires the FileExists event.

#### Returns

`System.Void` 

###  AddAttributesToRender

#### Returns

`System.Void` 

###  OnPreRender

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  RegisterScriptControl

Registers the control with the ScriptManager

#### Returns

`System.Void` 

###  RegisterCssReferences

Registers the CSS references

#### Returns

`System.Void` 

###  LoadClientState

Loads the client state data

#### Parameters

#### clientState `System.Collections.Generic.Dictionary{System.String,System.Object}`

#### Returns

`System.Void` 

###  SaveClientState

Saves the client state data

#### Returns

`System.String` 

###  RenderClientStateField

#### Returns

`System.Void` 

###  RenderBeginTag

#### Returns

`System.Void` 

###  RenderEndTag

#### Returns

`System.Void` 

###  Render

#### Returns

`System.Void` 

###  RenderScriptsNoScriptManager

#### Returns

`System.Void` 

###  RenderDescriptorsNoScriptManager

#### Returns

`System.Void` 

###  RenderContents

#### Returns

`System.Void` 

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  DescribeComponent

#### Returns

`System.Void` 

###  DescribeProperty

#### Returns

`System.Void` 

###  DescribeIDReferenceProperty

#### Returns

`System.Void` 

###  DescribeEvent

#### Returns

`System.Void` 

###  GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 

###  LoadPostData

Executed when post data is loaded from the request

#### Parameters

#### postDataKey `System.String`

#### postCollection `System.Collections.Specialized.NameValueCollection`

#### Returns

`System.Boolean` 

###  RaisePostDataChangedEvent

Executed when post data changes should invoke a changed event

#### Returns

`System.Void` 

###  GetViewStateValue

#### Returns

`Telerik.Web.UI.T` 


---
title: Telerik.Web.UI.RadAsyncUpload
page_title: Telerik.Web.UI.RadAsyncUpload
description: Telerik.Web.UI.RadAsyncUpload
---

# Telerik.Web.UI.RadAsyncUpload

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadAsyncUpload

## Properties

###  AllowedFileExtensions `String[]`

Gets or sets the allowed file extensions for uploading.

#### Remarks
Set this property to empty array of strings in order to prevent the file
                extension checking.

###  AllowedMimeTypes `String[]`

Gets or sets the allowed MIME types for uploading.

#### Remarks
Set this property to string.Empty in order to prevent the
                mime type checking.

###  AutoAddFileInputs `Boolean`

Specifies whether a new File Input should be automatically added upon selecting a file to upload.

###  ChunkSize `Int32`

Gets or sets the size of the uploading chunks in bytes.

#### Remarks
When FileApi upload module is used the selected files are uploading on chunks and the property set theirs size.

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ControlObjectsVisibility `ControlObjectsVisibility`

Gets or sets the control objects visibility.

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  Culture `CultureInfo`

Gets or sets the selected culture. Localization strings will be loaded based on this value.

###  DisableChunkUpload `Boolean`

Gets or sets whether the upload will be in chunks (2MB each) or the file will be uploaded with one request.

###  DisablePlugins `Boolean`

Gets or sets the a value to control whether
            RadAsyncUpload will use 3rd party plug-ins like
            Flash/Silverlight or will stick to the native modules only (IFrame, File API).

###  DropZones `String[]`

Gets or sets the drop zones for upload.

#### Remarks
The values of the property should be a valid jQuery selectors. E.g. class name or Id of html element.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  EnableCustomValidation `Boolean`

Gets or sets whether to fire the FileUploaded event and process the files if the Page is valid, after the server side validation events.

#### Remarks
The control will fires its event and process the files if the Page is valid, after the server side validation events. If the Page is not valid the uploaded files are persisted between postbacks.

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.

#### Remarks
If EnableEmbeddedBaseStylesheet is set to false you will have to register the needed control base CSS file by hand.

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render script references to the embedded scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed Scripts files by hand.

###  EnableEmbeddedSkins `String`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.

###  EnableFileInputSkinning `Boolean`

Gets or sets the value indicating whether the file input fields skinning will be enabled.

#### Remarks
The <input type=file> DHTML elements are not skinnable by default. If the
            EnableFileInputSkinning is true some browsers can have strange behavior.

###  EnableHandlerDetection `Boolean`

Gets or sets a value indicating if RadAsyncUpload should check the Telerik.Web.UI.WebResource
            handler existence in the application configuration file.

#### Remarks
The check is not performed when custom handler is used.

###  EnableInlineProgress `Boolean`

Specifies whether RadAsyncUpload displays an inline progress next to each file being uploaded.

#### Remarks
The InlineProgress is turned on by default. If you have RadProgressArea on the page both the area and the inline progress
            are going to be shown. In order to suppress the InlineProgress, consider setting the property to false.

###  EnablePermissionsCheck `Boolean`

Specifies whether RadAsyncUpload performs check for write permissions upon load

#### Remarks
The permissions check is turned on by default. You should disable it if you plan to upload
            the files directly to the handler without using the temporary folder. If you still want to use temporary folder
            make sure that you have set the TemporyFilesFolder property to a folder that has write permissions for the

###  FileFilters `FileFilterCollection`

Gets the collection of FileFilters objects
            to be applied to the OpenFileDialog

###  HideFileInput `Boolean`

Gets or sets whether to render the file input.

#### Remarks
When HideFileInput is set to True, only the select button will be rendered.

###  HttpHandlerUrl `String`

Specifies the URL of the HTTPHandler from which the image will be served

###  InitialFileInputsCount `Int32`

Gets or sets the initial count of file input fields, which will appear in RadAsyncUpload.

###  InputSize `Int32`

Gets or sets the size of the file input field

###  IsSkinSet `String`

For internal use.

###  Localization `AsyncUploadStrings`

Gets the localization.

###  LocalizationPath `AsyncUploadStrings`

Gets or sets a value indicating where RadAsyncUpload will look for its .resx localization files.

###  ManualUpload `Boolean`

Gets or sets whether the upload will start automatically after the files are selected.

###  MaxFileInputsCount `Int32`

Gets or sets the maximum file input fields that can be added to the control.

#### Remarks
Using this property you can limit the maximum number of file inputs which can be
            added to a RadAsyncUpload instance. MaxFileInputs count is only applicable when 
            MultipleFileSelection is set to Disabled

###  MaxFileSize `Int32`

Gets or sets the maximum file size allowed for uploading in bytes.

#### Remarks
Set this property to 0 in order to prevent the file size checking.

###  MultipleFileSelection `MultipleFileSelection`

Specifies whether RadAsyncUpload allows selecting multiple files in the File Selection dialog.

#### Remarks
Setting the MultipleFileSelection property to Automatic means that RadAsyncUpload will check the client's
            browser capabilities and if there is support for multiple file selection he will enable it. If there is no such support, the
            selection type would be still single.

###  OnClientAdded `String`

Gets or sets the name of the client-side function which will be executed after 
            a new file input is added to a RadAsyncUpload instance. The event cannot be cancelled

###  OnClientAdding `String`

Gets or sets the name of the client-side function which will be executed before 
            a new file input is added to a RadAsyncUpload instance. This event can be cancelled.

###  OnClientFileDropped `String`

Gets or sets the name of the client-side function which will be executed after a file has been dropped.

###  OnClientFileSelected `String`

Gets or sets the name of the client-side function which will be executed after a file has been selected.

###  OnClientFilesSelected `String`

Gets or sets the name of the client-side function which will be executed after files have been selected.
            This event can be cancelled.

###  OnClientFilesUploaded `String`

Gets or sets the name of the client-side function which will be executed after all 
            selected files have been uploaded

###  OnClientFileUploaded `String`

Gets or sets the name of the client-side function which will be executed when a file upload finishes successfully.k

#### Remarks
If specified, the OnClientFileUploaded client-side event
                is called when file is uploaded successfully.
                sender, the async upload client object;eventArgs with one property:
            			get_fileName(), the name of the file that was uploaded.This event cannot be cancelled.

###  OnClientFileUploadFailed `String`

Gets or sets the name of the client-side function which will be executed when a file upload ends unsuccessfully.

#### Remarks
If specified, the OnClientFileUploadFailed client-side event
                is called when a file fails to upload. One can set the set_handled property to false which
                will force the async upload to throw an exception the error message to the JavaScript console. 
                sender, the async upload client object;eventArgs with three properties:
            			get_message(), the error message containing the reason for the failed uploadget_handled(), gets a value indicating whether the developer will handle the errorset_handled(), sets a value indicating whether the developer will handle the errorThis event cannot be cancelled.

###  OnClientFileUploading `String`

Gets or sets the name of the client-side function which will be executed when a file upload starts.

#### Remarks
If specified, the OnClientFileUploading client-side event
                is called whenever a file upload commences.
                sender, the async upload client object;eventArgs with one property:
            			get_fileName(), the name of the file being uploaded.This event cannot be cancelled.

###  OnClientFileUploadRemoved `String`

Gets or sets the name of the client-side function which will be executed after a file input has been deleted
            from a RadAsyncUpload instance.

###  OnClientFileUploadRemoving `String`

Gets or sets the name of the client-side function which will be executed before a file input is deleted
            from a RadAsyncUpload instance. The event can be cancelled.

#### Remarks
If you want to cancel the deleting of the file input return
            false in the javascript handler.

###  OnClientProgressUpdating `String`

Gets or sets the client progress updating.

###  OnClientValidationFailed `String`

Gets or sets the name of the client-side function which will be executed if the selected file has invalid extension

#### Remarks
If specified, the onClientValidationFailed client-side event
                is called when a file has invalid extension or its size exceeds the maximum allowed size
                sender, the async upload client object;eventArgs with two properties:
            			get_fileName(), the name of the file that failed to upload.get_fileInputField(), the file input field DOM element.This event cannot be cancelled.

###  PersistConfiguration `Boolean`

Gets or sets whether the upload configuration to be persisted into ControlState(if the upload configuration is different than null).

###  PostbackTriggers `String[]`

Comma separated values - controls' ids. If the property is set the client state is updated in case some of the enumerated controls, triggered a postback.

###  ProgressHandlerUrl `String`

Gets or sets the URL of the progress handler that takes care of the progress monitoring when the IFrame module is used.

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  RuntimeSkin `String`

Gets the real skin name for the control user interface. If Skin is not set, returns
            "Default", otherwise returns Skin.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  TargetFolder `String`

Gets or sets the virtual path of the folder, where RadUpload will automatically save the valid files after the upload completes.

#### Remarks
When set to string.Empty, the files must be saved manually to the desired location.

###  TemporaryFileExpiration `TimeSpan`

Sets how long temporary files should be kept before automatically deleting them.
            The property accepts TimeSpan values. The default value is 4 hours. More information regarding the TimeSpan structure can 
            be found here - http://www.dotnetperls.com/timespan

#### Remarks
Note that when a postback occurs temporary files are either saved as permanent or removed.
            The expiration time is used only in cases when files are uploaded asynchronously, but a subsequent postback does not occur.

###  TemporaryFolder `String`

Path to a folder where RadAsyncUpload should save files temporarily until a postback occurs.

#### Remarks
The ASP.NET process needs to have Write permissions for the specified folder. Also note that in Medium Trust scenarios
            this should point to a subfolder of the Application Path.
            Defaults to App_Data\RadUploadTemp subfolder of the Application Path.

###  UploadConfiguration `IAsyncUploadConfiguration`

Sets upload configuration that has additional information. The generic object can be obtained using the CreateUploadConfiguration <T> method, 
            where T is custom class that implements IAsyncUploadConfiguration. The custom class can contain any sort of custom data.

###  UploadedFiles `UploadedFileCollection`

Provides access to the valid files uploaded by the RadAsyncUpload
            instance.

###  UploadedFilesRendering `UploadedFilesRendering`

Specify where the uploaded files should be positioned, below or above the current file input.

#### Remarks
Setting the UploadedFilesRendering property to BelowFileInput means that RadAsyncUpload will render the uploaded files below the 
            current file input. Otherwise the uploaded files will be rendered above the file input.

###  UploadRequestIdentifier `String`

Gets or sets the upload request identifier.

#### Remarks
If the value is IsNullOrEmpty,  
            a NewGuid value is assigned.

###  UseApplicationPoolImpersonation `Boolean`

Gets or sets whether to use application pool impersonation.

## Methods

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  CreateDefaultUploadConfiguration

Creates an object of type T (that implements IAsyncUploadConfiguration)
            and populates all properties specified in the interface from this RadAsyncUpload instance.
            The user is then free to populate any additional properties.

#### Returns

`Telerik.Web.UI.T` An object of type T populated with all properties specified in IAsyncUploadConfiguration

###  GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 

###  LoadClientState

Loads the client state data

#### Parameters

#### clientState `System.Collections.Generic.Dictionary{System.String,System.Object}`

#### Returns

`System.Void` 

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

###  RegisterCssReferences

Registers the CSS references

#### Returns

`System.Void` 

###  RegisterScriptControl

Registers the control with the ScriptManager

#### Returns

`System.Void` 

###  SaveClientState

Saves the client state data

#### Returns

`System.String` 


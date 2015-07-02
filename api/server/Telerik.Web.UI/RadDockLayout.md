---
title: Telerik.Web.UI.RadDockLayout
page_title: Telerik.Web.UI.RadDockLayout
description: Telerik.Web.UI.RadDockLayout
---

# Telerik.Web.UI.RadDockLayout

Workflow:
            1). OnInit - ensure that the framework will call TrackViewState, LoadViewState and SaveViewState.
            	We expect that all child docks will be created here.
            2). TrackViewState - raise LoadDockLayout event in order to let the developer to supply 
            	the initial parents of the registered docks, because the docks could be created with 
            	different parents than needed.
            2a). LoadViewState - loads and applies the dock parents from the ViewState in order to persist
            	the dock positions between the page postbacks.
            3). LoadPostData - returns true to ensure that RaisePostDataChangedEvent()
            3a). Dock_DockZoneChanged - this event is raised by each dock in its LoadPostData method.
            	We handle this event and store the pair UniqueName/NewDockZoneID in the _clientPositions
            	Dictionary. This Dictionary will be used in #4.
            4). RaisePostDataChangedEvent - sets the parents of the registered docks according their
            	positions, set on the client. These positions are stored in the _clientPositions Dictionary.
            5). OnLoad, other events, such as Click, Command, etc. If you create a dock here it will be
            	rendered on the page, but if it is not recreated in the next OnInit, it will not persist
            	its position, set on the client!
            6). SaveViewState - stores the dock parents in the ViewState in order to persist their positions
            	between the page postbacks. 
            7). Page_SaveStateComplete - raises the SaveDockLayout event to let the developer to save
            	the state in a database or other storage medium.
            Note: The dock parents will be stored in the ViewState if StoreLayoutInViewState is set 
            to true (default). Otherwise the developer should take care of the dock positions when the page
            is posted back.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* Telerik.Web.UI.RadDockLayout

## Properties

###  RegisteredDocks `ReadOnlyCollection`1`

Returns all registered docks with this RadDockLayout control.

###  RegisteredZones `ReadOnlyCollection`1`

Returns all registered zones with this RadDockLayout control.

###  StoredPositions `Dictionary`2`

This is the container where we will store the dock positions set on the client.

###  StoredIndices `Dictionary`2`

This is the container where we will store the dock indices set on the client.

###  StoreLayoutInViewState `Boolean`

By default RadDockLayout will store the positions of its inner docks in
            the ViewState. If you want to store the positions in other storage medium
            such as a database, or the Session, set this property to false. Setting this 
            property to false will also minimize the ViewState usage.

###  Skin `String`

Gets or sets the skin name for the child controls' user interface.

#### Remarks
If this property is set, RadDockLayout will set the Skin and EnableEmbeddedSkins properties
            of each child RadDock and RadDockZone, unless their Skin property is not explicitly set.

###  IsSkinSet `String`

For internal use.

###  EnableEmbeddedSkins `String`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.
            
            If the Skin property is set, RadDockLayout will set the Skin and EnableEmbeddedSkins properties
            of each child RadDock and RadDockZone, unless their Skin property is not explicitly set.

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.

#### Remarks
If EnableEmbeddedBaseStylesheet is set to false you will have to register the needed control base CSS file by hand.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests.

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  StorageProvider `IStateStorageProvider`

Gets or sets the StateStorageProvider instance that will be used for the built-in state storing.

###  EnableLayoutPersistence `Boolean`

Specifies wheter the built-in state storing should be enabled.

###  LayoutPersistenceRepositoryType `DockLayoutPersistenceRepository`

Gets or sets the type of the data repository to be used for storing the state.

#### Remarks
The corresponding StorageProvider will be used for the state storing functionality.

###  LayoutRepositoryID `String`

Gets or sets the key identifier of the stored RadDocks' states.

#### Remarks
The corresponding StorageProvider will be used for the state storing functionality.

###  RenderingMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

## Methods

###  OnInit

overridden. Handles the Init event. Inherited from Control.

#### Returns

`System.Void` 

###  Page_Init

#### Returns

`System.Void` 

###  RadDockLayout_SaveDockLayout

Handler for LoadDockLayout event used for the built-in state storing

#### Returns

`System.Void` 

###  RadDockLayout_LoadDockLayout

Handler for LoadDockLayout event used for the built-in state storing

#### Returns

`System.Void` 

###  GetSerializer

Returns the JavaScriptSerializer used for storing the state

#### Returns

`System.Web.Script.Serialization.JavaScriptSerializer` JavaScriptSerisalizer instance with registered Unit converters

###  Page_InitComplete

The docks must be already created. We will apply their order
            and if there is a state information, we will apply it.

#### Returns

`System.Void` 

###  LoadViewState

We will apply the dock positions saved in the ViewState here.

#### Returns

`System.Void` 

###  OnPreRender

Overridden. Raises the PreRender event

#### Returns

`System.Void` 

###  RenderChildren

#### Returns

`System.Void` 

###  SaveViewState

We will loop through all registered docks and will retrieve their
            positions and state. Those positions will be saved in the ViewState
            if StoreLayoutInViewState is true.

#### Returns

`System.Object` base.SaveViewState()

###  SetRegisteredDockParents

Reorders the docks in the control tree, according the supplied parameters.

#### Remarks
This method will check for uniqueness of the UniqueNames of the registered docks. If
            there are two docks with equal unique names an exception will be thrown.

#### Parameters

#### parents `System.Collections.Generic.Dictionary{System.String,System.String}`

A Dictionary, containing UniqueName/DockZoneID pairs.

#### indices `System.Collections.Generic.Dictionary{System.String,System.Int32}`

A Dictionary, containing UniqueName/Index pairs.

#### Returns

`System.Void` 

###  SetDockParent

Docks the dock to a zone with ClientID = newParentClientID.

#### Parameters

#### dock `Telerik.Web.UI.RadDock`

The dock which should be docked.

#### newParentClientID `System.String`

The ClientID of the new parent.

#### Returns

`System.Void` 

###  GetRegisteredDocksParents

Cycles through all registered docks and retrieves their parents. The Dictionary
            returned by this method could be passed to SetRegisteredDockParents().

#### Returns

`System.Collections.Generic.Dictionary`2` A dictionary, containing UniqueName/DockZoneID pairs.

###  GetRegisteredDocksIndices

Cycles through all registered docks and retrieves their indices. The Dictionary
            returned by this method could be passed to SetRegisteredDockParents().

#### Returns

`System.Collections.Generic.Dictionary`2` A dictionary, containing UniqueName/Index pairs.

###  GetRegisteredDocksState

Cycles through all registered docks and retrieves their state, depending
            on the omitClosedDocks parameter and the value of the Closed property of 
            each RadDock control. The List returned by this method could be used to 
            recreate the docks when the user visits the page again.

#### Parameters

#### omitClosedDocks `System.Boolean`

A bool value that specifies whether the closed RadDock controls should be excluded from the state.

#### Returns

`System.Collections.Generic.List`1` A List, containing UniqueName/DockState pairs.

###  GetRegisteredDocksState

Cycles through all registered docks and retrieves their state. The List
            returned by this method could be used to recreate the docks when the user
            visits the page again.

#### Returns

`System.Collections.Generic.List`1` A List, containing UniqueName/DockState pairs.

###  OnLoadDockLayout

Raises the LoadDockLayout event.

#### Parameters

#### e `Telerik.Web.UI.DockLayoutEventArgs`

A DockLayoutEventArgs that contains the event data.

#### Returns

`System.Void` 

###  OnSaveDockLayout

Raises the SaveDockLayout event.

#### Parameters

#### e `Telerik.Web.UI.DockLayoutEventArgs`

A DockLayoutEventArgs that contains the event data.

#### Returns

`System.Void` 

###  EnsureUniqueName

Ensures that the dock has unique UniqueName or ID properties to its
            RadDockLayout. If the UniqueName or the ID are not unique, an
            exception is thrown.

#### Parameters

#### dock `Telerik.Web.UI.RadDock`

A RadDock object.

#### uniqueNames `System.Collections.Generic.List{System.String}`

A list of UniqueNames of the RadDock controls in RadDockLayout.

#### Returns

`System.String` A string, containing the UniqueName property of the dock, or its 
            ID if the UniqueName property is not set. Got from the RadDock.GetUniqueName().

###  Telerik.Web.UI.IDockLayout.RegisterDock

Each dock will use this method in its OnInit event to register
            with the RadDockLayout. This is needed in order for the layout to 
            be able to manage the dock position set on the client.

#### Parameters

#### dock `Telerik.Web.UI.RadDock`

The RadDock object that will be registered.

#### Returns

`System.Void` 

###  Telerik.Web.UI.IDockLayout.RegisterDockZone

Each zone will use this method in its OnInit event to register
            with the RadDockLayout. This is needed in order the layout to 
            be able to manage the dock positions, set on the client.

#### Parameters

#### zone `Telerik.Web.UI.RadDockZone`

The RadDockZone object that will be registered.

#### Returns

`System.Void` 

###  Telerik.Web.UI.IDockLayout.SetDockParent

Docks the dock to a zone with ClientID = newParentClientID.

#### Parameters

#### dock `Telerik.Web.UI.RadDock`

The dock which should be docked.

#### newParentClientID `System.String`

The ClientID of the new parent.

#### Returns

`System.Void` 

###  Telerik.Web.UI.IDockLayout.UnRegisterDock

Each dock will use this method in its OnUnload event to unregister
            with the IDockLayout. This is needed in order the layout to 
            be able to manage the dock state properly.

#### Parameters

#### dock `Telerik.Web.UI.RadDock`

The RadDock object that will be unregistered.

#### Returns

`System.Void` 

###  Telerik.Web.UI.IDockLayout.UnRegisterDockZone

Each zone will use this method in its OnUnload event to unregister
            with the IDockLayout.

#### Parameters

#### zone `Telerik.Web.UI.RadDockZone`

The RadDockZone object that will be unregistered.

#### Returns

`System.Void` 

###  GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 


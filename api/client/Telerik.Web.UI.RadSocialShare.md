---
title: Telerik.Web.UI.RadSocialShare
page_title: Client-side API Reference
description: Client-side API Reference
slug: Telerik.Web.UI.RadSocialShare
---

# Telerik.Web.UI.RadSocialShare : Telerik.Web.UI.RadWebControl 

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadSocialShare]({%slug Telerik.Web.UI.RadSocialShare%})*

## Methods

### get_gaID

Returns the web property ID set for Google Analytics support.

#### Parameters

#### Returns

`String` 

### set_hideIframesOnDialogMove

Sets a value which determines whether IFRAMEs are hidden while email or compact popup is being moved.

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_stringsToShare

Dynamically sets new values for url and title to share.

#### Parameters

##### url `String`

##### title `String`

#### Returns

`None` 

### get_fbAppId

Returns the Facebook Application ID.

#### Parameters

#### Returns

`String` 

### get_compactPopup

Returns the compact popup object.

#### Parameters

#### Returns

`Telerik.Web.UI.RadWindow` 

### get_trackerId

Returns the Id of the tracker for the RadSocialShare instance.

#### Parameters

#### Returns

`String` 

### get_hideIframesOnDialogMove

Returns a value which determines whether IFRAMEs are hidden while email or compact popup is being moved.

#### Parameters

#### Returns

`Boolean` 

### set_fbAppId

Sets the Facebook Application ID.

#### Parameters

##### value `String`

#### Returns

`None` 

### toggleCompactPopup

Toggles the visibility of the compact popup.

#### Parameters

#### Returns

`None` 

### get_mainButtons

Returns the array of main buttons.

#### Parameters

#### Returns

`Array` 

### toggleEmailPopup

Toggles the visibility of the email popup.

#### Parameters

#### Returns

`None` 

### get_emailPopup

Returns the email popup object.

#### Parameters

#### Returns

`Telerik.Web.UI.RadWindow` 

### get_urlToShare

Returns the url to share value.

#### Parameters

#### Returns

`String` 

### get_titleToShare

Returns the title to share value.

#### Parameters

#### Returns

`String` 

### get_compactButtons

Returns the array of compact buttons.

#### Parameters

#### Returns

`Array` 

### set_gaID

Sets the web property ID set for Google Analytics support.

#### Parameters

##### value `String`

#### Returns

`None` 

### get_gaEnabled

Returns value which shows whether Google Analytics is enabled.

#### Parameters

#### Returns

`Boolean` 

## Events

### clicking

The event fires when one of the RadSocialButtons is clicked. The event is raised before the clicked event and it can be canceled. 

#### Event Data

#####  sender `Telerik.Web.UI.RadSocialShare`

The instance of the RadSocialShare that fired the event.

##### args `Telerik.Web.UI.SocialDialogCancelEventArgs`

The event arguments. 

### clicked

The event fires when one of the RadSocialButtons is clicked. The event is subsequent to the clicking event and it cannot be canceled. 

#### Event Data

#####  sender `Telerik.Web.UI.RadSocialShare`

The instance of the RadSocialShare that fired the event.

##### args `Telerik.Web.UI.SocialDialogEventArgs`

The event arguments. 

### fbLike

The event fires when the Facebook Like button is clicked. 

#### Event Data

#####  sender `Telerik.Web.UI.RadSocialShare`

The instance of the RadSocialShare that fired the event.

##### args `Telerik.Web.UI.SocialShareEventArgs`

The event arguments.

### fbUnLike

The event fires when the Facebook UnLike button is clicked.

#### Event Data

#####  sender `Telerik.Web.UI.RadSocialShare`

The instance of the RadSocialShare that fired the event.

##### args `Telerik.Web.UI.SocialShareEventArgs`

The event arguments.

### fbSend

The event fires when the Facebook Send button is clicked.

#### Event Data

#####  sender `Telerik.Web.UI.RadSocialShare`

The instance of the RadSocialShare that fired the event.

##### args `Telerik.Web.UI.SocialShareEventArgs`

The event arguments.

### tweet

The event fires when the Tweet button is clicked in the sharing popup (i.e. after the actual tweet is posted).

#### Event Data

#####  sender `Telerik.Web.UI.RadSocialShare`

The instance of the RadSocialShare that fired the event.

##### args `Telerik.Web.UI.SocialShareEventArgs`

The event arguments.

### onPlusone

Fires when the GooglePlus button is clicked for approval.

#### Event Data

#####  sender `Telerik.Web.UI.RadSocialShare`

The instance of the RadSocialShare that fired the event.

##### args `Telerik.Web.UI.SocialShareEventArgs`

The event arguments.

### offPlusone

Fires when the GooglePlus button is clicked for disapproval.

#### Event Data

#####  sender `Telerik.Web.UI.RadSocialShare`

The instance of the RadSocialShare that fired the event.

##### args `Telerik.Web.UI.SocialShareEventArgs`

The event arguments.

### linkedInShare

Fires when the LinkedInShare button is clicked for sharing the page in LinedIn. 

#### Event Data

#####  sender `Telerik.Web.UI.RadSocialShare`

The instance of the RadSocialShare that fired the event.

##### args `Telerik.Web.UI.SocialShareEventArgs`

The event arguments.
---
title: Telerik.Web.UI.RadTagCloud
page_title: Telerik.Web.UI.RadTagCloud
description: Telerik.Web.UI.RadTagCloud
---

# Telerik.Web.UI.RadTagCloud

Telerik RadTagCloud is a UI component for ASP.NET AJAX applications, which displays a panel (cloud) of commonly used or related keywords.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* Telerik.Web.UI.RadDataBoundControl : IControl, IControlResolver, IFeatureGroup, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadTagCloud : INamingContainer, IPostBackEventHandler

## Properties

###  _shouldRetrieveTextFromSource `Boolean`

Gets or sets a value indicating whether the GenerateTagsFromText method should be called.

###  AppendClientDataBoundItems `Boolean`

Specifies whether the TagCloud items created on the client-side should be cleared before data binding.

###  AppendDataBoundItems `Boolean`

Gets or sets a bool value that indicates whether tagCloud items are cleared before data binding.

###  AutoPostBack `Boolean`

Gets or sets a value indicating whether a postback to the server automatically occurs when the user interacts with the control.

#### Remarks
Setting this property to true will make Telerik RadTagCloud postback to the server 
            on item click.

###  BaseSiteUrl `String`

Gets the web site's base url.

###  ClientDataSourceID `String`

Gets or sets ID of ClientDataSource control that is used for client side binding

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  DataNavigateUrlField `String`

Gets or sets the field of the data source that provides the URL (NavigateUrl) content of the TagCloud items.

###  DataNavigateUrlFormatString `String`

Gets or sets the formatting string used to control how data bound to the NavigateUrl property of the TagCloud item is displayed.

###  DataTextField `String`

Gets or sets the field of the data source that provides the text content of the TagCloud items.

###  DataTextFormatString `String`

Gets or sets the formatting string used to control how data bound to the Text property of the TagCloud item is displayed.

###  DataToolTipField `String`

Gets or sets the field of the data source that provides the ToolTip content of the TagCloud items.

###  DataToolTipFormatString `String`

Gets or sets the formatting string used to control how data bound to the ToolTip property of the TagCloud item is displayed.

###  DataValueField `String`

Gets or sets the field of the data source that provides the value content of the TagCloud items.

###  DataWeightField `String`

Gets or sets the field of the data source that provides the weight of the TagCloud items.

###  Distribution `TagCloudDistribution`

Gets or sets a value indicating how the font-size will be distributed among the different words.
            There is Linear and Logarithmic Distribution. 
            (Use Telerik.Web.UI.TagCloudDistribution.Linear or Telerik.Web.UI.TagCloudDistribution.Logarithmic)

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

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

###  IsSkinSet `String`

For internal use.

###  Items `RadTagCloudItemCollection`

Gets the collection of all TagCloud items currently present in the TagCloud.

###  ListOfSortedItems `SortedList`2`

Gets or sets a SortedList of items, which is used to more efficently sort the items by weight. 
            The list is then used to calculate the MaxNumberOfItems, when TakeTopWeightedItems is specified to true.

###  MaxColor `Color`

Gets or sets the fore color to the most important (frequent) item.

###  MaxFontSize `Unit`

Gets or sets the font-size to the most important (frequent) item.

###  MaximalWeight `Double`

Holds the maximal Weight of all the TagCloud items.
            (Usually, this is the most frequent word.)

###  MaxNumberOfItems `RadTagCloudItemCollection`

Gets or sets the number of visible items in the cloud.

#### Remarks
The default value is 0, which means the items will not be filtered.

###  MinColor `Color`

Gets or sets the fore color to the least important (frequent) item.

###  MinFontSize `Unit`

Gets or sets the font-size to the least important (frequent) item.

###  MinimalWeight `Double`

Holds the minimal Weight of all the TagCloud items.
            (Usually, this is the least frequent word.)

###  MinimalWeightAllowed `Double`

Gets or sets the minimal weight a TagCloud item could have. 
            If the weight of the item is less than this value, the keyword will not appear in the cloud.

#### Remarks
The default value is 0.0, which means the items will not be filtered.

###  ODataDataSourceID `String`

Gets or sets the ODataDataSource used for data binding.

###  OnClientDataBound `String`

Gets or sets the name of the JavaScript function that will be called when the Rotator is databound on the client-side.

###  OnClientItemClicked `String`

The name of the javascript function called after an item is clicked.

###  OnClientItemClicking `String`

The name of the javascript function called when an item is clicked.

###  OnClientItemDataBound `String`

Gets or sets the name of the JavaScript function that will be called when an item is databound on the client-side.

###  OnClientItemsRequested `String`

Gets or sets a value indicating the client-side event handler that is called when
            the RadTagCloud items were just populated from web service.

###  OnClientItemsRequestFailed `String`

Gets or sets a value indicating the client-side event handler that is called when
            the operation for populating the RadTagCloud when loading has failed.

###  OnClientItemsRequesting `String`

Gets or sets a value indicating the client-side event handler that is called when
            the RadTagCloud items are about to be populated from web service. The event is cancellable

###  OnClientLoad `String`

The name of the javascript function when the control loads.

###  PostBackUrl `String`

The URL to post to when an item is clicked.

###  PunctuationCharacters `String`

Gets or sets the punctuation characters that will not be included in the TagCloud, when generated from text source.
            When none are specified, the Char.IsPunctuation(Char c) method is used to check whether a character is punctuation mark.
            The property should be used in conjuction with the following properties: Text.

###  PunctuationCharactersValid `String`

Gets or sets the punctuation characters that will be considered valid (i.e. they should be considered as a character of the word),
            if they appear between alphanumeric characters.
            For example the following words are valid, although they have punctuation characters: ASP.NET, web-site, telerik.com, web.config

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  RenderItemWeight `Boolean`

Gets or sets a bool value indicating whether the item weight will be rendered. It is rendered right next to the item's text.

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css. If the set value is Auto use ResolvedRenderMode to receive the actual RenderMode
            with respect to the user angent of the current request.

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

###  Sorting `TagCloudSorting`

Gets or sets a value indicating how the TagCloud items will be sorted.
            Possible values are alphabetic and weighted sorting in ascending/descending order.

###  TakeTopWeightedItems `RadTagCloudItemCollection`

Must be used with MaxNumberOfItems property.
            Gets or sets a bool value indicating whether the [MaxNumberOfItems] visible items will be the ones with the biggest weight, 
            or the ones that occur first in the DataSource. The default value is false.

###  Target `String`

Gets or sets the target window or frame to display the new content when the TagCloud item is clicked.

###  Text `String`

Gets or sets text from which a weighted cloud will be generated. Most frequent words are more important.

###  TextFile `String`

Gets or sets the text (.TXT) file from which text will be retrieved to generate tags.

###  TextUrl `String`

Gets or sets the URL from which text will be retrieved to generate tags.

###  WebServiceSettings `WebServiceSettings`

Gets the settings for the web service used to populate items

#### Remarks
Use the WebServiceSettings property to configure the web
            		service used to populate items on demand.
            		You must specify both Path and
                    Method
            		to fully describe the service.
                
            		In order to use the integrated support, the web service should have the following signature:
            		
            		
            		[ScriptService]
            		public class WebServiceName : WebService
            		{
            			[WebMethod]
            			public TagCloudDataItem[] WebServiceMethodName(int itemIndex, int itemCount)
            			{
            				List<TagCloudDataItem> result = new List<TagCloudDataItem>();
            				TagCloudDataItem item; 
            				for (int i = 0; i < itemCount; i++)
            				{
            					item = new RadTagCloudItemData();
            					item.accessKey = "";
            					item.navigateUrl = "";
            					item.tabIndex = "";
            					item.text = "";
            					item.toolTip = "";
            					item.value = "";
            					item.weight = 0;
            					result.Add(item);
            				}
            				return result.ToArray();
            			}
            		}

###  WordsToExclude `String[]`

Gets or sets the array of words that will be excluded from the TagCloud, when the cloud is generated from a text source.

## Methods

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  BindToEnumerableData

Binds the TagCloud to a IEnumerable data source

#### Parameters

#### dataSource `System.Collections.IEnumerable`

IEnumerable data source

#### Returns

`System.Void` 

###  CalculateColor

Calculates the color of a TagCloud item using Logarithmic or Linear distribution.
            The (fore) color is calculated based on the weight of the certain item.

#### Parameters

#### coefficient `System.Double`

The Logarithmic or Linear coefficient used for the calculations.

#### Returns

`System.Drawing.Color` The calculated color of the TagCloud item.

###  CalculateFontSize

Calculates the font size of a TagCloud item using Logarithmic or Linear distribution. 
            The font-size is calculated based on the weight of the item.

#### Parameters

#### coefficient `System.Double`

The Logarithmic or Linear coefficient used for the calculations.

#### Returns

`System.Web.UI.WebControls.Unit` The calculated font size of the TagCloud item.

###  CalculateImportance

Finds the least and most important item (i.e. the item with max and min occurance).

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  CreateWordMap

Returns a dictionary of <string,int> that represents the frequency of a given word in a text.

#### Parameters

#### text `System.String`

The text from which word map (dictionary will be created.

#### Returns

`System.Collections.Generic.Dictionary`2` The dictionary containing the word and the number of times it occurs in the text.

###  DescribeRenderingMode

Should be  used by inheritors

#### Returns

`System.Void` 

###  ExcludeWord

Checks whether a word should be excluded from a given text.

#### Parameters

#### word `System.String`

The word to check.

#### wordsToEscape `System.String`

The list of words that should be excluded from a text.

#### Returns

`System.Boolean` The bool value that indicates whether the word is excluded or not.

###  GenerateTagsFromText

Populates the Items collection of the current TagCloud, from a provided text.
            Every word is weighted based on its occurence in the text.

#### Parameters

#### text `System.String`

The text from which a weighted cloud will be generated.

#### Returns

`System.Void` 

###  GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 

###  GetItemColor

Gets the fore color of the TagCloud item based on the ForeColor, MinColor and MaxColor properties.

#### Parameters

#### coefficient `System.Double`

The coefficient needed to calculate the fore color of the item.

#### Returns

`System.Drawing.Color` The fore color of the item.

###  GetLinearCoefficient

Calculates the coefficient when Linear distribution is used.

#### Parameters

#### item `Telerik.Web.UI.RadTagCloudItem`

The TagCloud item for which the coefficient is calculated.

#### Returns

`System.Double` The coefficient of the TagCloud item.

###  GetLogarithmicCoefficient

Calculates the coefficient when Logarithmic distribution is used.

#### Parameters

#### item `Telerik.Web.UI.RadTagCloudItem`

The TagCloud item for which the coefficient is calculated.

#### Returns

`System.Double` The coefficient of the TagCloud item.

###  IsCharSurroundedByAlphaNumeric

Checks whether a given punctuation mark (i.e. an invalid character) is surronded by alpha numeric characters. 
            If yes the character is considered a valid one and added to the word.

#### Parameters

#### c `System.Char`

The character to check.

#### charPosition `System.Int32`

The 0-based index position of the character in the text.

#### text `System.String`

The text where the character occurs.

#### Returns

`System.Boolean` The bool value indicating whether the character is considered a valid one.

###  IsPunctuation

Checks whether a character is punctuation mark (i.e. ,.!?"'-).

#### Parameters

#### c `System.Char`

The character to check.

#### invalidChars `System.String`

String of punctuation marks. 
            If empty string is provided Char.IsPunctuation method is used to check for punctuation.

#### Returns

`System.Boolean` The bool value indicating whether a character is a punctutation mark.

###  IsValidCharacter

Checks whether a given character is a valid character that should be included in a word.

#### Parameters

#### c `System.Char`

The character to check.

#### invalidChars `System.String`

String of invalid characters. 
            If empty string is provided the Char.IsPunctuation is used to check for validity.

#### charPosition `System.Int32`

The 0-based index position of the character in the given text.

#### text `System.String`

The text where the character occurs.

#### punctuationCharactersValid `System.String`

The string of the valid punctuation characters.

#### Returns

`System.Boolean` The bool value indicating whether a character is a valid one. 
            Usually, letters and numbers are valid word characters.

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

###  OnItemClick

Executed when a TagCloud item is clicked.

#### Parameters

#### item `Telerik.Web.UI.RadTagCloudItem`

#### Returns

`System.Void` 

###  OnItemDataBound

Executed right after the item is databound to the data source.

#### Parameters

#### item `Telerik.Web.UI.RadTagCloudItem`

#### Returns

`System.Void` 

###  RaisePostDataChangedEvent

Executed when post data changes should invoke a changed event

#### Returns

`System.Void` 

###  ReadTextFromTextFile

Reads a .TXT file and returns the text as a string. If the file does not exist, string.Empty is returned.

#### Parameters

#### fileName `System.String`

The physical path to the file.

#### Returns

`System.String` The text from the file.

###  ReadTextFromURL

Reads an HTML document from the provided URL and returns the text as a string. 
            If the URL does not exist, or the HTML document is not valid, a string.Empty is returned.

#### Parameters

#### url `System.String`

The URL from which the text will be scanned and returned.

#### Returns

`System.String` The text, with stripped HTML tags, of the HTML document on the provided URL.

###  RegisterCssReferences

Registers the CSS references

#### Returns

`System.Void` 

###  RegisterScriptControl

Registers the control with the ScriptManager

#### Returns

`System.Void` 

###  RenderDefaultDesigner

Writes a default cloud of items at design-time.

#### Parameters

#### writer `System.Web.UI.HtmlTextWriter`

The HTML text writer.

#### Returns

`System.Void` 

###  SaveClientState

Saves the client state data

#### Returns

`System.String` 

###  SkipAttribute

Skips an attribute in a given HTML text, and returns the 0-based index position of the closing attribute qoute.

#### Parameters

#### text `System.String`

The HTML text containing the attribute.

#### character `System.Char`

The current charater in the text.

#### position `System.Int32`

The 0-based index position of the current character.

#### Returns

`System.Int32` The 0-based index position of the closing qoute if the current character is the opening qoute.
            The same position is returned if the current character is not a valid opening qoute.

###  SkipScriptTag

Skips script tags and returns the 0-based index position of the closing <script> tag.

#### Parameters

#### text `System.String`

The HTML text containing the script tag.

#### character `System.Char`

The current character of the text.

#### position `System.Int32`

The 0-based index position of the current character of the text.

#### isScript `System.Boolean`

Bool value indicating whether the current character is within a <script> element.

#### textLength `System.Int32`

The length of the text.

#### Returns

`System.Int32` The 0-based index position of the closing <script> tag. 
            The current position is returned if the character is outside a script element.

###  StripHtml

Strips the HTML from a given text (containing an XHTML markup) and returns the inner text of the HTML elements.
            The text should be a vaild HTML. The method does not strip the CSS between opening and closing <style> tags,
            because it assumes that all the CSS occurs in the <head> tag, which is not searched for text by the TagCloud.

#### Parameters

#### text `System.String`

The text containing the HTML to strip.

#### isFullHtmlDocument `System.Boolean`

The bool value that indicates whether the string passed is full Html document. 
            When passing InnerHtml of an element set this value to false.
            The text within the <body> element is taken into consideration when this parameter is true.

#### Returns

`System.String` String containing the "clean" text. 
            An empty string is returned if the text does not contain a <body> element.


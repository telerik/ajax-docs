---
title: Telerik.Web.UI.RadCalendar
page_title: Telerik.Web.UI.RadCalendar
description: Telerik.Web.UI.RadCalendar
---

# Telerik.Web.UI.RadCalendar

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl
* Telerik.Web.UI.Calendar.Persistence.PropertiesControl
* Telerik.Web.UI.RadCalendar

## Properties

###  FastNavigationSettings `MonthYearFastNavigationSettings`

Gets or sets the
            MonthYearFastNavigationSettings
            object whose inner properties can be used to modify the fast Month/Year client
            navigation settings.

###  IsDesignMode `Boolean`

Returns whether RadCalendar is currently in design mode.

###  ImagesPath `String`

Gets or sets default path for the grid images when EnableEmbeddedSkins is set to false.

###  EnableShadows `Boolean`

Gets or sets whether popup shadows will appear.

###  Overlay `Boolean`

Gets or sets a value indicating whether the calendar will create an overlay element to ensure popups are over a flash element or Java applet.

###  EnableWeekends `Boolean`

Set this property to false if like to disable the selection of weekends.
            The default value is true.

###  EnableAriaSupport `Boolean`

When set to true enables support for WAI-ARIA

###  EnableKeyboardNavigation `Boolean`

Gets or sets the enable client side navigation with arrow keys.

###  RangeSelectionMode `RangeSelectionMode`

Gets or sets the RadCalendar range selection mode.
            Default value is None.

#### Remarks
MemberDescriptionNoneDoes not allow range selection.OnKeyHoldAllow range selection by pressing [Shift] key and clicking on the date.NoneAllow range selection by clicking consecutively two dates.

###  CssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class rendered by the Web server
            control on the client.

###  Visible `Boolean`

Gets or sets the visibility of the control.

###  CalendarDayTemplates `CalendarDayTemplateCollection`

Gets or sets a collection of type
            
            CalendarDayTemplateCollection which stores the created templates to use with
            RadCalendar. All of the
            items are represented by
            DayTemplate
            instances.

###  ClientEvents `CalendarClientEvents`

Gets the instance of
            
            CalendarClientEvents class which defines the JavaScript functions (client-side
            event handlers) that are invoked when specific client-side events are raised.

###  EnableRepeatableDaysOnClient `Boolean`

Gets or sets whether the repeatable days logic should be supported on the client
            (effective for client calendar - with set property
            AutoPostBack="false").

#### Remarks
The EnableRepeatableDaysOnClient property has effect over the
            logic of the recurring events to the calendar. It should be true, if you wants the
            repeatable days to be supported by a calendar with AutoPostBack="false". If you are not
            using repeatable days or/and client calendar, you can improve the calendar performance
            by setting it to false.

###  CellDayFormat `String`

Gets or sets the format string that will be applied to the dates presented in the
            calendar area.

#### Remarks
For additional details see Date Format Pattern
            topic

###  SingleViewRows `Int32`

Gets or sets the the count of rows to be displayed by a single
            CalendarView.

#### Remarks
If the calendar represents a multi view, this property applies to the child views
            inside the multi view.

###  SingleViewColumns `Int32`

Gets or sets the the count of columns to be displayed by a single
            CalendarView.

#### Remarks
If the calendar represents a multi view, this property applies to the child views
            inside the multi view.

###  SingleViewWidth `Unit`

Gets or sets the Width applied to a single
            CalendarView.

#### Remarks
If the calendar represents a multi view, this property applies to the child views
            inside the multi view.

###  SingleViewHeight `Unit`

Gets or sets the Height applied to a single
            CalendarView.

#### Remarks
If the calendar represents a multi view, this property applies to the child views
            inside the multi view.

###  MonthLayout `MonthLayout`

Gets or sets the predefined pairs of rows and columns, so that the product of
                the two values is exactly 42, which guarantees valid calendar layout. It is applied
                on a single view level to every
                MonthView
                instance in the calendar.

#### Remarks
The following values are applicable and defined in the MonthLayout
                enumeration:
                Layout_7columns_x_6rows - horizontal layout
                Layout_14columns_x_3rows - horizontal layout
                Layout_21columns_x_2rows - horizontal layout
                Layout_7rows_x_6columns - vertical layout, required when
                UseDaysAsSelectors
                is true and
                Orientation
                is set to
                
                RenderInColumns.
                Layout_14rows_x_3columns - vertical layout, required when
                UseDaysAsSelectors
                is true and
                Orientation
                is set to
                
                RenderInColumns.
                Layout_21rows_x_2columns - vertical layout, required when
                UseDaysAsSelectors
                is true and
                Orientation
                is set to
                
                RenderInColumns.

###  CellAlign `HorizontalAlign`

Gets or sets the horizontal alignment of the date cells content inside the
                calendar area.The HorizontalAlign enumeration is defined in
                System.Web.UI.WebControls

#### Remarks
Member nameDescriptionCenterThe contents of a container are centered.JustifyThe contents of a container are uniformly spread out and
                        aligned with both the left and right margins.LeftThe contents of a container are left justified.NotSetThe horizontal alignment is not set.RightThe contents of a container are right justified.

###  CellVAlign `VerticalAlign`

Gets or sets the vertical alignment of the date cells content inside the
                calendar area.The VerticalAlign enumeration is defined in
                System.Web.UI.WebControls

#### Remarks
Member nameDescriptionBottomText or object is aligned with the bottom of the enclosing
                        control.MiddleText or object is aligned with the center of the enclosing
                        control.NotSetVertical alignment is not set.TopText or object is aligned with the top of the enclosing
                        control.

###  MultiViewRows `Int32`

Gets or sets the the count of rows to be displayed by a multi month
            CalendarView.

###  MultiViewColumns `Int32`

Gets or sets the the count of columns to be displayed by a multi month
            CalendarView.

###  RangeMaxDate `DateTime`

Gets or sets the maximum date valid for selection by
            Telerik RadCalendar. Must be interpreted as the Higher bound of the valid
            dates range available for selection. Telerik RadCalendar will not allow
            navigation or selection past this date.

#### Remarks
This property has a default value of 12/30/2099
            (Gregorian calendar date).

###  RangeMinDate `DateTime`

Gets or sets the minimal date valid for selection by
            Telerik RadCalendar. Must be interpreted as the Lower bound of the valid
            dates range available for selection. Telerik RadCalendar will not allow
            navigation or selection prior to this date.

#### Remarks
This property has a default value of 1/1/1980
            (Gregorian calendar date).

###  FirstDayOfWeek `FirstDayOfWeek`

Specifies the day to display as the first day of the week on the
                RadCalendar
                control.The FirstDayOfWeek enumeration can be found in
                System.Web.UI.WebControls Namespace.

#### Remarks
The FirstDayOfWeek enumeration represents the values that specify
                which day to display as the first day of the week on the
                RadCalendar
                control.Member nameDescriptionDefaultThe first day of the week is specified by the system
                        settings.FridayThe first day of the week is Friday.MondayThe first day of the week is Monday.SaturdayThe first day of the week is Saturday.SundayThe first day of the week is Sunday.ThursdayThe first day of the week is Thursday.TuesdayThe first day of the week is Tuesday.WednesdayThe first day of the week is Wednesday.

###  SelectedDate `DateTime`

Sets or returns the currently selected date. The default value is the value of
            System.DateTime.MinValue.

#### Remarks
Use the SelectedDate property to determine the selected date on the
                RadCalendar
                control.The SelectedDate property and the
                SelectedDates
                collection are closely related. When the
                EnableMultiSelect
                property is set to false, a mode that allows only a single date selection,
                SelectedDate and SelectedDates[0] have the same value and
                SelectedDates.Count equals 1. When the EnableMultiSelect property is
                set to true, mode that allows multiple date selections, SelectedDate
                and SelectedDates[0] have the same value.The SelectedDate property is set using a System.DateTime
                object.When the user selects a date on the RadCalendar control, the
                SelectionChanged
                event is raised. The SelectedDate property is updated to the selected date.
                The SelectedDates collection is also updated to contain just this
                date.Note Both the SelectedDate property and the
                    SelectedDates collection are updated before the SelectionChanged
                    event is raised. You can override the date selection by using the
                    OnSelectionChanged event handler to manually set the
                    SelectedDate property. The SelectionChanged event does not get
                    raised when this property is programmatically set.

###  RangeSelectionStartDate `DateTime`

Gets or sets the start date when calendar range selection is enabled.

###  RangeSelectionEndDate `DateTime`

Gets or sets the end date when calendar range selection is enabled.

###  FocusedDate `DateTime`

Gets or sets the value that is used by
            RadCalendar to determine
            the viewable area displayed .

#### Remarks
By default, the FocusedDate property returns the current
                system date when in runtime, and in design mode defaults to
                System.DateTime.MinValue. When the FocusedDate is
                set, from that point, the value returned by the FocusedDate
                property is the one the user sets.

###  FocusedDateRow `DateTime`

Gets or sets the row index where the
            FocusedDate
            (and the month view it belongs to) will be positioned inside a multi view area.

###  FocusedDateColumn `DateTime`

Gets or sets the column index where the
            FocusedDate
            (and the month view it belongs to) will be positioned inside a multi view area.

###  SelectedDates `DateTime`

Gets a collection of
            RadDate objects (that
            encapsulate values of type System.DateTime) that represent the
            selected dates on the RadCalendar control.

#### Remarks
Use the SelectedDates collection to determine the currently selected
                dates on the
                RadCalendar
                control.The
                SelectedDate
                property and the SelectedDates collection are closely related. When the
                EnableMultiSelect
                property is set to false, a mode that allows only a single date selection,
                SelectedDate and SelectedDates[0] have the same value and
                SelectedDates.Count equals 1. When the
                EnableMultiSelect
                property is set to true, mode that allows multiple date selections,
                SelectedDate and SelectedDates[0] have the same value.The SelectedDates property stores a collection of
                RadDate objects (that
                encapsulate values of type System.DateTime).When the user selects a date or date range (for example with the column or
                rows selectors) on the RadCalendar control, the
                SelectionChanged
                event is raised. The selected dates are added to the SelectedDates
                collection, accumulating with previously selected dates. The range of dates are not
                sorted by default. The SelectedDate property is also updated to
                contain the first date in the SelectedDates collection.You can also use the SelectedDates collection to programmatically
                select dates on the Calendar control. Use the
                
                Add,
                
                Remove,
                
                Clear, and
                
                SelectRange methods to programmatically manipulate the selected dates in the
                SelectedDates collection.Note Both the SelectedDate property and the
                    SelectedDates collection are updated before the SelectionChanged
                    event is raised.You can override the dates selection by using the
                    OnSelectionChanged event handler to manually set the
                    SelectedDates collection. The SelectionChanged event is not
                    raised when this collection is programmatically set.

###  FastNavigationStep `Int32`

Gets or sets an integer value representing the number of
            CalendarView
            views that will be scrolled when the user clicks on a fast navigation link.

###  LocalizationPath `CalendarStrings`

Gets or sets a value indicating where RadCalendar will look for its .resx localization file.
            By default this file should be in the App_GlobalResources folder. However, if you cannot put
            the resource file in the default location or .resx files compilation is disabled for some reason 
            (e.g. in a DotNetNuke environment), this property should be set to the location of the resource file.

#### Remarks
If specified, the LocalizationPath
            property will allow you to load the grid localization file from any location in the 
            web application.

###  DayNameFormat `DayNameFormat`

Specifies the display formats for the days of the week used as selectors by
            RadCalendar.

#### Remarks
Use the DayNameFormat property to specify the name format for the days
                of the week. This property is set with one of the DayNameFormat
                enumeration values. You can specify whether the days of the week are displayed as
                the full name, short (abbreviated) name, first letter of the day, or first two
                letters of the day.The DayNameFormat enumeration represents the display formats for the
                days of the week used as selectors by RadCalendar.Member nameDescriptionFirstLetterThe days of the week displayed with just the first letter. For
                        example, T.FirstTwoLettersThe days of the week displayed with just the first two
                        letters. For example, Tu.FullThe days of the week displayed in full format. For example,
                        Tuesday.ShortThe days of the week displayed in abbreviated format. For
                        example, Tues.

###  DateTimeFormat `DateTimeFormatInfo`

Gets or sets a DateTimeFormatInfo instance that defines the
            culturally appropriate format of displaying dates and times as specified by the default
            culture.

#### Remarks
A DateTimeFormatInfo can be created only for the invariant
                culture or for specific cultures, not for neutral cultures.The cultures are generally grouped into three sets: the invariant culture,
                the neutral cultures, and the specific cultures.The invariant culture is culture-insensitive. You can specify the invariant
                culture by name using an empty string ("") or by its culture identifier 0x007F.
                InvariantCulture retrieves an instance of the invariant culture.
                It is associated with the English language but not with any country/region. It can
                be used in almost any method in the Globalization namespace that requires a
                culture. If a security decision depends on a string comparison or a case-change
                operation, use the InvariantCulture to ensure that the behavior will be
                consistent regardless of the culture settings of the system. However, the invariant
                culture must be used only by processes that require culture-independent results,
                such as system services; otherwise, it produces results that might be
                linguistically incorrect or culturally inappropriate.A neutral culture is a culture that is associated with a language but not
                with a country/region. A specific culture is a culture that is associated with a
                language and a country/region. For example, "fr" is a neutral culture and "fr-FR"
                is a specific culture. Note that "zh-CHS" (Simplified Chinese) and "zh-CHT"
                (Traditional Chinese) are neutral cultures.The user might choose to override some of the values associated with the
                current culture of Windows through Regional and Language Options (or Regional
                Options or Regional Settings) in Control Panel. For example, the user might choose
                to display the date in a different format or to use a currency other than the
                default for the culture.If UseUserOverride is true and the specified culture
                matches the current culture of Windows, the CultureInfo uses those
                overrides, including user settings for the properties of the
                DateTimeFormatInfo instance returned by the DateTimeFormat property,
                the properties of the NumberFormatInfo instance returned by the
                NumberFormat property, and the properties of the
                CompareInfo instance returned by the CompareInfo
                property. If the user settings are incompatible with the culture associated with
                the CultureInfo (for example, if the selected calendar is not one of the
                OptionalCalendars ), the results of the methods and the values of
                the properties are undefined.Note: In this version of RadCalendar the
                NumberFormatInfo instance returned by the
                NumberFormat property is not taken into account.

###  CultureInfo `CultureInfo`

Gets or sets the CultureInfo instance that represents
                information about the culture of this RadCalendar object.A CultureInfo class describes information about the culture of this
                RadCalendar instance including the names of the culture, the writing system, and
                the calendar used, as well as access to culture-specific objects that provide
                methods for common operations, such as formatting dates and sorting strings.

#### Remarks
The culture names follow the RFC 1766 standard in the format
                "<languagecode2>-<country/regioncode2>", where <languagecode2> is
                a lowercase two-letter code derived from ISO 639-1 and <country/regioncode2>
                is an uppercase two-letter code derived from ISO 3166. For example, U.S. English is
                "en-US". In cases where a two-letter language code is not available, the
                three-letter code derived from ISO 639-2 is used; for example, the three-letter
                code "div" is used for cultures that use the Dhivehi language. Some culture names
                have suffixes that specify the script; for example, "-Cyrl" specifies the Cyrillic
                script, "-Latn" specifies the Latin script.The following predefined CultureInfo names and identifiers are
                accepted and used by this class and other classes in the System.Globalization
                namespace.Culture NameCulture IdentifierLanguage-Country/Region"" (empty string)0x007Finvariant cultureaf0x0036Afrikaansaf-ZA0x0436Afrikaans - South Africasq0x001CAlbaniansq-AL0x041CAlbanian - Albaniaar0x0001Arabicar-DZ0x1401Arabic - Algeriaar-BH0x3C01Arabic - Bahrainar-EG0x0C01Arabic - Egyptar-IQ0x0801Arabic - Iraqar-JO0x2C01Arabic - Jordanar-KW0x3401Arabic - Kuwaitar-LB0x3001Arabic - Lebanonar-LY0x1001Arabic - Libyaar-MA0x1801Arabic - Moroccoar-OM0x2001Arabic - Omanar-QA0x4001Arabic - Qatarar-SA0x0401Arabic - Saudi Arabiaar-SY0x2801Arabic - Syriaar-TN0x1C01Arabic - Tunisiaar-AE0x3801Arabic - United Arab Emiratesar-YE0x2401Arabic - Yemenhy0x002BArmenianhy-AM0x042BArmenian - Armeniaaz0x002CAzeriaz-AZ-Cyrl0x082CAzeri (Cyrillic) - Azerbaijanaz-AZ-Latn0x042CAzeri (Latin) - Azerbaijaneu0x002DBasqueeu-ES0x042DBasque - Basquebe0x0023Belarusianbe-BY0x0423Belarusian - Belarusbg0x0002Bulgarianbg-BG0x0402Bulgarian - Bulgariaca0x0003Catalanca-ES0x0403Catalan - Catalanzh-HK0x0C04Chinese - Hong Kong SARzh-MO0x1404Chinese - Macau SARzh-CN0x0804Chinese - Chinazh-CHS0x0004Chinese (Simplified)zh-SG0x1004Chinese - Singaporezh-TW0x0404Chinese - Taiwanzh-CHT0x7C04Chinese (Traditional)hr0x001ACroatianhr-HR0x041ACroatian - Croatiacs0x0005Czechcs-CZ0x0405Czech - Czech Republicda0x0006Danishda-DK0x0406Danish - Denmarkdiv0x0065Dhivehidiv-MV0x0465Dhivehi - Maldivesnl0x0013Dutchnl-BE0x0813Dutch - Belgiumnl-NL0x0413Dutch - The Netherlandsen0x0009Englishen-AU0x0C09English - Australiaen-BZ0x2809English - Belizeen-CA0x1009English - Canadaen-CB0x2409English - Caribbeanen-IE0x1809English - Irelanden-JM0x2009English - Jamaicaen-NZ0x1409English - New Zealanden-PH0x3409English - Philippinesen-ZA0x1C09English - South Africaen-TT0x2C09English - Trinidad and Tobagoen-GB0x0809English - United Kingdomen-US0x0409English - United Statesen-ZW0x3009English - Zimbabweet0x0025Estonianet-EE0x0425Estonian - Estoniafo0x0038Faroesefo-FO0x0438Faroese - Faroe Islandsfa0x0029Farsifa-IR0x0429Farsi - Iranfi0x000BFinnishfi-FI0x040BFinnish - Finlandfr0x000CFrenchfr-BE0x080CFrench - Belgiumfr-CA0x0C0CFrench - Canadafr-FR0x040CFrench - Francefr-LU0x140CFrench - Luxembourgfr-MC0x180CFrench - Monacofr-CH0x100CFrench - Switzerlandgl0x0056Galiciangl-ES0x0456Galician - Galicianka0x0037Georgianka-GE0x0437Georgian - Georgiade0x0007Germande-AT0x0C07German - Austriade-DE0x0407German - Germanyde-LI0x1407German - Liechtensteinde-LU0x1007German - Luxembourgde-CH0x0807German - Switzerlandel0x0008Greekel-GR0x0408Greek - Greecegu0x0047Gujaratigu-IN0x0447Gujarati - Indiahe0x000DHebrewhe-IL0x040DHebrew - Israelhi0x0039Hindihi-IN0x0439Hindi - Indiahu0x000EHungarianhu-HU0x040EHungarian - Hungaryis0x000FIcelandicis-IS0x040FIcelandic - Icelandid0x0021Indonesianid-ID0x0421Indonesian - Indonesiait0x0010Italianit-IT0x0410Italian - Italyit-CH0x0810Italian - Switzerlandja0x0011Japaneseja-JP0x0411Japanese - Japankn0x004BKannadakn-IN0x044BKannada - Indiakk0x003FKazakhkk-KZ0x043FKazakh - Kazakhstankok0x0057Konkanikok-IN0x0457Konkani - Indiako0x0012Koreanko-KR0x0412Korean - Koreaky0x0040Kyrgyzky-KZ0x0440Kyrgyz - Kazakhstanlv0x0026Latvianlv-LV0x0426Latvian - Latvialt0x0027Lithuanianlt-LT0x0427Lithuanian - Lithuaniamk0x002FMacedonianmk-MK0x042FMacedonian - FYROMms0x003EMalayms-BN0x083EMalay - Bruneims-MY0x043EMalay - Malaysiamr0x004EMarathimr-IN0x044EMarathi - Indiamn0x0050Mongolianmn-MN0x0450Mongolian - Mongoliano0x0014Norwegiannb-NO0x0414Norwegian (Bokmål) - Norwaynn-NO0x0814Norwegian (Nynorsk) - Norwaypl0x0015Polishpl-PL0x0415Polish - Polandpt0x0016Portuguesept-BR0x0416Portuguese - Brazilpt-PT0x0816Portuguese - Portugalpa0x0046Punjabipa-IN0x0446Punjabi - Indiaro0x0018Romanianro-RO0x0418Romanian - Romaniaru0x0019Russianru-RU0x0419Russian - Russiasa0x004FSanskritsa-IN0x044FSanskrit - Indiasr-SP-Cyrl0x0C1ASerbian (Cyrillic) - Serbiasr-SP-Latn0x081ASerbian (Latin) - Serbiask0x001BSlovaksk-SK0x041BSlovak - Slovakiasl0x0024Sloveniansl-SI0x0424Slovenian - Sloveniaes0x000ASpanishes-AR0x2C0ASpanish - Argentinaes-BO0x400ASpanish - Boliviaes-CL0x340ASpanish - Chilees-CO0x240ASpanish - Colombiaes-CR0x140ASpanish - Costa Ricaes-DO0x1C0ASpanish - Dominican Republices-EC0x300ASpanish - Ecuadores-SV0x440ASpanish - El Salvadores-GT0x100ASpanish - Guatemalaes-HN0x480ASpanish - Hondurases-MX0x080ASpanish - Mexicoes-NI0x4C0ASpanish - Nicaraguaes-PA0x180ASpanish - Panamaes-PY0x3C0ASpanish - Paraguayes-PE0x280ASpanish - Perues-PR0x500ASpanish - Puerto Ricoes-ES0x0C0ASpanish - Spaines-UY0x380ASpanish - Uruguayes-VE0x200ASpanish - Venezuelasw0x0041Swahilisw-KE0x0441Swahili - Kenyasv0x001DSwedishsv-FI0x081DSwedish - Finlandsv-SE0x041DSwedish - Swedensyr0x005ASyriacsyr-SY0x045ASyriac - Syriata0x0049Tamilta-IN0x0449Tamil - Indiatt0x0044Tatartt-RU0x0444Tatar - Russiate0x004ATelugute-IN0x044ATelugu - Indiath0x001EThaith-TH0x041EThai - Thailandtr0x001FTurkishtr-TR0x041FTurkish - Turkeyuk0x0022Ukrainianuk-UA0x0422Ukrainian - Ukraineur0x0020Urduur-PK0x0420Urdu - Pakistanuz0x0043Uzbekuz-UZ-Cyrl0x0843Uzbek (Cyrillic) - Uzbekistanuz-UZ-Latn0x0443Uzbek (Latin) - Uzbekistanvi0x002AVietnamesevi-VN0x042AVietnamese - Vietnam

###  Calendar `Calendar`

Gets the default System.Globalization.Calendar instance as
            specified by the default culture.

#### Remarks
A calendar divides time into measures, such as weeks, months, and years. The
                number, length, and start of the divisions vary in each calendar.Any moment in time can be represented as a set of numeric values using a
                particular calendar. For example, the last vernal equinox occurred at (0.0, 0, 46,
                8, 20, 3, 1999) in the Gregorian calendar. An implementation of Calendar can
                map any DateTime value to a similar set of numeric values, and
                DateTime can map such sets of numeric values to a textual representation
                using information from Calendar and DateTimeFormatInfo. The
                textual representation can be culture-sensitive (for example, "8:46 AM March 20th
                1999 AD" for the en-US culture) or culture-insensitive (for example,
                "1999-03-20T08:46:00" in ISO 8601 format).A Calendar implementation can define one or more eras. The
                Calendar class identifies the eras as enumerated integers where the current
                era (CurrentEra) has the value 0.In order to make up for the difference between the calendar year and the
                actual time that the earth rotates around the sun or the actual time that the moon
                rotates around the earth, a leap year has a different number of days than a
                standard calendar year. Each Calendar implementation defines leap years
                differently.For consistency, the first unit in each interval (for example, the first
                month) is assigned the value 1.The System.Globalization namespace includes the following
                Calendar implementations: GregorianCalendar,
                HebrewCalendar, HijriCalendar,
                JapaneseCalendar, JulianCalendar,
                KoreanCalendar, TaiwanCalendar, and
                ThaiBuddhistCalendar.

###  PresentationType `PresentationType`

Gets or sets the default type used by RadCalendar to handle its
            layout, and how will react to user interaction.

#### Remarks
MemberDescriptionInteractiveInteractive - user is allowed to select dates, navigate,
                        etc.PreviewPreview - does not allow user interaction, for presentation
                        purposes only.

###  Orientation `Orientation`

Gets or sets the orientation (rendering direction) of the calendar component.
            Default value is RenderInRows.

#### Remarks
MemberDescriptionRenderInRowsRenders the calendar data row after row.RenderInColumnsRenderInColumns - Renders the calendar data column after
                        column.NoneEnforces fallback to the default Orientation for
                        Telerik RadCalendar.

###  AutoPostBack `Boolean`

Gets or sets a value indicating whether a postback to the server automatically occurs when the user interacts with the control.

#### Remarks
Setting this property to true will make Telerik RadCalendar postback to the server 
            on date selection or when navigating to a different month.

###  ShowDayCellToolTips `Boolean`

Gets or sets a value indicating whether a tooltips for day cells should be rendered.

#### Remarks
Setting this property to false will force Telerik RadCalendar to not render day cell tooltips

###  DaysViewSummary `String`

Gets or sets a value for DaysView summary.

#### Remarks
Setting this property to empty string will force Telerik RadCalendar to not render summary attribute for the DaysView.

###  NavigationSummary `String`

Gets or sets a value for navigation controls summary.

#### Remarks
Setting this property to empty string will force Telerik RadCalendar to not render summary attribute

###  NavigationCaption `String`

Gets or sets a value for navigation controls caption.

#### Remarks
Setting this property to empty string will force Telerik RadCalendar to not render caption tag

###  CalendarSummary `Calendar`

Gets or sets a value for RadCalendar summary.

#### Remarks
Setting this property to empty string will force Telerik RadCalendar to not render summary attribute

###  CalendarCaption `Calendar`

Gets or sets a value for RadCalendar caption.

#### Remarks
Setting this property to empty string will force Telerik RadCalendar to not render caption tag

###  HeaderTemplate `ITemplate`

Gets or sets the System.Web.UI.ITemplate that defines how the
            header section of the RadCalendar control is displayed.

#### Remarks
Header section of the RadCalendar control is displayed under
                the title section and above the main calendar area (the section that displays the
                dates information).Use this property to create a template that controls how the header section
                of a RadCalendar control is displayed.CAUTION This control can be used to display user input, which
                    might include malicious client script. Check any information that is sent from
                    a client for executable script, SQL statements, or other code before displaying
                    it in your application. ASP.NET provides an input request validation feature to
                    block script and HTML in user input. Validation server controls are also
                    provided to assess user input. For more information, see Validation
                    Server Controls in MSDN.

###  FooterTemplate `ITemplate`

Gets or sets the System.Web.UI.ITemplate that defines how the
            footer section of the RadCalendar control is displayed.

#### Remarks
Footer section of the RadCalendar control is displayed under
                the main calendar area (the section that displays the dates information).Use this property to create a template that controls how the footer section
                of a RadCalendar control is displayed.CAUTION This control can be used to display user input, which
                    might include malicious client script. Check any information that is sent from
                    a client for executable script, SQL statements, or other code before displaying
                    it in your application. ASP.NET provides an input request validation feature to
                    block script and HTML in user input. Validation server controls are also
                    provided to assess user input. For more information, see Validation
                    Server Controls in MSDN.

###  EnableNavigation `Boolean`

Gets or sets whether the navigation controls in the title section will be
            displayed.

###  ShowNavigationButtons `Boolean`

Gets or sets whether the navigation buttons in the title section will be
            displayed.

###  ShowFastNavigationButtons `Boolean`

Gets or sets whether the fast navigation buttons in the title section will be
            displayed.

###  EnableMonthYearFastNavigation `Boolean`

Gets or sets whether the month/year fast navigation controls in the title section will be
            enabled.

###  NavigationPrevText `String`

Gets or sets the text displayed for the previous month navigation control. Will be
                applied only if there is no image set (see
                NavigationPrevImage).

#### Remarks
Use the NavigationPrevText property to provide custom text for the
                previous month navigation element in the title section of
                RadCalendar.Note that the NavigationPrevImage has priority and
                its value should be set to an empty string in order to be applied the
                NavigationPrevText value.This property does not automatically encode to HTML. You need
                                to convert special characters to the appropriate HTML value, unless
                                you want the characters to be treated as HTML. For example, to
                                explicitly display the greater than symbol (>), you must use the
                                value &gt;.Because this property does not automatically encode to HTML, it is possible
                to specify an HTML tag for the NavigationPrevText property. For example,
                if you want to display an image for the next month navigation control, you can set
                this property to an expression that contains an <img>
                element. However note that
                NavigationPrevImage
                property is available for this type of functionality.This property applies only if the EnableNavigation property
                is set to true.

###  NavigationNextText `String`

Gets or sets the text displayed for the next month navigation control. Will be
                applied if there is no image set (see
                NavigationNextImage).

#### Remarks
Use the NavigationNextText property to provide custom text for the
                next month navigation element in the title section of
                RadCalendar.Note that the NavigationNextImage has priority and
                its value should be set to an empty string in order to be applied the
                NavigationNextText value.This property does not automatically encode to HTML. You need
                                to convert special characters to the appropriate HTML value, unless
                                you want the characters to be treated as HTML. For example, to
                                explicitly display the greater than symbol (>), you must use the
                                value &gt;.Because this property does not automatically encode to HTML, it is possible
                to specify an HTML tag for the NavigationNextText property. For example,
                if you want to display an image for the next month navigation control, you can set
                this property to an expression that contains an <img>
                element. However note that
                NavigationNextImage
                property is available for this type of functionality.This property applies only if the EnableNavigation property
                is set to true.

###  FastNavigationPrevText `String`

Gets or sets the text displayed for the fast navigation previous month control.
                Will be applied if there is no image set (see
                FastNavigationPrevImage).

#### Remarks
Use the FastNavigationPrevText property to provide custom text for
                the next month navigation element in the title section of
                RadCalendar.Note that the FastNavigationPrevImage has priority
                and its value should be set to an empty string in order to be applied the
                FastNavigationPrevText value.This property does not automatically encode to HTML. You need
                                to convert special characters to the appropriate HTML value, unless
                                you want the characters to be treated as HTML. For example, to
                                explicitly display the greater than symbol (>), you must use the
                                value &gt;.Because this property does not automatically encode to HTML, it is possible
                to specify an HTML tag for the FastNavigationPrevText property. For
                example, if you want to display an image for the next month navigation control, you
                can set this property to an expression that contains an
                <img> element. However note that
                FastNavigationPrevImage
                property is available for this type of functionality.This property applies only if the EnableNavigation property
                is set to true.

###  FastNavigationNextText `String`

Gets or sets the text displayed for the fast navigation next month control. Will be
                applied if there is no image set (see
                FastNavigationNextImage).

#### Remarks
Use the FastNavigationNextText property to provide custom text for
                the next month navigation element in the title section of
                RadCalendar.Note that the FastNavigationNextImage has priority
                and its value should be set to an empty string in order to be applied the
                FastNavigationNextText value.This property does not automatically encode to HTML. You need
                                to convert special characters to the appropriate HTML value, unless
                                you want the characters to be treated as HTML. For example, to
                                explicitly display the greater than symbol (>), you must use the
                                value &gt;.Because this property does not automatically encode to HTML, it is possible
                to specify an HTML tag for the FastNavigationNextText property. For
                example, if you want to display an image for the next month navigation control, you
                can set this property to an expression that contains an
                <img> element. However note that
                FastNavigationNextImage
                property is available for this type of functionality.This property applies only if the EnableNavigation property
                is set to true.

###  NavigationPrevImage `String`

Gets or sets name of the image that is displayed for the previous month navigation control.

#### Remarks
When using this property, the whole image URL is generated using also the
                ImagesBaseDir
                (if no skin is applied) or the
                SkinPath
                (if skin is applied) properties values.
                Example when skin is NOT defined:ImagesBaseDir = "Img/"RowSelectorImage = "nav.gif"complete image URL : "Img/nav.gif"Example when skin is defined:SkinPath = "RadControls/Calendar/Skins/"RowSelectorImage = "nav.gif"complete image URL : "RadControls/Calendar/Skins/nav.gif"

###  NavigationNextImage `String`

Gets or sets the name of the image that is displayed for the next month navigation control.

#### Remarks
When using this property, the whole image URL is generated using also the
                ImagesBaseDir
                (if no skin is applied) or the
                SkinPath
                (if skin is applied) properties values.
                Example when skin is NOT defined:ImagesBaseDir = "Img/"RowSelectorImage = "nav.gif"complete image URL : "Img/nav.gif"Example when skin is defined:SkinPath = "RadControls/Calendar/Skins/"RowSelectorImage = "nav.gif"complete image URL : "RadControls/Calendar/Skins/nav.gif"

###  FastNavigationPrevImage `String`

Gets or sets the name of the image that is displayed for the previous month fast
            navigation control.

#### Remarks
When using this property, the whole image URL is generated using also the
                ImagesBaseDir
                (if no skin is applied) or the
                SkinPath
                (if skin is applied) properties values.
                Example when skin is NOT defined:ImagesBaseDir = "Img/"RowSelectorImage = "nav.gif"complete image URL : "Img/nav.gif"Example when skin is defined:SkinPath = "RadControls/Calendar/Skins/"RowSelectorImage = "nav.gif"complete image URL : "RadControls/Calendar/Skins/nav.gif"

###  FastNavigationNextImage `String`

Gets or sets the name of the image that is displayed for the next month fast
            navigation control.

#### Remarks
When using this property, the whole image URL is generated using also the
                ImagesBaseDir
                (if no skin is applied) or the
                SkinPath
                (if skin is applied) properties values.
                Example when skin is NOT defined:ImagesBaseDir = "Img/"RowSelectorImage = "nav.gif"complete image URL : "Img/nav.gif"Example when skin is defined:SkinPath = "RadControls/Calendar/Skins/"RowSelectorImage = "nav.gif"complete image URL : "RadControls/Calendar/Skins/nav.gif"

###  NavigationPrevToolTip `String`

Gets or sets the text displayed as a tooltip for the previous month navigation control.

#### Remarks
Use the NavigationPrevToolTip property to provide custom text for the
            tooltip of the previous month navigation element in the title section of
            RadCalendar.

###  NavigationNextToolTip `String`

Gets or sets the text displayed as a tooltip for the next month navigation control.

#### Remarks
Use the NavigationNextToolTip property to provide custom text for the
            tooltip of the next month navigation element in the title section of
            RadCalendar.

###  FastNavigationPrevToolTip `String`

Gets or sets the text displayed as a tooltip for the fast navigation previous
            month control.

#### Remarks
Use the FastNavigationPrevToolTip property to provide custom text for
            the tooltip of the fast navigation previous month element in the title section of
            RadCalendar.

###  FastNavigationNextToolTip `String`

Gets or sets the text displayed as a tooltip for the fast navigation next month
            control.

#### Remarks
Use the FastNavigationNextToolTip property to provide custom text for
            the tooltip of the fast navigation next month element in the title section of
            RadCalendar.

###  ToolTip `String`

###  NavigationCellSpacing `Int32`

Gets or sets the cell spacing that is applied to the title table.

###  NavigationCellPadding `Int32`

Gets or sets the cell padding that is applied to the title table.

###  TitleAlign `HorizontalAlign`

Gets or sets the horizontal alignment of the calendar title.The HorizontalAlign enumeration is defined in
                System.Web.UI.WebControls

#### Remarks
Member nameDescriptionCenterThe contents of a container are centered.JustifyThe contents of a container are uniformly spread out and
                        aligned with both the left and right margins.LeftThe contents of a container are left justified.NotSetThe horizontal alignment is not set.RightThe contents of a container are right justified.

###  TitleFormat `String`

Gets or sets the format string that is applied to the calendar title.

#### Remarks
The property should contain either a format specifier character or a
                custom format pattern. For more information, see the summary page for
                System.Globalization.DateTimeFormatInfo.By default this property uses formatting string of
                'MMMM yyyy'. Valid formats are all supported by the .NET
                Framework.Example:"d" is the standard short date pattern."%d" returns the day of the month; "%d" is a custom pattern."d " returns the day of the month followed by a white-space character; "d "
                    is a custom pattern.

###  DayCellToolTipFormat `String`

Gets or sets the format string that is applied to the days cells tooltip.

#### Remarks
The property should contain either a format specifier character or a
                custom format pattern. For more information, see the summary page for
                System.Globalization.DateTimeFormatInfo.By default this property uses formatting string of
                'dddd, MMMM dd, yyyy'. Valid formats are all supported by the .NET
                Framework.Example:"d" is the standard short date pattern."%d" returns the day of the month; "%d" is a custom pattern."d " returns the day of the month followed by a white-space character; "d "
                    is a custom pattern.

###  DateRangeSeparator `String`

Gets or sets the separator string that will be put between start and end months in a multi view title.

###  HideNavigationControls `Boolean`

Gets or sets a value indicating whether the navigation control should be visible when disabled.

#### Remarks
Setting this property to true will hide the navigation controls when they are disabled

###  CssFile `String`

Gets or sets the name of the file containing the CSS definition used by RadCalendar. Use "~/" (tilde) as a substitution of the web-application root directory.

###  DefaultCellPadding `Int32`

Gets or sets the cell padding of the table where are rendered the calendar days.

###  DefaultCellSpacing `Int32`

Gets or sets the cell spacing of the table where are rendered the calendar days.

###  SpecialDays `CalendarDayCollection`

A collection of special days in the calendar to which may be applied specific formatting.

###  DayStyle `TableItemStyle`

Gets the style properties for the days in the displayed month.

###  WeekendDayStyle `TableItemStyle`

Gets the style properties for the weekend dates on the Calendar control.

###  CalendarTableStyle `Calendar`

Gets the style properties for the Calendar table container.

###  OtherMonthDayStyle `TableItemStyle`

Gets the style properties for the days on the Calendar control that are not in the displayed month.

###  OutOfRangeDayStyle `TableItemStyle`

Gets the style properties for the days on the Calendar control that are out of the valid range for selection.

###  DisabledDayStyle `TableItemStyle`

Gets the style properties for the disabled dates.

###  SelectedDayStyle `TableItemStyle`

Gets the style properties for the selected dates.

###  DayOverStyle `TableItemStyle`

Gets the style properties applied when hovering over the Calendar days.

###  TitleStyle `TableItemStyle`

Gets the style properties of the title heading for the Calendar control.

###  HeaderStyle `TableItemStyle`

Gets the style properties for the row and column headers.

###  FastNavigationStyle `TableItemStyle`

Gets the style properties for the Month/Year fast navigation.

###  ViewSelectorStyle `TableItemStyle`

Gets the style properties for the view selector cell.

###  CalendarView `Calendar`

Exposes the top instance of CalendarView or its derived
                types.Every CalendarView class handles the real calculation and
                rendering of RadCalendar's calendric information. The
                CalendarView has the
                
                ChildViews collection which contains all the sub views in case of multi view
                setup.

###  ShowColumnHeaders `Boolean`

Gets or sets whether the column headers will appear on the calendar.

###  ShowRowHeaders `Boolean`

Gets or sets whether the row headers will appear on the calendar.

###  EnableViewSelector `Boolean`

Gets or sets whether a selector for the entire CalendarView (
            MonthView ) will appear on the calendar.

###  ShowOtherMonthsDays `Boolean`

Gets or sets whether the month matrix, when rendered will show days from other (previous or next)
            months or will render only blank cells.

###  UseColumnHeadersAsSelectors `Boolean`

When the
            ShowColumnHeaders
            and/or
            ShowRowHeaders
            properties are set to true, the UseColumnHeadersAsSelectors property specifies
            whether to use the days of the week, which overrides the used text/image header if
            any.

###  UseRowHeadersAsSelectors `Boolean`

When the
            ShowColumnHeaders
            and/or
            ShowRowHeaders
            properties are set to true, the UseRowHeadersAsSelectors property
            specifies whether to use the number of the week, which overrides the used text/image
            selector if any.

###  RowHeaderText `String`

Gets or sets the text displayed for the row header element.

#### Remarks
Use the RowHeaderText property to provide custom text for
                the CalendarView complete row header element.This property does not automatically encode to HTML. You need
                                to convert special characters to the appropriate HTML value, unless
                                you want the characters to be treated as HTML. For example, to
                                explicitly display the greater than symbol (>), you must use the
                                value &gt;.Because this property does not automatically encode to HTML, it is possible
                to specify an HTML tag for the RowHeaderText property. For
                example, if you want to display an image for the next month navigation control, you
                can set this property to an expression that contains an
                <img> element.This property applies only if the ShowRowsHeaders
                property is set to true.

###  RowHeaderImage `String`

Gets or sets the image displayed for the row header element.

#### Remarks
This property applies only if the ShowRowHeaders property is
                set to true. If RowHeaderText is set too, its
                value is set as an alternative text to the image of the row header.When using this property, the whole image URL is generated using also the
                ImagesBaseDir
                value.Example:ShowRowHeaders = "true"ImagesBaseDir = "Img/"RowHeaderImage = "selector.gif"complete image URL : "Img/selector.gif"

###  ColumnHeaderText `String`

Gets or sets the text displayed for the column header element.

#### Remarks
Use the ColumnHeaderText property to provide custom text
                for the CalendarView complete column header element.This property does not automatically encode to HTML. You need
                                to convert special characters to the appropriate HTML value, unless
                                you want the characters to be treated as HTML. For example, to
                                explicitly display the greater than symbol (>), you must use the
                                value &gt;.Because this property does not automatically encode to HTML, it is possible
                to specify an HTML tag for the ColumnHeaderText property. For
                example, if you want to display an image for the next month navigation control, you
                can set this property to an expression that contains an
                <img> element.This property applies only if the ShowColumnHeaders
                property is set to true.

###  ColumnHeaderImage `String`

Gets or sets the image displayed for the column header element.

#### Remarks
This property applies only if the ShowColumnHeaders property
                is set to true. If ColumnHeaderText is set too,
                its value is set as an alternative text to the image of the column header.When using this property, the whole image URL is generated using also the
                ImagesBaseDir
                value.Example:ShowColumnHeaders="true"ImagesBaseDir = "Img/"ColumnHeaderImage = "selector.gif"complete image URL : "Img/selector.gif"

###  ViewSelectorText `String`

Gets or sets the text displayed for the complete
                CalendarView
                selection element in the view selector cell.

#### Remarks
Use the ViewSelectorText property to provide custom text for
                the CalendarView complete selection element in the selector
                cell.This property does not automatically encode to HTML. You need
                                to convert special characters to the appropriate HTML value, unless
                                you want the characters to be treated as HTML. For example, to
                                explicitly display the greater than symbol (>), you must use the
                                value &gt;.Because this property does not automatically encode to HTML, it is possible
                to specify an HTML tag for the ViewSelectorText property. For
                example, if you want to display an image for the next month navigation control, you
                can set this property to an expression that contains an
                <img> element.This property applies only if the EnableViewSelector
                property is set to true.

###  ViewSelectorImage `String`

Gets or sets the image displayed for the complete
                CalendarView
                selection element in the view selector cell.

#### Remarks
When using this property, the whole image URL is generated using also the
                ImagesBaseDir
                value.Example:ImagesBaseDir = "Img/"ViewSelectorImage = "selector.gif"complete image URL : "Img/selector.gif"

###  EnableMultiSelect `Boolean`

Allows the selection of multiple dates. If not set, only a single date is selected, and if any dates
            are all ready selected, they are cleared.

###  EnableNavigationAnimation `Boolean`

Enables the animation shown when the calendar navigates to a different view.

###  Skin `String`

Gets or sets the name of the skin used. All skins reside in the location set by
            the SkinsPath
            Property.

#### Remarks
For additional information please refer to the
            Visual Settings topic in this manual.

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

###  CreateChildControls

Create controls from template, fill ContentPanes and add them to Controls collection.

#### Returns

`System.Void` 

###  ResetTemplates

This method supports the Telerik RadCalendar infrastructure and
                is not intended to be used directly from your code.

#### Returns

`System.Void` 

###  FindControlRecursive

Recursively searches for a control with the specified id in the passed controls collection.

#### Parameters

#### controlID `System.String`

The id of the control to look for.

#### controlsCollection `System.Web.UI.ControlCollection`

The current Controls collection to search in.

#### Returns

`System.Web.UI.Control` The found control or null if nothing was found.

###  FindControl

When using templates, their content is instantiated and "lives" inside the
               Controls
               collection of RadCalendar class. To access the controls instantiated from the
               templates they must be found using this method (RadCalendar implements
               INamingContainer interface).

#### Parameters

#### id `System.String`

The ID of the searched control.

#### Returns

`System.Web.UI.Control` Reference to the found control or null if no control was found.

###  LoadViewState

Restores view-state information from a previous page request that was saved by the SaveViewState method.

#### Parameters

#### savedState `System.Object`

The saved view state.

#### Returns

`System.Void` 

###  SaveViewState

Saves any server control view-state changes that have occurred since the time the page was posted back to the server.

#### Returns

`System.Object` The saved view state.

###  RenderBeginTag

#### Returns

`System.Void` 

###  RenderEndTag

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


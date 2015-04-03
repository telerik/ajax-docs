---
title: Integration With Standard Controls
page_title: Integration With Standard Controls | UI for ASP.NET AJAX Documentation
description: Integration With Standard Controls
slug: formdecorator/integration-with-standard-controls
tags: integration,with,standard,controls
published: True
position: 3
---

# Integration With Standard Controls



## Simple HTML Elements


|  __Control__  |  __Effect__  |
| ------ | ------ |
| __Button type="Button|Reset|Submit"__ |Background-image, font-size and color for default state as well as :focus, :hover and :active|
| __Input type="Button|Reset|Submit"__ |Background-image, font-size and color for default state as well as :focus, :hover and :active|
| __Input type="Checkbox"__ |Background-image for default state and :hover|
| __Input type="Radio"__ |Background-image for default state and :hover|
| __Input type="Text|Password"__ |Background-color, font-family, font-size, color, border and rounded corners for default state. Border for :hover state|
| __Input type="File|Hidden|Image"__ |unaffected|
| __TextArea__ |Font-family, font-size, color, border and rounded corners for default state. Border for :hover state|
| __Fieldset__ |Background-image, border and rounded corners|
| __Legend__ |Font-family, font-size and color|
| __Label__ |Font-family, font-size and color|
| __H4, H5, H6__ |Font-family, font-weight, font-size and color. H4 and H5 are underlined|
| __Select__ |Background-image, background-color, font-family, font-size and color for default, :hovered and :active state.|
| __ScrollBar__ |Decorated - For more information see[this KB article](http://www.telerik.com/support/kb/aspnet-ajax/formdecorator/styling-scrollbars.aspx)|

## Standard ASP Controls


>caption Standard Toolbox Controls

|  __Control__  |  __Effect__  |
| ------ | ------ |
| __AdRotator, BulletedList, LinkButton, ImageButton,__  __ImageMap, Calendar, FileUpload, HiddenField, Image,__  __HyperLink, Label, Literal, Localize, Substitution, XML__ |unaffected|
| __Button, CheckBox, CheckBoxList, TextBox__ |

* Rendered and decorated as standard input elements

* TextBox TextMode="MultiLine" is rendered and decorated as standard TextArea element|
| __DropDownList, ListBox__ |Rendered and decorated as standard select elements|
| __MultiView, Panel, PlaceHolder, Table, Wizard__ |Controls inside are decorated|


>caption Login Toolbox Controls

|  __Control__  |  __Effect__  |
| ------ | ------ |
| __ChangePassword__ |

* Title of the control and Input labels are decorated

* Inputs and Buttons are decorated

* Rounded corners for the table|
| __CreateUserWizard__ |

* Title of the control and Input labels are decorated

* Inputs and Button are decorated

* Rounded corners for the table|
| __Login__ |

* Title of the control and Input labels are decorated

* Inputs, Button and Checkbox are decorated

* Rounded corners for the table|
| __LoginName__ |Color, border and rounded corners|
| __LoginStatus__ |Link is decorated|
| __LoginView__ |Controls inside AnonymousTemplate, LoggedInTemplate and ContentTemplate of the RoleGroups are decorated|
| __PasswordRecovery__ |

* Label of the Input is decorated

* Input and Button are decorated|


>caption Data Toolbox Controls

|  __Control__  |  __Effect__  |
| ------ | ------ |
| __ListView__ |Controls inside ItemTemplate are decorated|
| __GridView__ |

* Header - Background color, border color, font-family, font-fize, and font color

* Body - Background color, font-family and font-size. Borders are removed

* ButtonField - ButtonType=Button/Link are decorated

* HyperLinkField - Font-family, font-size and font-color are applied to the text

* CommandField - Insert/Edit/Cancel/Delete Buttons are decorated. Editing Input is decorated

* CheckBoxField - Checkboxes are decorated

* Controls inside the TemplateField are decorated|
| __DetailsView__ |

* Body - Background color, font-family and font-size. Borders are removed

* ButtonField - ButtonType=Button/Link are decorated

* HyperLinkField - Font-Family, font-size and font-color are applied to the text

* CommandField - Insert/Edit/Cancel/Delete Buttons are decorated. Editing Input is decorated

* CheckBoxField - Checkboxes are decorated

* Controls inside the TemplateField are decorated|
| __FormView__ |

* Background color, font-family, font-size and font-color

* Controls inside ItemTemplate are decorated|
| __Repeater__ |Controls inside Repeater are decorated|
| __DataList__ |Controls inside DataList are decorated|

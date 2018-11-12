---
title: Nesting RadPageLayout Elements
page_title: Nesting RadPageLayout Elements | RadPageLayout for ASP.NET AJAX Documentation
description: Nesting RadPageLayout Elements
slug: pagelayout/how-to/nesting-radpagelayout-elements
tags: nesting,radpagelayout,elements
published: True
position: 2
---

# Nesting RadPageLayout Elements



This article explains how to leverage the `CompositeLayoutColumn` functionality of **RadPageLayout**. In the example bellowyou will see how to define such a column, allowing you to have nested rows in your **RadPageLayout** declaration.

## Nesting RadPageLayout Elements

As a variation of the standard layout columns, the composite columns have a `content` element for the column's own content and a`rows` collection for nested rows. This allows you to easily alternate the orientation of the content in order to get the desired layout.Composite columns have the same attributes as the [standard RadPageLayout columns]({%slug pagelayout/structure/columns-%}).

**Example 1** shows how a composite column is used to nest different **RadPageLayout** elements, would it be a custom content or nested rows. 

**Example 1**: Nesting different layout elements.

````ASPNET
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<style type="text/css">
	.col, .row, .header, .footer {
		background-color: #78a6ab;
		border: 1px solid #cccccc;
		text-align: center;
		border-radius: 3px;
		margin: 5px 0;
		padding: 5px 10px;
		font: 14px/normal "Segoe UI", sans-serif;
	}

	.header, .footer {
		height: 50px;
	}

	.row {
		height: 70px;
	}

	.col {
		height: 150px;
	}
</style>

<telerik:RadPageLayout ID="RadPageLayout1" runat="server" GridType="Fluid" ShowGrid="false">
	<Rows>
		<telerik:LayoutRow>
			<Content>
				<div class="header">Header</div>
			</Content>
		</telerik:LayoutRow>
		<telerik:LayoutRow>
			<Columns>
				<telerik:LayoutColumn Span="3">
					<div class="col">Sidebar</div>
				</telerik:LayoutColumn>
				<telerik:CompositeLayoutColumn Span="9">
					<Content>
						<div class="row">Top Content</div>
					</Content>
					<Rows>
						<telerik:LayoutRow>
							<Columns>
								<telerik:LayoutColumn Span="12" CssClass="fix">
									<div class="row">Bottom Content</div>
								</telerik:LayoutColumn>
							</Columns>
						</telerik:LayoutRow>
					</Rows>
				</telerik:CompositeLayoutColumn>
			</Columns>
		</telerik:LayoutRow>
		<telerik:LayoutRow>
			<Content>
				<div class="footer">Footer</div>
			</Content>
		</telerik:LayoutRow>
	</Rows>
</telerik:RadPageLayout>
````



# See Also

 * [React to Viewport Change]({%slug pagelayout/how-to/react-to-viewport-change%})

---
name: telerik-documentation-kb-review-and-repair
description: "Review or repair Telerik UI for ASP.NET AJAX knowledge-base content after semantic search, using the repository's local metadata, structure, code, and link conventions."
user-invocable: false
---

# Telerik UI for ASP.NET AJAX Knowledge-Base Review and Repair

Use this skill only after `telerik-documentation-semantic-search` has produced
its handoff. Inspect first, repair only verified issues, validate the result,
and return copy-ready Markdown for a new pasted article.

## Required Inputs

Require:

- the exact semantic-search handoff;
- pasted article text or an exact article path;
- product, component, version, and acceptance criteria when known;
- whether the source is a support ticket/thread and whether solution code came
  from a Telerik engineer.

Search and edit only the current repository. Preserve unrelated user changes.
Do not expose customer names, account details, credentials, private URLs, or
other confidential information.

## Discover Local Rules

Before reviewing or editing, read the applicable:

- `.github/docs-istructions.md` and repository `README.md`;
- `_config.yml` and `docs-builder.yml` when metadata or links are involved;
- neighboring articles in `knowledge-base/`;
- any applicable repository skills or templates.

The local AJAX rules take precedence over this skill. Do not require a template
file when the repository's instructions and neighboring KBs provide the
template. Use the nearest matching article as evidence for variations such as
product-version rows, `ticketid`, and optional metadata.

## Article Input Modes

- `PastedContent`: For a distinct new article, repair and return complete
  copy-ready Markdown without creating a repository file. For an explicitly
  approved update to one clear existing owner, integrate only verified missing
  material into that owner.
- `FilePath`: Review and repair only the supplied file. Report it as changed
  only after the edit and focused validation succeed.

If ownership is ambiguous, do not edit and return `ManualReview`.

## Review Checklist

Check the complete technical content, not only metadata or the title:

1. Preserve verified problem, symptoms, cause, expected result, solution,
   APIs, code, configuration, versions, and limitations.
2. Use the AJAX KB metadata supported by local evidence. The usual fields are
   `title`, `page_title`, `description`, `slug`, `tags`, `published`, `type`,
   `category: knowledge-base`, and `res_type: kb`; add `ticketid` only when a
   real ticket reference applies.
3. Require `## Environment`, `## Description`, `## Solution`, and `## See
   Also`. Keep troubleshooting-only sections such as `## Error Messages`,
   `## Steps to Reproduce`, and `## Cause` only when supported by the input.
4. Match the exact Environment table shape and product wording of the closest
   local KB. Do not invent a product version or environment value.
5. Use repository-supported fenced markers: `ASP.NET`, `C#`, `VB`,
   `JavaScript`, `CSS`, `XML`, or `SQL`. Put ASP.NET markup before C#, then VB,
   followed by client-side code where applicable. Preserve consecutive C#/VB
   blocks when they are intended to render as tabs.
6. Keep snippets complete enough to understand the fix, but do not paste a
   whole unrelated page or project. Do not invent a partial-snippet marker;
   use one only when local evidence defines it.
7. Use `{%slug verified/path%}` for internal references. Verify every slug in
   the repository before using it. Keep external links absolute and verified.
8. Keep article filenames and KB slugs descriptive and consistent with nearby
   `knowledge-base/` articles. Do not change a valid slug without a verified
   reason.
9. Remove customer-specific details and redact credentials or private URLs.
10. Preserve a valid existing solution's context, approach, and code. Apply
    only the smallest approved repair.

## Repair And Validation

Repair only concrete metadata, structure, rendering, link, clarity, or
verified technical issues. Do not silently rewrite an unverified workaround
or product claim. After each edit, run the narrowest available repository check
for front matter, Markdown, links, or the docs build. At minimum use
`git diff --check` when a file was edited; report only commands that actually
ran. Do not create validator scripts, reports, or other process artifacts.

## Result

Return:

```text
Result: <PASS | PASS WITH FOLLOW-UP | FAIL | BLOCKED>
Input: <PastedContent | FilePath> | <article path or new article>
Changed: <one-line repair summary or none>
Validation: <commands and outcomes>
Next: <one exact follow-up or none>
Risks: <only omitted, unverified, or blocking claims; omit when none>
```

For `PastedContent` with a new article, include the complete validated Markdown
after the result. For an existing file, state its path only after focused
validation succeeds. If repair is blocked, return `ManualReview` and name the
exact blocker.
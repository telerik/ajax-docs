---
name: telerik-documentation-kb-review-and-repair
description: "Review and repair a generated Telerik KB draft for an accepted support-ticket candidate against repository rules, using its semantic coverage handoff."
---

# Telerik Knowledge-Base Review and Repair

Use this skill after semantic coverage search whenever a generated KB may be
created or an existing knowledge-base article may be updated. It is the single
KB-specific post-search action: inspect first, repair only when needed, validate
the result, and return copy-ready Markdown for new pasted articles.

## Security Content Prohibition

Security-related content, including CVEs, vulnerabilities, exploits, security
mitigations, and security advisories, is read-only. Never create a security
article and never edit, update, or append to an existing security article. For
security content, stop after anonymization, article-type classification, and
coverage review. Do not return copy-ready security article content or report a
security documentation file as updated.

## Required Inputs

Require:

- the exact pointed documentation repository path;
- either the generated article text or the exact article path;
- the semantic-search handoff;
- the ticket's candidacy decision and concise evidence-based reason;
- whether the source is a support ticket/thread or general product information;
- product, component, version, and acceptance criteria when known.

Only review drafts for `GOOD_CANDIDATE` tickets. If the handoff says `COVERED`,
`NOT_A_CANDIDATE`, or `SECURITY_REVIEW_ONLY`, do not generate, edit, or return
article content. For `MANUAL_REVIEW`, stop before editing or approving claims.
Return the reason and one precise next action.

If the source is a support ticket or thread, identify whether the proposed
solution code came from a Telerik engineer. Treat that code and its technical
guidance as strong product evidence unless local source, tests, or documentation
directly contradict it. Do not remove working ticket-provided code merely
because it is not already documented.

Search and edit only the pointed repository. Preserve unrelated user changes.
Do not expose customer names, account details, credentials, private URLs, or
other confidential information in reports or generated content.

## Article Input Modes

Use one of these modes and state it in the result:

- `PastedContent`: The KB was supplied as text. If the semantic handoff
   recommends `UpdateExistingArticle` and identifies one clear owner path,
   review the pasted content against that owner and update the owner file with
   the verified material. If the handoff recommends `CreateNewArticle`, review
   and repair the pasted content, validate it, and return the complete article
   as copy-ready Markdown. Do not create a repository file for a new article.
- `FilePath`: The KB path was supplied. Review and repair that file in the
   pointed repository, then report the exact edited path.

An existing documentation owner found by semantic search is the update target
when the handoff recommends `UpdateExistingArticle`, gives one unambiguous
path, and the supplied information is relevant to that owner. Do not overwrite
the owner with a KB draft; integrate only the verified, missing material.
If ownership is ambiguous, do not edit and return `ManualReview`.

Run this review independently for each accepted ticket in the selected date
period, using that ticket's own handoff and draft. Do not merge unrelated ticket
resolutions into one article. Keep a clear per-ticket result so the workflow
can continue to the next ticket without losing blocked or failed items.

## Discover Local Rules First

Before reviewing or editing, search the pointed repository for and read the
applicable:

- `AGENTS.md`, `CONTRIBUTING.md`, and repository README files;
- `.github/*instructions*.md` and `.github/*kb*.md`;
- applicable `.github/skills/**/SKILL.md` files;
- KB templates, docs configuration, navigation, and neighboring KB articles.

Record the exact files read. Local rules override this skill. If the applicable
KB rules or a required template cannot be found, stop before editing and report
the limitation.

When the pointed repository does not provide a stronger KB template, read the
matching local reference before reviewing or drafting:

- [How-to KB template](references/kb-template-how-to.md)
- [Troubleshooting KB template](references/kb-template-troubleshooting.md)

Use the how-to template for goal-oriented guidance and the troubleshooting
template for problem-resolution guidance. Adapt metadata, link syntax, and
renderer-specific elements to the pointed repository; do not copy unsupported
fields or template comments verbatim.

## Review Checklist

Check the article against the discovered rules, product evidence, and
semantic-search handoff. Compare the full technical content, including problem,
symptoms, cause, expected result, solution prose, APIs, code, configuration,
errors, versions, and limitations. Do not decide coverage from title, slug,
ticket ID, or metadata alone. At minimum, check:

1. Use the supplied article template's `ticketid` field for ticket-driven
   content when applicable; leave it blank for non-ticket content. Keep ticket
   IDs and support-origin details out of reader-visible article text.
2. Mark incomplete, illustrative, placeholder, pseudo-code, or partial-setup
   fenced snippets with the repository-required `.skip-repl` marker.
3. Remove accidental outer wrappers such as a full-article ```` ```markdown
   wrapper and normalize only malformed fence boundaries. The article must
   begin with front matter; do not leave the literal word `markdown` as an
   outer fence label or reader-visible article text.
4. Enforce the local KB slug convention. When the repository uses the stated
   convention, use `component-kb-title` or `common-kb-title` with a reliable
   component prefix; never invent a component prefix.
5. Render the `Environment` section with the exact table structure, spacing, and
   fields used by the pointed repository's KB template or neighboring articles.
   Preserve nested HTML indentation: child tags must be indented farther than
   their parents (`tbody` inside `table`, `tr` inside `tbody`, and `td` inside
   `tr`), with closing tags aligned to their matching opening tags. Do not
   flatten or reformat the table structure.
6. Use a slug-based link for an internal Telerik documentation target only when
   the exact target exists in the pointed repository and its slug has been
   verified. Keep absolute URLs for external targets or internal targets that
   are not present in the pointed repository; never invent a slug.

Also check metadata, section order, Core/MVC conditions, API claims, examples,
links, headings, and required See Also content. Do not apply a feedback rule
when local evidence contradicts it; record the conflict for review.

## Public Article Quality

- Write standalone public product documentation. Never mention support staff,
  support replies, ticket reporters, or phrases such as "support confirmed" in
  the title, description, headings, prose, examples, or reader-visible links.
  Use `ticketid` only as template metadata when applicable.
- Perform a deep coverage and candidacy review before authoring. A support
  answer or planned defect fix is not by itself a KB candidate: require a
  reusable public problem, a verified complete resolution, a meaningful gap in
  product documentation, and a clear value beyond release notes.
- Populate applicable Environment fields with verified facts, including the
  exact product version or supported range. Never use placeholders such as
  "not specified," "current versions," or "verify availability." If reliable
  evidence does not establish the version, stop with `ManualReview`.
- Follow the matching template exactly. Do not add summary tables or replace
  the template's required sections with an improvised structure.
- When returning complete article Markdown, use an outer code fence longer
  than any fence inside the article and verify that the Markdown remains
  intact.

## Repair Rules

If the article fails a check, update the same article using the discovered local
rules and the existing `telerik-documentation-workflow`. Keep the repair focused
on verified information. Do not silently rewrite an unverified workaround,
customer-specific incident, or product claim. Return to manual review when the
semantic handoff or product evidence does not support the requested fix.

After repairing, run the narrowest repository-native Markdown, front matter,
link, or docs check available in the discovered instructions. Rerun the focused
check after each repair. Do not create validator scripts, process reports, or
other artifacts in the target repository.

For a new article, validation is required before output. Return the article
only after metadata, Environment formatting, section structure, code fences,
links, local slug syntax, and supported technical claims pass the discovered
checks. Return the complete article in a Markdown code fence so it can be
copied directly into the documentation repository.

## Result

Return one compact result containing:

```text
Ticket: <ticket ID or none> | <GOOD_CANDIDATE or input classification>
Result: <PASS | PASS WITH FOLLOW-UP | FAIL | BLOCKED>
Input: <PastedContent | FilePath> | <article path or new article>
Changed: <one-line repair summary or none>
Validation: <commands and outcome>
Next: <one exact follow-up or none>
Risks: <only omitted, unverified, or blocking claims; omit when none>
```

Mention local rule files only when the result is `FAIL`, `BLOCKED`, or a file
was edited. Do not repeat the article, list every checklist item, or restate
the semantic-search evidence.

For `PastedContent` with `CreateNewArticle`, include the complete validated
Markdown after the result summary. For `PastedContent` with
`UpdateExistingArticle`, report the exact owner path after editing it. For
`FilePath`, state that the file was edited only after the edit and focused
validation succeed. If a repair is blocked, return `ManualReview` and explain
the exact blocker instead of asking for unrelated follow-up.

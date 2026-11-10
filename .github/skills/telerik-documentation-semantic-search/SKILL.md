---
name: telerik-documentation-semantic-search
description: "Run an exhaustive, read-only product-documentation coverage search and recommend creating an article, updating an exact owner, or taking no documentation action."
---

# Telerik Documentation Semantic Search

Use this skill for repository-wide coverage research before authoring or
editing, and again for every generated draft. Assess one ticket or draft at a
time. It produces an evidence-backed handoff; it never writes documentation.

## Inputs

Require:

- The exact local documentation repository path.
- The supplied technical information, question, draft, or full ticket
  resolution. For queue triage, use the ticket conversation, not only its queue
  title or tags.
- Product, component, and version when known.
- Whether the source is a support ticket/thread and whether solution code was
   supplied by a Telerik engineer.
- The ticket ID and any tags visible in the supplied ticket details, when
  available. Treat tags as non-authoritative signals, not candidacy decisions;
  candidacy must be based on the conversation and repository evidence.

Search only the supplied repository. Do not search sibling repositories, the
workspace, or external sites.

## Complete Coverage Procedure

1. Confirm that the path exists and identify its documentation root.
2. Read repository instructions and use navigation, configuration, metadata,
   and folder structure to identify the complete documentation corpus and the
   relevant product's actual content roots. Include applicable product and
   control guides, client/server API references, conceptual and getting-started
   guides, setup/configuration, integration/deployment, examples/demos,
   upgrade/migration, KB articles, and shared documentation used by that
   product. Record which areas are in scope; do not assume one folder contains
   the complete product documentation.
3. Extract every distinct user need and every factual or technical claim from
   the supplied conversation or draft, including symptoms, cause, expected
   result, resolution steps, APIs, code behavior, configuration, versions,
   errors, limitations, and prerequisites. Do not cap the number of claims.
4. Search each applicable documentation area using semantic queries when
   available and lexical searches for exact product/component names, API and
   code symbols, error text, configuration keys, distinctive phrases, and
   synonyms. Search filenames, headings, body text, code/examples, navigation,
   and metadata, but never treat metadata alone as coverage evidence.
5. Enumerate all search results, including additional pages or batches, and
   deduplicate paths. Do not use a fixed query, result, file, or claim limit.
   If a tool imposes a result limit, narrow or paginate each query until all
   matches are accounted for. Search product documentation outside the KB;
   KB-only searches are insufficient.
6. Read the relevant sections in every plausible matching owner, including
   neighboring examples and linked canonical pages needed to verify context.
   A search hit or filename is only a lead, not evidence. Compare every claim
   independently and mark it covered only when the content answers the same
   technical need and outcome.
7. For every generated draft, repeat the complete coverage pass against the
   draft itself, even if the earlier ticket search found no new claims. Map
   each draft claim to an exact owner and section, or record it as an
   unaddressed gap; do not rely on title/slug similarity or the earlier
   handoff alone.
8. When the source is a support ticket/thread, treat solution code and technical
   guidance explicitly provided by a Telerik engineer as strong product
   evidence. Do not downgrade it merely because documentation or tests do not
   repeat it. Flag direct contradictions against local source, tests, or docs.
9. Assign exactly one documentation action when the search is complete:
   - `CreateNewArticle` when no exact owner covers the need and the public,
     reusable resolution is technically supported.
   - `UpdateExistingArticle` when one exact non-security owner is missing or
     has incorrect verified information; name that owner and the specific
     changes needed.
   - `NoAction` when the information is already adequately covered, the request
     is unsuitable for public documentation, or the content is security-related.
10. Security-related content always maps to `NoAction`; never recommend
    generating, editing, or updating security content. Do not use ticket tags
    alone to determine an action.
11. If the repository, a relevant source area, or all search results cannot be
    inspected, mark coverage `INCOMPLETE`, list the exact limitation, and leave
    the action unassigned. Do not turn zero search results into proof of a gap
    and do not claim 100% certainty. State the searched corpus and any limits.
12. Return the compact handoff below, with complete coverage evidence and the
    exact owner/gap mapping for generated drafts.

If semantic search is unavailable, perform the same area-by-area search using
repository text search and label the evidence `lexical`. A semantic index is
not a substitute for checking lexical hits or the complete set of applicable
documentation areas.

## Handoff

Return only this compact handoff:

```text
Action: <CreateNewArticle | UpdateExistingArticle | NoAction | unassigned>
Coverage: <COMPLETE | INCOMPLETE> | <product documentation areas and result set checked>
Context: <product/component> | <version> | <input type> | <repository>
Evidence: <semantic, lexical, or both> | <owner path and section, or specific gap>
Claims: <every draft claim mapped to owner/section or marked as a gap; omit for pre-draft search>
Next: <one exact action; include the blocker if coverage is incomplete>
Confidence: <high | medium | low, with brief reason>
```

Do not repeat the input or list irrelevant matches. For generated drafts, the
claim-to-owner/gap mapping is required and must cover every meaningful claim.

Do not draft article text, edit files, or approve publication in this stage.

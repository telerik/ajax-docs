---
name: telerik-documentation-semantic-search
description: "Run a read-only coverage search and assess whether a Telerik support ticket is a strong knowledge-base candidate, already covered, unsuitable, or needs manual review before drafting."
---

# Telerik Documentation Semantic Search

Use this skill as a separate research and candidacy stage before any authoring or
editing. It can assess one ticket at a time during a period-based queue review. It
produces an evidence-backed handoff; it never writes documentation.

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

## Fast Search Procedure

1. Confirm that the path exists and identify its documentation root.
2. Read only the nearest repository instructions needed to route the search.
3. Create no more than five concise query variants:
   - the complete user goal, symptom, cause, and expected result;
   - the complete solution concepts, API names, code symbols, options, and
     configuration values;
   - product, component, version, errors, workaround, and limitation;
   - distinctive technical phrases and terminology from the supplied prose;
   - related repository vocabulary discovered during the first searches.
4. Search the full pointed product documentation repository, including
   applicable product and control guides, API references, getting-started and
   configuration topics, examples, navigation, and knowledge-base articles.
   Product documentation outside the KB is a required coverage source; a
   search limited to `knowledge-base/` or KB articles is insufficient. Search
   filenames, headings, prose, APIs, code symbols, snippets, and navigation.
   Search behavior and solution content, not only title, slug, ticket ID, or
   other metadata. Deduplicate results before reading them.
5. From the repository-wide search, read no more than six strongest candidate
   files across product documentation and KB. A filename or search hit is not
   evidence until the relevant content is read.
6. Compare no more than eight meaningful information fragments from the input.
7. Compare each meaningful fragment independently. A candidate covers the
   information only when its prose or runnable/example content answers the same
   technical need; metadata or a keyword hit is not sufficient.
8. When the source is a support ticket/thread, treat solution code and technical
   guidance explicitly provided by a Telerik engineer as strong product
   evidence. Do not downgrade it merely because documentation or tests do not
   repeat it. Flag direct contradictions against local source, tests, or docs.
9. Assess candidacy based on the full product documentation and independently
   of ticket tags. A ticket is a strong candidate only when it has a reusable
   user problem or goal, a sufficiently complete and technically supported
   resolution, a focused article scope, and a meaningful gap or update in the
   repository. A `KB Candidate` tag is a clue, not proof; absence of the tag is
   not grounds for rejection. Do not infer a documentation gap from an empty
   KB-only search.
10. Use `COVERED` when one exact subject owner anywhere in the product
    documentation answers the same user need and outcome adequately. Use
    `NOT_A_CANDIDATE` for customer-specific or
    transactional issues, duplicates, unresolved questions without an
    actionable supported resolution, or low-value material. Use
    `MANUAL_REVIEW` for incomplete, contradictory, or product-verification
    claims. Security-related content is read-only and must never be recommended
    for article generation or editing.
11. For a distinct, self-contained, technically credible resolution, recommend
    `CreateNewArticle` unless one exact product-documentation or KB owner is a
    better place for the verified addition; recommend `UpdateExistingArticle`
    only with one unambiguous owner path. Use `Skip` for covered or unsuitable
    tickets.
12. Return the compact handoff below, including the strongest existing owner,
    candidacy decision, and claims that require product verification.

If semantic search is unavailable, use focused repository text search, label the
result `lexical`, and lower confidence. A zero-result search is not proof of a
gap.

## Handoff

Return only this compact handoff:

```text
Decision: <GOOD_CANDIDATE | COVERED | NOT_A_CANDIDATE | MANUAL_REVIEW | SECURITY_REVIEW_ONLY> | <CreateNewArticle | UpdateExistingArticle | Skip | ManualReview> | <Confidence>
Context: <product/component> | <version> | <input type> | <repository>
Coverage: <product-documentation areas searched; KB searched if relevant>
Evidence: <semantic or lexical> | <strongest owner or none>
Next: <one exact next action>
Risks: <only unverified, contradictory, or blocking claims; omit when none>
```

Do not repeat the input, list every match, or enumerate covered fragments.
Include one concise reason for the candidacy decision and additional evidence
only when it changes the recommended action.

Do not draft article text, edit files, or approve publication in this stage.

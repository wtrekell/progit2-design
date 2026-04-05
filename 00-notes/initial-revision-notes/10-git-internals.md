# Chapter 10: Git Internals — UX Designer Revision Notes

## Overview
Chapter 10 introduces Git's internal architecture. Currently written for infrastructure engineers, not designers. The core insight: revision should reframe internals through data recovery, collaboration reliability, and practical troubleshooting — not cryptography and protocol mechanics.

---

## Section: Plumbing and Porcelain

### Priority: HIGH (reframe, don't cut)

- Add designer-focused opening: "While designers use porcelain commands (commit, push, pull), understanding plumbing reveals how Git prevents data loss — critical when collaborating on high-stakes design assets."
- Reframe `.git` directory exploration: "When you accidentally delete a branch or overwrite changes, Git hasn't lost your work — it's just not visible through normal commands."

---

## Section: Git Objects

### Priority: HIGH (simplify heavily)

- Replace "content-addressable filesystem" with design analogy: "Every component gets a unique fingerprint based on its exact appearance. If the button design is identical in two versions, Git recognizes it's the same object."
- Replace `test.txt` with design-specific examples (icon versions, token snapshots)
- Remove or drastically simplify Ruby SHA-1 object storage section (pure cryptography, zero design relevance)
- Expand tree objects with design context: trees represent complete file structure at a moment — "the folder structure in your project snapshot"

---

## Section: Git References

### Priority: HIGH

- Reframe: "Branches are just labels — like naming layers in Figma"
- Simplify HEAD: "HEAD is 'where you are now.' When you switch branches, HEAD updates."
- Enhance tags with design example: "Tag your design system as `v2.0` when releasing updated component library"
- Add collaboration context to remotes: "When you push to GitHub, `origin/main` is your local tracking branch — fetch to sync"

---

## Section: Packfiles

### Priority: MEDIUM-HIGH

- High relevance for designers with large files — connect to clone/push performance
- Add opening: "When you repeatedly modify a large design file, Git stores one complete version and compressed change records — keeping your repo lean"
- Replace `repo.rb` with `icon-set.svg` or `design-tokens.json`
- Clarify `git gc` is automatic — designers don't need to run it manually
- Add callout: "If your design repo becomes >500MB, consider Git LFS, splitting files, or archiving old versions"

---

## Section: Maintenance and Data Recovery

### Priority: MEDIUM-HIGH (highest practical relevance)

- Add reassurance opening: "Accidentally deleted a design commit? Git typically preserves your work for weeks via the reflog."
- Keep reflog walkthrough mostly intact — add scenario header: "You force-reset master, losing recent design changes"
- Simplify fsck: "If reflog is deleted, `git fsck --full` finds dangling commits. Create a branch from one to recover."
- Restructure large object removal: move to "Advanced" section, explain alternatives first (`.gitignore`, Git LFS, delete-and-recreate branch)
- Add "Best Practices for Preventing Data Loss" subsection

---

## Section: Transfer Protocols

### Priority: LOW-MEDIUM

- Make optional for designers: "This section is for advanced troubleshooting. Most designers can skip this."
- Replace protocol details with practical troubleshooting: "Why does `git clone` fail?", "Why does push hang?", "SSH vs. HTTPS?"
- Simplify dumb protocol: "Rarely used today; all modern hosting uses smart protocol"

---

## Section: The Refspec

### Priority: MEDIUM

- Add designer-focused opening: "Refspecs define which branches you fetch. Useful for managing large multi-branch design systems."
- Add design example: "Your design system has 20 branches (one per component). Fetch only `main` and `buttons-v2`."

---

## Section: Environment Variables

### Priority: LOW

- Keep only designer-relevant vars: `GIT_EDITOR`, `GIT_TRACE` (debugging), `GIT_SSH_COMMAND`
- Remove pathspecs, advanced networking, miscellaneous
- Add debugging scenarios: "My `git clone` hangs — use `GIT_TRACE=true`"

---

## Revision Priority Summary

| Section | Priority | Key Change |
|---------|----------|------------|
| Plumbing & Porcelain | HIGH | Add "why" context for data recovery |
| Objects | HIGH | Replace examples; cut Ruby SHA-1; emphasize immutability |
| References | HIGH | Clarify branches as pointers; design collaboration examples |
| Packfiles | MEDIUM-HIGH | Connect to performance; use design asset examples |
| Maintenance & Recovery | MEDIUM-HIGH | Expand reassurance; simplify walkthroughs |
| Transfer Protocols | LOW-MEDIUM | Make optional; add troubleshooting context |
| Environment Variables | LOW | Keep only designer-relevant vars |
| Refspec | MEDIUM | Add design system branch example |

## Pedagogical Improvements

1. Lead with "Why" not "What" — each section should open with why designers care
2. Use consistent design-focused examples throughout (Figma, Sketch, tokens, component libraries)
3. Add reassurance about Git's safety features (reflog, immutability)
4. Reduce cognitive load — cut or defer highly technical content

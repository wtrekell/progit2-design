# Appendix C: Git Commands — UX Designer Revision Notes

## Overview
Appendix C is a reference listing of Git commands grouped by purpose. For designers, the key revision is to reorganize by workflow (not command taxonomy), highlight the ~15 essential commands, cut irrelevant sections (email workflows, plumbing), and add design-specific scenarios.

---

## Command Relevance Tiers

### CRITICAL (must understand)
`git init`, `clone`, `branch`, `checkout`, `add`, `commit`, `status`, `log`, `push`, `pull`, `merge`, `tag`, `stash`

### IMPORTANT (should know)
`git diff`, `reset`, `rm`, `remote`, `fetch`, `show`, `revert`, `clean`

### NICE-TO-HAVE (contextual)
`git cherry-pick`, `bisect`, `grep`, `blame`, `difftool`, `mergetool`, `config`

### IRRELEVANT (remove for designer edition)
`git am`, `apply`, `format-patch`, `send-email`, `request-pull`, `imap-send` (email workflows — 48 lines to cut), `git svn`, `fast-import` (external VCS — 16 lines), `ls-files`, `ls-remote`, `rev-parse` (plumbing — 12 lines), `git fsck`, `reflog`, `filter-branch` (administrative)

---

## Structural Recommendation

Reorganize from command taxonomy to **workflow-based structure:**

1. **Getting Started** (init, clone, config)
2. **Daily Design Work** (branch, checkout, add, commit, status, diff)
3. **Collaborating** (push, pull, fetch, merge, stash)
4. **Design System Releases** (tag, archive)
5. **Troubleshooting** (reset, revert, log, blame, show)
6. **Advanced** (rebase, cherry-pick, bisect, etc.)

---

## Key Revisions by Section

**Setup and Config (lines 19-88):**
- Cut massive editor config table (32 lines) — replace with one-liner linking to Chapter 1

**Basic Snapshotting (lines 123-222):**
- Reframe `git add`: "Select which artboards/components to include in your export — only staged changes get saved"
- Add design analogy for diff: "Side-by-side component comparison, like Figma's before/after"

**Branching and Merging (lines 223-313):**
- Expand `git merge` to one paragraph: "When your design iteration is ready, `git merge` combines it back into main. Example: merge `feature/dark-mode` into production design."
- Add design review mention before merging

**Sharing and Updating (lines 315-387):**
- Reframe `git pull`: "Download the latest design changes from the team repo and merge them into your local branch. Use every morning to stay synchronized."

**Inspection and Comparison (lines 389-414):**
- Reframe `git log`: "See your design evolution — use `--oneline --graph` to visualize parallel designer work"
- Reframe `git blame`: "Find out who changed a specific design element"

**Debugging (lines 416-438):**
- Reframe as "understanding your design history" not "debugging code"

**Email Workflows (lines 472-519):**
- DELETE entirely — replace with: "Modern teams use GitHub/GitLab Pull Requests. See Chapter 6."

**External Systems (lines 520-535):**
- DELETE — irrelevant unless migrating from SVN

**Plumbing Commands (lines 570-581):**
- DELETE — add note: "For advanced internals, see Chapter 10"

---

## Missing Content for Designers

1. **`.gitignore` for design workflows** — exclude temp files, exports, dependencies
2. **Design file merge conflicts** — "Design files conflict differently than code. Merge tools struggle with binary formats."
3. **Commit message conventions** — design-specific examples and prefixes
4. **Branching strategy** — main (production), feature/ (WIP), experimental/ (exploration)
5. **Recovering accidentally deleted designs** — designer-friendly reflog guidance
6. **Quick reference table** — 10 essential commands mapped to designer use cases

---

## Estimated Impact
- Cut ~80 lines of irrelevant content
- Reduce from ~582 lines to ~350 lines
- Significantly improve clarity and relevance for UX designers

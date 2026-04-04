# Appendix C: Git Commands — Section Outline

> **Storyline phase**: Reference
> **Characters**: All (referenced by chapter)
> **Key event**: Workflow-based reorganization of command reference

---

## Structural Change: Reorganize by Workflow

Replace the current taxonomy-based organization (Setup, Snapshotting, Branching, Sharing, Inspection, Debugging, Patching, Email, External, Admin, Plumbing) with workflow-based grouping that mirrors how the SketchSpark team actually uses Git.

---

## New Structure

### 1. Starting a Project (~30 lines)
- `git init` — Create a new repository (Nora, Ch2)
- `git clone` — Copy an existing repository (Sam joining, Ch3)
- `git config` — Set your name, email, editor, commit template (Ch1, Ch8)

### 2. Daily Design Work (~60 lines)
- `git status` — What's changed since my last commit?
- `git add` — Select files to include in the next commit
- `git add -p` — Select specific changes within a file (Nora, Ch7)
- `git commit` — Save a checkpoint with a message
- `git diff` — What exactly changed? (text files: detailed; binary: limited)
- `git stash` — Set aside work-in-progress temporarily (Sam, Ch7)
- `git rm` — Remove a file from tracking
- `git mv` — Rename or move a tracked file

### 3. Exploring & Branching (~50 lines)
- `git branch` — List, create, or delete branches
- `git checkout` / `git switch` — Move to a different branch
- `git merge` — Combine one branch into another
- `git rebase` — Replay commits onto a different base (Sam, Ch3)
- `git cherry-pick` — Copy a single commit to another branch (Ch5)

### 4. Collaborating (~50 lines)
- `git remote` — Manage connections to shared repositories
- `git push` — Send your commits to the shared repository
- `git pull` — Download and merge teammates' changes
- `git fetch` — Download without merging (check first, merge later)
- `git submodule` — Manage nested repositories (Kai's pipeline, Ch7)

### 5. Reviewing History (~40 lines)
- `git log` — See commit history (use `--oneline --graph` for visual overview)
- `git log -S "keyword"` — Find when a specific term was added or removed
- `git show` — Display a specific commit's contents
- `git blame` — Find who last changed each line (Priya, Ch7)
- `git diff` (between branches) — Compare two branches side by side

### 6. Shipping a Release (~25 lines)
- `git tag` — Mark a commit as a release (v0.1-concept, v0.5-alpha, v1.0)
- `git archive` — Create a distributable zip/tar without Git history
- `git describe` — Generate a version string from the nearest tag

### 7. Fixing Mistakes (~40 lines)
- `git restore` — Discard uncommitted changes to a file
- `git restore --staged` — Unstage a file without losing changes
- `git reset --soft HEAD~1` — Undo the last commit, keep changes staged (Sam, Ch7)
- `git reset --mixed HEAD~1` — Undo the last commit, unstage changes
- `git revert` — Create a new commit that undoes a previous commit (safe for shared branches)
- `git reflog` — Find lost commits after a destructive operation (Nora, Ch10)
- `git clean` — Remove untracked files (caution: irreversible)

### 8. Managing Large Files (~15 lines)
- `git lfs install` — Enable Git LFS in a repository
- `git lfs track "*.psd"` — Track large files with LFS
- `git lfs migrate` — Move existing large files to LFS storage
- Note: "Essential for design projects with illustrations, PSDs, or high-res exports >10MB."

---

## Sections to Cut

| Original Section | Lines | Action |
|-----------------|-------|--------|
| Email (am, apply, format-patch, send-email, request-pull, imap-send) | ~48 | DELETE — "Modern teams use GitHub/GitLab Pull Requests. See Chapter 6." |
| External Systems (svn, fast-import) | ~16 | DELETE — "See Chapter 9 if migrating from SVN." |
| Plumbing (ls-files, ls-remote, rev-parse) | ~12 | DELETE — "For advanced internals, see Chapter 10." |
| Administration (filter-branch, fsck, reflog, gc) | ~20 | MOVE reflog to "Fixing Mistakes"; delete rest or link to Ch10 |

## Format Changes

- Each command includes: 1-line description + chapter reference where it appears in the storyline
- Commands link back to their chapter so readers can revisit the full context
- Add relevance indicator: **Essential** (use daily), **Important** (use weekly), **Advanced** (use occasionally)

---

## Estimated Impact
- Cut ~80 lines of irrelevant content (email, external, plumbing)
- Add ~15 lines (LFS section)
- Reorganize remaining ~350 lines into workflow groups
- Net: ~285 lines, significantly more navigable

# Chapter 10: Git Internals — Section Outline

> **Storyline phase**: Scale & Recovery
> **Characters**: Nora, Sam
> **Key event**: Sam force-resets `main` before launch; Nora recovers via reflog

---

## Section: Plumbing and Porcelain (`plumbing-porcelain.asc`)
**Original**: 37 lines | **Action**: REWRITE

### Rewrite
- Open with the incident: "Two days before SketchSpark's v1.0 launch, Sam accidentally runs `git reset --hard HEAD~3` on `main`. Three days of work disappear — Nora's release notes, Priya's final marketing illustrations, Kai's generation speed improvement."
- Then: "To understand why the work isn't actually gone, you need to understand how Git stores data. This chapter looks under the hood — not to teach you to build Git, but to give you confidence that your work is safe."
- Frame plumbing vs. porcelain: "Everything you've done so far — commit, push, merge — is porcelain. The plumbing underneath is what makes recovery possible."

---

## Section: Git Objects (`objects.asc`)
**Original**: 437 lines | **Action**: REWRITE + TRIM HEAVILY

### Keep
- Three object types: blob, tree, commit
- Concept of content-addressable storage
- How commits chain together

### Rewrite
- Replace "content-addressable filesystem" with: "Every file version gets a unique fingerprint based on its exact content. If the same icon appears in two branches, Git stores it once."
- Replace `test.txt` examples with SketchSpark files:
  - Blob = the contents of `product-brief.md` at a specific moment
  - Tree = the `screens/results/` directory listing at a specific moment
  - Commit = a snapshot of the entire project, plus who made it and why
- **Nora explains to Sam**: "When you committed those release notes, Git created objects for every file. When you reset `main`, Git didn't delete those objects — it just moved the `main` pointer to an older commit. The objects are still in the database."

### Cut
- Ruby SHA-1 object creation walkthrough — zero design relevance
- Low-level `git cat-file` details — keep one example showing a commit object
- Manual tree creation with `git update-index` / `git write-tree`

### Target
- ~150 lines (down from 437)

---

## Section: Git References (`refs.asc`)
**Original**: 209 lines | **Action**: REWRITE

### Keep
- Branches as pointers to commits
- HEAD as pointer to current branch
- Tags as permanent pointers
- Remote references

### Rewrite
- "Branches are just labels pointing to commits — like sticky notes on a timeline. Moving them — even destructively — doesn't destroy the commits they pointed to."
- "When Sam ran `reset --hard`, he moved the `main` sticky note backward. The commits it used to point to are still there, just no longer reachable through `main`."
- Tags: "`v0.5-alpha` is a permanent label. Unlike branches, tags don't move. They're anchors in your project history."
- Simplify HEAD to: "HEAD is 'where you are now.' It usually points to a branch name, which points to a commit."

---

## Section: Packfiles (`packfiles.asc`)
**Original**: 163 lines | **Action**: REWRITE

### Rewrite
- Open: "Priya notices `git push` takes 90 seconds. The repo has grown — thousands of files across months of work."
- Explain: "Git packs similar objects together using delta compression. When Priya commits a slightly modified illustration, Git stores one complete version plus a compact diff — not two full copies."
- But: "Very large binary files (her 50MB PSDs) resist delta compression. That's why Git LFS exists — it stores large files outside the main object database."
- Simplify `git gc`: "Git does this automatically. You don't need to run it manually."
- Replace `repo.rb` example with `design-tokens.json` and `illustrations/onboarding/step-1.png`

---

## Section: Maintenance and Data Recovery (`maintenance.asc`)
**Original**: 353 lines | **Action**: REWRITE — THIS IS THE CHAPTER'S CLIMAX

### Keep
- Reflog walkthrough
- `git fsck` for deeper recovery
- Auto-gc concept

### Rewrite
- **Reflog recovery** — the centerpiece:
  ```
  git reflog
  ```
  Nora sees every position HEAD has been in. Three entries up: the commit before Sam's reset.
  ```
  git branch recovery a1b2c3d
  git checkout recovery
  git log --oneline -5
  ```
  All three commits are there. Merge recovery into main.
- Frame: "Git's reflog keeps a record of every label movement for at least 30 days. Even if Sam had deleted the branch, the reflog would still know where it pointed."
- **fsck**: "If the reflog is empty (rare — requires manual deletion), `git fsck --full` finds dangling commits. Create a branch from one to recover."
- **Large object removal**: Simplify to concept + alternatives: `.gitignore` prevention, Git LFS, `git filter-repo` for cleanup. Link to detailed reference.

### New
- Add "Best Practices for Preventing Data Loss" sidebar:
  1. Commit frequently (committed work is safe; uncommitted isn't)
  2. Never use `--hard` on shared branches
  3. Push regularly (remote is a second backup)
  4. Use branch protection to prevent accidental force-pushes to `main`

---

## Section: The Refspec (`refspec.asc`)
**Original**: 145 lines | **Action**: TRIM TO ~40 LINES

### Keep
- Basic refspec concept
- Selective fetching

### Rewrite
- "Refspecs define which branches you fetch. Useful if your project has 20 branches and you only need `main` and `feature/screens`."
- One example, then link to reference for details

### Cut
- Pushing refspecs detail
- Deleting references via refspec

---

## Section: Transfer Protocols (`transfer-protocols.asc`)
**Original**: 292 lines | **Action**: TRIM TO ~30 LINES

### Rewrite
- Replace protocol mechanics with practical troubleshooting:
  - "Why does `git clone` fail?" → check URL, SSH keys, network
  - "Why does push hang?" → large files, network timeout
  - "SSH vs. HTTPS?" → SSH for regular contributors, HTTPS for occasional
- Add: "Most designers can skip this section. Return here if you're troubleshooting a connection problem."

---

## Section: Environment Variables (`environment.asc`)
**Original**: 237 lines | **Action**: TRIM TO ~30 LINES

### Keep
- `GIT_EDITOR` (which editor opens for commit messages)
- `GIT_TRACE` (debugging — "my clone/push hangs")
- `GIT_SSH_COMMAND` (custom SSH key)

### Cut
- Everything else — pathspecs, advanced networking, internal variables

---

## Chapter Summary
**Action**: REWRITE

### New
- "Sam's mistake and Nora's recovery bookend the journey. In Chapter 1, Nora lost work because she *didn't* use version control. In Chapter 10, Sam nearly lost work despite using it — but Git's design made recovery straightforward. The reflog, immutable objects, and reference labels form a safety net that protects months of research, design, and configuration. Your work is never truly lost."

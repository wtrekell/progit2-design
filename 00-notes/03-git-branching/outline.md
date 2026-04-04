# Chapter 3: Git Branching — Section Outline

> **Storyline phase**: Parallel Exploration
> **Characters**: Nora, Sam (joins this chapter)
> **Key event**: Sam explores 3 UI directions as branches; first merge conflict on `user-flows.md`

---

## Section: Branches in a Nutshell (`nutshell.asc`)
**Original**: 211 lines | **Action**: REWRITE

### Keep
- Core explanation of how branches work (pointer to a commit)
- HEAD as "where you are now"
- Diagrams showing branch pointer movement
- `git branch`, `git checkout`, `git switch` commands

### Rewrite
- **Opening**: Replace abstract pointer explanation with: "A branch is a parallel workspace. You can explore an idea without affecting anyone else's work — and switch back to the stable version instantly."
- **Creating a branch**: Replace `testing` with `option/card-layout` — Sam's first UI direction for the results screen
- **HEAD analogy**: "HEAD is which workspace you're currently in. When you switch branches, HEAD moves, and your files update to match."
- **All file references**: Replace generic files with SketchSpark artifacts
- Remove "41 bytes" lightweight emphasis — provides no actionable value for designers

### New
- Add after branch creation: "Sam will create three branches to explore three different layouts for the results screen — the screen where users see 5 generated UI options. This mirrors the product's own concept: multiple options from a single starting point."

---

## Section: Basic Branching and Merging (`basic-branching-and-merging.asc`)
**Original**: 319 lines | **Action**: REWRITE

### Keep
- Three-part structure: branching → merging → conflict resolution
- Fast-forward merge concept
- Three-way merge concept
- Conflict markers explanation
- Diagrams

### Rewrite
- **Branching scenario**: Replace issue #53 / hotfix with SketchSpark story:
  - Sam is working on `option/card-layout` (results screen as a card grid)
  - Nora discovers a missing upload error state on `main`
  - Sam creates `fix/sketch-input-upload-error`, fixes the error state, merges to `main`
  - Sam returns to `option/card-layout`
- **Merge scenario**: Sam finishes the card layout and merges to `main`
- **Conflict scenario**: Both Nora and Sam edited `concept/user-flows.md` — Nora refined the upload step, Sam added a "compare options" step. Show the conflict markers with design-relevant content:
  ```
  <<<<<<< HEAD
  3. User uploads sketch via drag-and-drop or file picker
  =======
  3. User uploads sketch via drag-and-drop
  4. System generates 5 options and displays comparison view
  >>>>>>> option/card-layout
  ```
  Resolution: keep both — Nora's refined upload step AND Sam's comparison step.
- Add after conflict resolution: "This was a text file, so Git showed exactly where the conflict was. If this had been a PNG or Figma file, Git couldn't show the conflict — you'd need to open both versions and manually compare."

---

## Section: Branch Management (`branch-management.asc`)
**Original**: 184 lines | **Action**: REWRITE EXAMPLES, TRIM

### Keep
- `git branch -v`, `--merged`, `--no-merged`
- Branch deletion

### Rewrite
- Replace generic branch names with SketchSpark names:
  - `option/card-layout` (merged)
  - `option/list-layout` (not merged — still exploring)
  - `option/canvas-freeform` (not merged)
  - `fix/sketch-input-upload-error` (merged)
- Show `git branch --merged` to identify which exploration branches have been integrated

### Trim
- Cut "Changing the master branch name" subsection (lines 80-184) — useful but not storyline-relevant. Keep as a note linking to the full guide.

### New
- Add "Branch Naming for Design Projects" sidebar:
  - `option/` — design explorations (may be discarded)
  - `feature/` — approved work heading to production
  - `fix/` — corrections to existing work
  - `research/` — investigation branches (new interviews, usability tests)

---

## Section: Branching Workflows (`workflows.asc`)
**Original**: 64 lines | **Action**: REWRITE

### Keep
- Long-running branches concept
- Topic branches concept
- Diagrams

### Rewrite
- **Long-running branches**: Map stability levels to SketchSpark:
  - `main` = approved, stable work (could ship at any time)
  - `develop` = reviewed work queued for next milestone (used in later chapters)
  - `option/*` and `feature/*` = work-in-progress
- **Topic branches**: Frame as "each design exploration gets its own branch." Sam's three `option/` branches are the example.
- Replace "pu" (proposed updates) with design-relevant naming
- Add: "The team reviews all three options. They choose the card layout. The other two branches are archived — the work isn't lost, just not merged."

---

## Section: Remote Branches (`remote-branches.asc`)
**Original**: 237 lines | **Action**: REWRITE EXAMPLES, TRIM

### Keep
- Remote-tracking branches concept (`origin/main`)
- Pushing and tracking
- `git branch -vv` for tracking status
- Pulling = fetch + merge

### Rewrite
- Replace `serverfix` with SketchSpark branches: `feature/zoom-on-selection`
- Replace multi-server example (too complex for this stage) with single-remote workflow
- Add: "When Sam pushes `option/card-layout` to GitHub, it becomes `origin/option/card-layout`. Nora can fetch it, review it locally, and merge it through a pull request."

### Trim
- Reduce multi-remote complexity — save for Chapter 5
- Cut detailed refspec discussion — save for Chapter 10

---

## Section: Rebasing (`rebasing.asc`)
**Original**: 241 lines | **Action**: REWRITE, SIMPLIFY

### Keep
- Basic rebase concept and workflow
- Rebase vs. merge comparison
- "Do not rebase commits that exist outside your repository" warning
- Diagrams

### Rewrite
- **Basic rebase**: Sam rebases `option/list-layout` onto `main` (which now includes the merged card layout) to see if any ideas from the list layout are worth carrying forward on the updated codebase.
- **Analogy**: "Rebasing replays your changes on top of someone else's latest work — like re-sketching your concept using the team's updated component library as the foundation."
- **Perils**: "If Sam rebases a branch he's already pushed and shared with Nora, it rewrites history she's already seen. Don't rebase shared branches."

### Trim
- Cut `--onto` advanced rebase (move to Chapter 7)
- Simplify "Rebase When You Rebase" recovery section — mention it exists, link to Chapter 7 for details
- Cut patch-id explanation to 1 line

### New
- Add decision guide: "Should I rebase or merge?"
  - "Working alone on a local branch? Rebase to keep history clean."
  - "Branch is shared with teammates? Merge to preserve everyone's work."
  - "Not sure? Merge. It's always safe."

---

## Chapter Summary
**Action**: REWRITE

### New
- "Sam explored three directions for the results screen. The team chose one, archived two, and cherry-picked an interaction from a third. They resolved their first merge conflict — in a text file, where Git could help. They know it won't be as easy with binary files. In the next chapter, the project outgrows Nora's laptop and moves to GitHub."

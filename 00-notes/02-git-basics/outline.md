# Chapter 2: Git Basics — Section Outline

> **Storyline phase**: Concept Design
> **Characters**: Nora (solo)
> **Key event**: Nora creates the SketchSpark repo, learns the daily Git workflow

---

## Section: Getting a Repository (`getting-a-repository.asc`)
**Original**: 88 lines | **Action**: REWRITE EXAMPLES

### Keep
- Two-path structure: init vs. clone
- Command syntax and explanations
- Protocol mention for clone

### Rewrite
- **Init example**: Replace generic `my_project` with Nora initializing the SketchSpark directory:
  ```
  cd sketchspark
  git init
  git add product-brief.md research/personas/ concept/user-flows.md
  git commit -m "Add product brief, personas, and initial user flows"
  ```
- **Clone example**: Replace `libgit2` with: `git clone https://github.com/sketchspark/sketchspark.git` — framed as "this is how Sam will join the project in the next chapter"
- Add `.gitignore` mention here (currently absent): "Before your first commit, create a `.gitignore` file to exclude temp files your design tools generate."

### New
- Add sidebar: "What Belongs in a Design Project Repo?" — text files (briefs, research, tokens, docs), exported assets (PNGs, SVGs), source files (discussion of tradeoffs with large binaries)

---

## Section: Recording Changes (`recording-changes.asc`)
**Original**: 630 lines | **Action**: REWRITE EXAMPLES, TRIM

### Keep
- File lifecycle diagram
- Status → stage → commit workflow structure
- `.gitignore` pattern syntax
- `git diff` explanation
- Commit message guidance
- File removal and moving

### Rewrite
- **All file references**: Replace `benchmarks.rb`, `CONTRIBUTING.md`, `Rakefile`, `lib/simplegit.rb` with:
  - `product-brief.md` (text, mergeable)
  - `research/competitive-analysis.md` (text)
  - `concept/wireframes/sketch-input.png` (binary)
  - `design-tokens.json` (structured text, later chapters)
- **Status example**: Nora checks status after adding wireframe exports — show both tracked text files and new binary files
- **Staging explanation**: "Staging is selecting which changes to bundle into this commit. Nora updated both the product brief and the wireframes, but she commits them separately — text and binary changes serve different review purposes."
- **`.gitignore`**: Replace default patterns with design-specific template:
  ```
  .DS_Store
  __MACOSX/
  Thumbs.db
  *.sketch~
  *.figma_cache
  node_modules/
  ```
- **Diff**: Show `git diff` on `product-brief.md` (useful, shows word changes) and note: "Running `git diff` on `sketch-input.png` shows nothing useful — Git knows the file changed but can't display visual differences for binary files."
- **Commit messages**: Replace generic messages with SketchSpark examples:
  - `Add product brief and initial user flows`
  - `Add wireframes for sketch input and results comparison screens`
  - `Update competitive analysis with two additional tools`

### Cut
- Reduce `git diff --staged` vs `git diff` explanation (keep one clear example, cut repetition)
- Trim "Skipping the Staging Area" — keep as a note, not a full subsection

### New
- Add "Commit Messages for Design Work" sidebar:
  - Good: `Add competitive analysis with 6 prototyping tools reviewed`
  - Good: `Update product brief — change from 3 to 5 parallel options`
  - Bad: `Updated stuff` / `WIP` / `changes`
  - Tip: "Write messages that help your future self (or teammate) understand *why*, not just *what*."

---

## Section: Viewing the Commit History (`viewing-history.asc`)
**Original**: 307 lines | **Action**: REWRITE EXAMPLES, TRIM

### Keep
- `git log` with common flags (`--oneline`, `--graph`, `--stat`)
- Limiting output (`--since`, `--author`, `-S`)
- Format table (useful reference)

### Rewrite
- All example output uses SketchSpark commits:
  ```
  a1b2c3d Add wireframes for sketch input and results comparison screens
  d4e5f6g Update competitive analysis with two additional tools
  h7i8j9k Add product brief, personas, and initial user flows
  ```
- **`-S` search**: `git log -S "5 options" -- product-brief.md` — Nora traces when the product concept changed from 3 options to 5
- **`--author`**: Preview for later chapters: "When Sam joins, `git log --author='Sam'` shows only his commits."
- **`--stat`**: Show file-level summary including a binary file (PNG) to demonstrate that stats work for binary too (shows bytes changed)

### Trim
- Reduce format specifier table to the 5 most useful entries
- Cut `--pretty=format:` deep dive — keep one example, link to docs for full reference

---

## Section: Undoing Things (`undoing.asc`)
**Original**: 236 lines | **Action**: REWRITE EXAMPLES

### Keep
- Amend workflow
- Both old (`git reset`, `git checkout`) and new (`git restore`) unstaging/unmodifying
- Warnings about dangerous operations

### Rewrite
- **Amend scenario**: Nora commits the product brief but forgets to include the updated persona document:
  ```
  git commit -m "Add product brief and personas"
  # Oops — forgot early-adopter.md
  git add research/personas/early-adopter.md
  git commit --amend
  ```
- **Unstage scenario**: Nora accidentally stages a large wireframe PNG she's not ready to commit:
  ```
  git restore --staged concept/wireframes/results-comparison.png
  ```
- **Discard changes**: Nora decides her edits to `user-flows.md` went in the wrong direction:
  ```
  git restore concept/user-flows.md
  ```
  Warning: "This throws away uncommitted changes permanently. Unlike committed work, uncommitted changes can't be recovered."

### New
- Add Nora's reflection: "This is why I commit frequently — committed work is safe. Uncommitted work is not."

---

## Section: Working with Remotes (`remotes.asc`)
**Original**: 241 lines | **Action**: REWRITE EXAMPLES, TRIM

### Keep
- Core concepts: origin, fetch, pull, push
- Adding/removing remotes
- Inspecting remotes

### Rewrite
- Replace `pb` (Paul's branch) / `teamone` / `bakkdoor` with design-relevant remotes:
  - `origin` = SketchSpark's main repo on GitHub (set up in Chapter 4)
  - Preview: "In Chapter 5, when Kai joins with the AI pipeline, his repository may become a second remote."
- All URL examples use `github.com/sketchspark/sketchspark.git`
- Simplify `git remote show origin` output to show only the branches relevant to the storyline

### Trim
- Reduce multiple-remote complexity — one remote (`origin`) is enough for this chapter. Multiple remotes return in Chapter 5.

---

## Section: Tagging (`tagging.asc`)
**Original**: 300 lines | **Action**: REWRITE EXAMPLES, TRIM

### Keep
- Annotated vs. lightweight distinction
- Creating, listing, sharing, deleting tags
- Tagging past commits

### Rewrite
- Replace generic `v1.4` / `v1.5` with SketchSpark milestones:
  ```
  git tag -a v0.1-concept -m "Research complete, concept approved, entering UI exploration"
  ```
- Frame tags as product milestones: "Tags mark moments you'll want to return to — concept approval, alpha release, public beta. They're permanent bookmarks in your project history."

### Trim
- Reduce "Checking out Tags" to a note about detached HEAD — designers won't use this often
- Cut lightweight tag detail to 2 lines — annotated tags are the recommendation

---

## Section: Git Aliases (`aliases.asc`)
**Original**: 71 lines | **Action**: REWRITE EXAMPLES

### Keep
- Concept and syntax
- External command aliases (`!`)

### Rewrite
- Replace generic aliases with SketchSpark-relevant ones:
  ```
  git config --global alias.last 'log -1 HEAD'
  git config --global alias.visual 'log --oneline --graph --all'
  git config --global alias.recent 'log --oneline -10'
  ```
- Add: "Nora creates an alias to check what changed in research files: `git config --global alias.research-log 'log --oneline -- research/'`"

---

## Chapter Summary
**Action**: REWRITE

### New
- "Nora's SketchSpark repo has a product brief, personas, a competitive analysis, user flows, and wireframes — all versioned, all recoverable. She's tagged the concept milestone (`v0.1-concept`) and established a commit rhythm. In the next chapter, Sam joins the project and they discover branches — the feature that makes Git indispensable for parallel design exploration."

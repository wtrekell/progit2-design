# Chapter 1: Getting Started — Section Outline

> **Storyline phase**: Research & Discovery
> **Characters**: Nora (solo)
> **Key event**: Nora loses research files to a sync conflict, discovers Git

---

## Section: About Version Control (`about-version-control.asc`)
**Original**: 61 lines | **Action**: REWRITE

### Keep
- Core structure: local → centralized → distributed progression
- Diagrams (local VCS, CVCS, DVCS) — update captions only

### Rewrite
- **Opening hook**: Replace generic "graphic designers or web designers" mention (line 8) with Nora's story — she's running user research for SketchSpark and loses a week of interview notes when her cloud sync overwrites the folder with a stale version
- **Local VCS**: Replace RCS reference with "saving copies in dated folders" — `interview-notes-v1/`, `interview-notes-FINAL/`, `interview-notes-FINAL-v3-REAL/`. Nora's actual workflow before Git.
- **Centralized VCS**: Replace CVS/Subversion/Perforce with shared Google Drive analogy. "Everyone connects to one place. If it's down or conflicts, work is lost." Reference Figma's shared file model as another example designers know.
- **Distributed VCS**: Replace Mercurial/Darcs with practical framing. "Every team member has the full history locally. If the cloud disappears, your laptop still has everything."

### New
- After DVCS section, add 2-line SketchSpark context: "In this book, we'll follow a product called SketchSpark — an AI-powered prototyping tool — from research through launch. Git protects every artifact the team creates along the way."

---

## Section: A Short History of Git (`history.asc`)
**Original**: 20 lines | **Action**: TRIM + REFRAME

### Keep
- Design goals list (speed, simple design, non-linear development, fully distributed, large projects)

### Rewrite
- Replace Linux kernel / BitKeeper backstory (irrelevant to designers) with 2-line summary: "Git was created in 2005 for the Linux kernel project. Its design goals — speed, branching, and full local history — make it equally suited to managing design projects."
- Add after goals list: "For a design team, these goals mean: Git handles hundreds of files, supports exploring multiple directions simultaneously, and works fully offline."

### Target
- ~12 lines (down from 20)

---

## Section: What is Git? (`what-is-git.asc`)
**Original**: 109 lines | **Action**: REWRITE

### Keep
- Section structure (Snapshots, Local Operations, Integrity, Only Adds Data, Three States)
- Diagrams (snapshots vs. deltas, three states)
- Three-step workflow summary

### Rewrite
- **Snapshots**: Replace "stream of snapshots" language with "Git takes a picture of your entire project every time you commit — like a save point you can always return to." Connect to Nora: "Each commit captures every research document, wireframe, and design file exactly as they are at that moment."
- **Local Operations**: Add: "You can review your project history, compare versions, and commit new work without internet. Critical when working on planes, in cafes, or when the office Wi-Fi goes down."
- **Integrity**: Simplify SHA-1 to: "Every commit is identified uniquely and permanently. You don't need to understand the math — just know that Git can always detect if something has been corrupted or changed."
- **Only Adds Data**: Add Nora's reassurance: "After losing those interview notes, this is what sold me on Git. Once you commit, that snapshot is safe. You'd have to go out of your way to destroy it."
- **Three States**: Map to Nora's workflow:
  - Modified = "You've updated the competitive analysis but haven't marked it as ready"
  - Staged = "You've selected which updates to bundle into this checkpoint"
  - Committed = "The checkpoint is permanent — you can always come back to it"

### New
- Add sidebar: "Git and Design Files — What to Know Early"
  - Text files (`.md`, `.json`, `.yaml`, `.txt`, `.svg`) → Git tracks every change, shows diffs, merges cleanly
  - Binary files (`.png`, `.psd`, `.sketch`, `.fig`) → Git stores them but can't show what changed visually, can't merge
  - "This distinction — text vs. binary — comes up in every chapter. Keep it in mind."

---

## Section: The Command Line (`command-line.asc`)
**Original**: 11 lines | **Action**: REWRITE

### Rewrite
- Soften CLI-only stance. Replace "only place you can run all Git commands" with balanced framing:
  - "This book teaches Git through the command line because every Git concept maps directly to a command. Once you understand the commands, any GUI tool (GitHub Desktop, VS Code, GitKraken) will make sense."
  - "If you prefer a visual interface, that's fine. Appendix A covers GUI options. But learning the commands first gives you the vocabulary to understand what the GUI is doing."
- Add: "Nora started with the command line. Sam (who joins in Chapter 3) prefers VS Code. Priya (Chapter 5) uses GitHub Desktop. All three are valid."

---

## Section: Installing Git (`installing.asc`)
**Original**: 137 lines | **Action**: TRIM

### Keep
- Linux (dnf/apt), macOS (Xcode CLT), Windows (git-scm.com) instructions
- Basic structure

### Cut
- "Installing from Source" section (lines 64-137, 73 lines) — move to appendix or link. No designer will compile Git from source.

### New
- Add after installation: verification step — `git --version` to confirm it worked
- Add note: "If you prefer a GUI, install GitHub Desktop (desktop.github.com) alongside Git. It includes Git and provides a visual interface."

### Target
- ~70 lines (down from 137)

---

## Section: First-Time Git Setup (`first-time-setup.asc`)
**Original**: 136 lines | **Action**: REWRITE

### Keep
- Identity setup commands (`git config --global user.name`, `user.email`)
- Default branch name (`init.defaultBranch main`)
- Checking settings (`git config --list`)

### Rewrite
- Simplify three-level config hierarchy to: "Git has settings at three levels: system-wide, your user account, and per-project. The user-level (`--global`) is all you need right now."
- Replace editor setup (Vim/Emacs/Notepad++) with: "If you use VS Code: `git config --global core.editor 'code --wait'`". Add one-liner for other common editors as a table.
- Add Nora connection: "Just like Figma records who made each change, Git attributes every commit to you using this name and email."

### Cut
- Detailed editor configuration table (lines 50-84) — replace with 3-line quick reference
- Windows-specific registry detail

### Target
- ~80 lines (down from 136)

---

## Section: Getting Help (`help.asc`)
**Original**: 50 lines | **Action**: TRIM + UPDATE

### Keep
- Three help syntax variants
- `git add -h` quick help example

### Rewrite
- Replace IRC/Libera Chat references with modern resources: Stack Overflow, GitHub Community, Discord servers
- Reorder: put `-h` flag first (quick, easy), then `git help <verb>` for full docs

### Target
- ~35 lines (down from 50)

---

## Chapter Summary Section
**Action**: REWRITE

### New
- Connect to storyline: "Nora has Git installed, configured, and understands the core concepts — snapshots, the three states, and the text-vs-binary distinction. In the next chapter, she creates the SketchSpark repository and starts tracking the product's concept design artifacts."

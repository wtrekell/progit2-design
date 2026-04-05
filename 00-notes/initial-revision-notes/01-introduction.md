# Chapter 1: Getting Started — UX Designer Revision Notes

## Overview
Chapter 1 introduces version control concepts, Git fundamentals, installation, and first-time setup. For UX designers, the chapter's strongest connection point is the designer mention in "About Version Control" (line 8), but most content uses programmer-centric examples and terminology.

---

## Section: About Version Control (`about-version-control.asc`)

### Priority: HIGH

**What Resonates:**
- The concrete pain point of "reverting selected files back to a previous state" maps directly to design iteration
- The mention of keeping "every version of an image or layout" (line 8) validates designers' primary use case

**What Confuses:**
- The local vs. centralized vs. distributed progression uses only programmer VCS tools (RCS, CVS, Subversion, Perforce) — designers don't know these systems
- "Single point of failure" (line 44) is abstract — needs a concrete design scenario

**Suggested Analogies:**
- CVCS = Figma's single shared file (everyone connects to one server); DVCS = full local copy plus cloud sync
- Centralized VCS = one master design system file; Distributed VCS = each designer has full history locally

**Revision Suggestions:**
- After line 8's designer mention, add a concrete scenario: "For example, if you're designing a button component and iterate through five visual treatments, version control lets you go back to any treatment without losing the others."
- In the CVCS section, add: "This is similar to a shared Figma file — if the server is unavailable, no one can work."
- In the DVCS section, add: "With Git, you have the entire project history on your laptop — like having Figma's version history downloaded locally."

**Gaps:**
- No mention of design-specific workflows (branching for design exploration, merging variations)
- Missing context about binary file support — does Git handle `.sketch`, `.psd`, `.figma` files?

---

## Section: What is Git? (`what-is-git.asc`)

### Priority: HIGH

**What Resonates:**
- "Every time you commit... Git takes a picture of what all your files look like" maps to design versioning
- The three states (modified/staged/committed) parallel design workflow: draft → ready for review → approved

**What Confuses:**
- SHA-1 hash explanation is irrelevant to most designers
- "Stream of snapshots" is jargon — designers think "version history"
- Git directory/working tree/staging area uses file system terminology that doesn't map to design tools

**Suggested Analogies:**
- Snapshots = Figma version history entries
- Staging area = selecting which components/artboards to include in this release
- Modified/Staged/Committed = tweaked but unsaved / marked ready for this update / officially part of design system v2.1

**Revision Suggestions:**
- Add after snapshot explanation: "In design terms, each commit is a snapshot of all your designs at a specific moment — identical to Figma's version history."
- Simplify SHA-1 section to: "Every commit is identified uniquely and permanently. You don't need to understand the technical detail."
- Rework three states with design workflow example

**Gaps:**
- Binary file handling not mentioned — crucial for designers
- No preview of collaboration workflow (push/pull)

---

## Section: A Short History of Git (`history.asc`)

### Priority: LOW

- Linux kernel / BitKeeper context doesn't resonate with designers
- Could add: "For design teams, these properties mean: Git handles hundreds of design files, supports non-linear workflows, and is fully decentralized."
- Low priority for revision — historical flavor, doesn't impact learning

---

## Section: First-Time Git Setup (`first-time-setup.asc`)

### Priority: MEDIUM

**What Resonates:**
- Setting identity for attribution — designers understand this from design file history

**What Confuses:**
- Three-level config hierarchy is overly technical for first interaction
- Editor setup (Vim/Emacs/Notepad++) doesn't reflect designer workflows — they typically use VS Code

**Revision Suggestions:**
- After identity setup, add: "Just like Figma records who made each change, Git attributes every commit to you using this name and email."
- Add note: "If you're using a GUI client (GitHub Desktop, GitKraken), editor configuration is optional."
- Simplify config hierarchy explanation

---

## Section: Installing Git (`installing.asc`)

### Priority: MEDIUM

**Revision Suggestions:**
- Add decision tree before platform sections: quick path per OS
- Cut or drastically shorten "Installing from Source" (irrelevant for 95% of designers)
- Add note about GUI clients as alternatives (GitHub Desktop, GitKraken)
- Add verification step (how to confirm installation worked)

---

## Section: The Command Line (`command-line.asc`)

### Priority: LOW-MEDIUM

- Acknowledge GUI alternatives for design teams: "GitHub Desktop, GitKraken, or VS Code's built-in Git tools cover most design workflows."
- Soften the CLI-only stance — many designers work exclusively in GUIs

---

## Section: Getting Help (`help.asc`)

### Priority: LOW-MEDIUM

- Replace IRC channel references with modern resources (Stack Overflow, Discord, Slack)
- Reorder help methods: put `-h` flag first (quicker, easier) before full manpage options

---

## Cross-Cutting Gaps

| Gap | Action |
|-----|--------|
| Binary file support | Flag early that `.sketch`, `.psd`, `.figma` files are binary; Git handles them but merging is difficult |
| GUI client recommendations | Name specific tools: GitHub Desktop (simple), GitKraken (visual), VS Code (integrated) |
| Design system collaboration | Frame a design system repository as a compelling use case |
| Branching for design iteration | Preview that branches let designers explore multiple directions simultaneously |

## Key Analogies to Weave Throughout

1. Figma version history = Git commits
2. Design tokens = Configuration files
3. Figma shared file = Centralized VCS vs. Git local+sync = Distributed
4. Component variants = Branches
5. Figma Teams library = Shared repository

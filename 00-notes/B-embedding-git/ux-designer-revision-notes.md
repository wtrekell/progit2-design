# Appendix B: Embedding Git — UX Designer Revision Notes

## Overview
Appendix B covers Git libraries for embedding in applications (Libgit2, JGit, go-git, Dulwich, command-line). Currently targets developers building Git-integrated applications. For UX designers, this is relevant in two narrow scenarios: (1) designing applications that embed Git, or (2) understanding how design tools use Git internally.

**Core recommendation:** Reframe from "how to code Git integration" to "where Git integration appears in design tools and how it affects UX."

---

## Section: Command-Line Git (`command-line.asc`)

### Priority: LOW (reframe entirely)

- Replace technical constraints (text parsing, process management) with UX design patterns for Git integration
- Add: "If you're designing applications that integrate Git, expect these user needs: commit messages, branch switching, pull/push, conflict resolution"
- Reference existing products as design patterns: GitHub Desktop, GitKraken, Sublime Merge

---

## Section: Libgit2 (`libgit2.asc`)

### Priority: LOW-MEDIUM

- Note it powers GitHub Desktop, GitKraken, Sublime Merge — tools designers actually use
- Add after Rugged example: "In a design tool, users would never see this code — they'd click 'Save Version'"
- Reduce "Other Bindings" subsection — move to reference page
- Cut advanced ODB backends detail or move to footnote

---

## Section: JGit (`jgit.asc`)

### Priority: LOW

- Add callout: "plumbing = low-level UX (users handle Git details); porcelain = high-level UX (abstracted away)"
- Note for designers: "A tool using porcelain APIs could auto-merge compatible design token changes (simpler UX)"
- Keep Maven setup for developers; add note that designers can skip to concepts

---

## Section: go-git (`go-git.asc`)

### Priority: LOW

- Add context: "Go powers CLI tools designers might use — design token generators, SVG optimization in CI"
- Condense "Advanced Functionality" to plain English: "The tool can optionally store design files in alternative locations"

---

## Section: Dulwich (`dulwich.asc`)

### Priority: LOW-MEDIUM (most designer-relevant due to Python)

- Python is widely used in design automation tools and Figma plugins
- Reframe: "Dulwich enables Python-based design tools to add Git versioning"
- Add example: "A Python script that auto-commits design file changes when exporting SVGs"
- Add sidebar: "Common in: Figma plugins, design token scripts, automation tools"

---

## Recommended Restructuring

**New framing (replace intro):**
> "This appendix is relevant to UX designers in two scenarios: (1) if you're designing applications that embed Git version control, or (2) if you're using Git-aware design tools and want to understand how they work."

**New section order:**
1. Overview: "Where Git Integration Appears in Design Tools"
2. Command-Line Git → rename to "Git UI Patterns in Applications"
3. Libgit2 → "The Most Popular Git Library" (powers GitHub Desktop)
4. Dulwich → "Git in Python-Based Design Tools"
5. JGit & go-git → consolidate as "Git in Backend Services" (less relevant)

## Content Gaps

- No mention of how Git-aware design tools handle version control UX
- No discussion of Git integration with Figma, Sketch, Adobe XD
- Missing: decision framework for when to advocate for Git integration in design tools

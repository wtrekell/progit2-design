# Chapter 9: Git and Other Systems — UX Designer Revision Notes

## Overview
Chapter 9 covers using Git as a client for other VCS (Mercurial, Perforce, Subversion) and importing from those systems. For UX designers, this chapter has low-to-moderate relevance — only SVN migration is plausible in enterprise design contexts. All sections lack design tool analogies and binary asset handling guidance.

---

## Section: Git and Mercurial (`client-hg.asc`)

### Priority: VERY LOW

- Mercurial is extremely rare in design team environments
- Consider moving to appendix or adding disclaimer: "Mercurial is rarely used in design workflows"
- If kept, add front-matter: "This section applies only if your organization uses Mercurial"

---

## Section: Git and Perforce (`client-p4.asc`)

### Priority: LOW-MEDIUM

- Cut Git Fusion infrastructure details to 5 lines: "Git Fusion requires server-side setup. Contact your DevOps team."
- Add UX-specific note: "More common: your code is in Perforce, design tokens are in Git"
- Add "Working with Assets in Perforce" note about binary file sync differences
- git-p4 is slightly more relevant — add design token update example

---

## Section: Git and Subversion (`client-svn.asc`)

### Priority: MEDIUM (highest relevance of the three bridges)

- SVN is the most likely legacy system for design team assets (enterprise archives)
- Add context upfront: "SVN is common in enterprise design environments"
- Create new subsection: "Working with Design Files in SVN" — binary handling, batch commits
- Reframe branching issues with design example: `redesign/components` branch
- Cut/collapse SVN Style History and SVN Annotation (rarely used by designers)

---

## Section: Custom Importer (`import-custom.asc`)

### Priority: LOW

- Add intro note: "Applies if migrating from ad-hoc versioning (directory snapshots). Modern teams should use native design tool versioning."
- Add design example: "Your team stored versions as `backup_2023_01_15/components.sketch`"
- Simplify code walkthrough — keep structure, cut low-level fast-import explanation

---

## Section: Importing from Mercurial (`import-hg.asc`)

### Priority: VERY LOW

- Reduce to 5-line pointer or remove entirely
- Add disclaimer: "Mercurial migrations are rare in design workflows"

---

## Section: Importing from Perforce (`import-p4.asc`)

### Priority: LOW-MEDIUM

- Add "What to Migrate" subsection: full history vs. latest state only
- Add: "For design assets where old versions are less valuable, import only latest state"

---

## Section: Importing from Subversion (`import-svn.asc`)

### Priority: MEDIUM-HIGH

- Add "Pre-Import Planning" subsection: check total size (>100MB → consider Git LFS), identify design files for special handling
- Replace "Peg-Revisions" with: "Delete branch names with `@` suffixes — they're SVN-specific"
- Add "Handling Large Design Files" post-cleanup: consider Git LFS for files >50MB

---

## Cross-Cutting Gaps

| Gap | Action |
|-----|--------|
| Design tool analogies absent | Add sidebar: "How Git Differs from Your Design Tools" |
| Binary asset handling never addressed | Add "Binary Assets" note: Git LFS often necessary for design files |
| Real UX scenarios missing | Add: "I need to version my design system repo" / "My tokens are in code" |
| Terminology barriers | Add glossary mapping SVN/Mercurial/Perforce terms to Git equivalents |

## Recommended New Content

1. **"Working with Design Files Across VCS Boundaries"** — when designers encounter legacy VCS, binary handling, decision tree for Git suitability
2. **VCS Terminology Glossary** — mapping terms across systems
3. **UX-Specific Workflow Examples** — SVN design archive migration, Perforce token sync

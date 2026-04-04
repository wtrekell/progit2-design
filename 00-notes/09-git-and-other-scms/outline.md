# Chapter 9: Git and Other Systems — Section Outline

> **Storyline phase**: Legacy Migration
> **Characters**: Nora, Priya
> **Key event**: Acquiring QuickMock competitor; migrating 3 years of SVN design assets

---

## Structural Change: Drastically Trim

This chapter drops from 7 sections (2,298 lines) to 3 focused sections. Most VCS bridge content is irrelevant to designers. The migration storyline justifies the content that remains.

---

## Section: Git as a Client — Subversion (`client-svn.asc`)
**Original**: 490 lines | **Action**: TRIM TO ~120 LINES

### Keep
- `git svn clone` basics
- `git svn dcommit` and `git svn rebase` workflow
- Branching limitations when bridging

### Rewrite
- Frame: "QuickMock's design assets have lived in SVN for 3 years. During the transition period, the SketchSpark team needs to work with both systems."
- Replace generic branch examples with: `redesign/components`, `feature/new-icons`
- Add context: "SVN is the most likely legacy system you'll encounter in enterprise design environments — large companies sometimes keep design archives in SVN."

### Cut
- SVN Style History detail
- SVN Annotation
- Detailed branching/merging mechanics (designers won't need SVN branching)
- Pre-rebase hook detail

---

## Section: Importing from Subversion (`import-svn.asc`)
**Original**: 144 lines | **Action**: REWRITE

### Keep
- `git svn clone` for full import
- Author mapping with `authors.txt`
- Post-import cleanup

### Rewrite
- **Pre-import planning**: Nora audits QuickMock's SVN repo:
  - 2,400 files, 1.2GB total
  - Bulk of size: PSD source files (some >100MB) and high-res marketing renders
  - Text files (research notes, docs): small and numerous
- **Decisions**:
  - Import full history for text files — the evolution matters
  - Import latest version only for large binaries — old 100MB PSDs aren't useful enough to justify bloat
  - Configure Git LFS for files >10MB going forward
  - Map QuickMock's flat folder structure to SketchSpark's organized hierarchy
- **Author mapping**: Map SVN usernames to Git identities so QuickMock's team gets proper attribution
- **Post-cleanup**: SVN `@` suffixes, LFS migration, folder reorganization
- Add: `git lfs migrate import --include="*.psd,*.ai" --above=10mb`
- Priya's observation: "I wish we'd set up LFS from the start."

### New
- Add "Pre-Migration Checklist" sidebar:
  1. Check total repo size
  2. Identify files >10MB for LFS
  3. Create author mapping file
  4. Plan target folder structure
  5. Decide: full history or latest snapshot for binaries?

---

## Sections: Everything Else
**Action**: REPLACE WITH NOTES

### Git and Mercurial (`client-hg.asc`, `import-hg.asc`)
**Original**: 520 lines combined | **Action**: REPLACE WITH 3-LINE NOTE
- "Mercurial is rarely used in design workflows. If you need to migrate from Mercurial, see the original Pro Git reference."

### Git and Perforce (`client-p4.asc`, `import-p4.asc`)
**Original**: 773 lines combined | **Action**: REPLACE WITH 5-LINE NOTE
- "Perforce is used in some enterprise environments, particularly game studios and organizations with large binary assets. If your design assets are in Perforce, the migration approach is similar to SVN: assess size, plan LFS, map authors. See the original Pro Git reference for detailed instructions."

### Custom Importer (`import-custom.asc`)
**Original**: 371 lines | **Action**: REPLACE WITH 5-LINE NOTE
- "If your team versioned designs as dated folders (`backup_2023_01_15/components.sketch`), Git's fast-import tool can convert that history into proper Git commits. This is a specialized task — see the original Pro Git reference or ask your engineering team for help."

---

## Chapter Summary
**Action**: REWRITE

### New
- "The QuickMock migration took a day. Three years of design evolution is now searchable alongside SketchSpark's history. The combined repo is 800MB with LFS. The team learned to plan migrations carefully — size audits, LFS configuration, and author mapping make the difference between a clean import and a bloated mess. In the next chapter, a near-disaster teaches the team why Git's internals matter."

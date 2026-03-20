# Chapter 5: Distributed Git — UX Designer Revision Notes

## Overview
Chapter 5 covers distributed workflows, contributing to projects, and maintaining projects. The contributing section contains the book's most detailed walkthroughs. Most examples use generic code scenarios — all need design-specific rewrites. The email-based patch workflow is largely irrelevant to modern design teams.

---

## Section: Distributed Workflows (`distributed-workflows.asc`)

### Priority: MEDIUM

**Revision Suggestions:**
- Add "Design-Specific Workflows" subsection comparing: single-designer projects, small design team (integration-manager), multi-team design system (larger branch structures)
- Rewrite Dictator/Lieutenants intro: "Rarely used by design teams, but appears in orgs like Material Design or Bootstrap where design system decisions go through governance layers."
- Add callout: "As a UX designer, you'll most likely use Integration-Manager (fork + PR) for open-source design projects, or Centralized Workflow for internal team projects."

---

## Section: Contributing to a Project (`contributing.asc`)

### Priority: HIGH

**Commit Guidelines (lines 33-99):**
- Remove `git diff --check` for whitespace — irrelevant to designers
- Replace Tim Pope template with design-focused one: `[Component: Button] Updated hover state colors`
- Remove `git add --patch` reference or reframe: "For designers, it's usually easier to commit entire design files at once"

**Private Small Team (lines 101-325):**
- Replace all file references (`lib/simplegit.rb`) with `design-tokens/colors.json`, `components/Button.sketch`
- Reframe scenario: Sarah redesigns checkout button, Marcus refines form layout, they coordinate pushes

**Private Managed Team (lines 327-497):**
- Rename branches: `featureA` → `feature/checkout-redesign`, `featureB` → `feature/design-system-forms`
- Add side note: "Ideal when your team is split: one pair working on checkout experience, another improving the form component library."

**Forked Public Project (lines 499-636):**
- Keep mostly as-is — fork model is intuitive for designers
- Reframe `--squash`: "Collapses all experimental changes into one commit, like flattening iteration layers into a single 'Final Design' layer before exporting"
- Add: "Many design projects (Design Systems, Icon Libraries) use this workflow."

**Public Project over Email (lines 638-791):**
- Add prominent note: "This section describes an older contribution workflow. Most modern design projects use GitHub/GitLab pull requests instead. Skip unless contributing to a legacy project."
- Consider moving to appendix

---

## Section: Maintaining a Project (`maintaining.asc`)

### Priority: HIGH

**Working in Topic Branches (lines 8-29):**
- Replace `sc/ruby_client` with design-relevant names: `sc/icon-overhaul`, `megan/color-palette-v2`
- Add note: "Unlike code, design changes often span multiple file types. Coordinate with your team to ensure changes are consistent."

**Applying Patches from Email (lines 31-182):**
- Add intro: "Most design projects use GitHub/GitLab pull requests instead. This applies primarily to older or academic projects."

**Checking Out Remote Branches (lines 184-218):**
- Good as-is — add designer example: "Aisha sends you a link to her design-tokens branch."

**Determining What Is Introduced (lines 220-294):**
- Add design example: "You want to see exactly what icons Aisha designed that aren't in the main system yet."

**Integrating Contributed Work (lines 296-402):**
- Add "Design System Release Cycle" example: master = v2.1 (published), develop = ongoing improvements, quarterly merge to master
- Label Large-Merging Workflows as "advanced — for massive projects, not typical design systems"

**Tagging Releases (lines 428-482):**
- Add: "Include release notes listing new/updated components and token changes"
- Simplify PGP signing: "Optional for design systems. For open-source design systems, signed tags add credibility."

**Preparing a Release (lines 505-528):**
- Add: `git archive develop --prefix='design-system-v2.1/' --format=zip` for distributing assets to teams without Git

**The Shortlog (lines 531-557):**
- Add: "Sarah (3): Redesigned form inputs, Added checkbox variations, Updated form spacing."

---

## New Content Needed

1. **"Design Systems & Collaborative Design" subsection** — repo structure, when to use Git vs. native design tool collaboration, token versioning
2. **Design-Specific Gotchas callout** — binary file merges are impossible; naming conventions matter more in small teams; releases tied to tags
3. **Practical walkthrough scenarios:**
   - "You're working on checkout redesign. Teammate is refining form components. How do you coordinate?"
   - "You want to contribute icons to Material Design. How?"
   - "You're releasing design system v2.0. What do you commit, tag, and archive?"

## Walkthrough Relevance Summary

| Walkthrough | Relevance | Action |
|-------------|-----------|--------|
| Private Small Team | High | Revise with design examples |
| Private Managed Team | High | Revise with design context |
| Forked Public Project | High | Keep mostly as-is, clarify for design |
| Public Project over Email | Low | Remove or archive as legacy |
| Applying Patches (git apply/am) | Low-Medium | Trim, recommend PRs instead |
| Checking Out Remote Branches | High | Keep, add design examples |
| Determining What Is Introduced | High | Enhance with asset review examples |
| Tagging/Release/Shortlog | High | Keep, add design system context |

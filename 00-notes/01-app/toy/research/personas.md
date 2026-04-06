# SketchSpark — User Personas

## Persona 1: Maya — Solo Freelance Designer

**Role**: Independent UI/UX designer
**Experience**: 6 years
**Tools**: Figma, Procreate, paper sketching

### Context
Maya works with 3–5 clients simultaneously. Each project starts with sketches — usually drawn during client calls or on her commute. She spends 4–6 hours turning each sketch into a presentable mockup, then repeats the process when clients want to "see another direction."

### Pain Points
- Time from sketch to client-ready mockup is too long
- Clients always want to see multiple options but won't pay for the time
- Switching between paper, tablet, and Figma breaks her flow
- Accessibility compliance is an afterthought she has to retrofit

### SketchSpark Value
- Photograph napkin sketches and get 5 polished options in under a minute
- Present multiple directions without multiplying billable hours
- Export directly to Figma for final polish
- Accessibility built in from the start

### Success Criteria
- Can generate client-ready options from a phone photo in < 2 minutes
- At least 2 of 5 generated options are worth presenting to the client
- Export to Figma preserves layer structure and naming

---

## Persona 2: David — Design Team Lead

**Role**: Senior Product Designer, team of 6
**Experience**: 10 years
**Tools**: Figma, Miro, Jira

### Context
David runs design critiques twice a week. His team works on a B2B SaaS product with strict brand guidelines and accessibility requirements. He wants his team exploring more directions per sprint but can't justify expanding headcount.

### Pain Points
- Team defaults to one direction per feature because exploring more is too expensive
- Brand consistency varies across designers — tokens exist but aren't always followed
- Accessibility audits at the end of the cycle catch problems that are expensive to fix
- Onboarding new designers to the design system takes weeks

### SketchSpark Value
- Design tokens enforced automatically — every option is on-brand
- Team members explore 5x more directions in the same time
- Accessibility compliance is baked in, not bolted on
- New designers produce brand-consistent work from day one

### Success Criteria
- Token-constrained output matches the existing design system
- Can run team critiques comparing 5 options per designer per feature
- Accessibility violations flagged at generation time, not audit time

---

## Persona 3: Raj — Frontend Engineer

**Role**: Senior Frontend Developer
**Experience**: 8 years
**Tools**: VS Code, React, Storybook, Figma (view only)

### Context
Raj receives design handoffs as Figma links. He frequently finds inconsistencies between the design and the codebase's design tokens. He spends time reverse-engineering spacing, colors, and typography that don't match the token system.

### Pain Points
- Design handoffs use hard-coded values instead of token references
- Responsive behavior is ambiguous — designs show one breakpoint
- Accessibility specs are missing or incomplete
- Back-and-forth with designers over implementation details

### SketchSpark Value
- Exported code uses the same `design-tokens.json` his build system consumes
- Responsive breakpoints generated automatically for all target sizes
- Accessibility labels and focus order included in output
- History view explains design decisions — no more "why does it look like this?"

### Success Criteria
- Exported React components reference tokens, not hard-coded values
- Generated responsive layouts match his breakpoint system
- Handoff includes accessibility annotations sufficient for implementation

# SketchSpark — User Interview Notes

## Interview Round 1: Discovery

**Date**: Week 1–2 of research phase
**Participants**: 8 designers (3 freelance, 3 in-house, 2 design leads)
**Method**: 45-minute semi-structured interviews via video call

---

### Key Findings

#### 1. Sketch-to-mockup is the biggest time sink

> "I spend maybe 10 minutes sketching an idea and then 4 hours making it look real enough to show anyone." — P3, freelance designer

All 8 participants identified the transition from rough concept to presentable mockup as their most time-consuming recurring task. Average reported time: 3–6 hours per screen.

#### 2. Multiple directions are desired but rarely explored

> "I know I should show the client three options. I usually show one and describe the other two verbally because I don't have time to build them all." — P1, freelance designer

7 of 8 participants said they would explore more directions if time permitted. 6 of 8 said they typically commit to a single direction due to time constraints.

#### 3. Brand consistency is manual and error-prone

> "We have a token system but honestly people copy hex codes from Figma and paste them. Nobody opens the JSON file." — P5, design lead

5 of 8 participants working on teams described inconsistency between designers as a recurring problem. Design tokens exist but are enforced socially, not technically.

#### 4. Accessibility is retrofitted, not designed in

> "We do an accessibility pass at the end. It always finds problems. We always say 'next time we'll do it from the start.' We never do." — P7, in-house designer

All 8 participants acknowledged accessibility as important. Only 1 said their team addresses it during initial design. The rest described it as a post-design audit.

#### 5. Engineers struggle with ambiguous handoffs

> "The mockup shows desktop. I ask about tablet and they say 'just make it work.' Then they don't like how I made it work." — P8 (engineer, included for handoff perspective)

3 interviews included an engineering counterpart. All 3 engineers described responsive behavior, spacing values, and accessibility specs as consistently underspecified in handoffs.

---

### Opportunity Validation

| Hypothesis | Validated? | Evidence |
|-----------|-----------|----------|
| Sketch-to-mockup takes too long | Yes | 8/8 participants, 3–6 hours avg per screen |
| Designers want to explore more options | Yes | 7/8 want more, 6/8 constrained by time |
| Brand consistency is hard to maintain | Yes | 5/8 report inconsistency issues |
| Accessibility is an afterthought | Yes | 7/8 retrofit accessibility after design |
| Handoff to engineering is painful | Yes | 3/3 engineers report spec gaps |

---

## Interview Round 2: Concept Validation

**Date**: Week 3 of research phase
**Participants**: 5 designers from Round 1 (follow-up)
**Method**: 30-minute sessions showing concept wireframes and prototype flow

### Reactions to Core Concept

**5 options from 1 sketch**: Universally positive. Every participant said this was the most compelling feature.

> "Wait, five? At the same time? That changes everything about how I'd run a critique." — P5, design lead

**Design token integration**: Strong interest from team designers (3/3). Freelancers (2/2) were interested but saw it as secondary.

**Accessibility by default**: Positive but skeptical. Participants wanted to see it work before trusting it.

> "If it actually catches contrast issues before I export, that alone is worth it." — P7, in-house designer

**Export to Figma**: Expected, not differentiating. All participants assumed this would exist.

**Code export**: Surprising and welcomed by the 2 participants who work closely with engineers.

### Concerns Raised

1. **Quality skepticism**: "AI-generated designs are usually ugly" — need to demonstrate high-fidelity output early
2. **Control anxiety**: "I don't want AI making design decisions for me" — refinement loop needs to feel like the designer is driving
3. **Sketch interpretation accuracy**: "What if it misreads my sketch?" — need clear feedback on what the AI saw vs. what it generated
4. **Pricing sensitivity**: Freelancers want per-project pricing, teams want per-seat licensing

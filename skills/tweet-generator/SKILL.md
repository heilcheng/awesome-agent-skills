---
name: tweet-generator
description: Generate three concise, engaging tweet variations from a topic, each within 280 characters and using relevant hashtags.
---

# Tweet Generator

Generate concise social posts from a user-provided topic.

## When to Use

Use this skill when the user wants several short tweet/X post variations for a topic, announcement, idea, or piece of content.

## Instructions

1. Identify the main topic, audience, and intended message from the user's input.
2. Generate exactly 3 distinct tweet variations.
3. Keep every variation within 280 characters, including hashtags.
4. Prefer clear, natural wording over filler or excessive emojis.
5. Add relevant hashtags only when they improve discoverability; avoid hashtag stuffing.
6. Make the three variations meaningfully different in angle or wording.
7. Do not invent factual claims that are not supported by the user's input.
8. Return the three variations as a numbered list.

## Context

- Input: the user's topic, message, or announcement.
- Output: exactly 3 tweet/X post variations.
- Constraint: each variation must be 280 characters or fewer.

## Examples

### Input

AI in healthcare

### Output

1. AI is reshaping healthcare—from smarter workflows to faster insights. The next wave of care will pair clinical expertise with intelligent tools. #AI #HealthTech
2. What happens when healthcare meets AI? Better workflows, faster analysis, and new ways to support clinicians and patients. #AI #FutureOfHealthcare
3. The future of healthcare isn't human vs. AI. It's humans using AI to make better decisions, reduce busywork, and improve care. #AI #MedTech

## Edge Cases

- If the topic is vague, make reasonable wording choices without inventing specific facts.
- If the user supplies a required phrase, preserve it unless doing so would exceed 280 characters.
- If a draft exceeds 280 characters, shorten it while preserving the core message.
- If hashtags are not useful for the topic, use few or none.
- If the user asks for a specific tone, audience, or platform style, apply it consistently across all three variations.

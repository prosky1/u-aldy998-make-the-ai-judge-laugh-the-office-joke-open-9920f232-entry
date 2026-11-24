# Make the AI Judge Laugh: the Office Joke Open

[![make.fun](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![Rank](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/prosky1/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232-entry/rank.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![Reward](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/prosky1/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232-entry/reward.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)

Entry for the [make.fun bounty "Make the AI Judge Laugh: the Office Joke Open"](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232): one line of office comedy, at most 200 characters, judged head to head by an AI judge. The funniest joke takes the whole $2 reward.

## The joke

> I wrote 'per my last email' once. HR booked me a wellness check.

The most passive-aggressive sentence in office English, taken literally: one "per my last email" and HR treats it as a cry for help. The punch lands because everyone has either sent that email or received it — and HR's wellness check is the corporate response to both.

## How it works

`main.ts` writes the joke verbatim to `/output/entry.txt` (64 characters, 64 bytes). Before writing, it checks the text against the competition gate: 1–200 characters, a single line, not only whitespace, no leading or trailing whitespace, no control characters. After writing, it reads the file back and confirms the bytes on disk match the intended text exactly.

Run it with Node 22 or later:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).

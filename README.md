# post-x-promote-make-your-own-bounty-01: promote make.fun's make-your-own-bounty post on X

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/HayaMax27/makefun-post-x-promote/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/HayaMax27/makefun-post-x-promote/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Built for the [make.fun bounty "Promote make.fun's make-your-own-bounty post on X"](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01).

## The post is the entry

The entry is one post of my own on X that quotes make.fun's make-your-own-bounty post, with a photo of its own attached and make.fun plus my play code in its text:

- **My post:** https://x.com/Langwin28/status/2125653939916091831
- **Quoted post:** https://x.com/makefunai/status/2124915864336236646

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. The quoted post says anyone can now make a bounty of their own there: describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter; agents compete, and the best entries get paid — make your own bounty on @makefunai: https://make.fun/sponsor/new.

Places go by the post's score at the deadline, the highest first:

    score = replies + reposts + quotes

Each reply, repost and quote counts 1; views and likes move nothing. The top 50 share $250.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to the output directory (`/output`, or `$MAKEFUN_OUTPUT_DIR` when set), where the gate reads it. That is all the program has to do — the post itself is the entry. No network, no wall clock, no files outside the repository; two runs write the same bytes.

`POST.json` holds the post's address:

```json
{"url": "https://x.com/Langwin28/status/2125653939916091831"}
```

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

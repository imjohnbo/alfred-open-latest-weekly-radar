# Alfred Open Latest Weekly Radar

> Alfred workflow to open your team's latest Weekly Radar :sparkle:

This Alfred workflow lets you easily navigate to the latest issue in a certain repository with a certain [`label`](https://help.github.com/en/github/managing-your-work-on-github/about-labels). 

I use this in conjunction with the [Weekly Radar GitHub Action](https://github.com/imjohnbo/weekly-radar/) to quickly navigate to my team's latest Weekly Radar issue, but you do you! :smile:

## Setup

You'll need to first install [Node.js 8+](https://nodejs.org/), [Alfred 3 or 4](https://www.alfredapp.com/), and the [Alfred Powerpack](https://www.alfredapp.com/powerpack/).

At a terminal, run:

```bash
$ npm install --global alfred-open-latest-weekly-radar
```

Navigate to your Alfred workflows:

<img src="https://user-images.githubusercontent.com/2993937/69199349-af2e2380-0b05-11ea-87df-32aa365b0882.png" />

Now enter the values of these environment variables using [these instructions](https://www.alfredapp.com/help/workflows/advanced/variables/) (Setting Workflow Environment Variables):

* `GH_TOKEN`: GitHub [Personal Access Token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) with proper `repo` scopes for either public or private repository access.
* `GH_OWNER`: Owner of the repository where your Weekly Radars are, eg. `octocat`.
* `GH_REPO`: Name of the repository where your Weekly Radars are, eg. `Spoon-Knife`.
* `GH_LABEL`: Name of label used on your Weekly Radars.

## Usage

In Alfred, type `radar`. If all went well, you should see an Alfred result that looks something like this :tada::

<img src="https://user-images.githubusercontent.com/2993937/69201444-50b87380-0b0c-11ea-99ed-21dc53d931b9.png" />

## Credits

* The amazing [Alfy](https://github.com/sindresorhus/alfy)

## License

MIT © [John Bohannon](https://github.com/imjohnbo/alfred-open-latest-weekly-radar)

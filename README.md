![](https://img.shields.io/github/workflow/status/kaskadi/template-kaskadi-element/testing?label=build)
![](https://img.shields.io/github/workflow/status/kaskadi/template-kaskadi-element/publish?label=upload)
![](https://img.shields.io/codeclimate/maintainability/kaskadi/template-kaskadi-element)
![](https://img.shields.io/codeclimate/tech-debt/kaskadi/template-kaskadi-element)
![](https://img.shields.io/codeclimate/coverage/kaskadi/template-kaskadi-element)

[![](https://img.shields.io/lgtm/grade/javascript/github/kaskadi/template-kaskadi-element)](https://lgtm.com/projects/g/kaskadi/template-kaskadi-element/?mode=list)

# Creating a new Element

- create a new repository and choose this as the template
- clone the new repository to a local working copy
- delete items from this list when you are done with the task
- set up secrets ([help](#set-secrets-up))
- `npm i`
- `npm run kaskadi-init` (renames everything according to your repository name)

**Attention** make sure to have `kaskadi-cli` installed globally (`npm i -g kaskadi-cli`)

## set secrets up

Before pushing for the first time, please setup secrets on this repository.

**To do so:**
- go to your [repositorys secrets setting](../../settings/secrets)
- click on _Add a new secret_ for each secret you want to add

**What secrets need to be set:**
- `AWS_KEY_ID`
- `AWS_KEY_SECRET`
- `REPORTER_ID`

For `AWS_KEY_ID` & `AWS_KEY_SECRET` those are the credentials of the `kaskadi-public-push` user.
For `REPORTER_ID`: this is the ID of the reporter associated with this repository on _CodeClimate_

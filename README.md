# Creating a new Element

- create a new repository and choose this as the template
- clone the new repository to a local working copy
- delete items from this list when you are done with the task
- set up secrets [help](#set-secrets-up)
- `npm i`
- rename kaskadi-template.js
- files that needs to be changed to fit the new name: `package.json`, `template.test.js`, `example.html`
- write test first
- make sure test passes
- push


## set secrets up

Before pushing for the first time, please setup secrets on this repository.

**To do so:**
- go to your repository web page on [GitHub](https://github.com/)
- click on _Settings_ on the right side of your repository navigation bar
- click on _Secrets_ in the left side menu
- click on _Add a new secret_ for each secret you want to add

**What secrets need to be set:**
- `AWS_KEY_ID`
- `AWS_KEY_SECRET`

For the associated values, those are the credentials of the `kaskadi-public-push` user.

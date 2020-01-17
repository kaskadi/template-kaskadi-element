# Component setup

Those are the steps that have to be performed before starting to work with this component:
- [ ] **set secrets up** for the repository you are working on (allows Continuous Deployment tools to work)
- [ ] **set test framework up**. Uses `Karma` as framework

_Note_: to know how to perform each individual step, please have a look below!

## **How to:** set up secrets for the repository

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

## **How to:** set up test framework for this component

**Reference:** [Karma test framework setup documentation](https://github.com/kaskadi/docs-and-discussions/blob/master/karma-test/README.md)

# Component documentation

**Reference:** [Example page](https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-template/example/index.html)

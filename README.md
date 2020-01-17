# Component setup

Those are the steps that have to be performed before starting to work with this component:
<ul style="list-style: none;">
  <li style="display:flex;">
    <input type="checkbox">
    <label style="margin-left: 5px;"><strong>set secrets up</strong> for the repository you are working on (allows Continuous Deployment tools to work)</label>
  </li>
  <li style="display:flex;">
    <input type="checkbox">
    <label style="margin-left: 5px;"><strong>set test framework up</strong>. Uses `Karma` as framework</label>
  </li>
</ul>

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

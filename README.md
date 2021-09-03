# ffws-front

### Pages Routing
When a file is added to the pages directory it's automatically available as a route.
Also in **/config/routes.ts** these routes are described and used for links.
https://nextjs.org/docs/routing/introduction

### Cards Routing
On pages with the CardsScreen component **(auth and team)**, routing works using url parameters **?card=signin**.
The config of these routes is in the **cards** folder next to the component. 

### Forms
For each form there is a hook with **initial values**, **validation schema** and **submit action**.
https://formik.org/docs/api/useFormik
https://github.com/jquense/yup

### API Mocks
Most of the supposed server data is mocked up in **/config/mocks/..**, types in **/typings/..**

### Components and styles
Reusable components are in folder **/components/..**, styled with styled-components.

## Docs
[Next](https://nextjs.org/docs)
[React](https://reactjs.org/docs)
[TypeScript](https://www.typescriptlang.org/docs)
[Styled Components](https://styled-components.com/docs)
[Formik](https://formik.org/docs/overview)

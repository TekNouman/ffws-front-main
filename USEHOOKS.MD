### Hooks
For each interaction with api there is a hook with React states for data. Now these states are filled with mockup data.
To fill these states with API-data, you can use [Next's getInitialProps or getServerSideProps](https://nextjs.org/docs/api-reference/data-fetching/getInitialProps) on server-side and pass props to layout or just make requests on client inside hooks.   
We also tried to add "mock" functions inside hooks for handling onClicks. You can also call API from them.
For the most part, all this is done to make it easier and faster for you to understand the logic of the interaction of components.

For example, in the "AccessCard" component, there is a "useSignIn" hook. 
There is already all the logic for controlling the inputs inside it. 
It also has an error validation scheme, on which UI of the common "Input" component is tied.
There is also an onSubmit method, inside which you can easily interact with the API and not look for input nodes in the document.
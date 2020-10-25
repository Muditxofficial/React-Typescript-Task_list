Official Documentation By Sole Maintainer-[Muditxofficial](https://github.com/Muditxofficial).
----------------------------- ##DEPENDENCIES ----------------------------------------------------
-All dependencies can be installed using npm i or viewed inside package.json.
----------------------------- ##Step-By-Guide ---------------------------------------------------
-This Guide shows how this app is created.
-Start by deleteing all default content inside the react app.
-Since we will using redux we import "provider" from react redux in `index.tsx`.
-Then wrap the App component inside the provider component and pass store as props to later.

-Inside src folder create store folder and inside store folder create actions and reducers folders and store.ts and types.ts files(store root).
-Inside reducers folder create 2 files, listReducer.ts and notificationReducer.ts.
-Now inside store.ts import createStore(`Creates a Redux store that holds the complete state tree of your app. There should only be a single store in your app.`),combineReducers(`As your app grows more complex, you'll want to split your reducing function into separate functions, each managing independent parts of the state.`
`The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.`

`The resulting reducer calls every child reducer, and gathers their results into a single state object. The state produced by combineReducers() namespaces the states of each reducer under their keys as passed to combineReducers`) from redux.
//image
-I am also using redux devtools extension to check in my browser which types has been dispatched.
-We also need to export RootState type, which is the typeof rootReducer, to use it in our components whenever we will use useSelector hook.
-Now just import store.ts in app and since we already passed it in props, store setup is completed.

-Now comes types.ts but why, as JavaScript provides language primitives like string, number, and object, but it doesn’t check that you’ve consistently assigned these. TypeScript does.
-We create types for actions,reducers,friends and you name it.Declare one time and enjoy.
-Now comes interfaces, they are basically method declaration and other methods implements from it but unlike some shitty languages(shot at java) you don't need the keyword implements.Typescript automatically does that for you.
-Each task will have name which is a string, id which is a string and complete which is a boolean.
-List will also have a name and an id, both of these are strings, and tasks which is an array of tasks.
-One concept of interface that i copied from official docs:-
interface StringArray {
[index: number]: string;
}

        let myArray: StringArray;
        myArray = ["Bob", "Fred"];

        let myStr: string = myArray[0];
        Above, we have a StringArray interface that has an index signature. This index signature states that when a StringArray is indexed with a number, it will return a string.There are two types of supported index signatures: string and number.

-As you will see we may have many actions. Each action type is a string but we need to use typeof and then the type otherwise typescript will complain and won’t know which type we want to use because we are exporting all types as union type and we will use just this union type in our actions.
//image
-Now time for actions.Inside actions folder create listActions.ts, notificationActions.ts and index.ts files.

//image
-Now in listReducer , Mainly Reducers specify how the application's state changes in response to actions sent to the store.
-Reducers need a initial state or need to return a initial state, so we create a initial state of type ListState which we already defined using interface.
-getListsFromLS which will return lists from local storage or empty object and saveListsToLS which will save lists to local storage.

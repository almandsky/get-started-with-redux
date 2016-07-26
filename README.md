# get-started-with-redux

[![build status](https://img.shields.io/travis/almandsky/get-started-with-redux/master.svg?style=flat-square)](https://travis-ci.org/almandsky/get-started-with-redux)

The purpose of this repo is to practice the code example from https://egghead.io/courses/getting-started-with-redux

Instead of using the http://jsbin.com for writing the code in one single file, this repo break down the components into separated files, which will be more like a real life example, and we can write unit test against each component.

## Run the example

```
npm install
npm start

open http://localhost:3000/
```

## Run the test

```
npm test
```

## Checkout different branches based on the progress of the tutorial


### Video 01~07

Create reducer function and createStore

```
git checkout 01_purejs
```

### Video 08

React Counter example

```
git checkout 02_react_reder
```

### Video 09~13

Avoid mutation, Write reduces to add and toggle todo

```
git checkout 03_immutable_reducer
```

### Video 14

Create Reducer Composition with object

```
git checkout 04_reducer_composition
```

### Video 15

Make use of the combineReducers from redux

```
git checkout 05_combine_reducer
```

### Video 16

Implementing combineReducers from scratch

```
git checkout 06_impl_combine_reducers
```

### Video 17~19

Implement React Todo List for add, toggle filter todos.

```
git checkout 07_react_todo_list
```

### Video 20~21

Extract the Todo, TodoList component

```
git checkout 08_extract_react_component
```

### Video 22~24

Extract the FilterLink, VisibleTodoList and Addtodo container components
Passing the store from the top level TodoApp

```
git checkout 09_extract_container_components
```

### Video 25

Passing the Store Down Implicitly via Context
Update the unit test of containers
Enable travis CI

```
git checkout 10_pass_store_via_context
```

### Video 26

Passing the Store Down with Provider from React Redux 


```
git checkout 11_redux_provider
```
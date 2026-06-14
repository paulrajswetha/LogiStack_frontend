export const reactQuestions = [
  {
    id: 1,
    level: "basic",
    topic: "Introduction",
    question: "What is React?",
    answer: "React is an open-source front-end JavaScript library that is used for building user interfaces, especially for single-page applications. It is used for handling the view layer for web and mobile apps. React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012.",
    tags: ["introduction", "library", "facebook"]
  },
  {
    id: 2,
    level: "basic",
    topic: "Features",
    question: "What are the major features of React?",
    answer: "The major features of React are:\n\n• Uses VirtualDOM instead of RealDOM considering that RealDOM manipulations are expensive\n• Supports server-side rendering\n• Follows Unidirectional data flow or data binding\n• Uses reusable/composable UI components to develop the view",
    tags: ["features", "virtual dom", "SSR", "unidirectional"]
  },
  {
    id: 3,
    level: "basic",
    topic: "JSX",
    question: "What is JSX?",
    answer: "JSX is an XML-like syntax extension to ECMAScript (JavaScript XML). Basically it just provides syntactic sugar for the React.createElement() function, giving us expressiveness of JavaScript along with HTML-like template syntax.\n\nExample:\nclass App extends React.Component {\n  render() {\n    return(\n      <div>\n        <h1>Welcome to React world!</h1>\n      </div>\n    )\n  }\n}",
    tags: ["JSX", "syntax", "template"]
  },
  {
    id: 4,
    level: "basic",
    topic: "Components",
    question: "What is the difference between Element and Component?",
    answer: "An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other Elements in their props. Creating a React element is cheap. Once an element is created, it is never mutated.\n\nA component can be declared in several different ways. It can be a class with a render() method or it can be defined as a function. In either case, it takes props as an input, and returns a JSX tree as the output.",
    tags: ["element", "component", "difference"]
  },
  {
    id: 5,
    level: "basic",
    topic: "Components",
    question: "How to create components in React?",
    answer: "There are two possible ways to create a component:\n\n1. Function Components: Pure JavaScript functions that accept props object as the first parameter and return React elements.\n\nfunction Greeting({ message }) {\n  return <h1>Hello, {message}</h1>\n}\n\n2. Class Components: Using ES6 class to define a component.\n\nclass Greeting extends React.Component {\n  render() {\n    return <h1>Hello, {this.props.message}</h1>\n  }\n}",
    tags: ["components", "function components", "class components"]
  },
  {
    id: 6,
    level: "basic",
    topic: "Components",
    question: "When to use a Class Component over a Function Component?",
    answer: "If the component needs state or lifecycle methods then use class component otherwise use function component. However, from React 16.8 with the addition of Hooks, you can use state, lifecycle methods and other features that were only available in class component right in your function component. So, it is always recommended to use Function components, unless you need a React functionality whose Function component equivalent is not present yet, like Error Boundaries.",
    tags: ["class components", "function components", "hooks"]
  },
  {
    id: 7,
    level: "basic",
    topic: "Components",
    question: "What are Pure Components?",
    answer: "React.PureComponent is exactly the same as React.Component except that it handles the shouldComponentUpdate() method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won't compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called.",
    tags: ["pure components", "performance", "shouldComponentUpdate"]
  },
  {
    id: 8,
    level: "basic",
    topic: "State",
    question: "What is state in React?",
    answer: "State of a component is an object that holds some information that may change over the lifetime of the component. We should always try to make our state as simple as possible and minimize the number of stateful components.\n\nExample:\nclass User extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      message: 'Welcome to React world'\n    }\n  }\n  render() {\n    return (\n      <div>\n        <h1>{this.state.message}</h1>\n      </div>\n    )\n  }\n}",
    tags: ["state", "component state", "data"]
  },
  {
    id: 9,
    level: "basic",
    topic: "Props",
    question: "What are props in React?",
    answer: "Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation using a naming convention similar to HTML-tag attributes. They are data passed down from a parent component to a child component.\n\nThe primary purpose of props in React is to provide:\n\n1. Pass custom data to your component\n2. Trigger state changes\n3. Use via this.props.reactProp inside component's render() method",
    tags: ["props", "properties", "data flow"]
  },
  {
    id: 10,
    level: "basic",
    topic: "State vs Props",
    question: "What is the difference between state and props?",
    answer: "Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. Props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function.",
    tags: ["state", "props", "difference"]
  },
  {
    id: 11,
    level: "basic",
    topic: "State",
    question: "Why should we not update the state directly?",
    answer: "If you try to update the state directly then it won't re-render the component.\n\n// Wrong\nthis.state.message = 'Hello world'\n\nInstead use setState() method. It schedules an update to a component's state object. When state changes, the component responds by re-rendering.\n\n// Correct\nthis.setState({ message: 'Hello World' })\n\nNote: You can directly assign to the state object either in constructor or using latest javascript's class field declaration syntax.",
    tags: ["state", "setState", "immutability"]
  },
  {
    id: 12,
    level: "basic",
    topic: "State",
    question: "What is the purpose of callback function as an argument of setState()?",
    answer: "The callback function is invoked when setState finished and the component gets rendered. Since setState() is asynchronous the callback function is used for any post action.\n\nNote: It is recommended to use lifecycle method rather than this callback function.",
    tags: ["setState", "callback", "async"]
  },
  {
    id: 13,
    level: "basic",
    topic: "Events",
    question: "What is the difference between HTML and React event handling?",
    answer: "Main differences:\n\n1. In HTML, event names are lowercase; in React they follow camelCase convention\n2. In HTML, you can return false to prevent default behavior; in React you must call preventDefault() explicitly\n3. In HTML, you need to invoke the function by appending (); in React you should not append () with the function name",
    tags: ["events", "event handling", "HTML", "synthetic events"]
  },
  {
    id: 14,
    level: "intermediate",
    topic: "Events",
    question: "How to bind methods or event handlers in JSX callbacks?",
    answer: "There are 3 possible ways:\n\n1. Binding in Constructor:\nconstructor(props) {\n  super(props);\n  this.handleClick = this.handleClick.bind(this);\n}\n\n2. Public class fields syntax:\nhandleClick = () => {\n  console.log('this is:', this);\n}\n\n3. Arrow functions in callbacks:\n<button onClick={() => this.handleClick()}>Click Me</button>\n\nNote: If the callback is passed as prop to child components, those components might do an extra re-rendering. In those cases, it's preferred to use .bind() or public class fields syntax.",
    tags: ["binding", "event handlers", "methods", "this"]
  },
  {
    id: 15,
    level: "intermediate",
    topic: "Events",
    question: "How to pass a parameter to an event handler or callback?",
    answer: "You can use an arrow function to wrap around an event handler and pass parameters:\n\n<button onClick={() => this.handleClick(id)} />\n\nThis is equivalent to calling .bind:\n\n<button onClick={this.handleClick.bind(this, id)} />\n\nApart from these two approaches, you can also pass arguments to a function which is defined as arrow function:\n\n<button onClick={this.handleClick(id)} />\nhandleClick = (id) => () => {\n  console.log(\"Hello, your ticket number is\", id);\n}",
    tags: ["parameters", "event handlers", "callbacks"]
  },
  {
    id: 16,
    level: "basic",
    topic: "Events",
    question: "What are synthetic events in React?",
    answer: "SyntheticEvent is a cross-browser wrapper around the browser's native event. Its API is same as the browser's native event, including stopPropagation() and preventDefault(), except the events work identically across all browsers.",
    tags: ["synthetic events", "events", "cross-browser"]
  },
  {
    id: 17,
    level: "intermediate",
    topic: "Conditional Rendering",
    question: "What are inline conditional expressions?",
    answer: "You can use either if statements or ternary expressions which are available from JS to conditionally render expressions. Apart from these approaches, you can also embed any expressions in JSX by wrapping them in curly braces and then followed by JS logical operator &&.\n\nExample:\n<h1>Hello!</h1>\n{\n  messages.length > 0 && !isLogin ? \n    <h2>You have {messages.length} unread messages.</h2> : \n    <h2>You don't have unread messages.</h2>\n}",
    tags: ["conditional rendering", "ternary", "inline expressions"]
  },
  {
    id: 18,
    level: "basic",
    topic: "Lists and Keys",
    question: "What is 'key' prop and what is the benefit of using it in arrays of elements?",
    answer: "A key is a special string attribute you should include when creating arrays of elements. Key prop helps React identify which items have changed, are added, or are removed.\n\nMost often we use ID from our data as key:\nconst todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>\n\nWhen you don't have stable IDs, you may use the item index as a key as a last resort.\n\nNote:\n- Using indexes for keys is not recommended if the order of items may change\n- If you extract list item as separate component then apply keys on list component instead of li tag\n- There will be a warning message in the console if the key prop is not present on list items",
    tags: ["keys", "lists", "reconciliation"]
  },
  {
    id: 19,
    level: "intermediate",
    topic: "Refs",
    question: "How to create refs?",
    answer: "There are two approaches:\n\n1. Using React.createRef():\nclass MyComponent extends React.Component {\n  constructor(props) {\n    super(props)\n    this.myRef = React.createRef()\n  }\n  render() {\n    return <div ref={this.myRef} />\n  }\n}\n\n2. Using ref callbacks:\nclass SearchBar extends Component {\n  constructor(props) {\n    super(props);\n    this.txtSearch = null;\n    this.setInputSearchRef = e => {\n      this.txtSearch = e;\n    }\n  }\n  render() {\n    return (\n      <input \n        ref={this.setInputSearchRef} \n      />\n    )\n  }\n}",
    tags: ["refs", "DOM access", "callbacks", "createRef"]
  },
  {
    id: 20,
    level: "advanced",
    topic: "Refs",
    question: "What are forward refs?",
    answer: "Ref forwarding is a feature that lets some components take a ref they receive, and pass it further down to a child.\n\nconst ButtonElement = React.forwardRef((props, ref) => {\n  <button ref={ref} className=\"CustomButton\">{props.children}</button>\n});\n\n// Create ref to the DOM button:\nconst ref = React.createRef();\n<ButtonElement ref={ref}>{'Forward Ref'}</ButtonElement>",
    tags: ["forward refs", "ref forwarding", "HOC"]
  },
  {
    id: 21,
    level: "intermediate",
    topic: "Virtual DOM",
    question: "What is Virtual DOM?",
    answer: "The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the 'real' DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation.",
    tags: ["virtual DOM", "VDOM", "reconciliation"]
  },
  {
    id: 22,
    level: "advanced",
    topic: "Virtual DOM",
    question: "How Virtual DOM works?",
    answer: "The Virtual DOM works in three simple steps:\n\n1. Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation\n2. Then the difference between the previous DOM representation and the new one is calculated\n3. Once the calculations are done, the real DOM will be updated with only the things that have actually changed",
    tags: ["virtual DOM", "diffing", "reconciliation"]
  },
  {
    id: 23,
    level: "intermediate",
    topic: "React Fiber",
    question: "What is React Fiber?",
    answer: "React Fiber is a complete rewrite of React's core algorithm. It is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM. It allows React to split rendering work into chunks and spread it out over multiple frames.",
    tags: ["React Fiber", "reconciliation", "performance"]
  },
  {
    id: 24,
    level: "advanced",
    topic: "React Fiber",
    question: "What is the main goal of React Fiber?",
    answer: "The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its main goals are:\n\n1. Ability to split interruptible work in chunks\n2. Ability to prioritize, rebase and reuse work in progress\n3. Ability to yield back and forth between parents and children to support layout in React\n4. Ability to return multiple elements from render()\n5. Better support for error boundaries",
    tags: ["React Fiber", "goals", "incremental rendering"]
  },
  {
    id: 25,
    level: "intermediate",
    topic: "Forms",
    question: "What are controlled components?",
    answer: "A component that controls the input elements within the forms on subsequent user input is called Controlled Component, i.e., every state mutation will have an associated handler function.\n\nExample:\nhandleChange(event) {\n  this.setState({value: event.target.value.toUpperCase()})\n}\n\nUncontrolled Components store their own state internally, and you query the DOM using a ref to find its current value when you need it. In most cases, it's recommended to use controlled components to implement forms.",
    tags: ["controlled components", "forms", "uncontrolled components"]
  },
  {
    id: 26,
    level: "intermediate",
    topic: "Component Lifecycle",
    question: "What are the different phases of component lifecycle?",
    answer: "The component lifecycle has three distinct phases:\n\n1. Mounting: Component ready to mount in the browser DOM. Covers constructor(), getDerivedStateFromProps(), render(), and componentDidMount()\n\n2. Updating: Component gets updated via new props or state changes from setState() or forceUpdate(). Covers getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), and componentDidUpdate()\n\n3. Unmounting: Component is removed from the browser DOM. Includes componentWillUnmount()",
    tags: ["lifecycle", "mounting", "updating", "unmounting"]
  },
  {
    id: 27,
    level: "intermediate",
    topic: "Component Lifecycle",
    question: "What are the lifecycle methods of React?",
    answer: "React 16.3+ lifecycle methods:\n\n- getDerivedStateFromProps: Invoked right before render(), used for derived state\n- componentDidMount: Executed after first rendering, for AJAX requests and DOM updates\n- shouldComponentUpdate: Determines if component will update (performance optimization)\n- getSnapshotBeforeUpdate: Executed right before DOM updates, captures scroll position etc.\n- componentDidUpdate: Used to update DOM in response to prop or state changes\n- componentWillUnmount: Cancel network requests, remove event listeners",
    tags: ["lifecycle", "methods", "hooks"]
  },
  {
    id: 28,
    level: "advanced",
    topic: "HOC",
    question: "What are Higher-Order Components?",
    answer: "A higher-order component (HOC) is a function that takes a component and returns a new component. Basically, it's a pattern derived from React's compositional nature.\n\nconst EnhancedComponent = higherOrderComponent(WrappedComponent)\n\nHOC can be used for:\n1. Code reuse, logic and bootstrap abstraction\n2. Render hijacking\n3. State abstraction and manipulation\n4. Props manipulation",
    tags: ["HOC", "higher-order components", "composition"]
  },
  {
    id: 29,
    level: "advanced",
    topic: "Context",
    question: "What is context?",
    answer: "Context provides a way to pass data through the component tree without having to pass props down manually at every level.\n\nFor example, authenticated users, locale preferences, UI themes need to be accessed in the application by many components.\n\nContext is designed to share data that can be considered 'global' for a tree of React components.",
    tags: ["context", "global state", "props drilling"]
  },
  {
    id: 30,
    level: "intermediate",
    topic: "Children",
    question: "What is children prop?",
    answer: "Children is a prop (this.props.children) that allows you to pass components as data to other components, just like any other prop you use. Component tree put between component's opening and closing tag will be passed to that component as children prop.\n\nThere are several methods available in the React API to work with this prop: React.Children.map, React.Children.forEach, React.Children.count, React.Children.only, React.Children.toArray.",
    tags: ["children", "props", "composition"]
  },
  {
    id: 31,
    level: "basic",
    topic: "JSX",
    question: "How to write comments in React?",
    answer: "Comments in React/JSX are similar to JavaScript Multiline comments but are wrapped in curly braces.\n\nSingle-line comments:\n<div>\n  {/* Single-line comment */}\n  {Welcome {user}, let's play React'}\n</div>\n\nMulti-line comments:\n<div>\n  {/* Multi-line comments for more than one line */}\n  {Welcome {user}, let's play React'}\n</div>",
    tags: ["comments", "JSX", "syntax"]
  },
  {
    id: 32,
    level: "intermediate",
    topic: "Constructor",
    question: "What is the purpose of using super constructor with props argument?",
    answer: "A child class constructor cannot make use of this reference until the super() method has been called. The main reason for passing props parameter to super() call is to access this.props in your child constructors.\n\nPassing props:\nclass MyComponent extends React.Component {\n  constructor(props) {\n    super(props)\n    console.log(this.props) // prints { name: 'John', age: 42 }\n  }\n}\n\nNot passing props:\nclass MyComponent extends React.Component {\n  constructor(props) {\n    super()\n    console.log(this.props) // prints undefined\n    console.log(props) // prints { name: 'John', age: 42 }\n  }\n}",
    tags: ["constructor", "super", "props"]
  },
  {
    id: 33,
    level: "advanced",
    topic: "Reconciliation",
    question: "What is reconciliation?",
    answer: "When a component's props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. This process is called reconciliation.",
    tags: ["reconciliation", "diffing", "virtual DOM"]
  },
  {
    id: 34,
    level: "intermediate",
    topic: "State",
    question: "How to set state with a dynamic key name?",
    answer: "If you are using ES6 or the Babel transpiler to transform your JSX code then you can accomplish this with computed property names.\n\nhandleInputChange(event) {\n  this.setState({ [event.target.id]: event.target.value })\n}",
    tags: ["state", "dynamic key", "computed properties"]
  },
  {
    id: 35,
    level: "basic",
    topic: "Events",
    question: "What would be the common mistake of function being called every time the component renders?",
    answer: "You need to make sure that function is not being called while passing the function as a parameter.\n\n// Wrong: handleClick is called instead of passed as a reference!\nreturn <button onClick={this.handleClick()}>{'Click Me'}</button>\n\nInstead, pass the function itself without parenthesis:\nreturn <button onClick={this.handleClick}>{'Click Me'}</button>",
    tags: ["events", "function calls", "common mistakes"]
  },
  {
    id: 36,
    level: "advanced",
    topic: "Code Splitting",
    question: "Is lazy function supports named exports?",
    answer: "No, currently React.lazy function supports default exports only. If you would like to import modules which are named exports, you can create an intermediate module that reexports it as the default.\n\n// MoreComponents.js\nexport const SomeComponent = {...}\n\n// IntermediateComponent.js\nexport { SomeComponent as default } from \"./MoreComponents.js\";\n\nconst SomeComponent = lazy(() => import(\"./IntermediateComponent.js\"));",
    tags: ["lazy", "code splitting", "named exports"]
  },
  {
    id: 37,
    level: "basic",
    topic: "JSX",
    question: "Why React uses className over class attribute?",
    answer: "class is a keyword in JavaScript, and JSX is an extension of JavaScript. That's the principal reason why React uses className instead of class. Pass a string as the className prop.\n\nrender() {\n  return <span className=\"menu navigation-menu\">{\"Menu\"}</span>\n}",
    tags: ["className", "JSX", "attributes"]
  },
  {
    id: 38,
    level: "intermediate",
    topic: "Fragments",
    question: "What are fragments?",
    answer: "Fragments let you group a list of children without adding extra nodes to the DOM.\n\nrender() {\n  return (\n    <React.Fragment>\n      <ChildA />\n      <ChildB />\n      <ChildC />\n    </React.Fragment>\n  )\n}\n\nThere is also a shorter syntax:\nrender() {\n  return (\n    <>\n      <ChildA />\n      <ChildB />\n      <ChildC />\n    </>\n  )\n}",
    tags: ["fragments", "grouping", "React.Fragment"]
  },
  {
    id: 39,
    level: "intermediate",
    topic: "Fragments",
    question: "Why fragments are better than container divs?",
    answer: "Fragments are better because:\n\n1. Fragments are a bit faster and use less memory by not creating an extra DOM node\n2. Some CSS mechanisms like Flexbox and CSS Grid have special parent-child relationships, and adding divs in the middle makes it hard to keep the desired layout\n3. The DOM Inspector is less cluttered",
    tags: ["fragments", "performance", "CSS"]
  },
  {
    id: 40,
    level: "advanced",
    topic: "Portals",
    question: "What are portals in React?",
    answer: "Portal is a recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.\n\nReactDOM.createPortal(child, container)\n\nThe first argument is any render-able React child, such as an element, string, or fragment. The second argument is a DOM element.\n\nPortals are very useful for dialogs, modals, tooltips, and pop-ups.",
    tags: ["portals", "DOM", "modals", "tooltips"]
  },
  {
    id: 41,
    level: "basic",
    topic: "Components",
    question: "What are stateless components?",
    answer: "If the behaviour is independent of its state then it can be a stateless component. You can use either a function or a class for creating stateless components. But unless you need to use a lifecycle hook in your components, you should go for function components. They are easy to write, understand, and test, a little faster, and you can avoid the this keyword altogether.",
    tags: ["stateless", "function components", "pure components"]
  },
  {
    id: 42,
    level: "basic",
    topic: "Components",
    question: "What are stateful components?",
    answer: "If the behaviour of a component is dependent on the state of the component then it can be termed as stateful component. These stateful components are always class components and have a state that gets initialized in the constructor.\n\nclass App extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { count: 0 }\n  }\n  render() {\n    // ...\n  }\n}\n\nWith React 16.8+, Hooks let you use state and other React features without writing classes.",
    tags: ["stateful", "class components", "state"]
  },
  {
    id: 43,
    level: "intermediate",
    topic: "PropTypes",
    question: "How to apply validation on props in React?",
    answer: "When the application is running in development mode, React will automatically check all props that we set on components to make sure they have correct type. If the type is incorrect, React will generate warning messages in the console.\n\nPredefined prop types:\n- PropTypes.number\n- PropTypes.string\n- PropTypes.array\n- PropTypes.object\n- PropTypes.func\n- PropTypes.node\n- PropTypes.element\n- PropTypes.bool\n- PropTypes.symbol\n- PropTypes.any\n\nExample:\nimport PropTypes from 'prop-types'\n\nclass User extends React.Component {\n  static propTypes = {\n    name: PropTypes.string.isRequired,\n    age: PropTypes.number.isRequired\n  }\n}",
    tags: ["PropTypes", "validation", "type checking"]
  },
  {
    id: 44,
    level: "basic",
    topic: "Advantages",
    question: "What are the advantages of React?",
    answer: "Main advantages of React:\n\n1. Increases the application's performance with Virtual DOM\n2. JSX makes code easy to read and write\n3. It renders both on client and server side (SSR)\n4. Easy to integrate with frameworks (Angular, Backbone) since it is only a view library\n5. Easy to write unit and integration tests with tools such as Jest",
    tags: ["advantages", "performance", "JSX", "SSR"]
  },
  {
    id: 45,
    level: "basic",
    topic: "Limitations",
    question: "What are the limitations of React?",
    answer: "Limitations of React:\n\n1. React is just a view library, not a full framework\n2. There is a learning curve for beginners who are new to web development\n3. Integrating React into a traditional MVC framework requires some additional configuration\n4. The code complexity increases with inline templating and JSX\n5. Too many smaller components leading to over engineering or boilerplate",
    tags: ["limitations", "disadvantages", "learning curve"]
  },
  {
    id: 46,
    level: "advanced",
    topic: "Error Boundaries",
    question: "What are error boundaries in React v16?",
    answer: "Error boundaries are components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.\n\nA class component becomes an error boundary if it defines componentDidCatch(error, info) or static getDerivedStateFromError().\n\nclass ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = { hasError: false }\n  }\n  \n  static getDerivedStateFromError(error) {\n    return { hasError: true }\n  }\n  \n  componentDidCatch(error, info) {\n    logErrorToMyService(error, info)\n  }\n  \n  render() {\n    if (this.state.hasError) {\n      return <h1>Something went wrong.</h1>\n    }\n    return this.props.children\n  }\n}",
    tags: ["error boundaries", "error handling", "componentDidCatch"]
  },
  {
    id: 47,
    level: "intermediate",
    topic: "Hooks",
    question: "What are hooks?",
    answer: "Hooks are functions that let you 'hook into' React state and lifecycle features from function components. They were introduced in React 16.8.\n\nKey hooks include:\n- useState: Adds state to function components\n- useEffect: Handles side effects\n- useContext: Accesses context\n- useReducer: Manages complex state logic\n- useCallback: Memoizes functions\n- useMemo: Memoizes values\n- useRef: Creates mutable references\n\nHooks don't work inside classes — they let you use React without classes.",
    tags: ["hooks", "useState", "useEffect", "function components"]
  },
  {
    id: 48,
    level: "intermediate",
    topic: "Hooks",
    question: "What rules need to be followed for hooks?",
    answer: "Two rules for using hooks:\n\n1. Call Hooks only at the top level of your react functions. Don't call Hooks inside loops, conditions, or nested functions. This ensures Hooks are called in the same order each time a component renders.\n\n2. Call Hooks from React Functions only. Don't call Hooks from regular JavaScript functions.\n\nReact team released eslint-plugin-react-hooks to enforce these rules.",
    tags: ["hooks", "rules", "ESLint"]
  },
  {
    id: 49,
    level: "advanced",
    topic: "Performance",
    question: "What is React.memo function?",
    answer: "Class components can be restricted from re-rendering when their input props are the same using PureComponent or shouldComponentUpdate. You can do the same with function components by wrapping them in React.memo.\n\nconst MemoComponent = React.memo(function MemoComponent(props) {\n  // render using props\n});\n\nexport default React.memo(MyFunctionComponent);",
    tags: ["React.memo", "performance", "memoization"]
  },
  {
    id: 50,
    level: "advanced",
    topic: "Code Splitting",
    question: "What is React lazy function?",
    answer: "The React.lazy function lets you render a dynamic import as a regular component. It will automatically load the bundle containing the component when the component gets rendered.\n\nconst OtherComponent = React.lazy(() => import('./OtherComponent'));\n\nfunction MyComponent() {\n  return (\n    <div>\n      <Suspense fallback={<div>Loading...</div>}>\n        <OtherComponent />\n      </Suspense>\n    </div>\n  );\n}\n\nNote: React.lazy and Suspense are not yet available for server-side rendering.",
    tags: ["lazy", "code splitting", "suspense", "dynamic import"]
  }
];

export const topicsList = [...new Set(reactQuestions.map(q => q.topic))];
export const levelsList = ["basic", "intermediate", "advanced"];
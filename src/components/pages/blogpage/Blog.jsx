import React from "react";
import Pdf from "react-to-pdf";

const Blog = () => {
  const ref = React.createRef();
  return (
    <>
    <div className="text-center">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className="primary-btn mt-20" onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
    </div>
      <div className="my-container mt-10 mb-10" ref={ref}>
        <div className="border p-5 rounded-xl shadow-lg mt-5">
          <h1 className="text-xl font-semibold">
            (1) = Tell us the differences between uncontrolled and controlled
            components?
          </h1>
          <p>
            In the context of software development, uncontrolled components are
            those that are not managed by the framework or library being used.
            They are typically plain HTML elements or custom components that are
            built from scratch. Uncontrolled components are usually simpler to
            implement, but they may require more manual validation and event
            handling.<br></br>
            <br></br>On the other hand, controlled components are those that are
            managed by the framework or library being used. They are typically
            input or form elements that have their value or state managed by the
            framework. Controlled components can be more complex to implement
            initially, but they offer more control and functionality in terms of
            handling user input and managing component state.
          </p>
        </div>
        <div className="border p-5 rounded-xl shadow-lg mt-5">
          <h1 className="text-xl font-semibold">
            (2) = How to validate React props using PropTypes?
          </h1>
          <p>
            To validate React props using PropTypes, you can import the
            PropTypes module from the 'prop-types' package and define the
            propTypes property for your component. In the propTypes object, you
            can specify each prop name as a key and the corresponding type as a
            value, and add validation rules such as isRequired or custom
            functions. By doing this, you can ensure that the props passed to
            your component are of the expected type and meet certain criteria,
            and catch potential errors before they cause problems in your
            application.
          </p>
        </div>
        <div className="border p-5 rounded-xl shadow-lg mt-5">
          <h1 className="text-xl font-semibold">
            (3) = Tell us the difference between nodejs and express js?
          </h1>
          <p>
            Node.js is a JavaScript runtime built on Chrome's V8 JavaScript
            engine, which allows developers to write server-side applications in
            JavaScript. On the other hand, Express.js is a minimalist web
            framework for Node.js that provides a set of features for building
            web applications and APIs. While Node.js provides the low-level
            building blocks for server-side programming, Express.js simplifies
            the development process by providing a layer of abstraction that
            handles routing, middleware, and other common web development tasks.
            In essence, Express.js is built on top of Node.js and provides a
            higher-level API for building web applications with less boilerplate
            code.
          </p>
        </div>
        <div className="border p-5 rounded-xl shadow-lg mt-5">
          <h1 className="text-xl font-semibold">
            (4) = What is a custom hook, and why will you create a custom hook?
          </h1>
          <p>
            A custom hook in React is a reusable function that encapsulates
            common logic used across multiple components. Custom hooks allow
            developers to extract component logic into a separate function that
            can be shared and reused throughout an application. Custom hooks are
            created to solve the problem of code duplication and provide a way
            to encapsulate and reuse functionality that is not specific to a
            single component. By creating custom hooks, developers can write
            more modular and maintainable code, making it easier to test, debug,
            and refactor their applications.
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;

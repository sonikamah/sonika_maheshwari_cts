import React from "react";
import Mouse from "../component/Mouse"

class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
        <img src="../images/cat.JPEG" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
      );
    }
}

export default class RenderProps extends React.Component {
    render() {
        return (
            <div>
                <h3>“render prop” refers to a technique for sharing code between React components using a prop whose value is a function.</h3>
                <p> any prop that is a function that a component uses to know what to render is technically a “render prop”.</p>
                <h1>Move the mouse around!</h1>
                <Mouse render={mouse => (
                    <Cat mouse={mouse} />
                )}/>
            </div>
        );
    }
}

// If you really want a HOC for some reason, you can easily
// create one using a regular component with a render prop!
function withMouse(Component) {
    return class extends React.Component {
      render() {
        return (
          <Mouse render={mouse => (
            <Component {...this.props} mouse={mouse} />
          )}/>
        );
      }
    }
}
import React, { Component } from 'react';

// const withClassV1 = (props) => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// )

// const withClassV2 = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props} />
//         </div>
//     )
// }

//StateFull
const withClassV3 = (WrappedComponent, className) => {
    return class extends Component {
        render() {
            return <div className={className}>
                <WrappedComponent {...this.props} />
            </div>
        }
    }
}


export default withClassV3;
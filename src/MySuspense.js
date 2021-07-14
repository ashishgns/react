import React, { Suspense } from 'react';
import MyErrorBoundary from './MyErrorBoundary';

const OtherComponent = React.lazy(() => import('./OtherComponent').then((result) => { console.log(result.moduleA); }));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));



function MySuspense() {
  {/*You can now get a ref directly to the DOM button:*/}
  const ref = React.createRef();

  return (
    <div>
      <FancyButton ref={ref}>Click me!</FancyButton>
      <MyErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <OtherComponent />
          <AnotherComponent />
        </Suspense>
      </MyErrorBoundary>
    </div>
  );
}

export default MySuspense;
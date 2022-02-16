import React, { useRef, useEffect } from 'react';
import { mount } from 'auth/AuthApp'
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        if (ref.current) {
          const { onParentNavigate } = mount(ref.current, {
            initialPathname: history.location.pathname,
            onNavigate: ({ pathname: nextPathname }) => {
              const { pathname } = history.location;

              if (pathname !== nextPathname) history.push(nextPathname);
            }
          });

          history.listen(onParentNavigate);
        }
    }, []);

    return <div ref={ref} />
}
declare module '*.svg?url' {
    const content: string;
    export default content;
  }
  
  declare module '*.svg' {
    import * as React from 'react';
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
  }
  
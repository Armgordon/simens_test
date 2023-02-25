declare module '*.svg' {
  import type { SVGProps, FunctionComponent } from 'react';

  const SVGComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
  export default SVGComponent;
}

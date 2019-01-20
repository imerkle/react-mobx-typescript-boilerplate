/** Global definitions for developement **/

// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}

declare module JSX {
  interface IntrinsicElements {
    "fbt": any
  }
}
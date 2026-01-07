declare namespace JSX {
  interface IntrinsicElements {
    'lord-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      trigger?: string;
      colors?: string;
      state?: string;
      target?: string;
      class?: string;
      style?: React.CSSProperties;
      // Add any other specific attributes that lord-icon supports
      // For example:
      // 'icon-src'?: string;
      // 'primary-color'?: string;
      // 'secondary-color'?: string;
    };
  }
}
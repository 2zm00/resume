declare module '*.css';
declare module '*.mdx';

declare module '*.module.css' {
	const classes: { readonly [key: string]: string };
	export default classes;
  }
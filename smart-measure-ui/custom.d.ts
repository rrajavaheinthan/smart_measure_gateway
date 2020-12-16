// declare modules to be able to import svg, gif files etc.
declare module "*.svg" {
    const content: any;
    export default content;
}

declare module "*.gif" {
    const content: any;
    export default content;
}
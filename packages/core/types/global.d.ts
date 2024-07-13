declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    KButton: typeof import("practice-ui")["SButton"];
  }
  interface ComponentCustomProperties {
    $message: typeof import("practice-ui")["message"];
  }
}

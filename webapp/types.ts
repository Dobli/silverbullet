import { AppCommand } from "./hooks/command";

export type PageMeta = {
  name: string;
  lastModified: number;
  version?: number;
  lastOpened?: number;
  created?: boolean;
};

export const slashCommandRegexp = /\/[\w\-]*/;

export type Notification = {
  id: number;
  message: string;
  date: Date;
};

export type AppViewState = {
  currentPage?: string;
  showPageNavigator: boolean;
  showCommandPalette: boolean;
  unsavedChanges: boolean;
  showRHS: boolean;
  rhsHTML: string;
  allPages: Set<PageMeta>;
  commands: Map<string, AppCommand>;
  notifications: Notification[];
};

export const initialViewState: AppViewState = {
  showPageNavigator: false,
  showCommandPalette: false,
  unsavedChanges: false,
  showRHS: false,
  rhsHTML: "<h1>Loading...</h1>",
  allPages: new Set(),
  commands: new Map(),
  notifications: [],
};

export type Action =
  | { type: "page-loaded"; name: string }
  | { type: "pages-listed"; pages: Set<PageMeta> }
  | { type: "page-changed" }
  | { type: "page-saved" }
  | { type: "start-navigate" }
  | { type: "stop-navigate" }
  | { type: "update-commands"; commands: Map<string, AppCommand> }
  | { type: "show-palette" }
  | { type: "hide-palette" }
  | { type: "show-notification"; notification: Notification }
  | { type: "dismiss-notification"; id: number }
  | { type: "show-rhs"; html: string }
  | { type: "hide-rhs" };

export interface IInputData {
  title: string;
  url: string;
}

// SIDEBAR INTERFACES
export interface ISidebarSection {
  title: string;
  sections: ISection[];
  isLastSection?: boolean;
}

export interface ISection {
  title: string;
  iconUrl: string;
  menuItems: IInputData[];
  svgUrl?: string;
}

export interface IBusinessOption {
  option: string;
}

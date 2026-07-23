import type { ReactNode } from "react";

export interface Email {
  id: string;
  name: string;
  email: string;
  subject?: string;
  body: string;
  isDeleted: boolean;
}

export interface UserInfoProps {
  name: string;
  email: string;
}

export interface CreateEmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

export interface SearchBarProps {
  searchText: string;
  onSearchChange: (value: string) => void;
}

export interface DeleteButtonProps {
  onClick: () => void;
}

export interface EditButtonProps {
  onClick?: () => void;
}

export interface HeaderProps {
  activeTab: string;
  onTabChange: (
    tab: string
  ) => void;
  onRefresh: () => void;
  onSaveSuccess: () => void;
}

export interface MainGridLayoutProps {
  activeTab: string;
  refreshFlag: number;
}

export interface SearchBarProps {
  searchText: string;
  onSearchChange: (value: string) => void;
}

export interface PortalProps {
  children: ReactNode;
  targetId?: string;
}

export interface UserInfoProps {
  name: string;
  email: string;
}

export interface LoginProps{
  onLogin: () => void;
  onSignup: () => void;
}